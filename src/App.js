import React, { Component } from 'react';
import Card from './components/Card/Card';
import Chart from './components/Charts/Charts';
import CountryPicker from './components/CountryPickers/CountryPickers';

import styles from './App.module.css';
import { fetchData } from './api';
//import { Cards, CountryPicker } from "./components";


class App extends Component {
  state = {
    data: {},
  }

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });
  }
  render() {
    const { data } = this.state;
    return (
      <div className="container">
        <Card data={data} />
        <CountryPicker />
        <Chart />
      </div>
    );
  }
}

export default App;
