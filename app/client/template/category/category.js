Template.category.onCreated(function() {
  this.autorun(() => {
    this.subscribe('Category');
  });
})

Template.category.helpers({
  Categories: function() {
    return Category.find();
  }
})
