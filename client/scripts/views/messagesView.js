var MessagesView = {

  $chats: $('#chats'),

  $message: $('#message'),
  $submit: $('.submit'),

  initialize: function() {
    // MessagesView.$submit.on('submit click', function() {
    //   // MessagesView.add();
    // });

    MessagesView.$chats.empty();
  },

  /* --- ADD MESSAGES TO THE DOM --- */

  render: function(messages) {
    // call renderMessage on each message object in the messages array
    _.each(messages, function(message) {
      MessagesView.renderMessage({username: message.username, text: message.text});
    });
  },

  renderMessage: function(message) {
  // prepend each rendered message to chats i
    MessagesView.$chats.append(MessageView.render(message));
  }

  // sanitize messages

};



