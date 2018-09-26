import axios from 'axios';

const navigationDemoService = () => (
  ({ patientId }) => (
    axios.get(`/patients/${patientId}/navigation-demo`, {
      headers: {
        Accept: 'application/json',
      },
    }).then(response => ({ data: response.data })).catch(error => ({ error }))
  )
);

// If exporting multiple service factories this syntax is preferred:
// export { service1, service2, etc};
export default { navigationDemoService };
