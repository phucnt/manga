Template.alert.helpers({
  hide: function(value) {
    value= ((value||value==undefined)?true:false);
    return (value?'hide':'');
  },
  color: function(value) {
    switch (value) {
      case 'ERROR':
        return 'alert-danger';
      case 'SUCCESSFUL':
       return 'alert-success';
      case 'INFO':
       return 'alert-info';
      case 'WARNING':
       return 'alert-WARNING';
      default:
        return 'alert-defalt';
    }
  },
})

Template.alert.onCreated(function() {

})
