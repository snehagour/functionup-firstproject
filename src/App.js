import React, { useState } from 'react'
import EmojiPicker, {Emoji} from "emoji-picker-react"

function App() {
const [searchitem, setSearchitem]= useState("");


function onClick (emojidata){
    setSearchitem(emojidata.unified);
}
    
  return (
    <div>
      <h1>React Emoji App</h1>
      <div>
        {searchitem? <Emoji unified={searchitem} size={52}/>:null}
      </div>
      <EmojiPicker onEmojiClick={onClick}/>
    </div>
  )
}

export default App;
