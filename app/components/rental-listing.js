import Ember from 'ember';

export default Ember.Component.extend({
  isImageShowing: false,
  actions: {
    toggleImage(toggle) {
      this.set('isImageShowing', toggle);
    }
  }
});
