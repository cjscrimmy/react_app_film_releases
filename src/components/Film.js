import React, {Component} from 'react';


class Film extends Component{
    render(){
        return(
            <li className="film">
                <p><a href={this.props.url}>{this.props.name}</a></p>
            </li>
        );
    }
}

export default Film;