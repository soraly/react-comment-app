import React, { Component } from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'

class CommentApp extends Component {
    constructor() {
        super();
        this.state = {
            commentLists: []
        }
    }
    componentWillMount() {
        if (sessionStorage.commentList) {
            this.setState({ commentLists: JSON.parse(sessionStorage.commentList) })
        }
    }
    //删除评论
    deleteComment(index) {
        this.state.commentLists.splice(index, 1);
        this.setState({ commentLists: this.state.commentLists });
    }
    //当子组件点击发送时触发
    handleSubmitComment(data) {
        this.state.commentLists.push(data);
        this.setState({ commentLists: this.state.commentLists });
    }
    render() {
        return (<div >
            <CommentInput onSubmit={this.handleSubmitComment.bind(this)} />
            <CommentList commentlists={this.state.commentLists} onSubmit={this.deleteComment.bind(this)} />
        </div>)
    }
}
// commentlists={this.state.commentLists}
export default CommentApp