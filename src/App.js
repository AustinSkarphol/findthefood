import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './styles/styles.css'
import Header from './components/register/header';
import RegistrationForm from './components/register/registration';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <RegistrationForm/>
            </div>
        );
    }
}

export default App;