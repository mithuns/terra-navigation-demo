import React from 'react';
import NavigationDemoApplication from '../../../src/navigation-demo/components/NavigationDemoApplication';

it('should render a NavigationDemoApplication with a placeholder', () => {
  const testApplication = (
    <NavigationDemoApplication
      locale="en-US"
      patientId={100}
    />
  );
  expect(shallow(testApplication)).toMatchSnapshot();
});
