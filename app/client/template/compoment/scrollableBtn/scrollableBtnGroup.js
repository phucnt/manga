//The controller compoment keeps track about instanciated compoment Object
var SBGCtrl = {
  components: {},
  add: function(guid, settings) {
      this.components[guid] = new ScrollableBtnGroup(settings);
  },
  get: function(guid) {
      return this.components[guid];
  },
  remove: function(guid) {
      this.components[guid]["delete"]();
      this.components[guid] = null;
      delete this.components[guid];
  }
}

// The component class
var ScrollableBtnGroup = (function() {
    ScrollableBtnGroup.prototype["delete"] = function() {};
    ScrollableBtnGroup.prototype.defaults = {
       viewBtnCount: 7,
       buttons: [],
       prevLabel: '<',
       nextLabel: '>'
   };

   function ScrollableBtnGroup(settings) {
       var k, v, _ref;
       this.settings = settings;
       _ref = this.defaults;
       for (k in _ref) {
           v = _ref[k];
           if (!this.settings[k]) {
               this.settings[k] = v;
           }
       }
   }
   ScrollableBtnGroup.prototype.currentIndex = 0;

  ScrollableBtnGroup.prototype._ciDeps = new Deps.Dependency;
  ScrollableBtnGroup.prototype.setCurrentIndex = function(value) {
    if (this.currentIndex === value) {
      return;
    }
    this.currentIndex = value;
    return this._ciDeps.changed();
  };

  ScrollableBtnGroup.prototype.getCurrentIndex = function() {
    this._ciDeps.depend();
    return this.currentIndex;
  };

  ScrollableBtnGroup.prototype.next = function() {
    var ci;
    ci = this.getCurrentIndex();
    if ((ci + this.settings.viewBtnCount) >= this.settings.buttons.length) {
      return;
    }
    return this.setCurrentIndex(ci + 1);
  };

  ScrollableBtnGroup.prototype.prev = function() {
    var ci;
    ci = this.getCurrentIndex();
    if (ci <= 0) {
      return;
    }
    return this.setCurrentIndex(this.getCurrentIndex() - 1);
  };

  ScrollableBtnGroup.prototype.getActiveButtons = function() {
    var endIndex, startIndex;
    startIndex = this.getCurrentIndex();
    endIndex = startIndex + this.settings.viewBtnCount;
    return this.settings.buttons.slice(startIndex, endIndex);
  };

   return ScrollableBtnGroup;
})();

// The component template helpers
Template.scrollableBtnGroup.created = function() {
    //this.data['guid'] = this.__component__.guid;
    //SBGCtrl.add(this.__component__.guid, this.data.settings);
    SBGCtrl.add('1', this.data.settings);
};

Template.scrollableBtnGroup.destroyed = function() {
    SBGCtrl.remove(this.__component__.guid);
};

// /client/views/components/scrollableBtnGroup.js
Template.scrollableBtnGroup.helpers({
    viewBtnCount: function() {
        return SBGCtrl.get('1') && SBGCtrl.get('1').settings.viewBtnCount;
    },
    buttonCount: function() {
        return SBGCtrl.get('1') && SBGCtrl.get('1').settings.buttons.length;
    },
    buttons: function() {
        return SBGCtrl.get('1') && SBGCtrl.get('1').settings.buttons;
    },
    prevLabel: function() {
        return SBGCtrl.get('1') && SBGCtrl.get('1').settings.prevLabel;
    },
    nextLabel: function() {
        return SBGCtrl.get('1') && SBGCtrl.get('1').settings.nextLabel;
    },
    buttonsActive: function() {
        return SBGCtrl.get('1') && SBGCtrl.get('1').getActiveButtons();
    }
});
Template.scrollableBtnGroup.events({
    'click .js-scrollable-btn-action': function(evt, tpl) {
        SBGCtrl.get('1')[$(evt.currentTarget).data('action')](this);
    }
});
