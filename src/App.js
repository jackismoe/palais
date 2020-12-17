import React from 'react'

export default class App extends React.Component {

  // fake placeholder for state
  // allRestaurants = []
  // fastFoodRestaurants = []
  // dineInRestaurants = []
  // food = []

  // fetchData() {
  //   fetch(`http://localhost:3001/dineins`)
  //   .then(response => response.json())
  //   .then(jsonResponse => {
  //     for (let restaurant of jsonResponse) {
  //       this.dineInRestaurants.push(restaurant)
  //       this.allRestaurants.push(restaurant)
  //     }
  //   })
  //   fetch(`http://localhost:3001/fastfoods`)
  //   .then(response => response.json())
  //   .then(jsonResponse => {
  //     for (let restaurant of jsonResponse) {
  //       this.fastFoodRestaurants.push(restaurant)
  //       this.allRestaurants.push(restaurant)
  //     }
  //   })
  //   fetch(`http://localhost:3001/foods`)
  //   .then(response => response.json())
  //   .then(jsonResponse => {
  //     for (let food of jsonResponse) {
  //       this.food.push(food)
  //     }
  //   })  
  // }

  render() {
    return(
      <div>
        <button>
        does nothing
        </button>
      </div>
    )
  }
}