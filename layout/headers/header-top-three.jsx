import Link from 'next/link';
import React from 'react';
import { add_to_wishlist } from '../../redux/features/wishlist-slice';

const HeaderTopThree = () => {
    const handlegetToWishlist = async (item) => {
        try {
          // Fetch the access token from wherever it is stored (e.g., local storage)
          const accessToken = localStorage.getItem('accessToken');
      
          // Make the POST request to add the item to the wishlist
          const response = await axios.get(
            'https://jap.digisole.in/api/v1/wishlist',
            item,
            {
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${accessToken}`,
              },
            }
          );
      
          // Handle the response and dispatch actions as needed
          console.log('Item added to wishlist:', response.data);
          // Dispatch the add_to_wishlist action with the updated wishlist data
          dispatch(add_to_wishlist(item));
        } catch (error) {
          console.error('Failed to add item to wishlist:', error);
        }
      };
    return (
        <div className="bd-top__bar-area theme-bg d-none d-sm-block">
            <div className="container">
                <div className="row align-content-center">
                    <div className="col-xxl-6 col-xl-6 col-md-8 col-sm-7">
                        <div className="bd-topbar__text">
                            <p>We ship to over 150 countries & region</p>
                        </div>
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-md-4 col-sm-5">
                        <div className="bd-header__top-link justify-content-end">
                            <Link href="/about"><a>About Us</a></Link>
                            <Link href="/wishlist" onClick={() => handlegetToWishlist(item)}><a>Wishlist</a></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderTopThree;