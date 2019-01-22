import * as React from 'react';
import './App.css';
import NavBar from './components/NavBar'
class App extends React.Component {
  public render() {
    return (
      <div className="app">
        <div className="top-nav">
          <NavBar/>
        </div>
      </div>
    );
  }
}

export default App;
