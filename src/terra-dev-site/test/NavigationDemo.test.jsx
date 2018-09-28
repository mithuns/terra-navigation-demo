/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions  */
import React from 'react';
import { MemoryRouter, Link, withRouter } from 'react-router-dom';
import { injectIntl, intlShape } from 'terra-base';
import Avatar from 'terra-avatar';
import ContentContainer from 'terra-content-container';
import Button from 'terra-button';
import Input from 'terra-form-input';

import ApplicationLayout, { RoutingMenu, Utils } from 'terra-framework/packages/terra-application-layout/lib/ApplicationLayout';
import { ManagedRoutingProvider } from 'terra-framework/packages/terra-application-layout/lib/ManagedRouting';
import ContentPlaceholder from 'terra-framework/packages/terra-application-layout/lib/ContentPlaceholder';
import { presentNotificationDialog } from 'terra-framework/packages/terra-application-layout/lib/StatelessNotificationDialog';

import { PatientProvider } from './PatientProvider';
import ChiefComplaintComponent from './ChiefComplaintComponent';
import ListDetailComponent from './ListDetailComponent';
import DemographicsRoutingMenu from './DemographicsRoutingMenu';
import MessageCenterComponent from './MessageCenterComponent';

const TestExtensions = () => (
  <Button text="Extensions" />
);

const blankPlaceholder = (
  <div
    style={{
      height: '100%',
      width: '100%',
      backgroundColor: 'grey',
      boxShadow: 'inset 0 0 5px black',
    }}
  />
);

class InputHeaderBase extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      path: props.location.pathname,
    };
  }

  render() {
    return (
      <React.Fragment>
        <Input
          value={this.state.path}
          onChange={(event) => {
            this.setState({
              path: event.target.value,
            });
          }}
        />
        <Button
          onClick={() => {
            this.props.history.push(this.state.path);
          }}
          text="Go"
        />
      </React.Fragment>
    );
  }
}

const InputHeader = withRouter(InputHeaderBase);

/**
 * The routingConfig API matches that of the NavigationLayout. Routing specifications for the
 * menu and content regions are supported; the header region is not configurable.
 */
const routingConfig = {
  menu: {
    '/patient_list': {
      path: '/patient_list',
      component: {
        default: {
          componentClass: RoutingMenu,
          props: {
            title: 'Patient List',
            menuItems: [{
              text: 'Adams, Ricardo - DOB: 12/21/1948',
              path: '/patient_list/6778266/chart',
              hasSubMenu: true,
            }, {
              text: 'Birch, Dena - DOB: 5/01/1945',
              path: '/patient_list/28032901/chart',
              hasSubMenu: true,
            }, {
              text: 'Derosier, Shauna - DOB: 7/24/1929',
              path: '/patient_list/57742980/chart',
              hasSubMenu: true,
            }, {
              text: 'Fisk, Chou - DOB: 4/13/1956',
              path: '/patient_list/14600575/chart',
              hasSubMenu: true,
            }],
          },
        },
      },
    },
    '/patient_list/:patient_id/chart': {
      path: '/patient_list/:patient_id/chart',
      component: {
        default: {
          componentClass: DemographicsRoutingMenu,
          props: {
            title: 'Patient Chart',
            menuItems: [{
              text: 'Review',
              path: '/patient_list/:patient_id/chart/review',
              hasSubMenu: true,
            }, {
              text: 'Orders',
              path: '/patient_list/:patient_id/chart/orders',
            }, {
              text: 'Documents',
              path: '/patient_list/:patient_id/chart/documents',
              hasSubMenu: true,
            }],
          },
        },
      },
    },
    '/patient_list/:patient_id/chart/review': {
      path: '/patient_list/:patient_id/chart/review',
      component: {
        default: {
          componentClass: DemographicsRoutingMenu,
          props: {
            title: 'Review',
            menuItems: [{
              text: 'Chief Complaint',
              path: '/patient_list/:patient_id/chart/review/chief_complaint',
            }, {
              text: 'Allergies',
              path: '/patient_list/:patient_id/chart/review/allergies',
            }, {
              text: 'Problems',
              path: '/patient_list/:patient_id/chart/review/problems',
            }, {
              text: 'Labs',
              path: '/patient_list/:patient_id/chart/review/labs',
            }],
          },
        },
      },
    },
    '/patient_list/:patient_id/chart/documents': {
      path: '/patient_list/:patient_id/chart/documents',
      component: {
        default: {
          componentClass: DemographicsRoutingMenu,
          props: {
            title: 'Documents',
            menuItems: [{
              text: 'My Notes',
              path: '/patient_list/:patient_id/chart/documents/my_notes',
            }, {
              text: 'Physician Notes',
              path: '/patient_list/:patient_id/chart/documents/physician_notes',
            }, {
              text: 'Nurse Notes',
              path: '/patient_list/:patient_id/chart/documents/nurse_notes',
            }],
          },
        },
      },
    },
  },
  content: {
    '/patient_list': {
      path: '/patient_list',
      component: {
        default: {
          componentClass: ContentPlaceholder,
          props: {
            placeholderContent: blankPlaceholder,
          },
        },
      },
    },
    '/patient_list/:patient_id/chart': {
      path: '/patient_list/:patient_id/chart',
      component: {
        default: {
          componentClass: ContentPlaceholder,
          props: {
            placeholderContent: blankPlaceholder,
          },
        },
      },
    },
    '/patient_list/:patient_id/chart/review': {
      path: '/patient_list/:patient_id/chart/review',
      component: {
        default: {
          componentClass: ContentPlaceholder,
          props: {
            autoselectPath: '/patient_list/:patient_id/chart/review/chief_complaint',
            placeholderContent: blankPlaceholder,
          },
        },
      },
    },
    '/patient_list/:patient_id/chart/orders': {
      path: '/patient_list/:patient_id/chart/orders',
      component: {
        default: {
          componentClass: ListDetailComponent,
          props: {
            title: 'Orders',
            dataKey: 'orders',
          },
        },
      },
    },
    '/patient_list/:patient_id/chart/documents': {
      path: '/patient_list/:patient_id/chart/documents',
      component: {
        default: {
          componentClass: ContentPlaceholder,
          props: {
            autoselectPath: '/patient_list/:patient_id/chart/documents/my_notes',
            placeholderContent: blankPlaceholder,
          },
        },
      },
    },
    '/patient_list/:patient_id/chart/review/chief_complaint': {
      path: '/patient_list/:patient_id/chart/review/chief_complaint',
      component: {
        default: {
          componentClass: ChiefComplaintComponent,
        },
      },
    },
    '/patient_list/:patient_id/chart/review/problems': {
      path: '/patient_list/:patient_id/chart/review/problems',
      component: {
        default: {
          componentClass: ListDetailComponent,
          props: {
            title: 'Problems',
            dataKey: 'problems',
          },
        },
      },
    },
    '/patient_list/:patient_id/chart/review/allergies': {
      path: '/patient_list/:patient_id/chart/review/allergies',
      component: {
        default: {
          componentClass: ListDetailComponent,
          props: {
            title: 'Allergies',
            dataKey: 'allergies',
          },
        },
      },
    },
    '/patient_list/:patient_id/chart/review/labs': {
      path: '/patient_list/:patient_id/chart/review/labs',
      component: {
        default: {
          componentClass: ListDetailComponent,
          props: {
            title: 'Labs',
            dataKey: 'labs',
          },
        },
      },
    },
    '/patient_list/:patient_id/chart/documents/my_notes': {
      path: '/patient_list/:patient_id/chart/documents/my_notes',
      component: {
        default: {
          componentClass: ListDetailComponent,
          props: {
            title: 'My Notes',
            dataKey: 'myNotes',
          },
        },
      },
    },
    '/patient_list/:patient_id/chart/documents/physician_notes': {
      path: '/patient_list/:patient_id/chart/documents/physician_notes',
      component: {
        default: {
          componentClass: ListDetailComponent,
          props: {
            title: 'Physician Notes',
            dataKey: 'physicianNotes',
          },
        },
      },
    },
    '/patient_list/:patient_id/chart/documents/nurse_notes': {
      path: '/patient_list/:patient_id/chart/documents/nurse_notes',
      component: {
        default: {
          componentClass: ListDetailComponent,
          props: {
            title: 'Nurse Notes',
            dataKey: 'nurseNotes',
          },
        },
      },
    },
    '/message_center': {
      path: '/message_center',
      component: {
        default: {
          componentClass: MessageCenterComponent,
          props: {
            title: 'Message Center',
          },
        },
      },
    },
  },
};

/**
 * The navigationItems will be used to present the ApplicationLayout's navigation controls. The paths provided here must be present in
 * the routingConfig. If no navigation controls are desired, these items can be omitted.
 *
 * With standard rendering, the items will be presented as tabs within the ApplicationLayout's header.
 * With compact rendering, the items will be presented within the layout's menu region within a ApplicationLayout-managed menu.
 */
const navigationItems = [{
  path: '/patient_list',
  text: 'Patient List',
}, {
  path: '/message_center',
  text: 'Message Center',
}];

/**
 * The indexPath will be given to the NavigationLayout to set up the appropriate redirects. If users attempt to navigate to a path unsupported
 * by the routingConfig, they will be redirected to this route. This path should therefore be present in the routingConfig.
 */
const indexPath = '/food';

const userAvatar = (
  <Avatar
    variant="user"
    alt="User, Test"
    ariaLabel="User, Test"
    key="user_avatar"
  />
);

const userData = {
  name: 'Username',
  photo: userAvatar,
};

/**
 * The data provided for nameConfig will be visible in the ApplicationLayout's header, as well
 * as in any menus at the tiny and small breakpoints.
 */
const nameConfig = Object.freeze({
  title: 'New Charting App',
});

class ApplicationLayoutTest extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checkboxItemEnabled: false,
    };
  }

  componentDidMount() {
    // if (!matchPath(this.props.location.pathname, '/food') || !matchPath(this.props.location.pathname, '/drink')) {
    //   this.props.history.push('/food');
    // }
  }

  render() {
    const { intl } = this.props;
    const { checkboxItemEnabled } = this.state;

    const customUtilityItems = [];

    /**
     * The data provided for utilityConfig will be visible in the ApplicationLayout's header in the
     * standard rendering mode and within the menus in the compact rendering mode.
     *
     * The ApplicationLayout's Utils export provides a helper function named getDefaultUtilityConfig that will
     * generate the configuration for the standard set of utility options. If the standard configuration is not
     * desirable, an entirely custom configuration can be used instead.
     */
    const utilityConfig = Object.freeze({
      title: 'Username',
      accessory: userAvatar,
      menuItems: Utils.utilityHelpers.getDefaultUtilityItems(intl, userData, customUtilityItems),
      initialSelectedKey: Utils.utilityHelpers.defaultKeys.MENU,
      onChange: () => {},
    });

    return (
      <div style={{ height: '100%' }}>
        <MemoryRouter
          initialEntries={['/patient_list']}
          initialIndex={0}
          getUserConfirmation={(message, callback) => {
            presentNotificationDialog({
              intl,
              variant: 'warning',
              title: 'Unsaved changes',
              message,
              primaryAction: {
                text: 'Yarp',
                onClick: () => {
                  callback(true);
                },
              },
              secondaryAction: {
                text: 'Narp',
                onClick: () => {
                  callback(false);
                },
              },
            });
          }}
        >
          <ManagedRoutingProvider>
            <ContentContainer
              fill
            >
              <PatientProvider>
                <ApplicationLayout
                  nameConfig={nameConfig}
                  utilityConfig={utilityConfig}
                  routingConfig={routingConfig}
                  navigationItems={navigationItems}
                  // extensions={<TestExtensions />}
                  indexPath={indexPath}
                  routeNotFoundComponent={(
                    <div style={{ height: '100%' }}>
                      <h1>404 Page Not Found</h1>
                      <Link to="/food">Go to Food</Link>
                    </div>
                  )}
                />
              </PatientProvider>
            </ContentContainer>
          </ManagedRoutingProvider>
        </MemoryRouter>
      </div>
    );
  }
}

ApplicationLayoutTest.propTypes = {
  intl: intlShape,
};

const WrappedApplication = injectIntl(ApplicationLayoutTest);

const AppRouter = () => (
  <WrappedApplication />
);

export default AppRouter;
