import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../docs/README.md';
import { name } from '../../../package.json';

// !raw-loader!'s path should be pointed to src, live code on the site is running from the lib folder,
// so the relative path needs to reach the root before traversing back to the src directory.

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
import NavigationDemoSrc from '!raw-loader!../../../src/navigation-demo/components/NavigationDemoContainer.jsx';

// Example Files
import NavigationDemoStandard from './example/NavigationDemoStandard';
import NavigationDemoStandardSrc from '!raw-loader!../../../src/terra-dev-site/doc/example/NavigationDemoStandard';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    examples={[
      {
        title: 'Standard NavigationDemo',
        example: <NavigationDemoStandard />,
        source: NavigationDemoStandardSrc,
      },
    ]}
    propsTables={[
      {
        componentName: 'NavigationDemo',
        componentSrc: NavigationDemoSrc,
      },
    ]}
  />
);

export default DocPage;
