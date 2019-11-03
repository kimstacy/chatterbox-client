var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  /* submits messages from the user to the server */
  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();

    var userMessage = {
      username: App.username,
      text: $('#message').val(),
      // grab value of roomname attribute
      roomname: $('#room').val()
    };

    // Parse.create(userMessage, () => {
    //   MessagesView.renderMessage(userMessage);
    //   // FormView.$('#message').on('submit', this.empty());
    // });

    Parse.create(userMessage);

    console.log('message sent');

    // Clear out message field

  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('enabled', status);
  }

};