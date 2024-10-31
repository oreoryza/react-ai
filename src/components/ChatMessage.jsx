import React from "react";
import Typewriter from "./Typewriter";

function ChatMessage({ message, query }) {
  return (
    <div className="container chat-message-cstm">
      {/* USER MESSAGE */}
      <div className="d-flex justify-content-end my-3">
        <div className="p-3 d-flex align-items-start border shadow-sm rounded-user-cstm bg-user-cstm text-start ms-5">
          <div>{query}</div>
          <strong className="ms-3">
            <i className="bi bi-person-circle fs-5"></i>
          </strong>
        </div>
      </div>

      {/* BOT MESSAGE */}
      <div className="d-flex justify-content-start my-3">
        <div className="p-3 d-flex align-items-start border shadow-sm rounded-bot-cstm bg-primary-subtle text-start me-5">
          <strong>
            <i className="bi bi-robot fs-5 me-3"></i>
          </strong>
          <div>
            <strong className="fs-5">Answer:</strong>
            <Typewriter text={message} delay={3}/>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatMessage;
