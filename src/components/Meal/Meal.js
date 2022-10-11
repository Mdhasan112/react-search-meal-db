import React from 'react';
import './Meal.css'

const Meal = (props) => {
    const {strMealThumb, strMeal, strInstructions} = props.meal
    
    
    return (
        <div className='meal'>
            <img src={strMealThumb} alt="" />
            <h4>{strMeal}</h4>
            <p>{strInstructions.slice(0,100)}</p>
            <button>Detail</button>
        </div>
    );
};

export default Meal;