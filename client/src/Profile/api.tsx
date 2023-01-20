import { postData } from '../util/api';

/**
 * Adds search with jurisdiction, offense_type, and keywords to history of user
 * @param id - the id to append search to
 * @param jurisdiction - location of search
 * @param offense_type - types of offenses
 * @param keywords - keywords assiociated with search
 * @returns true if successful, false otherwise
 */
async function addSearch(
  id: string,
  jurisdiction: string,
  offenseType: string[],
  keywords: string[],
) {
  const res = await postData(`users/${id}/history`, {
    jurisdiction,
    offenseType,
    keywords,
  });
  if (res.error) return false;
  return true;
}

// eslint-disable-next-line import/prefer-default-export
export { addSearch };
