import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cart_product } from '../../redux/features/cart-slice';
import { getSingleProduct, selectProducts } from '../../redux/features/product-slice';
import { add_to_wishlist } from '../../redux/features/wishlist-slice';
import Pagination from '../common/pagination';
import ProductModal from '../common/product-modal';
import GridIcon from '../elements/icons/grid-icon';
import ListIcon from '../elements/icons/list-icon';
import FlashBanner from '../home-2/flash-banner';
import ShopSidebarCategories from './shop-sidebar-categories';
import ShopSidebarRatings from './shop-sidebar-ratings';
import axios from 'axios';
import { useRouter } from 'next/router';


const ShopSection = () => {
  const products = useSelector(selectProducts);
  const dispatch = useDispatch();
  const [productList, setProductList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categoryProducts, setCategoryProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchProducts = async (page) => {
      try {
        const response = await axios.get(`https://jap.digisole.in/api/v1/product/main/paginate?page=${page}`);
        setProductList(response.data.data);
        setTotalPages(response.data.meta.last_page); // Set the total number of pages

        // Log categories from the fetched products
        response.data.data.forEach((product) => {
          // const categories = product.categories;
          // categories.forEach((category) => {
          //   console.log('Category ID:', category.id);
          //   console.log('Category Name:', category.name);
          //   console.log('Category Slug:', category.slug);
          //   // ... log other category properties as needed ...
          // });
        });
        
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    };
    fetchProducts(currentPage);
  }, [currentPage]);
  const router = useRouter();

  useEffect(() => {
    // Parse the category query parameter from the URL
    const { query } = router;
    const categorySlug = query.category;

    // If the categorySlug exists in the URL, filter the products accordingly
   if (categorySlug) {
      // Find the selected category in the fetched products
      const selectedCategory = productList.find((product) =>
        product.categories.some((category) => category.slug === categorySlug)
      );

      if (selectedCategory) {
        // Set the selected category in state
        setSelectedCategory(selectedCategory);

        // Set the filtered products under the selected category
        const categoryProducts = productList.filter((product) =>
          product.categories.some((category) => category.slug === categorySlug)
        );

        setFilteredProducts(categoryProducts);
      } else {
        // If category not found, reset the selected category and show all products
        setSelectedCategory(null);
        setFilteredProducts(productList);
      }
    } else {
      // If no categorySlug in the URL, show all products
      setSelectedCategory(null);
      setFilteredProducts(productList);
    }
  }, [router, productList]);

  const handleCategorySelect = (categorySlug) => {
    if (categorySlug) {
      // Find the selected category in the fetched products
      const selectedCategory = productList.find((product) =>
        product.categories.some((category) => category.slug === categorySlug)
      );

      if (selectedCategory) {
        // Set the selected category in state
        setSelectedCategory(selectedCategory);

        // Set the filtered products under the selected category
        const categoryProducts = productList.filter((product) =>
          product.categories.some((category) => category.slug === categorySlug)
        );

        setFilteredProducts(categoryProducts);
      } else {
        // If category not found, reset the selected category and show all products
        setSelectedCategory(null);
        setFilteredProducts(productList);
      }
    } else {
      // If no category selected, show all products
      setSelectedCategory(null);
      setFilteredProducts(productList);
    }
  };
  
  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <>
      <section className="bd-shop__area pt-115 pb-85">
        <div className="container">
          <div className="row">
            <div className="col-xxl-3 col-xl-4 col-lg-4">
              <div className="bd-sidebar__widget-warpper mb-60">
                <div className="bd-product__filters">
                  <ShopSidebarCategories onSelectCategory={handleCategorySelect} />
                 
                  <FlashBanner />
                </div>
              </div>
            </div>
            <div className="col-xxl-9 col-xl-8 col-lg-8">
              {/* <div className="row">
                <div className="col-xl-4">
                  <div className="bd-top__filter-search p-relative mb-30">
                    <form className="bd-top__filter-input" action="#">
                      <input type="text" placeholder="Search keyword..." />
                      <button>
                        <i className="fa-regular fa-magnifying-glass"></i>
                      </button>
                    </form>
                  </div>
                </div>
                <div className="col-xl-8">
                  <div className="bd-filter__tab-inner mb-30">
                    <div className="bd-top__filter">
                      <div className="bd-Product__tab pl-5">
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                          <li className="nav-item" role="presentation">
                            <button
                              className="nav-link active"
                              id="home-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#home"
                              type="button"
                              role="tab"
                              aria-controls="home"
                              aria-selected="true"
                            >
                              <GridIcon />
                            </button>
                          </li>
                          <li className="nav-item" role="presentation">
                            <button
                              className="nav-link"
                              id="shop-filter-bar"
                              data-bs-toggle="tab"
                              data-bs-target="#profile"
                              type="button"
                              role="tab"
                              aria-controls="profile"
                              aria-selected="false"
                            >
                              <ListIcon />
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="bd-sort__type-filter">
                      <select className="sorting-list" name="sorting-list" id="sorting-list">
                        <option defaultValue="1">Default</option>
                        <option defaultValue="2">Newly published</option>
                        <option defaultValue="3">Most popular</option>
                        <option defaultValue="4">Trending</option>
                        <option defaultValue="5">Featured</option>
                        <option defaultValue="6">Discounted</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div> */}
              <div className="row">
                <div className="col-xl-12">
                  <div className="bd-shop__wrapper">
                    <div className="tab-content" id="myTabContent">
                      <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                        <div className="bd-trending__item-wrapper">
                          <div className="row">
                          {filteredProducts.length > 0 ? ( filteredProducts.map((item) => (
                              <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6 col-sm-6" key={item.id}>
                                <div className="bd-trending__item text-center mb-30 position-relative">
                                  <div className="bd-trending__product-thumb border-5">
                                    <Link href={`/shop-details/${item.slug}`}>
                                      <a>
                                        <img src={item.featured_image_link} alt="product-img" />
                                      </a>
                                    </Link>
                                    <div className="bd-product__action">
                                      <span
                                        className="cart-btn"
                                        data-toggle="tooltip"
                                        data-placement="top"
                                        title="Quick Shop"
                                        onClick={() => dispatch(cart_product(item))}
                                      >
                                        <i className={'fal fa-cart-arrow-down ${item.cartIcon}'}></i>
                                      </span>
                                      <span
                                        data-toggle="tooltip"
                                        data-placement="top"
                                        title="Quick View"
                                        data-bs-toggle="modal"
                                        data-bs-target="#productmodal"
                                        onClick={() => dispatch(getSingleProduct(item))}
                                      >
                                        <i className={'fal fa-eye ${item.cartEye}'}></i>
                                      </span>
                                      <span
                                        className="wishlist-btn"
                                        data-toggle="tooltip"
                                        data-placement="top"
                                        title="Quick Wishlist"
                                        onClick={() => dispatch(add_to_wishlist(item))}
                                      >
                                        <i className={'fal fa-heart ${item.cartHeart}'}></i>
                                      </span>
                                    </div>
                                  </div>
                                  <div className="bd-teanding__content">
                                    <h4 className="bd-product__title">
                                      <Link href={`/shop-details/${item.slug}`}>
                                        <a>{item.name}</a>
                                      </Link>
                                    </h4>
                                    <div className="bd-product__price">
                                      <span className="bd-product__old-price">
                                        <del>Rs.{item.price}</del>
                                      </span>
                                      <span className="bd-product__new-price">
                                        Rs.{item.discounted_price}
                                      </span>
                                    </div>
                                    <div className="bd-product__icon">
                                      <i className={item.ratingA}></i>
                                      <i className={item.ratingB}></i>
                                      <i className={item.ratingC}></i>
                                      <i className={item.ratingD}></i>
                                      <i className={item.ratingE}></i>
                                    </div>
                                  </div>
                                  <div className="bd-product__tag">
                                    {item.is_new_arrival && (
                                      <span className="tag-text theme-bg">New Arrival</span>
                                    )}
                                    {item.is_featured && (
                                      <span className="tag-text color-black yellow-bg">
                                        Featured
                                      </span>
                                    )}
                                    {item.is_best_sale && (
                                      <span className="tag-text danger-bg">Best Sale</span>
                                    )}
                                  </div>
                                </div>
                              </div>
                            ))
                            ) : (
                              <div className="col-12">
                                <p>No products found.</p>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-xxl-12">
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={onPageChange}
                  paginationSpace="d-flex justify-content-center mt-40  mb-45"
                />               
               </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ProductModal />
    </>
  );
};

export default ShopSection;
