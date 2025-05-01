import mongoose, { Document, Schema } from 'mongoose';

interface ITeamMember {
  name: string;
  role: string;
  bio: string;
  photoUrl: string;
}

interface IContact {
  address: string;
  phone: string;
  email: string;
  social: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
  };
}

interface IAboutUs extends Document {
  description: string;
  team: ITeamMember[];
  achievements: string[];
  contact: IContact;
}

const TeamMemberSchema = new Schema({
  name: { type: String, required: true },
  role: { type: String, required: true },
  bio: { type: String, required: true },
  photoUrl: { type: String, required: true }
});

const ContactSchema = new Schema({
  address: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  social: {
    facebook: { type: String },
    instagram: { type: String },
    twitter: { type: String }
  }
});

const AboutUsSchema = new Schema({
  description: { type: String, required: true },
  team: [TeamMemberSchema],
  achievements: [String],
  contact: ContactSchema
}, { timestamps: true });

export default mongoose.model<IAboutUs>('AboutUs', AboutUsSchema); 