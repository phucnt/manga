Template.categoryItem.events({
  'dropped .category-item': function(event, template) {
    var childId = localStorage.getItem('ID');
    if(!childId) {
      event.preventDefault();
      return false;
    }
    var parentId = event.target.id;
    if (childId==parentId) {
      return;
    }
    Meteor.call('Category/updateParent', parentId, childId, function(err) {
      if (err) {
        console.error(err.reason);
      } else {

      }
    })
  },
  'dragover': function(event, template) {
    if (template.$('li').length > 1) {
      event.preventDefault();
      return false;
    }
  },
  'dragenter': function(event, template) {
    if (template.$('li').length > 1) {
      event.preventDefault();
      return false;
    }
  },
  'drapstart': function(event, template) {
    if (template.$('li').length > 1) {
      event.preventDefault();
      return false;
    }
  },
  'drag .category-item': function(event, template) {
    if (template.$('li').length > 1) {
      event.preventDefault();
      localStorage.setItem('ID', '');
      return false;
    }
    localStorage.setItem('ID', event.target.id);
  }
})
//drop
