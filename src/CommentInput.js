import React, { Component } from 'react'
class CommentInput extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            content: ''
        }
    }
    changeInput(event) {
        this.setState({ username: event.target.value });
    }
    changeTea(event) {
        this.setState({ content: event.target.value });
    }
    handleSubmit() {
        if (this.props.onSubmit && this.state.content) {
            const { username, content } = this.state;
            this.props.onSubmit({ username, content });
        }
        this.setState({ content: '' })
    }
    render() {
        return <div className='wrapper'>
            <div className='comment-field'>
                <span className='comment-field-name'>用户名：</span>
                <div className='comment-field-input'>
                    <input value={this.state.username} onChange={this.changeInput.bind(this)} />
                </div>
            </div>
            <div className='comment-field'>
                <span className='comment-field-name'>评论内容：</span>
                <div className='comment-field-input'>
                    <textarea value={this.state.content} onChange={this.changeTea.bind(this)} />
                </div>
            </div>
            <div className='comment-field-button'>
                <button onClick={this.handleSubmit.bind(this)}>
                    发布
          </button>
            </div>
        </div>
    }
}
export default CommentInput