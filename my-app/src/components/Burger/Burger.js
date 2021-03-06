import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    return (
        <div className= {classes.Burger}>
            <BurgerIngredient type = "bread-top"/>
            <BurgerIngredient type = "bread-bottom"/>
            <BurgerIngredient type = "cheese"/>
            <BurgerIngredient type = "bacon"/>
            <BurgerIngredient type = "salad"/>
            <BurgerIngredient type = "meat"/>
        </div>

    );
}

export default burger;
