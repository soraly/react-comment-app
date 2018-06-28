import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class Header extends Component {
    static defaultProps = {
        age : 22
    }
    sayHello(val) {
        console.log(this, 'this')
    }
    sayHi() {
        console.log('hi')
    }
    constructor() {
        super();
        this.state = {
            btnstate: false
        }
    }
    changeBtnState(val) {
        this.setState({btnstate: !this.state.btnstate});
        if(this.props.clicked){
            this.props.clicked();
        }
    }
    render() {
        //   var fruit = <ul>
        //       <li>apple</li>
        //       <li>orange</li>
        //       <li>banana</li>
        //   </ul>
        //   var book = <div onClick={()=>{this.sayHello();this.sayHi();}}>this is book{fruit}</div>;
        console.log(this.props.age)
        return <div>
             <p>姓名：{this.props.name}</p>
            <button onClick={this.changeBtnState.bind(this,'hello')}>
                {this.state.btnstate ? '点赞' : '取消'}
            </button>
            {[<p key='1'>this is pp</p>,<button key='2'>btn</button>]}
        </div>
    }
}
class Body extends Component {
    
    render() {

        const users = [
            { username: 'Jerry', age: 21, gender: 'male' },
            { username: 'Tomy', age: 22, gender: 'male' },
            { username: 'Lily', age: 19, gender: 'female' },
            { username: 'Lucy', age: 20, gender: 'female' }
          ]

        const userElements = users.map((user,index)=>{
            return <li key={index}>
                    <span>姓名:{user.username}</span>
                    <span>年龄:{user.age}</span>
                    <span>性别:{user.gender}</span>
                </li>
        })

        return <div>
            <Header name='xiang' obj={{age: 20}} clicked={()=>{console.log('clicked..')}} age = {(()=>{return 666})()}/>
            <hr/ >
            <ul>
               {userElements}
            </ul>
        </div>
    }
}

ReactDOM.render(
    <Body />,
    document.getElementById('root')
)
