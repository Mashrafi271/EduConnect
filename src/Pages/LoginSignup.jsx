import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './LoginSignup.css';

const LoginSignup = () => {
    const [isLogin, setIsLogin] = useState(true); // Toggle between login and signup
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Initialize useNavigate

    const handleSubmit = (e) => {
        e.preventDefault();

        // Implement your login/signup logic here (e.g., API calls)
        console.log('Form submitted:', { email, password, isLogin });

        // Example: After successful login, redirect to a dashboard
        if (isLogin) {
            // Your login verification code here.
            navigate('/dashboard'); // Redirect after successful login
        } else {
            // Your signup code here.
            navigate('/dashboard'); // Redirect after successful signup
        }
    };

    return (
        <div className="login-signup-container">
            <h2>{isLogin ? 'Login' : 'Signup'}</h2>
            <button onClick={() => setIsLogin(!isLogin)}>
                Switch to {isLogin ? 'Signup' : 'Login'}
            </button>

            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">{isLogin ? 'Login' : 'Signup'}</button>
            </form>
        </div>
    );
};

export default LoginSignup;