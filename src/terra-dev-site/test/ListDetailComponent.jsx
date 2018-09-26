import React from 'react';
import PropTypes from 'prop-types';
import SelectableList from 'terra-list/lib/SelectableList';
import ContentContainer from 'terra-content-container';
import DemographicsBanner from 'terra-demographics-banner';
import ActionHeader from 'terra-action-header';
import ItemView from 'terra-clinical-item-view';
import { withPatient } from './PatientProvider';

const propTypes = {
  patient: PropTypes.object,
  dataKey: PropTypes.string,
  layoutConfig: PropTypes.object,
};

class ListDetailComponent extends React.Component {
  constructor(props) {
    super(props);

    this.renderContent = this.renderContent.bind(this);
    this.createItems = this.createItems.bind(this);

    const { items, pages } = this.createItems(props.patient[props.dataKey], 'root_page');

    this.state = {
      items,
      pages,
      renderedPage: 'root_page',
    };
  }

  createItems(data, parentKey) {
    let items = {};
    let pages = {};

    data.forEach((value) => {
      const item = {};
      item.name = value.name;
      item.detail = value.detail;
      item.parentKey = parentKey;

      if (value.values) {
        const childData = this.createItems(value.values, value.name);
        items = Object.assign(items, childData.items);
        pages = Object.assign(pages, childData.pages);
      }

      items[item.name] = item;
    });

    const page = data.map(value => value.name);
    pages[parentKey] = page;

    return { items, pages };
  }

  renderContent() {
    const { renderedPage, pages, items } = this.state;

    const page = pages[renderedPage];

    let content;
    if (page) {
      const listItems = page.map(pageItem => (
        <SelectableList.Item
          key={items[pageItem].name}
          content={(
            items[pageItem].detail ?
              <ItemView
                displays={[
                  <ItemView.Display text={items[pageItem].name} />,
                  <ItemView.Display text={items[pageItem].detail} />,
              ]}
                isTruncated
              /> : <p style={{ margin: '0', padding: '15px 0 15px 5px', color: '#1c1f21' }}>{items[pageItem].name}</p>
          )}
        />
      ));

      content = (
        <SelectableList
          isDivided
          hasChevrons
          onChange={(event, selectedIndex) => {
            const itemName = page[selectedIndex];
            this.setState({
              renderedPage: itemName,
            });
          }}
        >
          {listItems}
        </SelectableList>
      );
    } else {
      content = <div style={{ height: '100%', padding: '0.714rem' }}>Placeholder Content</div>;
    }

    return content;
  }

  render() {
    const {
      patient,
      title,
      layoutConfig,
    } = this.props;

    const { items, renderedPage } = this.state;

    let parent;
    if (items[renderedPage] && items[renderedPage].parentKey) {
      parent = items[renderedPage].parentKey;
    }

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
              onBack={parent ? () => { this.setState({ renderedPage: parent }); } : layoutConfig.toggleMenu}
              title={renderedPage === 'root_page' ? title : renderedPage}
            />
          </React.Fragment>
        )}
        fill
      >
        {this.renderContent()}
      </ContentContainer>
    );
  }
}

ListDetailComponent.propTypes = propTypes;

export default withPatient(ListDetailComponent);
