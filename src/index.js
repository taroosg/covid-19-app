import React from 'react';
import ReactDOM from 'react-dom';
import { Helmet } from "react-helmet";
import './index.css';
// import banner from './banner.jpg';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Helmet
      title={'COVID-19'}
      meta={[
        // { name: "twitter:card", content: "summary_large_image" },
        // { name: 'twitter:image', content: 'https://taroosg-covid-19-app.netlify.com/banner.jpg' },
        // { property: 'og:image', content: 'https://taroosg-covid-19-app.netlify.com/banner.jpg' },
        // { property: 'og:title', content: 'COVID-19' },
        // { property: 'og:site_name', content: 'COVID-19' },
        // { property: 'og:type', content: 'website' },
        // { property: 'og:description', content: 'COVID-19-app' },
        // { property: 'og:url', content: 'https://taroosg-covid-19-app.netlify.com' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: `@taro_osg` },
        { name: 'twitter:creator', content: `@taro_osg` },
        { name: 'twitter:title', content: 'COVID-19' },
        { name: 'twitter:image', content: 'https://taroosg-covid-19-app.netlify.com/banner.jpg' },
        { property: 'og:image', content: 'https://taroosg-covid-19-app.netlify.com/banner.jpg' },
        { property: 'og:title', content: 'COVID-19' },
        { property: 'og:type', content: 'website' },
        { property: 'og:description', content: 'COVID-19-app' },
        { property: 'og:url', content: 'https://taroosg-covid-19-app.netlify.com/' },
      ]}
    />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.register();
