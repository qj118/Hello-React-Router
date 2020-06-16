import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import MessageDetail from "./message-detail";
import MyNavLink from "../components/my-nav-link";

export default class Message extends Component{

    state = {
        messages: [],
    }

    componentDidMount() {
        // 模拟异步请求获取数据
        setTimeout(() => {
            const messages = [
                {
                    id: 1,
                    title: 'Message001',
                },
                {
                    id: 2,
                    title: 'Message002',
                },
                {
                    id: 3,
                    title: 'Message003',
                },
            ];
            this.setState({messages});
        }, 1000);
    }

    showDetail = (id) => {
        this.props.history.push(`/home/message/messagedetail/${id}`);
    }

    showDetail2 = (id) => {
        this.props.history.replace(`/home/message/messagedetail/${id}`);
    }

    back = () => {
        this.props.history.goBack();
    }

    forward = () => {
        this.props.history.goForward();
    }

    reqPage = () => {
        // 使用 js 跳转页面
        window.location='http://www.baidu.com';
    }

    render(){
        return (
            <div>
                <ul>
                    {
                        this.state.messages.map((m, index) => {
                            return (
                                <li key={index}>
                                    <MyNavLink to={`/home/message/messagedetail/${m.id}`} >{m.title}</MyNavLink>
                                    &nbsp;&nbsp;
                                    <button onClick={() => this.showDetail(m.id)}>push 查看</button>
                                    <button onClick={() => this.showDetail2(m.id)}>replace 查看</button>
                                </li>
                            );
                        })
                    }
                </ul>
                <p>
                    <button onClick={this.back}>回退</button>
                    <button onClick={this.forward}>前进</button>
                    <button onClick={this.reqPage}>百度</button>
                </p>
                <Route path='/home/message/messagedetail/:id' component={MessageDetail} />
            </div>

        );
    }
}