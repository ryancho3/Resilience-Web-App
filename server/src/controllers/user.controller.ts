/* eslint-disable camelcase */
import express from 'express';
import StatusCode from '../util/statusCode';
import ApiError from '../util/apiError';
import { addHistoryById, getUserById } from '../services/user.service';

const addHistory = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) => {
  // eslint-disable-next-line camelcase
  const { id } = req.params;
  const { jurisdiction, offense_type, keywords } = req.body;
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
  if (!id) {
    next(ApiError.missingFields(['id']));
  }
  if (typeof id !== 'string') {
    next(ApiError.badRequest('Bad Request'));
  }
  return (
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    addHistoryById(id!, params)
      .then((user) => {
        res.status(StatusCode.OK).send(user);
      })
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .catch((e) => {
        next(ApiError.internal('Unable to add history for given parameters'));
      })
  );
};

const getUser = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) => {
  // eslint-disable-next-line camelcase
  const { id } = req.params;
  if (!id) {
    next(ApiError.missingFields(['id']));
  }
  return (
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    getUserById(id!)
      .then((user) => {
        res.status(StatusCode.OK).send(user);
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

export { addHistory, getUser };
