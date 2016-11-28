import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dropzone from 'react-dropzone';
import request from 'superagent';
import _ from 'lodash';

class App extends Component {

  onDrop(files) {
    
    console.log(files);

    files.forEach((file) => {

      console.log(file.name);
      request
        .post('http://localhost:5000/upload/art')
        .attach('file', file)
        .end();
    });

    // _.each(files, (file => {
    //   request
    //     .post('http://localhost:5000/upload/art')
    //     .attach(file)
    //     .end();
    // }));
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>turbo.art</h2>
        </div>
        <p className="App-intro">
          art with extra horsepower
        </p>
        <Dropzone onDrop={this.onDrop}>
          <div> drop yo files here </div>
        </Dropzone>
      </div>
    );
  }
}

export default App;
