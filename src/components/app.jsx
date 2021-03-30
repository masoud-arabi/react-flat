import React,{Component} from 'react';
import Map from '../containers/Map'
import FlatList from '../containers/FlatList';

class App extends Component {
    
    render() { 
        return ( 
            <div className='row'>
                <FlatList />
                <Map />
            </div>
         );
    }
}
 
export default App;