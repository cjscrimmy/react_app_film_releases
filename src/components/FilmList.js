import React, {Component} from 'react';
import Film from "./Film";

class FilmList extends Component {
    render(){
        const filmNodes = this.props.films.map(film => {
            return(
                <Film name={film.name} key={film.id} url={film.url}>
                    {film.text}
                </Film>
            );
        });

        return(
            <ul className="film-list">
                {filmNodes}
                
                <a href="https://www.imdb.com/calendar/?region=gb"> 
                   <button>
                       View More Up and Coming Releases
                   </button> 
                </a> 
        
            </ul>
        );
    }
}

export default FilmList;