/* eslint-disable camelcase */
import express from 'express';
import url from 'url';
import StatusCode from '../util/statusCode';
import ApiError from '../util/apiError';
import { getCitationByParams } from '../services/citation.service';

const getCitations = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) => {
  // eslint-disable-next-line camelcase
  const { jurisdiction, offense_type, keywords } = url.parse(
    req.url,
    true,
  ).query;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const params: any = {};
  if (jurisdiction) {
    params.jurisdiction = jurisdiction;
  }
  if (offense_type) {
    params.offense_type = offense_type;
  }
  if (keywords) {
    params.keywords = { $regex: keywords };
  }
  return (
    getCitationByParams(params)
      .then((citationList) => {
        res.status(StatusCode.OK).send(citationList);
      })
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .catch((e) => {
        next(
          ApiError.internal(
            'Unable to retrieve citation(s) from given parameters',
          ),
        );
      })
  );
};

// eslint-disable-next-line import/prefer-default-export
export { getCitations };
