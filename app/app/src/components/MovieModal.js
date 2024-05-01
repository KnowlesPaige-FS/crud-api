import React, { useState } from 'react';

const MovieModal = ({ movie, onUpdate, onClose, showModal }) => {
    const [updatedMovie, setUpdatedMovie] = useState({ ...movie });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setUpdatedMovie((prevMovie) => ({
        ...prevMovie,
        [name]: value,
      }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      onUpdate(updatedMovie);
    };
  
    return (
      <div className={`modal ${showModal ? 'show' : ''}`}>
        <div className="modal-content">
          <span className="close" onClick={onClose}>&times;</span>
          <form onSubmit={handleSubmit}>
            <div style={styles.row}>
                <div style={styles.rowContent}>
                    <label>Title:</label>
                    <input type="text" name="title" value={updatedMovie.title} onChange={handleChange} />
                </div>
                <div style={styles.rowContent}>
                    <label>Overview:</label>
                    <textarea name="overview" value={updatedMovie.overview} onChange={handleChange} />
                </div>
            </div>
            <div style={styles.row}>
                <div style={styles.rowContent}>
                    <label>Genre:</label>
                    <input type="text" name="genre" value={updatedMovie.genre} onChange={handleChange} />
                </div>
                <div style={styles.rowContent}>
                    <label>Release Date:</label>
                    <input type="date" name="release_date" value={updatedMovie.release_date} onChange={handleChange} />
                </div>
            </div>
            <button type="submit">Save Changes</button>
          </form>
        </div>
      </div>
    );
  };
  
  export default MovieModal;
  
const styles = {
    row: {
        margin: '4% 0',
        display: 'flex',
        flexDirection: 'row',
        jusitfyContent: 'space-between',
        alignItems: 'center'
    },
    rowContent: {
        margin: '0 5%',
        display: 'flex',
        flexDirection: 'row',
        jusitfyContent: 'space-between',
        alignItems: 'center'
    }
}