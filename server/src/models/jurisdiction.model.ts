import mongoose from 'mongoose';

const JurisdictionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

interface IJurisdiction extends mongoose.Document {
  _id: string;
  name: string;
}

const Jurisdiction = mongoose.model<IJurisdiction>(
  'Jurisdiction',
  JurisdictionSchema,
);

export { IJurisdiction, Jurisdiction };
