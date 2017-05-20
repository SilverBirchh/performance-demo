import Ember from 'ember';

export default Ember.Component.extend({

  xAxis: 5,
  yAxis: 4,

  init() {
    this._super(...arguments);
    this.get('xAxis');
    this.get('yAxis');
  },

  xAxisArray: Ember.computed('xAxis', function() {
    const xAxis = this.get('xAxis');
    if (xAxis <= 0 ) {
      this.set('xAxis', 1);
    }
    return Ember.A(new Array(parseInt(xAxis)).fill(null));
  }),

  yAxisArray: Ember.computed('yAxis', function() {
    const yAxis = this.get('yAxis');
    if (yAxis <= 0 ) {
      this.set('yAxis', 1);
    }
    return Ember.A(new Array(parseInt(yAxis)).fill(null));
  }),


});
