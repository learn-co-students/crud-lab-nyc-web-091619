import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer'

class Restaurant extends Component {


  render() {
    const { restaurant } = this.props
    return (
      <div>
        <li>
          {restaurant.text}
          <button onClick={()=> this.props.deleteRestaurant(restaurant.id)}> X </button>
          <ReviewsContainer reviews={this.props.reviews} restaurantId={restaurant.id}/>
        </li>
      </div>
    );
  }
};

export default Restaurant;