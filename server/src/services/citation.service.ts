import { Citation } from '../models/citation.model';
import { Keyword } from '../models/keyword.model';
import { OffenseType } from '../models/offensetype.model';

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

const getAllKeywordsFromDB = async () => {
  const allKeywords = await Keyword.find({}).exec();
  return allKeywords;
};

const getAllOffenseTypesFromDB = async () => {
  const allOffenseTypes = await OffenseType.find({}).exec();
  return allOffenseTypes;
};

// eslint-disable-next-line import/prefer-default-export
export {
  getCitationByJurisdiction,
  getCitationByParams,
  getAllKeywordsFromDB,
  getAllOffenseTypesFromDB,
};
