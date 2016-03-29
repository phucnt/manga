Template.btnGroup.onCreated(function(){

});
Template.btnGroup.helpers({
  settings: function() {
    return settings = {
      viewBtnCount: 2,
      buttons: [{
        label: 'Test'
      },{
        label: 'Test1'
      },{
        label: 'Test2'
      },{
        label: 'Test3'
      },{
        label: 'Test4'
      }],
      _id: 'test',
      onSet: function(value){ console.log('OK') }
    }
  }
})
