import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
//import layout from './Components/hoc/Layout/Layout';
import Layout from './Components/hoc/Layout/Layout';
import Header from './Components/Header/Header';
import HackerDashboard from './Containers/HackerDashbord/HackerDashboard';

class App extends Component {
  render() {
    return (
      <div>      
      <Layout>
      <Header/>
      <HackerDashboard/>  
      </Layout>      
      </div>
    );
  }
}

export default App;
