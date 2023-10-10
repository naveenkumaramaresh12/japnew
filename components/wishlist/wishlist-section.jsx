import Link from 'next/link';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { cart_product, clear_cart } from '../../redux/features/cart-slice';
import { remove_wishlist_product } from '../../redux/features/wishlist-slice';
import axios from 'axios';
import { add_to_wishlist } from '../../redux/features/wishlist-slice';

const WishlistSection = () => {
  const { wishlist } = useSelector(state => state.wishlist);
  const dispatch = useDispatch();

  useEffect(() => {
    const getWishlist = async () => {
      try {
        // Fetch the access token from wherever it is stored (e.g., local storage)
        const accessToken = localStorage.getItem('accessToken');

        // Make the GET request to fetch the wishlist
        const response = await axios.get(
          'https://jap.digisole.in/api/v1/wishlist',
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        // Handle the response and dispatch actions as needed
        console.log('Wishlist fetched:', response.data);
      } catch (error) {
        console.error('Failed to fetch wishlist:', error);
      }
    };

    getWishlist();
  }, [dispatch]);

   // Send wishlist products to the API when the wishlist array changes
   useEffect(() => {
    if (wishlist.length > 0) {
      sendWishlistToAPI(wishlist);
    }
  }, [wishlist]); // Trigger the effect whenever the wishlist array changes

  const sendWishlistToAPI = async (productIds) => {
    try {
      const accessToken = localStorage.getItem('accessToken'); // Get the authentication token from local storage
  
      const payload = {};
      productIds.forEach((id, index) => 
        payload[`product[${index}]`] = Number(id?.id),// Convert each id to a number
      );
      console.log(payload);
      const response = await axios.post(
        'https://jap.digisole.in/api/v1/wishlist',
        payload,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type":"multipart/form-data",
          },
        }
      );
      console.log(response.data);
      // Handle the API response if needed
    } catch (error) {
      console.error('Failed to send wishlist products to API:', error.response?.data);
      // Handle the error if needed
    }
  };
  


  const handleRemoveFromWishlist = (itemId) => {
    const item = wishlist.find(item => item.id === itemId);
    if (!item) {
      console.error(`Wishlist item not found with id: ${itemId}`);
      return;
    }

    // Dispatch the remove_wishlist_product action with the item
    dispatch(remove_wishlist_product(item));
  };

  return (
    <div className="cart-area pt-115 pb-130">
      <div className="container small-container">
        {wishlist.length === 0 && (
          <div className="text-center">
            <h3>Your wishlist is empty</h3>
          </div>
        )}
        {wishlist.length >= 1 && (
          <div className="row">
            <div className="col-12">
              <form onSubmit={e => e.preventDefault()}>
                <div className="table-content table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th className="product-thumbnail">Images</th>
                        <th className="cart-product-name">Product</th>
                        <th className="product-price">Unit Price</th>
                        <th className="product-quantity">Add to Cart</th>
                        <th className="product-subtotal">Total</th>
                        <th className="product-remove">Remove</th>
                      </tr>
                    </thead>
                    <tbody>
                      {wishlist.map(item => (
                        <tr key={item.id}>
                          <td className="product-thumbnail">
                            <Link href={`/shop-details/${item.slug}`}>
                              <a>
                                <img src={item.featured_image_link} alt="img" />
                              </a>
                            </Link>
                          </td>
                          <td className="product-name">
                            <Link href={`/shop-details/${item.slug}`}>
                              <a>{item.name}</a>
                            </Link>
                          </td>
                          <td className="product-price">
                          <span className="bd-product__old-price"><del>Rs.{item.price}</del></span><span className="bd-product__new-price" >Rs.{item.discounted_price}</span>
                          </td>
                          <td className="product-quantity">
                            <button
                              className="bd-border__btn"
                              onClick={() => dispatch(cart_product(item))}
                            >
                              Add to Cart
                            </button>
                          </td>
                          <td className="product-subtotal">
                          <span className="bd-product__old-price"><del>Rs.{item.price}</del></span><span className="bd-product__new-price" >Rs.{item.discounted_price}</span>
                          </td>
                          <td className="product-remove">
                            <i
                              className="fa fa-times"
                              onClick={() => handleRemoveFromWishlist(item.id)}
                            ></i>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WishlistSection;
