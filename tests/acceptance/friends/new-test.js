import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'borrowers/tests/helpers/start-app';

var application;

module('Acceptance | friends/new', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('visiting /friends/new', function(assert) {
  visit('/');
  click('a[href="/friends/new"]');

  andThen(function() {
    assert.equal(currentURL(), '/friends/new');
  });
  fillIn('input[placeholder="First Name"]', 'Mark');
  fillIn('input[placeholder="Last Name"]', 'Mully');
  fillIn('input[placeholder="Email"]', 'm@mully.com');
  fillIn('input[placeholder="Twitter"]', '@mmmully');
  click('input[value="Save"]');

  andThen(function () {
    assert.equal(
      currentRouteName(),
      'friends.show.index',
      "Redirects to friends.show after create"
    );
  });
});

test('Clicking save without filling fields', function (assert) {
  visit('/friends/new');
  click('input[value="Save"]');
  andThen(function () {
    assert.equal(
      currentRouteName(),
      'friends.new',
      'Stays on the page'
    );
    assert.equal(
      find("h2:contains(You have to fill in all the fields)").length,
      1,
      "Displays error message"
    );
  });
});
