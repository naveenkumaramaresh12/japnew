"use strict";
exports.id = 4739;
exports.ids = [4739];
exports.modules = {

/***/ 4739:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_breadcrumb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6597);
/* harmony import */ var _elements_product_trending_product_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1573);
/* harmony import */ var _shop_details_review__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1068);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3015);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3877);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _redux_features_cart_slice__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4071);
/* harmony import */ var _redux_features_wishlist_slice__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3921);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9648);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_elements_product_trending_product_slider__WEBPACK_IMPORTED_MODULE_4__, _shop_details_review__WEBPACK_IMPORTED_MODULE_5__, swiper_react__WEBPACK_IMPORTED_MODULE_6__, swiper__WEBPACK_IMPORTED_MODULE_7__, _redux_features_cart_slice__WEBPACK_IMPORTED_MODULE_9__, _redux_features_wishlist_slice__WEBPACK_IMPORTED_MODULE_10__, axios__WEBPACK_IMPORTED_MODULE_11__]);
([_elements_product_trending_product_slider__WEBPACK_IMPORTED_MODULE_4__, _shop_details_review__WEBPACK_IMPORTED_MODULE_5__, swiper_react__WEBPACK_IMPORTED_MODULE_6__, swiper__WEBPACK_IMPORTED_MODULE_7__, _redux_features_cart_slice__WEBPACK_IMPORTED_MODULE_9__, _redux_features_wishlist_slice__WEBPACK_IMPORTED_MODULE_10__, axios__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














const ShopDetailsArea = ({ item  })=>{
    const { product  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector)((state)=>state.products.product);
    const { 0: thumbsSwiper , 1: setThumbsSwiper  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const { 0: quantity , 1: setQuantity  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(item?.quantity || 0);
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useDispatch)();
    const { cartProducts  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector)((state)=>state.cart.cartProducts);
    const { 0: productList , 1: setProductList  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const { 0: singleProduct , 1: setSingleProduct  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const fetchProducts = async ()=>{
            try {
                const response = await axios__WEBPACK_IMPORTED_MODULE_11__["default"].get("https://jap.digisole.in/api/v1/product/main/paginate");
                setProductList(response.data);
                console.log("dsf", response.data);
            } catch (error) {
                console.error("Failed to fetch products:", error);
            }
        };
        fetchProducts();
    }, []);
    //   const { slug } = item.slug; // Extracting the slug from the item prop
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_12__.useRouter)();
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const fetchProductDetails = async (slug)=>{
            try {
                const response = await axios__WEBPACK_IMPORTED_MODULE_11__["default"].get(`https://jap.digisole.in/api/v1/product/main/detail/${slug}`);
                setSingleProduct(response.data.product);
                console.log("single", response.data.product);
            } catch (error) {
                console.error("Failed to fetch product details:", error);
            }
        };
        // Extract the slug from the query parameter in the URL
        const { query  } = router;
        const productSlug = query.slug; // Make sure 'slug' matches the query parameter name in the URL
        if (productSlug) {
            fetchProductDetails(productSlug);
        }
    }, [
        router.query.slug
    ]);
    const handleShareFacebook = ()=>{
        const shareUrl = window.location.href;
        const message = `Check out this product: ${singleProduct.name} - ${shareUrl}`;
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(message)}`);
    };
    const handleShareLinkedIn = ()=>{
        const shareUrl = window.location.href;
        const message = `Check out this product: ${singleProduct.name} - ${shareUrl}`;
        window.open(`https://www.linkedin.com/shareArticle?url=${encodeURIComponent(shareUrl)}&summary=${encodeURIComponent(message)}`);
    };
    const handleShareInstagram = ()=>{
        const shareUrl = window.location.href;
        const message = `Check out this product: ${singleProduct.name} - ${shareUrl}`;
        alert("To share on Instagram, open the app and paste the following text in a new post:\n\n" + message);
    };
    const handleShareWhatsApp = ()=>{
        const shareUrl = window.location.href;
        const message = `Check out this product: ${singleProduct.name} - ${shareUrl}`;
        if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
            window.open(`whatsapp://send?text=${encodeURIComponent(message)}`);
        } else {
            window.open(`https://web.whatsapp.com/send?text=${encodeURIComponent(message)}`);
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_breadcrumb__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    breadHome: "Home",
                    breadMenu: "Shop Details"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "bd__shop-details-area pt-115 pb-75",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "container small-container",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "row",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-lg-12 col-md-12",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "bd__shop-details-inner mb-55",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "row",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "col-md-6",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "product-details__thumb-inner p-relative",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "bd__shop-details-img-gallery mb-30",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "product-details-active swiper-container",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "swiper-wrappers",
                                                                    children: singleProduct && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_6__.Swiper, {
                                                                        thumbs: {
                                                                            swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null
                                                                        },
                                                                        loop: true,
                                                                        spaceBetween: 0,
                                                                        slidesPerView: 1,
                                                                        freeMode: false,
                                                                        watchSlidesProgress: true,
                                                                        modules: [
                                                                            swiper__WEBPACK_IMPORTED_MODULE_7__.Navigation,
                                                                            swiper__WEBPACK_IMPORTED_MODULE_7__.Controller,
                                                                            swiper__WEBPACK_IMPORTED_MODULE_7__.FreeMode,
                                                                            swiper__WEBPACK_IMPORTED_MODULE_7__.Thumbs
                                                                        ],
                                                                        navigation: {
                                                                            clickable: true,
                                                                            nextEl: ".product-details__button-next",
                                                                            prevEl: ".product-details__button-prev"
                                                                        },
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_6__.SwiperSlide, {
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                className: "swiper-slides",
                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                    className: "bd-product__details-large-img w-img",
                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                                        src: singleProduct.featured_image_link,
                                                                                        alt: "product-details-img"
                                                                                    })
                                                                                })
                                                                            })
                                                                        })
                                                                    })
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "bd-product__details-small-img",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "swiper-container product-details-nav",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "swiper-wrappers",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_6__.Swiper, {
                                                                        loop: true,
                                                                        spaceBetween: 0,
                                                                        slidesPerView: 5,
                                                                        onSwiper: setThumbsSwiper,
                                                                        modules: [
                                                                            swiper__WEBPACK_IMPORTED_MODULE_7__.Controller,
                                                                            swiper__WEBPACK_IMPORTED_MODULE_7__.FreeMode,
                                                                            swiper__WEBPACK_IMPORTED_MODULE_7__.Thumbs
                                                                        ],
                                                                        watchSlidesProgress: false,
                                                                        children: singleProduct && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_6__.SwiperSlide, {
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                className: "swiper-slides m-img",
                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                    className: "product-small__img",
                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                                        src: singleProduct.featured_image_link,
                                                                                        alt: "product-thumb"
                                                                                    })
                                                                                })
                                                                            })
                                                                        })
                                                                    })
                                                                })
                                                            })
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "col-md-6",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "modal-product-info modal-product__details-content",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                            children: singleProduct.name
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "product-price",
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                    children: [
                                                                        "Rs.",
                                                                        singleProduct.discounted_price
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("del", {
                                                                    children: [
                                                                        "Rs.",
                                                                        singleProduct.price
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                            children: [
                                                                "Weight",
                                                                singleProduct.weight
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "modal-product-meta bd__product-details-menu-1"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "product-quantity-cart mb-25",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                                type: "button",
                                                                className: "cart-btn bd-fill__btn",
                                                                "data-toggle": "tooltip",
                                                                "data-placement": "top",
                                                                title: "Add to Cart",
                                                                onClick: ()=>dispatch((0,_redux_features_cart_slice__WEBPACK_IMPORTED_MODULE_9__/* .cart_product */ .Vu)(item)),
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                        className: "fal fa-cart-arrow-down"
                                                                    }),
                                                                    "Add to Cart"
                                                                ]
                                                            })
                                                        }, item),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "bd__product-details-menu-3",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                        className: "wishlist-btn",
                                                                        title: "Wishlist",
                                                                        onClick: ()=>dispatch((0,_redux_features_wishlist_slice__WEBPACK_IMPORTED_MODULE_10__/* .add_to_wishlist */ .CZ)(item)),
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                className: "far fa-heart"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                children: "Add to Wishlist"
                                                                            })
                                                                        ]
                                                                    })
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "bd__social-media",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                        children: "Share:"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                            title: "Facebook",
                                                                            onClick: handleShareFacebook,
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                className: "fab fa-facebook-f"
                                                                            })
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                            title: "Instagram",
                                                                            onClick: handleShareInstagram,
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                className: "fab fa-instagram"
                                                                            })
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                            title: "Whatsapp",
                                                                            onClick: handleShareWhatsApp,
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                className: "fab fa-whatsapp"
                                                                            })
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                })
                            })
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "bd-related-Product__area mb-95",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "small-container container",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_elements_product_trending_product_slider__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            trending_product_title: "Related Product"
                        })
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShopDetailsArea);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1068:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_2__]);
axios__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const ShopDetailsReview = ({ id  })=>{
    const { 0: message , 1: setMessage  } = useState("");
    const { 0: name , 1: setName  } = useState("");
    const { 0: email , 1: setEmail  } = useState("");
    const handleSubmit = async (event)=>{
        event.preventDefault(); // Prevent default form submission
        try {
            // Create the review data object
            const reviewData = {
                message: message,
                name: name,
                email: email
            };
            // Make the API POST request to send the review data
            const response = await axios.post(`https://jap.digisole.in/api/v1/product/${id}/reviews/create`, reviewData);
            // Handle the response if needed (e.g., show a success message, reset form fields)
            console.log("Review submitted successfully:", response.data);
            // Reset form fields after successful submission
            setReviewText("");
            setName("");
            setEmail("");
        } catch (error) {
            console.error("Error submitting review:", error.response.data);
        // Handle the error if needed (e.g., show an error message)
        }
    };
    return /*#__PURE__*/ _jsxs("div", {
        className: "product_info-faq-area pt-50",
        children: [
            /*#__PURE__*/ _jsx("nav", {
                className: "product-details-tab",
                children: /*#__PURE__*/ _jsxs("div", {
                    className: "nav nav-tabs",
                    id: "nav-tab",
                    role: "tablist",
                    children: [
                        /*#__PURE__*/ _jsx("a", {
                            className: "nav-item nav-link show",
                            id: "nav-general-tab",
                            "data-bs-toggle": "tab",
                            href: "#nav-general",
                            role: "tab",
                            "aria-selected": "false",
                            children: "Description"
                        }),
                        /*#__PURE__*/ _jsx("a", {
                            className: "nav-item nav-link active",
                            id: "nav-seller-tab",
                            "data-bs-toggle": "tab",
                            href: "#nav-seller",
                            role: "tab",
                            "aria-selected": "true",
                            children: "Reviews"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ _jsxs("div", {
                className: "tab-content product-details-content",
                id: "nav-tabContent",
                children: [
                    /*#__PURE__*/ _jsx("div", {
                        className: "tab-pane fade",
                        id: "nav-general",
                        role: "tabpanel",
                        children: /*#__PURE__*/ _jsx("div", {
                            className: "tabs-wrapper mt-35",
                            children: /*#__PURE__*/ _jsx("div", {
                                className: "product__details-des",
                                children: /*#__PURE__*/ _jsx("p", {
                                    children: "Very clean and organized with easy to follow tutorials, Exercises, and solutions. This course does start from the beginning with very little knowledge and gives a great overview of common tools used for data science and progresses into more complex concepts and ideas. This course is amazing..! I started this course as a beginner and learnt a lot. Instructors are great. Query handling can be improved.Overall very happy with the course."
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        className: "tab-pane fade active show",
                        id: "nav-seller",
                        role: "tabpanel",
                        children: /*#__PURE__*/ _jsxs("div", {
                            className: "tabs-wrapper mt-35 mb-50",
                            children: [
                                /*#__PURE__*/ _jsxs("div", {
                                    className: "course-review-item mb-30",
                                    children: [
                                        /*#__PURE__*/ _jsx("div", {
                                            className: "course-reviews-img",
                                            children: /*#__PURE__*/ _jsx("a", {
                                                href: "#",
                                                children: /*#__PURE__*/ _jsx("img", {
                                                    src: "/assets/img/testimonial/1.jpg",
                                                    alt: "image not found"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ _jsxs("div", {
                                            className: "course-review-list",
                                            children: [
                                                /*#__PURE__*/ _jsx("h5", {
                                                    children: /*#__PURE__*/ _jsx("a", {
                                                        href: "#",
                                                        children: "Sotapdi Kunda"
                                                    })
                                                }),
                                                /*#__PURE__*/ _jsxs("div", {
                                                    className: "course-start-icon",
                                                    children: [
                                                        /*#__PURE__*/ _jsx("i", {
                                                            className: "fas fa-star"
                                                        }),
                                                        /*#__PURE__*/ _jsx("i", {
                                                            className: "fas fa-star"
                                                        }),
                                                        /*#__PURE__*/ _jsx("i", {
                                                            className: "fas fa-star"
                                                        }),
                                                        /*#__PURE__*/ _jsx("i", {
                                                            className: "fas fa-star"
                                                        }),
                                                        /*#__PURE__*/ _jsx("i", {
                                                            className: "fas fa-star"
                                                        }),
                                                        /*#__PURE__*/ _jsx("span", {
                                                            children: "55 min ago"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ _jsx("p", {
                                                    children: "Very clean and organized with easy to follow tutorials, Exercises, and solutions. This course does start from the beginning with very little knowledge and gives a great overview of common tools used for data science and progresses into more complex concepts and ideas."
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsxs("div", {
                                    className: "course-review-item mb-30",
                                    children: [
                                        /*#__PURE__*/ _jsx("div", {
                                            className: "course-reviews-img",
                                            children: /*#__PURE__*/ _jsx("a", {
                                                href: "#",
                                                children: /*#__PURE__*/ _jsx("img", {
                                                    src: "/assets/img/testimonial/2.jpg",
                                                    alt: "image not found"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ _jsxs("div", {
                                            className: "course-review-list",
                                            children: [
                                                /*#__PURE__*/ _jsx("h5", {
                                                    children: /*#__PURE__*/ _jsx("a", {
                                                        href: "#",
                                                        children: "Samantha"
                                                    })
                                                }),
                                                /*#__PURE__*/ _jsxs("div", {
                                                    className: "course-start-icon",
                                                    children: [
                                                        /*#__PURE__*/ _jsx("i", {
                                                            className: "fas fa-star"
                                                        }),
                                                        /*#__PURE__*/ _jsx("i", {
                                                            className: "fas fa-star"
                                                        }),
                                                        /*#__PURE__*/ _jsx("i", {
                                                            className: "fas fa-star"
                                                        }),
                                                        /*#__PURE__*/ _jsx("i", {
                                                            className: "fas fa-star"
                                                        }),
                                                        /*#__PURE__*/ _jsx("i", {
                                                            className: "fas fa-star"
                                                        }),
                                                        /*#__PURE__*/ _jsx("span", {
                                                            children: "45 min ago"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ _jsx("p", {
                                                    children: "The course is good at explaining very basic intuition of the concepts. It will get you scratching the surface so to say. where this course is unique is the implementation methods are so well defined Thank you to the team !."
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsxs("div", {
                                    className: "course-review-item mb-30",
                                    children: [
                                        /*#__PURE__*/ _jsx("div", {
                                            className: "course-reviews-img",
                                            children: /*#__PURE__*/ _jsx("a", {
                                                href: "#",
                                                children: /*#__PURE__*/ _jsx("img", {
                                                    src: "/assets/img/testimonial/3.jpg",
                                                    alt: "image not found"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ _jsxs("div", {
                                            className: "course-review-list",
                                            children: [
                                                /*#__PURE__*/ _jsx("h5", {
                                                    children: /*#__PURE__*/ _jsx("a", {
                                                        href: "#",
                                                        children: "Michell Mariya"
                                                    })
                                                }),
                                                /*#__PURE__*/ _jsxs("div", {
                                                    className: "course-start-icon",
                                                    children: [
                                                        /*#__PURE__*/ _jsx("i", {
                                                            className: "fas fa-star"
                                                        }),
                                                        /*#__PURE__*/ _jsx("i", {
                                                            className: "fas fa-star"
                                                        }),
                                                        /*#__PURE__*/ _jsx("i", {
                                                            className: "fas fa-star"
                                                        }),
                                                        /*#__PURE__*/ _jsx("i", {
                                                            className: "fas fa-star"
                                                        }),
                                                        /*#__PURE__*/ _jsx("i", {
                                                            className: "fas fa-star"
                                                        }),
                                                        /*#__PURE__*/ _jsx("span", {
                                                            children: "30 min ago"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ _jsx("p", {
                                                    children: "This course is amazing..! I started this course as a beginner and learnt a lot. Instructors are great. Query handling can be improved.Overall very happy with the course."
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsxs("div", {
                                    className: "product__details-comment ",
                                    children: [
                                        /*#__PURE__*/ _jsxs("div", {
                                            className: "comment-title mb-20",
                                            children: [
                                                /*#__PURE__*/ _jsx("h3", {
                                                    children: "Add a review"
                                                }),
                                                /*#__PURE__*/ _jsx("p", {
                                                    children: "Your email address will not be published. Required fields are marked *"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ _jsxs("div", {
                                            className: "comment-rating mb-20",
                                            children: [
                                                /*#__PURE__*/ _jsx("span", {
                                                    children: "Overall ratings"
                                                }),
                                                /*#__PURE__*/ _jsxs("ul", {
                                                    children: [
                                                        /*#__PURE__*/ _jsx("li", {
                                                            children: /*#__PURE__*/ _jsx("a", {
                                                                href: "#",
                                                                children: /*#__PURE__*/ _jsx("i", {
                                                                    className: "fas fa-star"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ _jsx("li", {
                                                            children: /*#__PURE__*/ _jsx("a", {
                                                                href: "#",
                                                                children: /*#__PURE__*/ _jsx("i", {
                                                                    className: "fas fa-star"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ _jsx("li", {
                                                            children: /*#__PURE__*/ _jsx("a", {
                                                                href: "#",
                                                                children: /*#__PURE__*/ _jsx("i", {
                                                                    className: "fas fa-star"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ _jsx("li", {
                                                            children: /*#__PURE__*/ _jsx("a", {
                                                                href: "#",
                                                                children: /*#__PURE__*/ _jsx("i", {
                                                                    className: "fas fa-star"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ _jsx("li", {
                                                            children: /*#__PURE__*/ _jsx("a", {
                                                                href: "#",
                                                                children: /*#__PURE__*/ _jsx("i", {
                                                                    className: "fal fa-star"
                                                                })
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ _jsx("div", {
                                            className: "comment-input-box mb-20",
                                            children: /*#__PURE__*/ _jsx("form", {
                                                onSubmit: handleSubmit,
                                                children: /*#__PURE__*/ _jsxs("div", {
                                                    className: "row",
                                                    children: [
                                                        /*#__PURE__*/ _jsx("div", {
                                                            className: "col-xxl-12",
                                                            children: /*#__PURE__*/ _jsx("textarea", {
                                                                placeholder: "Your review",
                                                                className: "comment-input comment-textarea mb-20",
                                                                value: message,
                                                                onChange: (e)=>setMessage(e.target.value),
                                                                required: true
                                                            })
                                                        }),
                                                        /*#__PURE__*/ _jsx("div", {
                                                            className: "col-xxl-6",
                                                            children: /*#__PURE__*/ _jsx("div", {
                                                                className: "comment-input mb-20",
                                                                children: /*#__PURE__*/ _jsx("input", {
                                                                    type: "text",
                                                                    placeholder: "Your Name",
                                                                    value: name,
                                                                    onChange: (e)=>setName(e.target.value),
                                                                    required: true
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ _jsx("div", {
                                                            className: "col-xxl-6",
                                                            children: /*#__PURE__*/ _jsx("div", {
                                                                className: "comment-input mb-20",
                                                                children: /*#__PURE__*/ _jsx("input", {
                                                                    type: "email",
                                                                    placeholder: "Your Email",
                                                                    value: email,
                                                                    onChange: (e)=>setEmail(e.target.value),
                                                                    required: true
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ _jsx("div", {
                                                            className: "col-xxl-12",
                                                            children: /*#__PURE__*/ _jsx("div", {
                                                                className: "comment-submit",
                                                                children: /*#__PURE__*/ _jsx("button", {
                                                                    type: "submit",
                                                                    className: "bd-fill__btn",
                                                                    children: "Submit"
                                                                })
                                                            })
                                                        })
                                                    ]
                                                })
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (ShopDetailsReview)));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;