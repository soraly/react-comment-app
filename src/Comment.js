import React, { Component } from 'react'

class Comment extends Component {
    // static defaultProps = {
    //     handleBtn: (index) => {
    //         console.log(index)
    //     }
    // }
    handleBtn(index) {
        if (this.props.onSubmit) {
            this.props.onSubmit(index);
        }
    }
    render() {
        var { comment, index } = this.props;
        return (<div className='content-field'>
            <span>{comment.username}</span>:
            <p>{comment.content}</p>
            <button onClick={this.handleBtn.bind(this, index)}>删除</button>
        </div>)
    }
}
export default Comment