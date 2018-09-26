import React from 'react';
import ContentContainer from 'terra-content-container';
import DemographicsBanner from 'terra-demographics-banner';
import ActionHeader from 'terra-action-header';

import { withPatient } from './PatientProvider';

class ChiefComplaintComponent extends React.Component {
  render() {
    const { patient } = this.props;

    return (
      <ContentContainer
        header={(
          <React.Fragment>
            <DemographicsBanner
              age={patient.demographics.age}
              dateOfBirth={patient.demographics.dob}
              gender={patient.demographics.gender}
              personName={patient.demographics.name}
              identifiers={{ MRN: patient.demographics.mrn }}
              applicationContent={<span>{patient.demographics.location}</span>}
            />
            <ActionHeader
              onBack={this.props.layoutConfig.toggleMenu}
              title="Chief Complaint"
            />
          </React.Fragment>
        )}
        fill
      >
        <div style={{ padding: '0.714rem' }}>Content Placeholder</div>
      </ContentContainer>
    );
  }
}

export default withPatient(ChiefComplaintComponent);
