import ReactOnRails from 'react-on-rails';
import '../../src/navigation-demo/registration';

it('should register NavigationDemoApplication', () => {
  expect(ReactOnRails.getComponent('NavigationDemoApplication')).not.toBeUndefined();
});
