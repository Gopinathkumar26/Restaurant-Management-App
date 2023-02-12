import React, {Fragment} from "react";
import HeaderCartButton from "./HeaderCartButton";
import classes from './Header.module.css';
import mealsImage from '../../Images/meals.jpg';

const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>ABC Restaurant</h1>
                <HeaderCartButton onClick={props.onShowCart} />
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt="A table of delichious food" />
            </div>


        </Fragment>
    );
};

export default Header;