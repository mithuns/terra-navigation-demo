import React from 'react';
import { withRouter, matchPath } from 'react-router-dom';

const PatientContext = React.createContext();

const patients = {
  6778266: {
    demographics: {
      name: 'Adams, Ricardo',
      age: '49',
      gender: 'male',
      dob: '12/21/1948',
      location: '201 East',
      mrn: '6778266',
    },
    allergies: [{
      name: 'Penicillin',
      detail: 'Sever Medication Allergy',
    }, {
      name: 'Fish',
      detail: 'Mild Food Intolerance',
    }],
    problems: [{
      name: 'Heterophyasis',
    }, {
      name: 'Anemia NEC',
    }, {
      name: 'Zygomycosis',
    }],
    labs: [{
      name: 'Blood Pressure',
      detail: '163/98',
      values: [{
        name: '163/98',
      }, {
        name: '153/59',
      }, {
        name: '152/69',
      }, {
        name: '190/45',
      }, {
        name: '101/120',
      }, {
        name: '166/69',
      }, {
        name: '164/119',
      }],
    }, {
      name: 'Temperature',
      detail: '91.7',
    }, {
      name: 'Respiratory Rate',
      detail: '35',
    }, {
      name: 'Mononucleosis',
      detail: 'Negative',
    }, {
      name: 'Urine Test',
      detail: 'pH 4.5',
    }, {
      name: 'Blood Culture',
      detail: 'Positive, Bacteria',
    }],
    myNotes: [{
      name: 'My Last Note - 10/03/2018',
    }, {
      name: '9/29/2018',
    }, {
      name: '9/29/2018',
    }],
    physicianNotes: [{
      name: '10/02/2018',
      detail: 'Johnson, Carol',
    }, {
      name: '9/29/2018',
      detail: 'Reisner, Brendan',
    }, {
      name: '9/28/2018',
      detail: 'Lurgio, Omelie',
    }, {
      name: '4/28/2017',
      detail: 'Dwyer, Oliver',
    }, {
      name: '4/28/2017',
      detail: 'Earl, Buddy',
    }, {
      name: '4/27/2017',
      detail: 'Whitehosue, Lynn',
    }, {
      name: '4/26/2017',
      detail: 'Madden, Jared',
    }, {
      name: '4/26/2017',
      detail: 'Yates, Samuel',
    }, {
      name: '1/7/2017',
      detail: 'Durham, Desiree',
    }, {
      name: '7/21/2012',
      detail: 'Merritt, Jimmy',
    }],
    nurseNotes: [{
      name: '10/03/2018',
      detail: 'Nilsson, Nicki',
    }, {
      name: '10/03/2018',
      detail: 'Gale, Anthony',
    }, {
      name: '10/03/2018',
      detail: 'Burnett, Marilee',
    }, {
      name: '10/02/2018',
      detail: 'Cardoso, Vinnie',
    }, {
      name: '10/02/2018',
      detail: 'Zander, Phillip',
    }],
    orders: [{
      name: 'Acetaminophen',
      detail: '650mg Tab, PO, Q4H PRN pain',
    }, {
      name: 'Metoprolol XL',
      detail: '100mg Tab, PO, Daily',
    }, {
      name: 'Mutlivitamin',
      detail: 'Tab, PO, Daily',
    }, {
      name: 'Omeprazole',
      detail: '40mg, Oral, 3 times a day',
    }, {
      name: 'Oxycodone (OxyContin)',
      detail: '10mg, PO, every 4 hours',
    }],
  },
  28032901: {
    demographics: {
      name: 'Birch, Dena',
      age: '73',
      gender: 'Female',
      dob: '5/01/1945',
      location: '217 East',
      mrn: '28032901',
    },
    allergies: [{
      name: 'No Known Allergies',
      disable: true,
    }],
    problems: [{
      name: 'Viral Arthritis',
    }],
    labs: [{
      name: 'Blood Pressure',
      detail: '81/72',
      values: [{
        name: '81/72',
      }, {
        name: '83/72',
      }, {
        name: '88/73',
      }],
    }, {
      name: 'Temperature',
      detail: '99.1',
    }, {
      name: 'Respiratory Rate',
      detail: '38',
    }, {
      name: 'Pregnancy Test',
      detail: 'Negative',
    }],
    myNotes: [{
      name: 'My Last Note - 3/18/2017',
    }, {
      name: '3/18/2017',
    }, {
      name: '3/16/2017',
    }, {
      name: '3/15/2017',
    }, {
      name: '3/12/2017',
    }],
    physicianNotes: [
      {
        name: '3/18/2018',
        detail: 'Christiansen, Charlie',
      },

      {
        name: '3/18/2018',
        detail: 'Rosmus, Duane',
      },

      {
        name: '3/17/2018',
        detail: 'Malik, Desree',
      },

      {
        name: '3/17/2018',
        detail: 'Delgado, Karl',
      },

      {
        name: '3/16/2018',
        detail: 'Zetzl, Irma',
      },

      {
        name: '3/14/2018',
        detail: 'Pierson, Micah',
      },

      {
        name: '3/14/2018',
        detail: 'Keppelman, Omar',
      },

      {
        name: '3/13/2018',
        detail: 'Goodloe, Nisha',
      },

      {
        name: '3/13/2018',
        detail: 'Goodloe, Nisha',
      },

      {
        name: '3/12/2018',
        detail: 'Goodloe, Nisha',
      },

      {
        name: '2/27/2018',
        detail: 'Keppelman, Omar',
      },

      {
        name: '10/09/2017',
        detail: 'Bertrand, Joann',
      },
    ],
    nurseNotes: [
      {
        name: '3/18/2018',
        detail: 'Mosley, Ami',
      },

      {
        name: '3/18/2018',
        detail: 'Koka, Rosa',
      },

      {
        name: '3/17/2018',
        detail: 'Gale, Yang',
      },

      {
        name: '3/17/2018',
        detail: 'Brune, Fannie',
      },

      {
        name: '3/16/2018',
        detail: 'Fuller, Skip',
      },

      {
        name: '3/15/2018',
        detail: 'Dietzer, Jane',
      },

      {
        name: '3/14/2018',
        detail: 'Rieberg, Mia',
      },

    ],
    orders: [{
      name: 'Acetaminophen',
      detail: '325mg, Oral, PRN as needed',
    }, {
      name: 'Aspirin',
      detail: '325mg, Oral, Daily',
    }, {
      name: 'Ibuprofen (Motrin)',
      detail: '200mg = 1 Tab(s), PO, q2hr',
    }, {
      name: 'Levofloxacin',
      detail: '750mg Tab, PO, Daily',
    }, {
      name: 'Multivitamin',
      detail: 'PO, Daily',
    }, {
      name: 'Omeprazole',
      detail: '40mg, Oral, 3 times a day',
    }, {
      name: 'Temazepam (Restoril)',
      detail: '15mg, PO, Bedtime',
    }],
  },
  57742980: {
    demographics: {
      name: 'Derosier, Shauna',
      age: '89',
      gender: 'Female',
      dob: '7/24/1929',
      location: '307-A North',
      mrn: '57742980',
    },
    allergies: [{
      name: 'Allergies Not Recorded',
      disable: true,
    }],
    problems: [{
      name: 'Flat Foot',
    }, {
      name: 'Mittelschmerz',
    }, {
      name: 'Hyperacusis',
    }, {
      name: 'Alzheimer\s disease',
    }],
    labs: [{
      name: 'Blood Pressure',
      detail: '97/106',
      values: [{
        name: '97/106',
      }, {
        name: '96/75',
      }],
    }, {
      name: 'Temperature',
      detail: '98.2',
    }, {
      name: 'Respiratory Rate',
      detail: '29',
    }],
    myNotes: [{ name: 'My Last Note - Today' },


      { name: '10/7/2018' },


      { name: '3/21/2018' },


      { name: '9/30/2017' },

    ],
    physicianNotes: [
      {
        name: '10/08/2018',
        detail: 'Voss, Kerre',
      },


      {
        name: '10/08/2018',
        detail: 'Eberhardt, Nokeo',
      },


      {
        name: '10/07/2018',
        detail: 'Lyon, Christian',
      },


      {
        name: '10/07/2018',
        detail: 'Shoman, Ash',
      },


      {
        name: '3/22/2018',
        detail: 'Lyon, Christian',
      },


      {
        name: '3/21/2018',
        detail: 'Lyon, Christian',
      },


      {
        name: '3/20/2018',
        detail: 'Brown, Kim',
      },


      {
        name: '9/30/2017',
        detail: 'Cooper, Carroll',
      },


      {
        name: '9/29/2018',
        detail: 'Nguyen, Aubrey',
      },


      {
        name: '9/29/2018',
        detail: 'Toney, Jacob',
      },


      {
        name: '9/28/2018',
        detail: 'Castle, Jeremiah',
      },
    ],
    nurseNotes: [
      {
        name: '10/08/2018',
        detail: 'Abey, Suzie',
      },


      {
        name: '10/08/2018',
        detail: 'Hill, Virgil',
      },


      {
        name: '10/07/2018',
        detail: 'Gorst, Shelly',
      },


      {
        name: '10/07/2018',
        detail: 'Norman, Marcy',
      },


      {
        name: '10/07/2018',
        detail: 'Wake, Tammy',
      },


    ],
    orders: [{
      name: 'Acetaminophen',
      detail: '325mg, Oral, PRN as needed',
    }, {
      name: 'Ibuprofen (Motrin)',
      detail: '200mg = 1 Tab(s), PO, q2hr',
    }, {
      name: 'Pantaprazole',
      detail: '40mg Tab, PO, Daily',
    }],
  },
  14600575: {
    demographics: {
      name: 'Fisk, Chou',
      age: '62',
      gender: 'Male',
      dob: '4/13/1956',
      location: '309-A North',
      mrn: '14600575',
    },
    allergies: [{
      name: 'Peanuts',
    }],
    problems: [{
      name: 'Salivary Gland Mucocele',
    }, {
      name: 'Pneumococcal Septicemia',
    }],
    labs: [{
      name: 'Blood Pressure',
      detail: '132/71',
      values: [{
        name: '132/71',
      }, {
        name: '130/83',
      }, {
        name: '129/44',
      }, {
        name: '129/98',
      }],
    }, {
      name: 'Temperature',
      detail: '96.2',
    }, {
      name: 'Respiratory Rate',
      detail: '13',
    }, {
      name: 'Electrolyte Panel: Creatinine: 0.8-1.3 mg/dL',
    }],
    myNotes: [{
      name: 'My Last Note - Yesterday',
    }, {
      name: '10/07/2018',
    }, {
      name: '10/06/2018',
    }],
    physicianNotes: [
      {
        name: '10/02/2018',
        detail: 'Burnes, Arnie',
      },


      {
        name: '10/02/2018',
        detail: 'Anderson, Tal',
      },


      {
        name: '6/24/2018',
        detail: 'Myers, Joseph',
      },


      {
        name: '6/23/2018',
        detail: 'Hecker, Susan',
      },


      {
        name: '4/13/2018',
        detail: 'Dorsa, Coleen',
      },


      {
        name: '4/13/2018',
        detail: 'Strand, Hans',
      },


      {
        name: '4/13/2018',
        detail: 'Willis, Rosie',
      },


      {
        name: '4/12/2018',
        detail: 'Myers, Joseph',
      },


      {
        name: '12/06/2017',
        detail: 'Myers, Joseph',
      },


      {
        name: '07/04/2016',
        detail: 'Hecker, Susan',
      },


      {
        name: '10/30/2007',
        detail: 'Reynolds, Kevin',
      },


      {
        name: '2/17/2002',
        detail: 'Porth, Ramesh',
      },
    ],
    nurseNotes: [
      {
        name: '10/02/2018',
        detail: 'Martell, Joanne',
      },


      {
        name: '10/02/2018',
        detail: 'Havas, Luis',
      },


      {
        name: '10/02/2018',
        detail: 'Rourke, Dixie',
      },


      {
        name: '10/02/2018',
        detail: 'Borena, Charles',
      },


      {
        name: '6/24/2018',
        detail: 'Hughes, Judy',
      },


      {
        name: '6/23/2018',
        detail: 'Reed, Edward',
      },
    ],
    orders: [{
      name: 'Aspirin',
      detail: '325mg, Oral, Daily',
    }, {
      name: 'Hydrocodone-Acetaminophen',
      detail: '5mg-325mg Tab, PO, Q4-6, PRN',
    }, {
      name: 'Promethazine',
      detail: '12.5mg, IV Push, Q6H, PRN nausea or vomiting',
    }],
  },
};

const PatientProvider = withRouter(({ children, location }) => {
  let patient;

  const match = matchPath(location.pathname, '/patient_list/:patient_id');

  const patientId = match && match.params.patient_id;
  if (patientId) {
    patient = patients[patientId];
  }

  return (
    <PatientContext.Provider value={patient}>
      {children}
    </PatientContext.Provider>
  );
});

const withPatient = Component => (
  props => (
    <PatientContext.Consumer>
      {patient => (
        <Component {...props} patient={patient} />
      )}
    </PatientContext.Consumer>
  )
);

export default {
  PatientProvider,
  withPatient,
};
export {
  PatientProvider,
  withPatient,
};
