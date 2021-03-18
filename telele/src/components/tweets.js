import React from 'react';

//import components
import Tweet from './tweet';

const Tweets=(props) => {
    const tweets =[
        {name:"Esteban" , tweet:"Lorem ipsum dolor sit amet, consectetur adipiscing elit,"},
        {name:"Carlos" , tweet:" sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
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
