import React from 'react';
import {connect} from 'react-redux';

class Footer extends React.Component{

    a = 5;

    setVariables = () => {
        console.log('a',this.a);
        this.props.cbTest(this.a);
    };

    render() {
        console.warn('props', this.props);
        return(
            <h2>Footer {this.props.footData.rdGetData.test}<button onClick={this.setVariables}>click</button></h2>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        footData: state
    }
};



export default connect(mapStateToProps)(Footer);

