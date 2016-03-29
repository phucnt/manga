Template.category.onCreated(function() {

})

Template.category.helpers({
  Categories: function() {
    return Category.find();
  },
})

Template.category.rendered = function() {

}
