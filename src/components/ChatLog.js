import React from 'react';
import './ChatLog.css';
import ChatEntry from './ChatEntry';

// Use destructuring ({ entries }) to replace props
const ChatLog = ({ entries }) => {
  const chatEntries = entries.map((entry) => {
    return (
      <div key={entry.id} className="chat-log">
        <ChatEntry
          id={entry.id}
          sender={entry.sender}
          body={entry.body}
          timeStamp={entry.timeStamp}
          liked={entry.liked}
          toggleLiked={entry.toggleLiked}
        />
      </div>
    );
  });

  return <article>{chatEntries}</article>;
};

export default ChatLog;
