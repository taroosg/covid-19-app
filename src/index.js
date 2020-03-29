import React from 'react';
import ReactDOM from 'react-dom';
import { Helmet } from "react-helmet";
import './index.css';
import banner from './banner.jpg';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Helmet
      title={'Hello World'}
      meta={[
        { name: 'twitter:card', content: 'COVID-19-app' },
        { name: "twitter:card", content: "summary_large_image" },
        { property: 'og:image', content: banner },
        { property: 'og:title', content: 'COVID-19' },
        { property: 'og:description', content: 'COVID-19-app' },
        { property: 'og:url', content: process.env.PUBLIC_URL },
      ]}
    />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.register();
