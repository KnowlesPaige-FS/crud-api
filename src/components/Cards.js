/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { Link } from 'react-router-dom';

const Cards = props => {

    return (
        <article class="d-flex flex-column justify-content-start text-center" style={styles.card}>
            <section class='' style={styles.cardImg}>
                <img style={styles.img} src={props.img} alt='Photo placeholder' />   
            </section>
            <section class="d-flex flex-column justify-content-end align-items-center" style={styles.cardInfo}>
                <div>  
                    <p style={styles.desc}>{props.desc}</p>
                </div>
                <Link to="/" style={styles.link}>Read More</Link>
            </section>
        </article>
    );
}

export default Cards;

const styles = {
    card: {
        
    },
    cardImg: {
        width: '100%',
        height: '50%'
    },
    img: {

    },
    cardInfo: {
    
    },
    link: {
        // color: '#8B8E51',
        textDecoration: 'none',
        fontVariant: 'small-caps'
    }    
}