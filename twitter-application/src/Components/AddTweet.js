import {useState} from 'react';

function AddTweet({updateTodo}){

    let [text,setText] = useState("");

    return(
        <>
            <input 
            type="text" 
            value={text} 
            onChange={(e) => setText(e.target.value)} 
            placeholder="Please add new tweet..."/>

            <button 
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