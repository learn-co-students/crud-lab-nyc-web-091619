
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = { restaurants: [], reviews: []}, action) {
    switch(action.type){
        case "ADD_RESTAURANT":
            let newRest = {text: action.text, id: cuid()}
            return { ...state, restaurants: [...state.restaurants, newRest]}
        case "DELETE_RESTAURANT":
            return {...state, restaurants: state.restaurants.filter(rest => rest.id !== action.id)}
        case "ADD_REVIEW":
            let newReview = {text: action.review.text, restaurantId: action.review.restaurantId, id: cuid()}
            return { ...state, reviews: [...state.reviews, newReview]}
        case "DELETE_REVIEW":
            return {...state, reviews: state.reviews.filter(rev => rev.id !== action.payload)}
        default:
            return state
    }

}
