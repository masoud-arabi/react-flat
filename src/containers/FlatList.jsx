import React,{Component} from 'react';
import Flat from '../components/Flat';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import setFlats from '../reducers/flatsReducer';


class FlatList extends Component {

    static defaultProps = {
        flats: [{
        "name": "Charm at the Steps of Montmartre",
        "imageUrl": "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat1.jpg",
        "price": 164,
        "priceCurrency": "EUR"
        }]
    };
    componentWillMount(){
        
        this.props.setFlats();
    }
    render() { 
        return ( 
            <div className='flat col-sm-7'>FLat
                {this.props.flats.map((flat)=> <Flat flat={flat} key={flat.name}/>)}
            </div>
         );
    }
}
 const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {setFlats: setFlats},
        dispatch,
    );
 };

 const mapStateReduxToProps = (ReduxState)=>{
    state
 };
 
export default connect(null, mapDispatchToProps)(FlatList);