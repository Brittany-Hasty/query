import React from 'react';
import { withRouter } from 'react-router-dom';

class CommentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: '',
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
    }

    componentWillUnmount() {
        this.props.removeCommentErrors();
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value });
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        let comment = {
            body: this.state.body,
            author_id: this.props.author_id,
            question_id: this.props.currentQuestion,
        }
        this.props.sendComment(comment)
        .then(() => {
            this.setState({ body: ''})
            window.location.reload();
        }, (err) => { this.renderErrors() })
    }

    renderErrors() {
        let comment_errors = Object.values(this.props.comment_errors).flat();
        if (comment_errors && comment_errors.length > 0) {
            return (
                <div className="comment-error">
                    {comment_errors.map((error, i) => {
                        return <li key={i}>{error}</li>
                    })}
                </div>
            )
        }
    }

    render() {
        return (
            <div className="comment">
                <form className="comment-form" onSubmit={this.handleSubmit}>
                    <textarea
                        placeholder="Add a comment..."
                        value={this.state.body}
                        onChange={this.handleInput('body')}
                    />
                    <button className="create-comment-button" onClick={this.handleSubmit}>Add Comment</button>
                </form>
                {this.renderErrors()}
            </div>
        );
    }
}

export default withRouter(CommentForm);
