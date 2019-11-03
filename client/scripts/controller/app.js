var App = {

  // initializes the FormView, RoomsView, MessagesView
  $spinner: $('.spinner img'),

  username: 'anonymous',
  roomname: 'Lobby',

  // used in index.html, initializes the forms, rooms, messages for front page
  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);
  },

  // spinner should stop after messages successfully
  // rendered on page
  fetch: function(callback = () => {}) {
    Parse.readAll((data) => {
      Messages = data.results;
      MessagesView.render();
      // examine the response from the server request:
      console.log(data);

      // Filter through all received data to get roomnames
      for (var i = 0; i < data.results.length; i++) {

        // If roomname exists in received data
        if (data.results[i].roomname) {
          Rooms.roomList.push(data.results[i].roomname); // Add to container
        }

        // If we're on an empty server w/ no existing chats, create
      }

      console.log('callback yoyo', callback());
      callback();
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
