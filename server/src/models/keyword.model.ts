import mongoose from 'mongoose';

const KeywordSchema = new mongoose.Schema({
  keyword: {
    type: String,
    required: true,
  },
});

interface IKeyword extends mongoose.Document {
  _id: string;
  keyword: string;
}

const Keyword = mongoose.model<IKeyword>('Keyword', KeywordSchema);

export { IKeyword, Keyword };
