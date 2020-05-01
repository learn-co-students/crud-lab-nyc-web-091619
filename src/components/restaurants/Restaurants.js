import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {

  getReviews = (rest) =>{
    return this.props.reviews.filter(rev => rev.restaurantId === rest.id)
  }

  renderRestaurants = () => {
    return this.props.restaurants.map(rest => <Restaurant reviews={this.getReviews(rest)} restaurant={rest} deleteRestaurant={this.props.deleteRestaurant}/>)
  }

  render() {
    return(
      <ul>
        {this.renderRestaurants()}
      </ul>
    );
  }
};

export default Restaurants;