if (window.ContactList === undefined) { window.ContactList = {}; }

(function(context) {

  var ContactItemView = Backbone.View.extend({
    tagname: "tr",

    initialize: function() {
      console.log(this);
      this.render();
    },

    render: function() {
      
    }

  });

  context.ContactItemView = ContactItemView;

})(window.ContactList)
