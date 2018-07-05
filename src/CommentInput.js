import React, { Component } from 'react'
import propTypes from 'prop-types'
class CommentInput extends Component {
    static propTypes = {
        onSubmit: propTypes.func.isRequired
    }
    constructor() {
        super();
        this.state = {
            username: '',
            content: '',
            date: ''
        }
    }
    _loadUsername() {
        if (sessionStorage.username) {
            this.setState({ username: sessionStorage.username })
        }
    }
    componentWillMount() {
        this._loadUsername()
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
            var date = +new Date();
            this.props.onSubmit({ username, content, date });
            if (sessionStorage.commentList) {
                var arr = JSON.parse(sessionStorage.commentList)
                arr.push({ username, content, date });
                sessionStorage.commentList = JSON.stringify(arr);
            } else {
                sessionStorage.commentList = JSON.stringify([{ username, content, date }])
            }
        }

        this.setState({ content: '' })
    }
    componentDidMount() {
        this.textarea.focus()
    }
    handleBlurUsername() {
        sessionStorage.username = this.state.username;
    }
    render() {
        return <div className='wrapper'>
            <div className='comment-field'>
                <span className='comment-field-name'>用户名：</span>
                <div className='comment-field-input'>
                    <input onBlur={this.handleBlurUsername.bind(this)} value={this.state.username} onChange={this.changeInput.bind(this)} />
                </div>
            </div>
            <div className='comment-field'>
                <span className='comment-field-name'>评论内容：</span>
                <div className='comment-field-input'>
                    <textarea ref={(textarea) => { this.textarea = textarea }} value={this.state.content} onChange={this.changeTea.bind(this)} />
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