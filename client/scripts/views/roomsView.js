var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // iterate over results obj and add to allRooms, then render

    RoomsView.$button.on('click', function() {
      var newRoom = prompt('Enter room name');
      Rooms.add(newRoom);
    });

    /* CHANGE ROOMS ON MENU SELECT */
    // $RoomsView.$select.on('change', RoomsView.render);

  },

  /* ADD ROOMS TO THE DOM */
  render: function() {

  },


  renderRoom: function() {
    RoomsView.$select.append(`<option value="${roomname}">${roomname}</option>`);
  },

  addRoom: function() {
    // append room to the select element in DOM

  }

  // change: function() {}


};
