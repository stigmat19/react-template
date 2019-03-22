import React, { Component } from "react";

import '../styles/App.scss';
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

class App extends Component {

    state = {
        getA: 0
    };

    getValue = (val) => {
        console.log('app val',val);
        this.setState({
            getA: val
        })
    };


    render() {
        return (
            <div>
                <h1>My React App!</h1>
                <Header rrr={this.state.getA}/>
                <Footer cbTest={this.getValue}/>
            </div>
        );
    }
}

export default App;