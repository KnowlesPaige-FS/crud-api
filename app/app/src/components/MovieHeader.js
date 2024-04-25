import React from "react";

const MovieHeader = ({ backgroundImage }) => {
    const headerStyle = {
        height: '70vh',
        position: 'relative',
        textAlign: 'center',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    };

    return (
        <header style={headerStyle}>
            <section className="" style={styles.overlay}>
            </section>
        </header>
    );
};

export default MovieHeader;

const styles = {
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(56, 50, 48, 0.7)',
    },
};