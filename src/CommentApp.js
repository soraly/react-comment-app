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
    deleteComment(index) {
        this.state.commentLists.splice(index, 1);
        this.setState({ commentLists: this.state.commentLists });
    }
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