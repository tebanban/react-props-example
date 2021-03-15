import React from 'react';

//import components
import Tweet from './tweet';

const Tweets=(props) => {
    const tweets =[
        {name:"Esteban" , tweet:"i am loco .....ueueuueueue"},
        {name:"Carlas" , tweet:"i am crazy............jejejejjs"},
        {name:"Luis" , tweet:"i am cool.....dndndns"},
    ];

return (
    <section>
        
            {tweets.map((tweet) => (
            <Tweet name={tweet.name} tweet={tweet.tweet}/>
        ))
        
        } 
       
        
    </section> 
); 
};

export default Tweets;
