import React,{Component} from 'react';
import Flat from '../containers/Flat';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {setFlats} from '../actions';


class FlatList extends Component {

   
    componentWillMount(){
       setTimeout(()=> this.props.setFlats(), 2000);
    }

    render() { 
        return ( 
            <div className='flat col-sm-7'>
                {this.props.flats.map((flat)=> <Flat flat={flat} key={flat.name}/>)}
            </div>
         );
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(
    { setFlats: setFlats },
    dispatch
    );
   } 

 function mapStateToProps(state) {
    return {
    flats: state.flats
    }
   }  
export default connect(mapStateToProps, mapDispatchToProps)(FlatList);