import axios from 'axios';
// eslint-disable-next-line import/no-extraneous-dependencies
import MockAdapter from 'axios-mock-adapter';

// This sets the mock adapter on the default instance
const mock = new MockAdapter(axios);

// Mock any GET request to /users
// arguments for reply are (status, data, headers)
mock.onGet('/patients/100/navigation-demo').reply(200, {
  navigationDemo: 'navigationDemo.  Mock-Data.',
});

mock.onGet('/patients/200/navigation-demo').reply(500);
