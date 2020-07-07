import React from 'react';
import Loadable from 'react-loadable'
import 'core-js/fn/object/assign'
// core-js/fn/object/assing is added above  b/c
// react-loadable did not polyfill Object.assign

const promise = new Promise((rs) => {
  const p = import('./component-to-lazy-load.jsx');
  setTimeout(() => { rs(p); }, 2000);
});

const MyComponent = Loadable({
  loader: () => promise,
  loading: () => <p className='loading-in-progress'>...loading</p>
});

export default MyComponent;
export { promise };

