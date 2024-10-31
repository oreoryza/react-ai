import React, {Component} from 'react';
import Navbar from '../components/Navbar';
import ChatMessage from '../components/ChatMessage';
import ChatInput from '../components/ChatInput';
import { queryAI, logout } from '../utils/api';

class ChatContainer extends Component {
    state = {
        messages: [],
        loading: false,
        error: null,
        query: '',
    }

    handleQuery = async (e) => {
        e.preventDefault()
        const {query} = this.state;
        this.setState({loading: true, error: null});

        queryAI({query}, this.props.token)
        .then((res) => {
            this.setState({
                messages: [...this.state.messages, {query, data: res}],
                query: ''
            })
        })
        .catch((err) => {
            this.setState({error: err.message});
        })
        .finally(() => {
            this.setState({loading: false});
        })
    }

    handleChange = (e) => {
        this.setState({query: e.target.value});
    }

    isLogout = () => {
        this.setState({query: '', messages: []});
        const token = localStorage.getItem("token");
        if (this.props.logout) {
            // console.log(token);
            logout(token)
            this.props.setToken(null);
            localStorage.removeItem('token');
        }
    }

    render() {
        return (
            <div>
                <Navbar setToken={this.props.setToken} logout={this.isLogout}/>
                {
                    this.state.messages.map((message, index) => {
                        return <ChatMessage key={index} message={message.data.data} query={message.query}/>
                    })
                }
                <ChatInput onSubmit={this.handleQuery} loading={this.state.loading} onChange={this.handleChange} query={this.state.query}/>
            </div>
        );
    }
}

export default ChatContainer;