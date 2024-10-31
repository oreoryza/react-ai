import React from 'react';

function  ChatInput({onSubmit, loading, onChange, query}) {
    return (
        <form onSubmit={onSubmit} className='fixed-bottom p-3 bg-primary-subtle border-top'>
            <div className="input-group container">
                <input onChange={onChange} value={query} type="text" className="form-control" placeholder="Type your message" disabled={loading}/>
                <button className='btn btn-primary' type='submit' disabled={loading}>
                    <i className='bi bi-send-fill'></i>
                </button>
            </div>
        </form>
    );
}

export default ChatInput;