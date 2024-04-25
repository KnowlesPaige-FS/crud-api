/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { Link } from 'react-router-dom';

const Cards = props => {

    return (
        <article class="d-flex flex-row justify-content-between align-items-start text-center" style={styles.card}>
            <section>
                <div style={styles.date}>
                    <h4>{props.date}</h4>
                </div>
            </section>
            <section class='' style={styles.cardImg}>
                <div style={styles.overlay}></div>
                <img style={styles.img} src={props.img} alt='Photo placeholder' />   
            </section>
            <section class="d-flex flex-column justify-content-between align-items-center" style={styles.eventInfo}>
                <div class="d-flex flex-column justify-content-between align-items center">
                    <h4>{props.title}</h4>
                    <h5>{props.location}</h5>
                    <h5>{props.time}</h5>
                    <p>{props.eventDesc}</p>
                </div>
                <div>
                    <Link to={props.linkTo} style={styles.link}>View Movie Details</Link>
                </div>
            </section>
        </article>
    );
}

export default Cards;

const styles = {
    card: {
        margin: '2%',
        padding: '2% 0',
        width: '90%',
        borderTop: '1px solid rgba(56, 50, 48, 0.6)',
    },
    date: {

    },
    
    cardImg: {
        width: '550px',
        height: '350px',
        position: 'relative'    
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(56, 50, 48, 0.7)',
        borderRadius: '4%'
    },
    img: {
        width: '100%',
        height: '100%',
        boxShadow: '0px 0px 10px rgba(56, 50, 48, 0.6)',
        borderRadius: '4%' 
    },
    eventInfo: {
        width: '50%'
    },
    link: {
        textDecoration: 'none',
        fontVariant: 'small-caps'
    }    
}