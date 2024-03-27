
import './App.css';
import Tweet from './Components/Tweet';
import TweetList from './Components/TweetList';

function App() {

  let dummyTweets = [
    {id:12,content:"Tweet Number 1", like:24},
    {id:20,content:"Tweet Number 2", like:235},
    {id:24,content:"Tweet Number 3", like:29},
    {id:26,content:"Tweet Number 4", like:131},
    {id:29,content:"Tweet Number 5", like:78}
  ]
  return (
    <>
    
    
    <TweetList tweets={dummyTweets}/>
    </>
  );
}

export default App;
