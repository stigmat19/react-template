import React from 'react';
import './Header.scss';
import {connect} from 'react-redux';
import {acGetData, acSetPersonInfo} from "../../actions/actions";

class Header extends React.Component{

    test = () => {
        const newTrack = 'nothing else matters';

        this.props.getData(newTrack)
    };
    addPersonInfo = () => {

        this.props.setInfo();
    };

    render() {
        console.log('const a',this.props);
        return(
            <React.Fragment>
                <h2 onClick={this.test}>Hello <span><i>ttt</i>test</span></h2>
                <button onClick={this.addPersonInfo}>add person info</button>
            </React.Fragment>

        )
    }
}

const mapStateToProps = (state) => {
  return{
      data: state
  }
};

const mapDispatchToProps = (dispatch) => {
    return{
        getData: (track) => dispatch(acGetData(track)),
        setInfo: () => {
            fetch('./src/data/test.json')
                .then(function(response) {
                    return response.json();
                })
                .then(data => {
                    dispatch(acSetPersonInfo(data))
                })
                .catch( alert );
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Header);

