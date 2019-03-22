import React from 'react';
import './Header.scss';

class Header extends React.Component{

    test = () => {
        console.log('test');
    };

    render() {
        return(
            <h2 onClick={this.test}>Hello <span><i>ttt</i>test</span></h2>
        )
    }
}

export default Header;

