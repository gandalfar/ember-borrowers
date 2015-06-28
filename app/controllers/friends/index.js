import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['sortBy', 'sortAscending'],
  sortAscending: true,
  sortBy: 'firstName',
  actions: {
    setSortBy: function (fieldName) {
      this.set('sortBy', fieldName);
      this.toggleProperty('sortAscending');

      console.log('Sorting by ', fieldName);
      console.log(this.get('sortAscending'));

      return false;
    }
  }
});
