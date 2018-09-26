/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import NavigationDemoContainer from '../../../src/navigation-demo/components/NavigationDemoContainer';

it('should render a NavigationDemoContainer with a default NavigationDemoView', () => {
  const testContainer = <NavigationDemoContainer patientId={100} />;
  expect(shallow(testContainer)).toMatchSnapshot();
});
