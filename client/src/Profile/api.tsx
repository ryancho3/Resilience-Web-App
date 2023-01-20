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
  email: string,
  jurisdiction: string,
  offenseType: string[],
  keywords: string[],
) {
  console.log(jurisdiction);
  const res = await postData('user/history', {
    email,
    jurisdiction,
    offenseType,
    keywords,
  });
  if (res.error) return false;

  return true;
}

// eslint-disable-next-line import/prefer-default-export
export { addSearch };
