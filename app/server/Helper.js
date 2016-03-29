Helper = {
  check: function(parentId, childId) {
    var list = Category.find();
    _.find(list, function(item) {
      if (parentId == item._id) {
        return false;
      }
    })
  }
}
