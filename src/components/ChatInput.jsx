import React from "react";

function ChatInput({ onSubmit, loading, onChange, query }) {
  return (
    <div>
        {loading && (
            <div className="load-container">
                <div className="loader"></div>
            </div>
        )}
      <form
        onSubmit={onSubmit}
        className="fixed-bottom p-4 bg-blur border-top slideUp"
      >
        <div className="input-group container">
          <input
            onChange={onChange}
            value={query}
            type="text"
            className="form-control"
            placeholder="Type your message"
            disabled={loading}
          />
          <button className="btn btn-primary" type="submit" disabled={loading}>
            <i className="bi bi-send-fill"></i>
          </button>
        </div>
      </form>
    </div>
  );
}

export default ChatInput;
