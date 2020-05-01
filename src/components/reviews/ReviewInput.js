import React, { Component } from 'react';

class ReviewInput extends Component {
  state ={
    text: "",
    restId: this.props.restaurantId
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addReview(this.state.text, this.state.restId)
    this.setState({
      text: "",
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={ this.handleSubmit }>
          <input name="text" id="text" type="text" onChange={this.handleChange} value={this.state.text}/>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
};

export default ReviewInput;