import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { DsButton } from '../.';

const App = () => {
  return (
    <DsButton />
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
