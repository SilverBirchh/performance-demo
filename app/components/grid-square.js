import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: ['square'],
  value: 0,

  attributeBindings: ['style'],
  style: null,

  didInsertElement() {
    this._super(...arguments);
    Ember.run.later(() => {
      this.setRandomValue();
    }, 1000);
  },

  setRandomValue() {
    const newValue = Math.floor((Math.random() * 10) + 1);
    this.set('value', newValue);

    const hexCode = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    this.set('style', Ember.String.htmlSafe(`background-color: ${hexCode}`))
    Ember.run.later(() => {
      this.setRandomValue();
    }, this.get('interval'));
  }

});
