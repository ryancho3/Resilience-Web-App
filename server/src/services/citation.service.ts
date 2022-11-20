import { Citation } from '../models/citation.model';

const getCitationByJurisdiction = async (jurisdiction = String) => {
  const citations = Citation.find({
    jurisdiction,
  }).exec();
  return citations;
};

const getCitationByParams = async (params = {}) => {
  const citations = Citation.find(params).exec();
  return citations;
};

// eslint-disable-next-line import/prefer-default-export
export { getCitationByJurisdiction, getCitationByParams };
