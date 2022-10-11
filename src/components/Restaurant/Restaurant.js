import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';
import './Restaurant.css'

const Restaurant = () => {
    const [searchText, setSearchText] = useState('');
    const [meals, setMeals] = useState([]);
   useEffect(() => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
    .then(res => res.json())
    .then(data => setMeals(data.meals))
   },[searchText])
    const searchFood = e => {
        setSearchText(e.target.value)
    }
    return (
        <div>
            <h3>Find the food you want</h3>
            <input onChange={searchFood} type="text" />
            <br />
            
            <h3>Meals found: {meals.length}</h3>
            <div className='meal-container'>
            {
                meals.map(meal => <Meal meal={meal}></Meal>)
            }
            </div>
            
        </div>
    );
};

export default Restaurant;