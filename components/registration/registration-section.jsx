import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import validator from 'validator';
import { useRouter } from 'next/router';

const RegistrationSection = () => {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [registrationError, setRegistrationError] = useState('');

  const validateEmail = (e) => {
    const email = e.target.value;
    if (validator.isEmail(email)) {
      setEmailError('');
    } else {
      setEmailError('Enter a valid email address!');
    }
  };

  const handleRegistration = async (event) => {
    event.preventDefault();

    // Validate password
    if (!/(?=.*[!@#$&*])/.test(password)) {
      setPasswordError('Please add at least one special character');
      return;
    }
    setPasswordError('');

    if (!termsAccepted) {
      console.log('Please accept the terms and privacy policy');
      return;
    }

    try {
      const response = await axios.post('https://jap.digisole.in/api/v1/auth/register', {
        name,
        email,
        phone,
        password,
        confirm_password: confirmPassword,
      });

      if (response.status === 201) {
        console.log('Registration successful:', response.data);
        // Handle success response
        // Redirect to the login page after successful registration
        router.push('/login');
      } else {
        console.error('Registration failed:', response.data);
        // Handle other non-201 status codes, if needed
      }
    } catch (error) {
      if (error.response && error.response.data) {
        console.error('Registration failed:', error.response.data);
        // Set the error message in state
        setRegistrationError(error.response.data.message || 'Registration failed');
      } else {
        console.error('Error occurred during registration:', error);
        // Set a generic error message in state
        setRegistrationError('An error occurred during registration');
      }
    }
  };

  
  return (
    <div className="bd-register__area pt-115 pb-130">
      <div className="container small-container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="signup-form-wrapper">
              <div className="bd-postbox__contact">
                <form onSubmit={handleRegistration}>
                  <div className="row">
                    <div className="col-xxl-12">
                      <div className="bd-postbox__singel-input">
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Name"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-xxl-12">
                      <div className="bd-postbox__singel-input">
                        <input
                          type="text"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          onBlur={validateEmail}
                          placeholder="Email"
                          required
                        />
        {emailError && <span className="email-error-message">{emailError}</span>}
                      </div>
                    </div>
                    <div className="col-xxl-12">
                      <div className="bd-postbox__singel-input">
                        <input
                          type="text"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="Phone"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-xxl-12">
                      <div className="bd-postbox__singel-input">
                        <input
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="Password"
                          required
                        />
        {passwordError && <span className="email-error-message">{passwordError}</span>}
                      </div>
                    </div>
                    <div className="col-xxl-12">
                      <div className="bd-postbox__singel-input">
                        <input
                          type="password"
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          placeholder="Confirm Password"
                          required
                        />
                      </div>
                    </div>
                    <div className="signup-action">
                      <div className="signup-action-check">
                        <input
                          className="e-check-input"
                          type="checkbox"
                          id="sing-up"
                          checked={termsAccepted}
                          onChange={() => setTermsAccepted(!termsAccepted)}
                        />
                        <label className="sign-check" htmlFor="sing-up">
                          <span>
                            Accept the terms and <a href="#">Privacy Policy</a>
                          </span>
                        </label>
                      </div>
                    </div>
                    {registrationError && <div className="error-message">{registrationError}</div>}

                    <div className="bd-sigin__action-button mb-20">
                      <button className="bd-fill__btn w-100" type="submit">
                        Register now
                      </button>
                    </div>
                    <div className="bd-resister__bottom-text text-center">
                      <div className="bd-acount__login-text">
                        <span>
                          Already have an account?{' '}
                          <Link href="/login">
                            <a>Log in</a>
                          </Link>
                        </span>
                      </div>
                      <div className="bd-sign__social-text">
                        <span>Or Sign-in with</span>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationSection;
