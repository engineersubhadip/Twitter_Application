import Tweet from "./Tweet";
import '../CSS/TweetList.css'

function TweetList({tweets,updateTheTweet}){
    console.log(tweets,updateTheTweet)
    return(
        <ul className="tweet-list">
            {
                tweets.map(function(res){

                    return <li key={res.id}>

                        <Tweet 
                        id={res.id}
                        content={res.content} 
                        likeCount={res.like} 
                        createdAt={res.createdAt.toString()}
                        handleUpdateTweet={updateTheTweet}
                        />

                        </li>
                })
            }
        </ul>
    )
}

export default TweetList;