import mongoose from 'mongoose';

const CitationSchema = new mongoose.Schema({
    Citation: {
      type: String,
      required: true,
    },
    CitationURL: {
      type: String,
      required: true,
    },
    Title : {
      type: String,
      required: true,
    },
    Number_of_Consequences: {
      type: String,
      required: true,
    },
    Relevant_Subsections: {
      type: String,
      required: false,
    },
    Related_Statuses: {
      type: String,
      required: false,
    },
    Notes: {
      type: String,
      required: false,
    },
    Current_Through: {
      type: String,
      required: true,
    },
    Jurisdiction: {
      type: String,
      required: true,
    },
    Consequences: {
        type: String,
        required: true,
    },
    Keywords: {
        type: String,
        required: true,
    },
    Offense_Type: {
        type: String,
        required: true,
    },
    Discretion: {
        type: String,
        required: true,
    },
    Duration: {
        type: String,
        required: false,
    }
  });




interface ICitation extends mongoose.Document {
    _id: string;
    Citation: string;
    CitationURL: string;
    Title: string;
    Number_of_Consequences: string;
    Relevant_Subsections: string;
    Related_Statuses: string;
    Notes: string;
    Current_Through: string;
    Jurisdiction: string;
    Consequences: string;
    Keywords: string;
    Offense_Type: string;
    Discretion: string;
    Duration: string;
  }

const Citation = mongoose.model<ICitation>('Citation', CitationSchema);

export { ICitation, Citation};