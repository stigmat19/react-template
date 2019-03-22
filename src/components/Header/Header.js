import React from 'react';
import './Header.scss';
import {connect} from 'react-redux';
import {acGetData} from "../../actions/actions";

class Header extends React.Component{

    test = () => {
        const newTrack = 'nothing else matters';

        this.props.getData(newTrack)
    };

    render() {
        console.log('data',this.props.data);
        return(
            <h2 onClick={this.test}>Hello <span><i>ttt</i>test</span></h2>
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
        getData: (track) => dispatch(acGetData(track))
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Header);

