import React, { Component } from 'react';
import './App.css';
import SideBar from '../sidebar/SideBar';
import Main from '../main/Main';

class App extends Component {
    render() {
        return (
            <div className="noteful">
                <header>
                    <h1>Noteful</h1>
                </header>
                <main className="app">
                    <SideBar />
                    <Main />
                </main>
            </div>
        )
    }
}
export default App;