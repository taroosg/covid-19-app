import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Countries from './Countries';
import DataSets from './DataSets';

const Covid19 = props => {
  const [covid19Data, setCovid19Data] = useState(null);
  const [covid19Location, setCovid19Location] = useState('Japan');
  const requestUrl = 'https://us-central1-covid-19-92892.cloudfunctions.net/api/covid19'
  // const requestUrl = 'http://localhost:5000/covid-19-92892/us-central1/api/covid19';
  const getDataFromAPI = async url => {
    const result = await axios.get(url);
    return result;
  }
  useEffect(() => {
    const result = getDataFromAPI(requestUrl).then(response => setCovid19Data(response.data));
  }, [props])

  return (
    <div>
      {covid19Data === null
        ? <div className="loading"><code>now loading...</code></div>
        : <div>
          <p><code>COVID-19</code></p>
          <Countries
            setCovid19Location={setCovid19Location}
            covid19Location={covid19Location}
            covid19Data={covid19Data}
          />
          <DataSets
            covid19Location={covid19Location}
            covid19Data={covid19Data}
          />
        </div>
      }
    </div>
  );
}

export default Covid19;
