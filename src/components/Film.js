import React, {Component} from 'react';


class Film extends Component{
    render(){
        return(
            <li className="film">
                <p>{this.props.name}</p>
            </li>
        )
    }
}

export default Film;