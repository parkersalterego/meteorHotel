import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

SimpleSchema.extendOptions(['autoform']);

export const Rooms = new Mongo.Collection('rooms');

const RoomSchema = new SimpleSchema({
  roomNumber: { type: Number },
  checkIn: { type: Date },
  checkOut: { type: Date },
  tenantId: { type: String },
  available: { type: Boolean },
  needsCleaning: { type: Boolean },
  CreatedAt: {
    type: Date,
    autoform: {
      type: 'hidden',
      label: false,
    },
    defaultValue: new Date(),
  },
});

Rooms.attachSchema(RoomSchema);
