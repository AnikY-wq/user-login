import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import './Login.css';

const InputField = ({ type, placeholder, value, onChange, label }) => {
    return (
        <>
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className="input-field"
            />
            {/* <label className="input-label">{placeholder}</label> */}
        </>
    );
};

const SignInButton = () => {
    return (
        <button className="button sign-in">
            Sign In
        </button>
    );
};

const GoogleSignInButton = () => {
    return (
        <button className="button social">
            <FcGoogle size={20} />
        </button>
    );
};

const GithubSignInButton = () => {
    return (
        <button className="button social">
            <FaGithub size={20} />
        </button>
    );
};

const LoginSection = () => {
    return (
        <div className="login-container">
            <div className='welcome-msg'>
                <h2>Welcome to the community!!</h2>
                <p>Please sign-in to your account and start the adventure</p>
            </div>
            {/* <section className='form'> */}
            <InputField type="text" placeholder="Username" />
            <InputField type="password" placeholder="Password" />
            <SignInButton />
            {/* </section> */}
            {/* Oauth2 section */}
            <div className='oauth-section'>
                <div className="oauth-text">Or Sign in with</div>
                <div className="social button">
                    <GoogleSignInButton />
                    <GithubSignInButton />
                </div>
            </div>
        </div>
    );
};

export const Login = () => {
    return (
        <div className='grid-container'>
            {/* wallpaper */}
            <div className='photo item1'><img src="src\assets\cycleImg.jpg" alt='wallpaper-photo' /></div>
            {/* login part */}
            <div className="item2"> <LoginSection /></div>
        </div>
    );
};