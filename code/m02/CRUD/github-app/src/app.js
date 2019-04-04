'use strict'

import React, {Component} from 'react';
import AppContent from './components/app-content';
const axios = require('axios');



class App extends Component {
    constructor(props){
        super(props);
        this.listenMessage();
        this.state={
            fullmessage: null,
            inputValue: undefined,
            listenMessage: []
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };
  
    handleSubmit(event) {
        this.setState({
            inputValue: ''
        })
        event.preventDefault();
        this.listenMessage();
        const data = this.state
        console.log('clicou, submit:', data);
        axios.post('http://localhost:3001/message', 
        {fullmessage: data.fullmessage})
        this.listenMessage();
        
    };

    listenMessage(){
        axios.get('http://localhost:3001/message/desde/0').then((resp) => {
            const listas = resp.data.message
            console.log(listas)
            this.setState({
                listenMessage: listas.map((resp) => ({
                    fullmessage: resp.fullmessage
                }))
            })
        })
    };

    handleInputChange(event) {      
        this.setState({ fullmessage: event.target.value})
        };

    delted = (i) => {
        console.log(i)
    }


render() {
    const {fullmessage} = this.state
    return <AppContent
    inputValue={this.state.inputValue}
    full={fullmessage}
    handleInputChange={this.handleInputChange}
    submit={this.handleSubmit}
    listen={this.state.listenMessage}
    deleted={(e)=> console.log(e)}
    edit={this.edit}
    />
    }
}


export default App