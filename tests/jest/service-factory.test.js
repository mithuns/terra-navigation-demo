import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import ServiceFactory from '../../src/navigation-demo/service-factory';

describe('navigationDemoService', () => {
  it('should return the appropriate value on success', () => {
    const mockRequest = new MockAdapter(axios);
    mockRequest.onGet('/patients/1/navigation-demo', {
      headers: {
        Accept: 'application/json',
      },
    }).reply(200, {
      navigationDemo: 'NavigationDemo!',
    });

    const navigationDemoService = ServiceFactory.navigationDemoService();
    return navigationDemoService({ patientId: '1' }).then(result => expect(result.data.navigationDemo).toEqual('NavigationDemo!'));
  });
});
