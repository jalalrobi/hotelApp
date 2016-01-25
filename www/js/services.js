angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    hotelname: 'Homewood suitees spring',
    lastText: 'springfield',
    hotelimage: 'img/hotel1.png'
  }, {
    id: 1,
    hotelname: 'Max Lynx',
    lastText: 'springfield',
    hotelimage: 'img/hotel2.png'
  }, {
    id: 2,
    hotelname: 'Adam Bradleyson',
    lastText: 'springfield',
    hotelimage: 'img/hotel3.png'
  }, {
    id: 3,
    hotelname: 'Perry Governor',
    lastText: 'springfield!',
    hotelimage: 'img/hotel4.png'
  }, {
    id: 4,
    hotelname: 'Mike Harrington',
    lastText: 'springfield',
    hotelimage: 'img/hotel2.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});



