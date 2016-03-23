Items = new Mongo.Collection('item');
var Schemas = {};
Schemas.Item = new SimpleSchema({
  catalogue: {
    type: Array,
    optional: true,
  },
  'catalogue.$': {
    type: Object
  },
  'catalogue.$._id': {
    type: String
  },
  createdAt: {
    type: Date,
    autoValue: function() {
      if (this.isInsert) {
        return new Date();
      } else if (this.isUpsert) {
        return {$setOnInsert: new Date()};
      } else {
        this.unset();  // Prevent user from supplying their own value
      }
    }
  },
  updatedAt: {
    type: Date,
    autoValue: function() {
      if (this.isUpdate) {
        return new Date();
      }
    },
    denyInsert: true,
    optional: true
  },

})
Items.attachSchema(Schemas.Item);
