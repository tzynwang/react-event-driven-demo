import React from 'react';
import ReactDOM from 'react-dom';
import App from '@Components/App';
import AuthLayer from '@Components/Layer/Auth';
import ErrorBoundary from '@Components/Common/ErrorBoundary';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <AuthLayer>
        <App />
      </AuthLayer>
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root')
);
