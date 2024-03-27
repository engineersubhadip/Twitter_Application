import Tweet from "./Tweet";
import '../CSS/TweetList.css'

function TweetList({tweets}){
    console.log(tweets);
    return(
        <ul className="tweet-list">
            {
                tweets.map(function(res){
                    return <li key={res.id}>
                        <Tweet content={res.content} likeCount={res.like}/>
                        </li>
                })
            }
        </ul>
    )
}

export default TweetList;