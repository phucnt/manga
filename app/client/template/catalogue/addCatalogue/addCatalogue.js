Template.addCatalogue.events({
  'submit form': function(event, template) {
    var instance = Template.instance();
    event.preventDefault();
    // Template.instance
    return;
    Meteor.call('Catelogue/insert', template.$('input').val(), function(err) {
      if (err) {
        instance.state.set('alert.hide', false);
        instance.state.set('alert.type', 'ERROR');
        instance.state.set('alert.message', err.reason);
        // Meteor.setTimeout(function() {
        //  instance.state.set('alert.hide', true);
        // }, 2000);
        console.error(err.reason);
      } else {
        instance.state.set('alert.hide', false);
        instance.state.set('alert.type', 'SUCCESSFUL');
        instance.state.set('alert.message', 'SUCCESSFUL');
        console.info('ok');
      }
    });
  }
})

Template.addCatalogue.helpers({
  onChange() {
    return (event) => {
      console.log(event);
    }
  },
  title() {
    var instance =  Template.instance();
    return {
      id: 'title',
      type: 'text',
      placeholder: TAPi18n.__("title"),
      required: 'required',
      value: '',
      disable: '',
      pattern: {
        regex: '([^(\s\r\t\f)(0-9)]{1})([A-Za-z0-9]{3,50})',
        message: 'the length 4-50 character, the first letter not blank or number',
      },
      hasClass: false,
      hasMessage: '',
      onBlur: function(value) {

      },
      onFocusout: function() {
        //instance.state.set('alert.hide', true);
        // instance.state.set('alert.type', 'ERROR');
        // instance.state.set('alert.message', 'catelogue name');
      },
      onFocus: function() {
        instance.state.set('alert.hide', false);
        instance.state.set('alert.type', 'INFO');
        instance.state.set('alert.message', 'catelogue name');
      },
      onKeyup: _.debounce(function(value) {

      }, 300),
      getValue: function() {
        return this.value;
      },
      setValue: function(value) {
        this.value = value;
      }

    }
  },
  alertControl: function() {
    var instance = Template.instance();
    return {
      hide: instance.state.get('alert.hide'),
      type: instance.state.get('alert.type'),
      message: instance.state.get('alert.message'),
    }
  }


})

Template.addCatalogue.onCreated(function() {
  instance = Template.instance();
  this.state = new ReactiveDict();
  this.save = function() {

  };

})
