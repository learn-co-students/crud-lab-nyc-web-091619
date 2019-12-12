import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import { connect } from 'react-redux'

class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput addReview={this.props.addReview} restaurantId={this.props.restaurantId} />
        <Reviews reviews={this.props.reviews} deleteReview={this.props.deleteReview}/>
      </div>
    )
  }
}

function mdp(dispatch){
  return {
    addReview: (text, restaurantId) => dispatch({type: "ADD_REVIEW", review: {text: text, restaurantId: restaurantId}}),
    deleteReview: (id) => dispatch({type: "DELETE_REVIEW", payload: id})
  }
}

export default connect(undefined, mdp)(ReviewsContainer)
