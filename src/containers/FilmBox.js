import React, {Component} from 'react';
import FilmList from "../components/FilmList"

class FilmBox extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="film-box">
                <h2>Future Film Releases in the UK</h2>
                <FilmList/>
            </div>
        )
    }
}

export default FilmBox;