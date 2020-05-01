import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  renderReviews = () => {
    return this.props.reviews.map(rev => <Review review={rev} deleteReview={this.props.deleteReview} />)
  }

  render() {
    return (
      
      <ul>
        {this.renderReviews()}
      </ul>
    );
  }
};

export default Reviews;