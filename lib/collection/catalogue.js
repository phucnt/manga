//create a SimpleSchema
var Schemas = {};
Schemas.Catalogue = new SimpleSchema({
  title: {
    type: String,
    min: 4,
    max: 50,
    regEx:/([^(\s\r\t\f)(0-9)]{1})([A-Za-z0-9]{3,50})/,
    optional: false,
  },
})

Catalogues = new Mongo.Collection("catalogue");
Catalogues.attachSchema(Schemas.Catalogue);
SimpleSchema.RegEx = {

}
