import React, { useState } from 'react';
import authService from '../services/auth.service';
import Header from '../components/Header';
import aboutBackground from '../images/img-02.jpg';
import { useNavigate } from 'react-router-dom';

function Signup() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await authService.signup(formData.email, formData.password);
            console.log('Signup successful', response);
            navigate('/home');
        } catch (error) {
            console.error('Signup failed', error);
        }
    };

    return (
        <section style={styles.container}>
            <Header
                title='Signup'
                desc=""
                backgroundImage={aboutBackground}
            />
            <section style={styles.content}>
                <form onSubmit={handleSubmit}>
                    <div style={styles.formGroup}>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div style={styles.formGroup}>
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </section>
        </section>
    );
}

export default Signup;

const styles = {
    container: {
        
    },
    content: {
        margin: '1% 2%',
        padding: '1% 0',
        width: '70%',
    },
    formGroup: {
        marginBottom: '1rem',
    },
};
