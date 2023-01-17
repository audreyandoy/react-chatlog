import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
import { useState } from 'react';

const App = () => {
  const chatMessagesCopy = chatMessages.map((message) => {
    return {
      id: message.id,
      sender: message.sender,
      body: message.body,
      timeStamp: message.timeStamp,
      liked: message.liked,
    };
  });

  let [messageData, setMessageData] = useState(chatMessagesCopy);

  const toggleLiked = (id) => {
    let newMessageData = messageData.map((message) => {
      if (message.id === id) {
        message.liked = !message.liked;
        return message;
      } else {
        return message;
      }
    });

    setMessageData(newMessageData);
  };

  const updateLikes = () => {
    return messageData
      .map((message) => (message.liked ? 1 : 0))
      .reduce((p, c) => p + c);
  };

  return (
    <div id="App">
      <header className="App-header">
        <h1>Chat Log</h1>
        <h2>
          <span className="widget">Likes: {updateLikes()} ❤️'s</span>
          <span id="heartWidget">❤️</span>
        </h2>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
        <ChatLog entries={chatMessages} toggleLiked={toggleLiked} />
      </main>
    </div>
  );
};

export default App;
