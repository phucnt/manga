  Meteor.methods({
    'Category/insert': function(name) {
      if (!name) {
        throw new Meteor.Error('500', 'missing name');
      }
      if (check(name, String)) {
        throw new Meteor.Error('500', 'required String');
      }
      Category.insert({ title: name });
    },
    'Category/updateParent': function(parentId, childId) {
      new SimpleSchema({
        parentId: {type: String},
        childId: {type: String},
      }).validate({ parentId, childId });
      if (parentId == childId) {
        throw new Meteor.Error('500', 'parent and child category same id');
      }
      var childCategory = Category.findOne({ _id: childId });
      var parentCategory = Category.findOne({ _id: parentId });
      if (!childCategory) {
        throw new Meteor.Error('500', 'can not find category with id '+childId);
      }
      if (!parentCategory) {
        throw new Meteor.Error('500', 'can not find category with id '+parentId);
      }
      Category.update({ _id: childId}, { $set: {parentId: parentId} });
    }
  });
