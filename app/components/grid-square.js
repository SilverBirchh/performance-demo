import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: ['square'],
  value: 0,

  didInsertElement() {
    this._super(...arguments);
    Ember.run.later(() => {
      this.setRandomValue();
    }, 1000);
  },

  setRandomValue() {
    const newValue = Math.floor((Math.random() * 10) + 1);
    this.set('value', newValue);
    Ember.run.later(() => {
      this.setRandomValue();
    }, this.get('interval'));
  }

});
