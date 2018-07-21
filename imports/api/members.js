import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

SimpleSchema.extendOptions(['autoform']);

const Members = new Mongo.Collection('members');

const MemberSchema = new SimpleSchema({
  firstName: { type: String },
  lastName: { type: String },
  member: { type: String },
  street: { type: String },
  city: { type: String },
  state: { type: String },
  zip: { type: String },
  lastCheckout: { type: Date },
  numberOfNights: { type: Number },
  preferences: { type: String },
  CreatedAt: {
    type: Date,
    autoform: {
      type: 'hidden',
      label: false,
    },
    defaultValue: new Date(),
  },
});

Members.attatchSchema(MemberSchema);

export default Members;
