import React from 'react';
import PropTypes from 'prop-types';
import ServiceFactory from '../service-factory';
import NavigationDemoView from './NavigationDemoView';

const propTypes = {
  patientId: PropTypes.number.isRequired,
};

class NavigationDemoContainer extends React.Component {
  constructor(props) {
    super(props);

    this.executeService = this.executeService.bind(this);
    this.serviceSuccess = this.serviceSuccess.bind(this);
    this.serviceFailure = this.serviceFailure.bind(this);
    this.state = { isFailed: false, isLoading: true, text: null };
  }

  componentDidMount() {
    this.cachedService = ServiceFactory.navigationDemoService();
    this.executeService();
  }

  executeService() {
    this.cachedService({ patientId: this.props.patientId }).then((response) => {
      if (response.data) {
        this.serviceSuccess(response.data);
      } else {
        this.serviceFailure(response.error);
      }
    });
  }

  serviceSuccess(data) {
    // unpack data into state here
    this.setState({ isFailed: false, isLoading: false, text: data.navigationDemo });
  }

  serviceFailure() {
    this.setState({ isFailed: true, isLoading: false, text: null });
  }

  render() {
    return (
      <NavigationDemoView
        isFailed={this.state.isFailed}
        isLoading={this.state.isLoading}
        text={this.state.text}
      />
    );
  }
}

NavigationDemoContainer.propTypes = propTypes;

export default NavigationDemoContainer;
