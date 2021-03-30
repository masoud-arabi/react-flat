import React,{Component} from 'react'

class Flat extends Component {
    render() { 
        
        return ( 
            <div className='card-trip'>
                <img src={this.props.flat.imageUrl} />
                <div class="card">
                    <div>
                    <h2>{this.props.flat.name}</h2>
                    </div>
                    <h2 class="card-trip-pricing">{this.props.flat.price} {this.props.flat.priceCurrency}</h2>
                     </div>
                </div>

           
         );
    }
}
 
export default Flat;