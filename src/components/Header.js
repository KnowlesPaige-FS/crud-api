import React from "react";

const Header = ({ title, desc, backgroundImage }) => {
    const headerStyle = {
        height: '70vh',
        textAlign: 'center',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    };

    return (
        <header style={headerStyle}>
            <section className="" style={styles.mainSection}>
                <div className="d-flex flex-column justify-content-center align-items-center" style={styles.mainContent}>
                    <h1 style={styles.h1}>{title}</h1>
                    <p style={styles.p}>{desc}</p>
                </div>
            </section>
        </header>
    );
};

export default Header;

const styles = {
    mainSection: {
        marign: '0 auto'
    },
    mainContent: {
        width: '55%',
        margin: '0 auto',
    },
    h1: {
        margin: '1.5% 0',
    },
    p: {
        width: '70%',
        color: '#FFEFCD',
    }
};
