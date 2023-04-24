import { component$ } from '@builder.io/qwik';
// import { QwikCityProvider, RouterOutlet, ServiceWorkerRegister } from '@builder.io/qwik-city';
import { QwikCityProvider, ServiceWorkerRegister } from '@builder.io/qwik-city';
// import { RouterHead } from './components/router-head/router-head';
import Counter from '~/components/starter/counter/counter';

import './global.css';

export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Dont remove the `<head>` and `<body>` elements.
   */

  return (
    <QwikCityProvider>
      <head>
        <meta charSet='utf-8' />
        <link rel='manifest' href='/manifest.json' />
        {/* <RouterHead /> */}
      </head>
      <body lang='en'>
        {/* <RouterOutlet /> */}

        <Counter />
        <ServiceWorkerRegister />
      </body>
    </QwikCityProvider>
  );
});
