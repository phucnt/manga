Template.inputValidation.events({
  'blur input': function(event, template) {
    this.onBlur(template.$('input').val());
  },
  'focus input': function(event, template) {
    this.onFocus();
  },
  'focusout input': function(event, template) {
    this.onFocusout();
  },
  'keyup input': function(event, template) {
    var instance = Template.instance();
    var value = template.$('input').val();
    var regex = new RegExp(this.pattern.regex);
    if (regex.test(value)) {
      instance.state.set('hasClass', 'success');
      instance.state.set('message', '');
    } else {
      instance.state.set('hasClass', 'danger');
      instance.state.set('message', this.pattern.message);
    }
    this.onKeyup(template.$('input').val());
  },

})

Template.inputValidation.helpers({
  hasClass: function(value) {
    var instance = Template.instance();
    return value + instance.state.get('hasClass');
  },
  message: function() {
    var instance = Template.instance();
    return instance.state.get('message');
  }
})

Template.inputValidation.onCreated(function() {
  this.state = new ReactiveDict();

})
