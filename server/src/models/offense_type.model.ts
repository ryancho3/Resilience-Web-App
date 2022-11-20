import mongoose from 'mongoose';

const OffenseTypeSchema = new mongoose.Schema({
  offense: {
    type: String,
    required: true,
  },
});

interface IOffenseType extends mongoose.Document {
  _id: string;
  offense: string;
}

const OffenseType = mongoose.model<IOffenseType>(
  'OffenseType',
  OffenseTypeSchema,
);

export { IOffenseType, OffenseType };
