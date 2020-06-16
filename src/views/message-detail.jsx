import React, { Component }from 'react';

const allMessages = [
    {id: 1, title: 'message001', content: 'Everything will be all right!'},
    {id: 2, title: 'message002', content: 'Everything is OK!'},
    {id: 3, title: 'message003', content: 'Thanks!'}
];

export default class MessageDetail extends Component{
    // 在Chrome调试工具中可以看到如何获取请求参数中的id

    render(){
        const {id} = this.props.match.params;
        const message = allMessages.find(m => m.id === id*1);

        return(
            <ul>
                <li>ID: {message.id}</li>
                <li>TITLE: {message.title}</li>
                <li>CONTENT: {message.content}</li>
            </ul>
        );
    }

}