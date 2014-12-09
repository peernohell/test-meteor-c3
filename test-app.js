if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault("counter", 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get("counter");
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set("counter", Session.get("counter") + 1);
    }
  });

  Template.hello.rendered = function () {
    var chart = c3.generate({
        data: {
            xs: {
                'data1': 'x1',
                'data2': 'x2',
            },
            columns: [
                ['x1', 10, 30, 45, 50, 70, 100],
                ['x2', 30, 50, 75, 100, 120],
                ['data1', 30, 200, 100, 400, 150, 250],
                ['data2', 20, 180, 240, 100, 190]
            ]
        }
    });
    $('#chart').append(chart.element);
  }
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
