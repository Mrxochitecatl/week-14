
import React from "react";
import Navbar from "./navbar";
import Movie from "./movie";

export default class MovieList extends React.Component {
    render() {
        let movies = [ 
            {
                title: "The NorthMan",
                image: "https://m.media-amazon.com/images/M/MV5BZWY3OTdkZDQtYjdjMy00NDRmLThiZjItYjUzZGNkZDYyYzc0XkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg",
                plot: "Prince Amleth is on the verge of becoming a man when his father is brutally murdered by his uncle, who kidnaps the boy's mother. Two decades later, Amleth is now a Viking who raids Slavic villages. He soon meets a seeress who reminds him of his vow -- save his mother, kill his uncle, avenge his father.",
                reviews: []
            }, 
            {
                title: "The Lighthouse",
                image:  "https://ih1.redbubble.net/image.1032686437.3169/flat,750x,075,f-pad,750x1000,f8f8f8.jpg",
                plot: "Two lighthouse keepers try to maintain their sanity while living on a remote and mysterious New England island in the 1890s.",            
                reviews: []
            },
            {
                title: "The VVitch",
                image: "https://upload.wikimedia.org/wikipedia/en/b/bf/The_Witch_poster.png",
                plot: "In 1630 New England, panic and despair envelops a farmer, his wife and their children when youngest son Samuel suddenly vanishes. The family blames Thomasin, the oldest daughter who was watching the boy at the time of his disappearance. With suspicion and paranoia mounting, twin siblings Mercy and Jonas suspect Thomasin of witchcraft, testing the clan's faith, loyalty and love to one another.",
                reviews: [] 
            }
        ]

        let arr;
        arr = movies.map( (movies, index ) => 
            <Movie title={movies.title} plot={movies.plot} reviews={movies.reviews} image={movies.image} key={index} />
        ) 

        return (
            
            <div className="container">
                <div>
                    <Navbar />
                </div> <br /><br />
                
                <div>
                    {arr}
                </div>  
            </div> 
       )
    } 
}


