import React, {Component} from 'react';
import Film from "./Film";

class FilmList extends Component {
    render(){
        return(
            <div className="film-list">
                <Film/>
                <Film/>
            </div>
        );
    }
}

export default FilmList;