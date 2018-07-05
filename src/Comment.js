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
    componentDidMount() {
        setInterval(() => {
            this.setState({})
        }, 3000)
    }
    render() {
        var { comment, index } = this.props;
        var style = {
            position: 'absolute',
            right: 0,
        }
        var time = parseInt((+new Date() - comment.date) / 1000, 10), line;
        if (time > 60) {
            line = parseInt(time / 60, 10) + '分钟前';
        } else {
            line = time + '秒前'
        }
        return (<div className='content-field'>
            <span>{comment.username}</span>:
            <p dangerouslySetInnerHTML={{ __html: comment.content }}></p>
            <i style={style}>{line}</i>
            <button onClick={this.handleBtn.bind(this, index)}>删除</button>
        </div>)
    }
}
export default Comment