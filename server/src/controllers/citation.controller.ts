/* eslint-disable camelcase */
import express from 'express';
import url from 'url';
import StatusCode from '../util/statusCode';
import ApiError from '../util/apiError';
import {
  getCitationByParams,
  getAllKeywordsFromDB,
  getAllOffenseTypesFromDB,
} from '../services/citation.service';

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

const getAllKeywords = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) => {
  return (
    getAllKeywordsFromDB()
      .then((keywordList) => {
        res.status(StatusCode.OK).send(keywordList);
      })
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .catch((e) => {
        next(ApiError.internal('Unable to retrieve all keywords'));
      })
  );
};

const getAllOffenseTypes = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) => {
  return (
    getAllOffenseTypesFromDB()
      .then((offenseTypeList) => {
        res.status(StatusCode.OK).send(offenseTypeList);
      })
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .catch((e) => {
        next(ApiError.internal('Unable to retrieve all offense types'));
      })
  );
};

// eslint-disable-next-line import/prefer-default-export
export { getCitations, getAllKeywords, getAllOffenseTypes };
