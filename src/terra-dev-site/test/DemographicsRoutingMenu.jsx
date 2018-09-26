import React from 'react';
import ContentContainer from 'terra-content-container';
import DemographicsBanner from 'terra-demographics-banner';
import RoutingMenu from 'terra-framework/packages/terra-application-layout/lib/menu/RoutingMenu';

import { withPatient } from './PatientProvider';

class DemographicsRoutingMenu extends React.Component {
  render() {
    const { patient } = this.props;
    const isCompact = this.props.layoutConfig.size === 'tiny' || this.props.layoutConfig.size === 'small';

    return (
      <ContentContainer
        header={isCompact ? (
          <DemographicsBanner
            age={patient.demographics.age}
            dateOfBirth={patient.demographics.dob}
            gender={patient.demographics.gender}
            personName={patient.demographics.name}
            identifiers={{ MRN: patient.demographics.mrn }}
            applicationContent={<span>{patient.demographics.location}</span>}
          />
    ) : undefined}
        fill
      >
        <RoutingMenu {...this.props} />
      </ContentContainer>
    );
  }
}

export default withPatient(DemographicsRoutingMenu);
