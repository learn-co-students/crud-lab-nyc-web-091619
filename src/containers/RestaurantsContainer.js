import React, { Component } from 'react'
import RestaurantInput from '../components/restaurants/RestaurantInput'
import Restaurants from '../components/restaurants/Restaurants'
import { connect } from 'react-redux'
import { mkdtemp } from 'fs'

class RestaurantsContainer extends Component {

  render() {
    return (
      <div>
        <h1>Add A Restaurant</h1>
        <RestaurantInput addRestaurant={this.props.addRestaurant}/>
        <h1>All The Restaurants</h1>
        <Restaurants reviews={this.props.reviews} restaurants={this.props.restaurants} deleteRestaurant={this.props.deleteRestaurant}/>
      </div>
    )
  }
}

function msp(state){
  return {
    restaurants: state.restaurants,
    reviews: state.reviews
  }
}

function mdp(dispatch){
  return {
    addRestaurant: (text) => dispatch({type: "ADD_RESTAURANT", text: text}),
    deleteRestaurant: (id) => dispatch({type: "DELETE_RESTAURANT", id: id})
  }
}

export default connect(msp, mdp)(RestaurantsContainer)