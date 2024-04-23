import React from "react";

const Header = props => {
    return (
        <header style={styles.header}>
            <section class="d-flex flex-row justify-content-between align-items-end" style={styles.mainSection}>
                <div class="d-flex flex-column" style={styles.mainContent}>
                    <h4 style={styles.h4}>{props.welcome}</h4>
                    <h1 style={styles.h1}>{props.title}</h1>
                    <p style={styles.p}>{props.desc}</p>
                </div>
            </section>
        </header>
    )
}

export default Header;

const styles = {
    header: {
        margin: '0 2%',
        padding: '1%',
        height: '70vh'
    },
    mainContent: {
        width: '50%'
    },
    h4: {

    },
    h1: {
        margin: '1.5% 0'
    },
    headerImg: {
        width: '40%'
    } 
}