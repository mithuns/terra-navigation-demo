import React from 'react';
import PropTypes from 'prop-types';
import Base from 'terra-base';
import NavigationDemoContainer from './NavigationDemoContainer';

const propTypes = {
  locale: PropTypes.string.isRequired,
  patientId: PropTypes.number.isRequired,
};

// The disabling here is due to React-on-Rails not allowing default props
// Anyone mimicking this top level component should make it a class so that
// they can handle default props in the future.
// eslint-disable-next-line react/prefer-stateless-function
class NavigationDemoApplication extends React.Component {
  render() {
    const { locale, patientId } = this.props;

    return (
      <Base locale={locale}>
        <NavigationDemoContainer
          patientId={patientId}
          key="NAVIGATION_DEMO_APP"
        />
      </Base>
    );
  }
}

NavigationDemoApplication.propTypes = propTypes;

export default NavigationDemoApplication;
