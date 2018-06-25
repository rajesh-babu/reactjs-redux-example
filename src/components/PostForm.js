import React, { Component } from 'react';
import { createPost } from '../actions/postActions';
import { connect } from 'react-redux';

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: ''
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

  }
  componentWillReceiveProps(nextProp){
    if(nextProp.newPost){      
      this.setState({title:'', body: ''});
    }
  }
  onChange(e) {
    this.setState({[e.target.name]:e.target.value});
  }
  onSubmit(e) {
    e.preventDefault();
    const post = {
      title: this.state.title,
      body: this.state.body
    }
   this.props.createPost(post);
  }

  render() {
    return (
      <div>
        <h3>Post Form</h3>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Title</label><br/>
            <input type="text" name="title" value={this.state.title} onChange={this.onChange} />
          </div>
          <div>
            <label>Body</label><br/>
            <textarea type="text" name="body" value={this.state.body} onChange={this.onChange} />
          </div>
          <div>
            <input type="submit" value='Submit' />
          </div>
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  posts: state.posts.items,
  newPost: state.posts.item
});
export default connect (mapStateToProps, {createPost})(PostForm);