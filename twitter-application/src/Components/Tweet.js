import '../CSS/Tweet.css';
import {useState} from 'react';

function Tweet({id,content,likeCount,createdAt,handleUpdateTweet}){
    console.log(content);
    console.log(handleUpdateTweet)
    // * Edit Functionality to Tweet:-

    let [isEditing,setIsEditing] = useState(false)
    let [newTweet,setNewTweet] = useState(content);
    return(
        <div className="tweet-wrapper">

            <div className='tweet-edit-wrapper'>

                <div className="tweet-content">

                    {(isEditing)?

                        <input 
                        type='text' 
                        value={newTweet} 
                        onChange={(e) => setNewTweet(e.target.value)} // On each keystroke only the current component will re-render
                        />
                    :
                        content
                    }

                </div>

                <div className='tweet-edit-btn'>
                    <button 
                        onClick={() => {

                            setIsEditing(!isEditing);

                            if(newTweet !== content){ // If the user hasn't made any changes after clicking on Edit, we will not re-render the entire list. But only re-render the current component
                                handleUpdateTweet(
                                    {
                                        id:id,
                                        content:newTweet,
                                        likeCount:likeCount,
                                        createdAt: createdAt
                                    }
                                )
                            }
                            console.log("hello",isEditing);
                            // setNewTweet("");
                            }}>

                        {(isEditing) ? "Save" : "Edit"}

                    </button>
                </div>

            </div>


            <div className='like-createdAt-wrapper'>

                <div className="likes">
                    {likeCount} Likes
                </div>

                <div className='created-at'>
                    <b>Tweet Created At : {createdAt}</b>
                </div>

            </div>

        </div>
    )
}

export default Tweet;