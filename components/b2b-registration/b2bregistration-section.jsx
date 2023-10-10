import React, { useState } from 'react';
import validator from 'validator';
import axios from 'axios';

const B2B = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [address, setAddress] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [company_website, setCompany_website]= useState('');
    const [designation, setDesignation] = useState('');
    const [product, setProduct] = useState('');
    const [quantity, setQuantity] = useState('');
    const [gst,setGst]= useState('');
    const [certification, setCertification] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleCompanyNameChange = (e) => {
    setCompanyName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Construct the request payload
    const payload = {
      name,
      email,
      phone,
      message,
      address,
      company_name: companyName,
      company_website,
      designation,
      product,
      quantity,
      gst,
      certification,
      message,
    };
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) {
        // User is not logged in, redirect to the login page
        window.location.href = '/login?from=b2bregistration';
        return;
      }
    try {
      // Send the form data to the API
      const response = await axios.post(
        'https://jap.digisole.in/api/v1/enquiry/create',
        payload,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      console.log('API Response:', response.data);
  
      // Reset form fields
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
      setAddress('');
      setCompanyName('');
      setCompany_website('');
      setDesignation('');
      setProduct('');
      setQuantity('');
      setGst('');
      setCertification('');
      setMessage('')
  
      // Display a success message or perform other actions
      console.log('Form data sent successfully');
    } catch (error) {
      console.error('Failed to send form data:', error.message);
      // Display an error message or perform error handling
      console.error('Failed:', error.response.data);

    }
  };
  
  
  
    return (
        <div className="bd-register__area pt-115 pb-130">
            <div className="container small-container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="signup-form-wrapper">
                            <div className="bd-postbox__contact">
                                <h2>Enquiry</h2>
                                <form onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-xxl-6 col-xl-6 col-lg-6">
                                            <div className="bd-postbox__singel-input">
                                                <input type="text" placeholder="Name" value={name} onChange={(e) => {setName(e.target.value)}} required />
                                            </div>
                                        </div>
                                        <div className="col-xxl-6 col-xl-6 col-lg-6">
                                            <div className="bd-postbox__singel-input">
                                                <input type="text" placeholder="Company Name"  value={companyName} onChange={(e) => {setCompanyName(e.target.value)}}  required />
                                            </div>
                                        </div>
                                        <div className="col-xxl-6">
                                            <div className="bd-postbox__singel-input">
                                                <input  id="userEmail"
                                                value={email} onChange={(e) => {setEmail(e.target.value)}} type="text" placeholder="Email" required />
                                                {/* <span className='email-error-message'>{emailError}</span> */}
                                            </div>
                                        </div>
                                        <div className="col-xxl-6">
                                        <div className="bd-postbox__singel-input">
                                                <input type="text" placeholder="Phone Number" value={phone} onChange={(e) => {setPhone(e.target.value)}} required />
                                            </div>
                                        </div>
                                        <div className="col-xxl-6">
                                        <div className="bd-postbox__singel-input">
                                                <input type="text" placeholder="Designation" value={designation} onChange={(e) => {setDesignation(e.target.value)}} required />
                                            </div>
                                        </div>
                                        <div className="col-xxl-6">
                                        <div className="bd-postbox__singel-input">
                                                <input type="text" placeholder="Company Website" value={company_website} onChange={(e) => {setCompany_website(e.target.value)}}required />
                                            </div>
                                        </div>
                                        <div className="col-xxl-6">
                                        <div className="bd-postbox__singel-input">
                                                <input type="text" placeholder="Product Looking for" value={product} onChange={(e) => {setProduct(e.target.value)}}required />
                                            </div>
                                        </div>
                                        <div className="col-xxl-6">
                                        <div className="bd-postbox__singel-input">
                                                <input type="text" placeholder="Quantity" value={quantity} onChange={(e) => {setQuantity(e.target.value)}} required />
                                            </div>
                                        </div>
                                        <div className="col-xxl-6">
                                        <div className="bd-postbox__singel-input">
                                                <input type="text" placeholder="GST No" value={gst} onChange={(e) => {setGst(e.target.value)}}required />
                                            </div>
                                        </div>
                                        <div className="col-xxl-6">
                                        <div className="bd-postbox__singel-input">
                                                <input type="text" placeholder="Certification Type" value={certification} onChange={(e) => {setCertification(e.target.value)}}required />
                                            </div>
                                        </div>
                                        <div className="col-xxl-6">
                                        <div className="bd-postbox__singel-input">
                                                <input type="text" placeholder="Address" value={address} onChange={(e) => {setAddress(e.target.value)}}required />
                                            </div>
                                        </div>
                                        <div className="col-xxl-6">
                                        <div className="bd-postbox__singel-input">
                                                <input type="text" placeholder="Alternate Name"  />
                                            </div>
                                        </div>
                                        <div className="col-xxl-6">
                                        <div className="bd-postbox__singel-input">
                                                <input type="text" placeholder="Alternate Number"  />
                                            </div>
                                        </div>
                                        <div className="col-xxl-6">
                                        <div className="bd-postbox__singel-input">
                                                <input type="text" placeholder="Alternate Email"  />
                                            </div>
                                        </div>
                                        <div className="bd-postbox__singel-input">
                                        <textarea placeholder="Your Message" rows="4" cols="50" style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '5px', resize: 'vertical', // Allow vertical resizing of the textarea width: '100%', // Adjust the width as needed
                                        }} value={message} onChange={(e) => {setMessage(e.target.value)}}required  />
                                        </div>
                                        <div className="bd-sigin__action-button mb-20">
                                            <button className="bd-fill__btn w-100">Enquiry</button>
                                        </div>
                                        {/* <div className="bd-resister__bottom-text text-center">
                                            <div className="bd-acount__login-text">
                                                <span>Already have an account? <Link href="/login"><a>Log in</a></Link></span>
                                            </div>
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
                                        </div> */}
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

export default B2B;