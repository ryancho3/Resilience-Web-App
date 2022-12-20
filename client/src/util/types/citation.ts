/**
 * Interface for the citation data type return from the backend
 */
interface ICitation {
  citation: string;
  citation_url: string;
  consequences: string;
  current_through: string;
  discretion: string;
  duration: string;
  jurisdiction: string;
  keywords: string;
  notes: string;
  number_of_consequences: string;
  offense_type: string;
  relevant_subsections: string;
  title: string;
  _id: string;
}

export default ICitation;

// related_statutes: string;
// :
// null
