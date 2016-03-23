  Meteor.methods({
    'Category/insert': function(name) {
      console.log(name);
      if (!name) {
        throw new Meteor.Error('500', 'missing name');
      }
      if (check(name, String)) {
        throw new Meteor.Error('500', 'required String');
      }
      Category.insert({ title: name });
    }
  });