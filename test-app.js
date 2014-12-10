if (Meteor.isClient) {

  Template.chart.events({
    'click button': function () {
      // increment the counter when button is clicked
      var list = Session.get('x');
      list.push(list[list.length - 1] + 20);
      Session.set('x', list);

      list = Session.get('data1');
      list.push(Math.random() * 200 | 0);
      Session.set('data1', list);

      list = Session.get('data2');
      list.push(Math.random() * 220 | 0);
      Session.set('data2', list);
    }
  });

  Template.chart.rendered = function () {
    Session.set('x', ['x', 30, 50, 75, 100, 120]);
    Session.set('data1', ['data1', 30, 200, 100, 400, 150]);
    Session.set('data2', ['data2', 20, 180, 240, 100, 190]);
    var chart = c3.generate({
	bindto: this.find('.chart'),
        data: {
          xs: {
            'data1': 'x',
            'data2': 'x'
          },
          columns: [['x'],['data1'],['data2']]
        }
    });

    this.autorun(function (tracker) {
      chart.load({columns: [
        Session.get('x'),
        Session.get('data1'),
        Session.get('data2'),
        []
      ]});
    });
  }
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
