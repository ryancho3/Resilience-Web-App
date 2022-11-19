/* eslint-disable camelcase */
import express from 'express';
import StatusCode from '../util/statusCode';
import ApiError from '../util/apiError';
import { getCitationByJurisdiction } from '../services/citation.service';

const getCitations = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) => {
  // eslint-disable-next-line camelcase
  const { jurisdiction, offense_type, keywords } = req.body;
  if (offense_type || keywords) {
    next(ApiError.forbidden);
    return null;
  }
  return (
    getCitationByJurisdiction(jurisdiction)
      .then((citationList) => {
        res.status(StatusCode.OK).send(citationList);
      })
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .catch((e) => {
        next(
          ApiError.internal('Unable to retrieve citation(s) from jurisdiction'),
        );
      })
  );
};

// eslint-disable-next-line import/prefer-default-export
export { getCitations };
