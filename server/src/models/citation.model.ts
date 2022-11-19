import mongoose from 'mongoose';

const CitationSchema = new mongoose.Schema({
  citation: {
    type: String,
    required: true,
  },
  citation_url: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  number_of_consequences: {
    type: String,
    required: true,
  },
  relevant_subsections: {
    type: String,
    required: false,
  },
  related_statuses: {
    type: String,
    required: false,
  },
  notes: {
    type: String,
    required: false,
  },
  current_through: {
    type: String,
    required: true,
  },
  jurisdiction: {
    type: String,
    required: true,
  },
  consequences: {
    type: String,
    required: true,
  },
  keywords: {
    type: String,
    required: true,
  },
  offense_type: {
    type: String,
    required: true,
  },
  discretion: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: false,
  },
});

interface ICitation extends mongoose.Document {
  _id: string;
  citation: string;
  citation_url: string;
  title: string;
  number_of_consequences: string;
  relevant_subsections: string;
  related_statuses: string;
  notes: string;
  current_through: string;
  jurisdiction: string;
  consequences: string;
  keywords: string;
  offense_Type: string;
  discretion: string;
  duration: string;
}

const Citation = mongoose.model<ICitation>('Citation', CitationSchema);

export { ICitation, Citation };
