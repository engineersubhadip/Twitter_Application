import { useState } from "react";
import AddTweet from "./AddTweet";
import TweetList from "./TweetList";

function Twitter(){

    let [dummyTweets,setDummyTweets] = useState([
        // {id:12,content:"Tweet Number 1", like:24},
        // {id:20,content:"Tweet Number 2", like:235},
        // {id:24,content:"Tweet Number 3", like:29},
        // {id:26,content:"Tweet Number 4", like:131},
        // {id:29,content:"Tweet Number 5", like:78}
      ])

    function handleEditTweet(updatedTweet){
        let updatedList = dummyTweets.map(function(ele){
            if(ele.id === updatedTweet.id){
                ele.content = updatedTweet.content
            }
            return ele;
        });
        setDummyTweets(updatedList);
    }
    
    return (
        <div>

            <AddTweet 
            updateTodo=
            {(newTodo) => setDummyTweets([...dummyTweets,{id:new Date().getTime(), content:newTodo,like:234,createdAt: new Date()}])}/>
            
            <TweetList tweets={dummyTweets} updateTheTweet={(newUpdatedTweet) => handleEditTweet(newUpdatedTweet)}/>
        </div>
    )
}

export default Twitter;