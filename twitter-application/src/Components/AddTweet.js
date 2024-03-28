import {useState} from 'react';
import '../CSS/AddTweet.css';

function AddTweet({updateTodo}){

    let [text,setText] = useState("");

    return(
        <>
            <input 
            className='tweet-input-box'
            type="text" 
            value={text} 
            onChange={(e) => setText(e.target.value)} 
            placeholder="Please add new tweet..."/>

            <button 
            className='tweet-button'
            onClick={() => {
                updateTodo(text);
                setText("");
            }}>
                Tweet !!
            </button>
        </>
    )
}

export default AddTweet;