import Link from 'next/link';
import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux'; // Import useDispatch from react-redux
import { cart_product } from '../../redux/features/cart-slice';
import { useRouter } from 'next/router';


const LoginSection = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [forgotPassword, setForgotPassword] = useState(false);
  const [resetEmail, setResetEmail] = useState('');
  const [resetPasswordSent, setResetPasswordSent] = useState(false);
  const [notification, setNotification] = useState('');
  const router = useRouter();
  const previousPage = router.asPath;
  const { redirect } = router.query;
  
  
  const dispatch = useDispatch(); // Initialize the dispatch function

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('https://jap.digisole.in/api/v1/auth/login', {
        email,
        password,
      });

      console.log('Login successful:', response.data);
      setNotification('Login successful!'); // Set the success notification message

      // Store the access token in local storage
      console.log('Access token:', response.data.token);
      localStorage.setItem('accessToken', response.data.token);

      // Check the referrer in the HTTP headers
      const referrer = document.referrer;
      const isRegistrationPage = referrer.includes('/registration');

      // If the previous page is the registration page, do not redirect to it
      if (isRegistrationPage) {
        router.push('/'); // Redirect to the home page instead
      } else {
        // If there's no previous page or it's not the registration page, go back to the previous page
        router.back();
      }
    } catch (error) {
      if (error.response) {
        console.error('Login failed:', error.response.data);
        setLoginError(error.response.data.message);
        // Handle error response
      } else {
        console.error('Login failed:', error.message);
      }
    }
  };


  const handleForgotPassword = async (event) => {
    event.preventDefault();

    try {
      // Send reset password request
      const response = await axios.post('https://jap.digisole.in/api/v1/auth/forgot-password', {
        email: resetEmail,
      });

      console.log('Reset password email sent:', response.data);
      setResetPasswordSent(true);
      setNotification('Reset password email sent!'); // Set the success notification message
      // Handle success response
    } catch (error) {
      if (error.response) {
        console.error('Failed to send reset password email:', error.response.data);
        // Handle error response
      } else {
        console.error('Failed to send reset password email:', error.message);
      }
    }
  };

  const handleBackToLogin = () => {
    setForgotPassword(false);
    setResetEmail('');
    setResetPasswordSent(false);
  };

  return (
    <div className="bd-login__area pt-115 pb-130">
      <div className="container small-container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="Login-form-wrapper">
              <div className="bd-postbox__contact">
                {forgotPassword ? (
                  <form onSubmit={handleForgotPassword}>
                    <div className="row">
                      <div className="col-xxl-12">
                        <div className="bd-postbox__singel-input">
                          <input
                            type="email"
                            placeholder="Enter your email"
                            value={resetEmail}
                            onChange={(e) => setResetEmail(e.target.value)}
                            required
                          />
                        </div>
                      </div>
                      <div className="bd-sigin__action-button mb-20">
                        <button className="bd-fill__btn w-100" type="submit">
                          Send Reset Password Email
                        </button>
                      </div>
                      {!resetPasswordSent ? (
                        <div className="bd-registered__wrapper">
                          <div className="back-to-login">
                            <span>Remembered your password?</span>
                            <span>
                              <button className="link-button" onClick={handleBackToLogin}>
                                Back to Login
                              </button>
                            </span>
                          </div>
                        </div>
                      ) : (
                        <div className="bd-login-success">
                          <p>Reset password email sent!</p>
                          <p>Please check your email for further instructions.</p>
                        </div>
                      )}
                    </div>
                  </form>
                ) : (
                  <form onSubmit={handleLogin}>
                    <div className="row">
                      <div className="col-xxl-12">
                        <div className="bd-postbox__singel-input">
                          <input
                            type="text"
                            placeholder="Email or UserName"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-xxl-12">
                        <div className="bd-postbox__singel-input">
                          <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                          />
                        </div>
                      </div>
                      <div className="bd-sigin__action-button mb-20">
                        <button className="bd-fill__btn w-100" type="submit">
                          Login now
                        </button>
                      </div>
                      {loginError && <div className="bd-login-error">{loginError}</div>}
                      {notification && <div className="bd-login-notification">{notification}</div>}
                      <div className="bd-registered__wrapper">
                        <div className="not-register">
                          <span>Not registered?</span>
                          <span>
                            <Link href="/registration">
                              <a>Sign up</a>
                            </Link>
                          </span>
                        </div>
                        <div className="forget-password">
                          {!resetPasswordSent && (
                            <button className="link-button" onClick={() => setForgotPassword(true)}>
                              Forgot password?
                            </button>
                          )}
                        </div>
                      </div>
                      <div className="bd-resister__bottom-text text-center">
                        <div className="bd-sign__social-text">
                          <span>Or Sign- in with</span>
                        </div>
                        <div className="bd-sign__social-icon">
                          <a href="https://www.facebook.com">
                            <i className="fa-brands fa-facebook-f"></i>
                            <span>Facebook</span>
                          </a>
                          <a href="https://www.gmail.com">
                            <i className="fa-solid fa-envelope-open"></i>
                            <span>Google</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSection;
