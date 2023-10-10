import Link from 'next/link';
import React from 'react';

const HeaderMiddleTwo = () => {
    const handleLogout = () => {
        // Clear the access token from local storage
        localStorage.removeItem('accessToken');
        
    
        // Perform additional cleanup or actions if needed
        // For example, you can reset the state or navigate to the login page
    
        // Redirect to the login page
        window.location.href = '/login'; // Replace '/login' with the actual URL of your login page
      };
    
      // Check if the user is logged in
      const isLoggedIn = !!localStorage.getItem('accessToken');
      
    return (
        <div className="bd-header__middle theme-bg d-none d-sm-block">
            <div className="bd-header__middle-area-3">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                        <div className="bd-topbar__contact">
                            <ul>
                                <li><a href="tel:+(02)587-898-250"><i className="fa-regular fa-phone-flip"></i>080 - 26561151</a></li>
                                <li><a><i className="fa-regular fa-house-window"></i>info@jap.bio</a></li>
                            </ul>
                        </div>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                            <div className="style-2">
                                <div className="bd-treak__right">
                                    <div className="border-lefts">
                                    {!isLoggedIn && (
                                        <Link href="/login">
                                            <a>Login</a>
                                        </Link>
                                        )}
                                    </div>
                                    <div>
                                        {isLoggedIn && (
                                        <button onClick={handleLogout}>
                                            <a>Logout</a>
                                        </button>
                                        )}
                                    </div>
                                    <div className="border-left">
                                    <div className="bd-top__bar-social">
                            <ul><li><a href="https://www.facebook.com/jaivikavamprakrutikproducerltd"><i className="fa-brands fa-facebook-f"></i></a></li>
                                <li><a href="https://twitter.com/JaivikAvam"><i className="fa-brands fa-twitter"></i></a></li>
                                <li><a href="https://www.instagram.com/jaivikavamprakrutik/"><i className="fa-brands fa-instagram"></i></a></li>
                                <li><a href="https://www.linkedin.com/in/jaivik-avam-prakrutik-5501a327b/"><i className="fa-brands fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderMiddleTwo;