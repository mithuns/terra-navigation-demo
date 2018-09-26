/* global Terra */
/* global browser */

describe('NavigationDemo', () => {
  describe('No Data available', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/navigation-demo-js/navigation-demo-no-data');
    });
    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
  });

  describe('Loading data failed', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/navigation-demo-js/navigation-demo-loading-error');
    });
    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
  });
});
