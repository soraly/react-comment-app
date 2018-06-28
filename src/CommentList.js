import React, { Component } from 'react'
import Comment from './Comment'

class CommentList extends Component {
    static defaultProps = {
        commentlists: [
            { username: 'soraly', content: 'hello' },
            { username: 'soraly', content: 'hello' },
        ]
    }
    handleBtnIndex(index) {
        if (this.props.onSubmit) {
            this.props.onSubmit(index);
        }
        console.log(index, 'indexindex');
    }
    render() {
        var commentLists = this.props.commentlists;
        console.log(commentLists, 'commentLists')
        if (commentLists.length) {
            return <div className='wrapper'>
                {
                    commentLists.map((comment, index) => <Comment onSubmit={this.handleBtnIndex.bind(this)} key={index} index={index} comment={comment} />)
                }

            </div>
        } else {
            return null
        }

    }
}
export default CommentList