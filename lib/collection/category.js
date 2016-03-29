//create a SimpleSchema
var Schemas = {};
Schemas.Category = new SimpleSchema({
  title: {
    type: String,
    min: 4,
    max: 50,
    regEx:/([^(\s\r\t\f)(0-9)]{1})([A-Za-z0-9]{3,50})/,
    optional: false,
  },
  parentId: {
    type: String,
    optional: true
  }
})

Category = new Mongo.Collection("category");
Category.attachSchema(Schemas.Category);
SimpleSchema.RegEx = {

}
