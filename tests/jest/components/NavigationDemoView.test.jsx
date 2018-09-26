import React from 'react';
import { shallowWithIntl, loadTranslation } from 'enzyme-react-intl';
import NavigationDemoView from '../../../src/navigation-demo/components/NavigationDemoView';

loadTranslation('../translations/en-US.json');

it('should render a NavigationDemoView with no data', () => {
  const navigationDemoView = shallowWithIntl(<NavigationDemoView />);
  expect(navigationDemoView.first().shallow()).toMatchSnapshot();
});

it('should render a NavigationDemoView that has failed', () => {
  const navigationDemoView = shallowWithIntl(<NavigationDemoView isFailed />);
  expect(navigationDemoView.first().shallow()).toMatchSnapshot();
});

it('should render a NavigationDemoView view that is loading', () => {
  const navigationDemoView = shallowWithIntl(<NavigationDemoView />);
  expect(navigationDemoView.first().shallow()).toMatchSnapshot();
});

it('should render a NavigationDemoView that has succeeded with a valid DerpEngine', () => {
  const navigationDemoView = shallowWithIntl(<NavigationDemoView text="NavigationDemo" />);
  expect(navigationDemoView.first().shallow()).toMatchSnapshot();
});
