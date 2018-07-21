import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'simpl-schema';

SimpleSchema.extendOptions(['autoform']);

const Rooms = new Mongo.Collection('rooms');

const RoomSchema = new SimpleSchema({
  roomNumber: { type: Number },
  checkIn: { type: Date },
  checkout: { type: Date },
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

Rooms.attatchSchema(RoomSchema);

export default Rooms;
