Meteor.publish('Category', function() {
  return Category.find();
})
