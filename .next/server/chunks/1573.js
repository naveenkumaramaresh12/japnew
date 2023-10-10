"use strict";
exports.id = 1573;
exports.ids = [1573];
exports.modules = {

/***/ 1573:
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
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3877);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3015);
/* harmony import */ var _data_products__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(288);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _redux_features_product_slice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4370);
/* harmony import */ var _redux_features_cart_slice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4071);
/* harmony import */ var _redux_features_wishlist_slice__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3921);
/* harmony import */ var _common_product_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2577);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper__WEBPACK_IMPORTED_MODULE_3__, swiper_react__WEBPACK_IMPORTED_MODULE_4__, _redux_features_product_slice__WEBPACK_IMPORTED_MODULE_7__, _redux_features_cart_slice__WEBPACK_IMPORTED_MODULE_8__, _redux_features_wishlist_slice__WEBPACK_IMPORTED_MODULE_9__, _common_product_modal__WEBPACK_IMPORTED_MODULE_10__, axios__WEBPACK_IMPORTED_MODULE_11__]);
([swiper__WEBPACK_IMPORTED_MODULE_3__, swiper_react__WEBPACK_IMPORTED_MODULE_4__, _redux_features_product_slice__WEBPACK_IMPORTED_MODULE_7__, _redux_features_cart_slice__WEBPACK_IMPORTED_MODULE_8__, _redux_features_wishlist_slice__WEBPACK_IMPORTED_MODULE_9__, _common_product_modal__WEBPACK_IMPORTED_MODULE_10__, axios__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













const TrendingProductSlider = ({ trending_product_title  })=>{
    const products = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(_redux_features_product_slice__WEBPACK_IMPORTED_MODULE_7__/* .selectProducts */ .nR);
    const { 0: productList , 1: setProductList  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true); // Add a loading state
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch)();
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const fetchProducts = async ()=>{
            try {
                const response = await axios__WEBPACK_IMPORTED_MODULE_11__["default"].get("https://jap.digisole.in/api/v1/product/main/paginate");
                setProductList(response.data);
                setLoading(false); // Set loading to false after data is fetched
            } catch (error) {
                console.error("Failed to fetch products:", error);
            }
        };
        fetchProducts();
    }, []);
    const handleAddToWishlist = (item)=>{
        dispatch((0,_redux_features_wishlist_slice__WEBPACK_IMPORTED_MODULE_9__/* .add_to_wishlist */ .CZ)(item));
    };
    const handleAddToCart = async (productId)=>{
        try {
            // Retrieve access token from localStorage
            const accessToken = localStorage.getItem("accessToken");
            // Check if the access token exists
            if (!accessToken) {
                console.error("Access token not found in localStorage");
                const product = productList.data.find((item)=>item.id === productId);
                if (product) {
                    // Add the product to the temporary cart in localStorage
                    const cartItems = JSON.parse(localStorage.getItem("temporaryCart")) || [];
                    cartItems.push(product);
                    localStorage.setItem("temporaryCart", JSON.stringify(cartItems));
                    // Dispatch the addToTemporaryCart action with the product data
                    dispatch((0,_redux_features_cart_slice__WEBPACK_IMPORTED_MODULE_8__/* .cart_product */ .Vu)(product));
                }
                // Show a success message or perform any further actions as needed
                toast.success("Product added to temporary cart");
                return;
            }
            const temporaryCartItems = JSON.parse(localStorage.getItem("temporaryCart")) || [];
            if (temporaryCartItems.length === 0) {
                console.log("No items in the temporary cart");
                return;
            }
            const productIds = productList.data.map((item)=>item.id); // Array of product IDs from productList
            const payload = {
                data: []
            };
            productIds.forEach((productId)=>{
                const product = {
                    product_id: productId,
                    quantity: 1
                };
                payload.data.push(product);
            });
            // Add access token to the request headers
            const headers = {
                Authorization: `Bearer ${accessToken}`
            };
            // Make the API request
            const response = await axios__WEBPACK_IMPORTED_MODULE_11__["default"].post("https://jap.digisole.in/api/v1/cart", payload, {
                headers: headers
            });
            dispatch((0,_redux_features_cart_slice__WEBPACK_IMPORTED_MODULE_8__/* .cart_product */ .Vu)(response.data));
        // Handle any further actions or updates based on the response if required
        // ...
        } catch (error) {
            console.error("Failed to add item to cart:", error);
        }
    };
    const handleQuickView = (slug)=>{
        dispatch((0,_redux_features_product_slice__WEBPACK_IMPORTED_MODULE_7__/* .fetchSingleProduct */ .Rc)(slug));
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            children: "Loading..."
        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "row",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-xxl-4 col-xl-5 col-lg-4",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "bd-section__title-wrapper mb-40",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "bd-sm__section-title",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                        children: trending_product_title ? trending_product_title : "You May Missed"
                                    })
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-xxl-8 col-xl-7 col-lg-8",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "bd-trending__tab-wrapper mb-40 p-relative",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "bd-tending-nav",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "nav nav-tabs",
                                                id: "nav-tab",
                                                role: "tablist",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                        className: "nav-link active",
                                                        id: "nav-tab-1-tab",
                                                        "data-bs-toggle": "tab",
                                                        "data-bs-target": "#nav-tab-1",
                                                        type: "button",
                                                        role: "tab",
                                                        "aria-controls": "nav-tab-1",
                                                        "aria-selected": "true",
                                                        children: "View All"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                        className: "nav-link",
                                                        id: "nav-tab-2-tab",
                                                        "data-bs-toggle": "tab",
                                                        "data-bs-target": "#nav-tab-2",
                                                        type: "button",
                                                        role: "tab",
                                                        "aria-controls": "nav-tab-2",
                                                        "aria-selected": "false",
                                                        children: "New Arrival"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                        className: "nav-link",
                                                        id: "nav-tab-3-tab",
                                                        "data-bs-toggle": "tab",
                                                        "data-bs-target": "#nav-tab-3",
                                                        type: "button",
                                                        role: "tab",
                                                        "aria-controls": "nav-tab-3",
                                                        "aria-selected": "false",
                                                        children: "Best Sale"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                        className: "nav-link",
                                                        id: "nav-tab-4-tab",
                                                        "data-bs-toggle": "tab",
                                                        "data-bs-target": "#nav-tab-4",
                                                        type: "button",
                                                        role: "tab",
                                                        "aria-controls": "nav-tab-4",
                                                        "aria-selected": "false",
                                                        children: "Featured"
                                                    })
                                                ]
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "bd-trending__navigation",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                className: "trending-button-prev",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                    className: "fa-regular fa-angle-left"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                className: "trending-button-next",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                    className: "fa-regular fa-angle-right"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "bd-trending__item-wrapper",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "tab-content",
                        id: "nav-tabContent",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "tab-pane fade show active",
                            id: "nav-tab-1",
                            role: "tabpanel",
                            "aria-labelledby": "nav-tab-1-tab",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "bd-trending-active swiper-container",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "swiper-wrappers",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_4__.Swiper, {
                                        modules: [
                                            swiper__WEBPACK_IMPORTED_MODULE_3__.Navigation,
                                            swiper__WEBPACK_IMPORTED_MODULE_3__.Scrollbar,
                                            swiper__WEBPACK_IMPORTED_MODULE_3__.A11y,
                                            swiper__WEBPACK_IMPORTED_MODULE_3__.Autoplay
                                        ],
                                        spaceBetween: 30,
                                        slidesPerView: 1,
                                        loop: true,
                                        observer: true,
                                        observeParents: true,
                                        navigation: {
                                            clickable: true,
                                            nextEl: ".trending-button-next",
                                            prevEl: ".trending-button-prev"
                                        },
                                        breakpoints: {
                                            500: {
                                                slidesPerView: 2
                                            },
                                            768: {
                                                slidesPerView: 2
                                            },
                                            992: {
                                                slidesPerView: 2
                                            },
                                            1200: {
                                                slidesPerView: 3
                                            },
                                            1400: {
                                                slidesPerView: 4
                                            }
                                        },
                                        children: productList && productList.data && productList.data.map((item, index)=>{
                                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_4__.SwiperSlide, {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "swiper-slides",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "bd-product__item text-center p-relative mb-30",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "bd-product__thumb w-img",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                                        href: `/shop-details/${item.slug}`,
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                                src: item.featured_image_link,
                                                                                alt: "product-img"
                                                                            })
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                        className: "bd-product__action",
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                className: "cart-btn",
                                                                                "data-toggle": "tooltip",
                                                                                "data-placement": "top",
                                                                                title: "Quick Shop",
                                                                                onClick: ()=>dispatch((0,_redux_features_cart_slice__WEBPACK_IMPORTED_MODULE_8__/* .cart_product */ .Vu)(item)),
                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                    className: "fal fa-cart-arrow-down ${item.cartIcon}"
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                "data-toggle": "tooltip",
                                                                                "data-placement": "top",
                                                                                title: "Quick View",
                                                                                "data-bs-toggle": "modal",
                                                                                "data-bs-target": "#productmodal",
                                                                                onClick: ()=>handleQuickView(item.slug),
                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                    className: "fal fa-eye ${item.cartEye}"
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                className: "wishlist-btn",
                                                                                "data-toggle": "tooltip",
                                                                                "data-placement": "top",
                                                                                title: "Quick Wishlist",
                                                                                onClick: ()=>dispatch((0,_redux_features_wishlist_slice__WEBPACK_IMPORTED_MODULE_9__/* .add_to_wishlist */ .CZ)(item)),
                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                    className: "fal fa-heart ${item.cartHeart}"
                                                                                })
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "bd-product__content",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                                        className: "bd-product__title",
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                                            href: `/shop-details/${item.slug}`,
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                children: item.name
                                                                            })
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                        className: "bd-product__price",
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                className: "bd-product__old-price",
                                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("del", {
                                                                                    children: [
                                                                                        "Rs.",
                                                                                        item.price
                                                                                    ]
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                                className: "bd-product__new-price",
                                                                                children: [
                                                                                    "Rs.",
                                                                                    item.discounted_price
                                                                                ]
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                        className: "bd-product__icon",
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                className: item.ratingA
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                className: item.ratingB
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                className: item.ratingC
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                className: item.ratingD
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                className: item.ratingE
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "bd-product__tag",
                                                                children: [
                                                                    item.badgeNew && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        className: "tag-text theme-bg",
                                                                        children: item.badge
                                                                    }),
                                                                    item.badgeDiscount && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        className: "tag-text danger-bg",
                                                                        children: item.badge
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                })
                                            }, index);
                                        })
                                    })
                                })
                            })
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_product_modal__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {})
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TrendingProductSlider);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 288:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const productList = [
    {
        id: 1,
        productImg: "/assets/img/product/tomato.jpg",
        productTitle: "Tomato",
        cartIcon: "fal fa-cart-arrow-down",
        cartEye: "fal fa-eye",
        cartHeart: "fal fa-heart",
        price: "18.00",
        priceOld: "12.00",
        ratingA: "fas fa-star",
        ratingB: "fas fa-star",
        ratingC: "fas fa-star",
        ratingD: "fas fa-star",
        ratingE: "fas fa-star",
        badge: "New",
        badgeNew: true,
        badgeDiscount: false
    },
    {
        id: 2,
        productImg: "/assets/img/product/product-11.png",
        productTitle: "Milk Cream Smetana",
        cartIcon: "fal fa-cart-arrow-down",
        cartEye: "fal fa-eye",
        cartHeart: "fal fa-heart",
        price: "22.00",
        priceOld: "15.00",
        ratingA: "fas fa-star",
        ratingB: "fas fa-star",
        ratingC: "fas fa-star",
        ratingD: "fas fa-star",
        ratingE: "fas fa-star",
        badge: "New",
        badgeNew: false,
        badgeDiscount: false
    },
    {
        id: 3,
        productImg: "/assets/img/product/product-06.png",
        productTitle: "Organic Apple",
        cartIcon: "fal fa-cart-arrow-down",
        cartEye: "fal fa-eye",
        cartHeart: "fal fa-heart",
        price: "20.00",
        priceOld: "14.00",
        ratingA: "fas fa-star",
        ratingB: "fas fa-star",
        ratingC: "fas fa-star",
        ratingD: "fas fa-star",
        ratingE: "fas fa-star",
        badge: "30%",
        badgeDiscount: true,
        badgeNew: false
    },
    {
        id: 4,
        productImg: "/assets/img/product/product-04.png",
        productTitle: "Fresh Payaz Onion",
        cartIcon: "fal fa-cart-arrow-down",
        cartEye: "fal fa-eye",
        cartHeart: "fal fa-heart",
        price: "27.00",
        priceOld: "17.00",
        ratingA: "fas fa-star",
        ratingB: "fas fa-star",
        ratingC: "fas fa-star",
        ratingD: "fas fa-star",
        ratingE: "fas fa-star",
        badge: "New",
        badgeNew: false,
        badgeDiscount: false
    },
    {
        id: 5,
        productImg: "/assets/img/product/product-02.png",
        productTitle: "Organic Badhakopy",
        cartIcon: "fal fa-cart-arrow-down",
        cartEye: "fal fa-eye",
        cartHeart: "fal fa-heart",
        price: "21.00",
        priceOld: "13.00",
        ratingA: "fas fa-star",
        ratingB: "fas fa-star",
        ratingC: "fas fa-star",
        ratingD: "fas fa-star",
        ratingE: "fas fa-star",
        badge: "20%",
        badgeDiscount: true,
        badgeNew: false
    },
    {
        id: 6,
        productImg: "/assets/img/product/product-04.png",
        productTitle: "Fresh Payaz Onion",
        cartIcon: "fal fa-cart-arrow-down",
        cartEye: "fal fa-eye",
        cartHeart: "fal fa-heart",
        price: "19.00",
        priceOld: "15.00",
        ratingA: "fas fa-star",
        ratingB: "fas fa-star",
        ratingC: "fas fa-star",
        ratingD: "fas fa-star",
        ratingE: "fas fa-star",
        badge: "New",
        badgeNew: false,
        badgeDiscount: false
    },
    {
        id: 7,
        productImg: "/assets/img/product/product-08.png",
        productTitle: "Orange Cauliflower",
        cartIcon: "fal fa-cart-arrow-down",
        cartEye: "fal fa-eye",
        cartHeart: "fal fa-heart",
        price: "32.00",
        priceOld: "21.00",
        ratingA: "fas fa-star",
        ratingB: "fas fa-star",
        ratingC: "fas fa-star",
        ratingD: "fas fa-star",
        ratingE: "fas fa-star",
        badge: "New",
        badgeNew: true,
        badgeDiscount: false
    },
    {
        id: 8,
        productImg: "/assets/img/product/product-09.png",
        productTitle: "Orange Vagetable",
        cartIcon: "fal fa-cart-arrow-down",
        cartEye: "fal fa-eye",
        cartHeart: "fal fa-heart",
        price: "18.00",
        priceOld: "12.00",
        ratingA: "fas fa-star",
        ratingB: "fas fa-star",
        ratingC: "fas fa-star",
        ratingD: "fas fa-star",
        ratingE: "fas fa-star",
        badge: "New",
        badgeNew: false,
        badgeDiscount: false
    },
    {
        id: 9,
        productImg: "/assets/img/product/product-05.png",
        productTitle: "Orange pomegranate",
        cartIcon: "fal fa-cart-arrow-down",
        cartEye: "fal fa-eye",
        cartHeart: "fal fa-heart",
        price: "30.00",
        priceOld: "20.00",
        ratingA: "fas fa-star",
        ratingB: "fas fa-star",
        ratingC: "fas fa-star",
        ratingD: "fas fa-star",
        ratingE: "fas fa-star",
        badge: "New",
        badgeNew: true,
        badgeDiscount: false
    },
    {
        id: 10,
        productImg: "/assets/img/product/product-06.png",
        productTitle: "Orange Apple",
        cartIcon: "fal fa-cart-arrow-down",
        cartEye: "fal fa-eye",
        cartHeart: "fal fa-heart",
        price: "15.00",
        priceOld: "10.00",
        ratingA: "fas fa-star",
        ratingB: "fas fa-star",
        ratingC: "fas fa-star",
        ratingD: "fas fa-star",
        ratingE: "fas fa-star",
        badge: "New",
        badgeNew: false,
        badgeDiscount: false
    },
    {
        id: 11,
        productImg: "/assets/img/product/product-07.png",
        productTitle: "Orange Lemon",
        cartIcon: "fal fa-cart-arrow-down",
        cartEye: "fal fa-eye",
        cartHeart: "fal fa-heart",
        price: "18.00",
        priceOld: "12.00",
        ratingA: "fas fa-star",
        ratingB: "fas fa-star",
        ratingC: "fas fa-star",
        ratingD: "fas fa-star",
        ratingE: "fas fa-star",
        badge: "13%",
        badgeDiscount: true,
        badgeNew: false
    },
    {
        id: 12,
        productImg: "/assets/img/product/product-03.png",
        productTitle: "Orange Banana",
        cartIcon: "fal fa-cart-arrow-down",
        cartEye: "fal fa-eye",
        cartHeart: "fal fa-heart",
        price: "29.00",
        priceOld: "25.00",
        ratingA: "fas fa-star",
        ratingB: "fas fa-star",
        ratingC: "fas fa-star",
        ratingD: "fas fa-star",
        ratingE: "fas fa-star",
        badge: "New",
        badgeNew: false,
        badgeDiscount: false
    },
    {
        id: 13,
        productImg: "/assets/img/product/product-10.png",
        productTitle: "Organic Fresh Milk",
        cartIcon: "fal fa-cart-arrow-down",
        cartEye: "fal fa-eye",
        cartHeart: "fal fa-heart",
        price: "27.00",
        priceOld: "21.00",
        ratingA: "fas fa-star",
        ratingB: "fas fa-star",
        ratingC: "fas fa-star",
        ratingD: "fas fa-star",
        ratingE: "fas fa-star",
        badge: "New",
        badgeNew: false,
        badgeDiscount: false
    },
    {
        id: 14,
        productImg: "/assets/img/product/product-11.png",
        productTitle: "Organic Full Cream Milk",
        cartIcon: "fal fa-cart-arrow-down",
        cartEye: "fal fa-eye",
        cartHeart: "fal fa-heart",
        price: "20.00",
        priceOld: "16.00",
        ratingA: "fas fa-star",
        ratingB: "fas fa-star",
        ratingC: "fas fa-star",
        ratingD: "fas fa-star",
        ratingE: "fas fa-star",
        badge: "11%",
        badgeDiscount: true,
        badgeNew: false
    },
    {
        id: 15,
        productImg: "/assets/img/product/product-12.png",
        productTitle: "Dairy Fresh Milk",
        cartIcon: "fal fa-cart-arrow-down",
        cartEye: "fal fa-eye",
        cartHeart: "fal fa-heart",
        price: "21.00",
        priceOld: "13.00",
        ratingA: "fas fa-star",
        ratingB: "fas fa-star",
        ratingC: "fas fa-star",
        ratingD: "fas fa-star",
        ratingE: "fas fa-star",
        badge: "New",
        badgeNew: false,
        badgeDiscount: false
    },
    {
        id: 16,
        productImg: "/assets/img/product/product-13.png",
        productTitle: "Orange Milk Chocolate",
        cartIcon: "fal fa-cart-arrow-down",
        cartEye: "fal fa-eye",
        cartHeart: "fal fa-heart",
        price: "26.00",
        priceOld: "22.00",
        ratingA: "fas fa-star",
        ratingB: "fas fa-star",
        ratingC: "fas fa-star",
        ratingD: "fas fa-star",
        ratingE: "fas fa-star",
        badge: "New",
        badgeNew: false,
        badgeDiscount: false
    },
    {
        id: 17,
        productImg: "/assets/img/product/product-06.png",
        productTitle: "Orange Fresh Apple",
        cartIcon: "fal fa-cart-arrow-down",
        cartEye: "fal fa-eye",
        cartHeart: "fal fa-heart",
        price: "29.00",
        priceOld: "25.00",
        ratingA: "fas fa-star",
        ratingB: "fas fa-star",
        ratingC: "fas fa-star",
        ratingD: "fas fa-star",
        ratingE: "fas fa-star",
        badge: "New",
        badgeNew: true,
        badgeDiscount: false
    },
    {
        id: 18,
        productImg: "/assets/img/product/product-09.png",
        productTitle: "Orange Vagetable",
        cartIcon: "fal fa-cart-arrow-down",
        cartEye: "fal fa-eye",
        cartHeart: "fal fa-heart",
        price: "31.00",
        priceOld: "27.00",
        ratingA: "fas fa-star",
        ratingB: "fas fa-star",
        ratingC: "fas fa-star",
        ratingD: "fas fa-star",
        ratingE: "fas fa-star",
        badge: "New",
        badgeNew: false,
        badgeDiscount: false
    },
    {
        id: 19,
        productImg: "/assets/img/product/product-14.png",
        productTitle: "Orange Grocery Store",
        cartIcon: "fal fa-cart-arrow-down",
        cartEye: "fal fa-eye",
        cartHeart: "fal fa-heart",
        price: "23.00",
        priceOld: "19.00",
        ratingA: "fas fa-star",
        ratingB: "fas fa-star",
        ratingC: "fas fa-star",
        ratingD: "fas fa-star",
        ratingE: "fas fa-star",
        badge: "11%",
        badgeDiscount: true,
        badgeNew: false
    },
    {
        id: 20,
        productImg: "/assets/img/product/product-15.png",
        productTitle: "Fresh Food Rice",
        cartIcon: "fal fa-cart-arrow-down",
        cartEye: "fal fa-eye",
        cartHeart: "fal fa-heart",
        price: "30.00",
        priceOld: "24.00",
        ratingA: "fas fa-star",
        ratingB: "fas fa-star",
        ratingC: "fas fa-star",
        ratingD: "fas fa-star",
        ratingE: "fas fa-star",
        badge: "New",
        badgeNew: false,
        badgeDiscount: false
    },
    //home one end here
    {
        id: 21,
        productImg: "/assets/img/product/banner/product-banner-01.jpg",
        productTag: "Organic",
        productTitle: "Meat & Milk",
        productDesc: "Premium quality meat & milk",
        productBtn: "Shop Now",
        bannerClass: "bd-product__banner-content banner-meat",
        price: "30.00",
        priceOld: "24.00",
        ratingA: "fas fa-star",
        ratingB: "fas fa-star",
        ratingC: "fas fa-star",
        ratingD: "fas fa-star",
        ratingE: "fas fa-star"
    },
    {
        id: 22,
        productImg: "/assets/img/product/banner/product-banner-02.jpg",
        productTag: "Organic",
        productTitle: "Vegetable",
        productDesc: "Premium quality meat & milk",
        productBtn: "Shop Now",
        bannerClass: "bd-product__banner-content banner-vegetable",
        price: "30.00",
        priceOld: "24.00",
        ratingA: "fas fa-star",
        ratingB: "fas fa-star",
        ratingC: "fas fa-star",
        ratingD: "fas fa-star",
        ratingE: "fas fa-star"
    },
    {
        id: 23,
        productImg: "/assets/img/product/banner/product-banner-03.jpg",
        productTag: "Organic",
        productTitle: "Food and Fruits",
        productDesc: "Premium quality meat & milk",
        productBtn: "Shop Now",
        bannerClass: "bd-product__banner-content banner-fruits",
        price: "30.00",
        priceOld: "24.00",
        ratingA: "fas fa-star",
        ratingB: "fas fa-star",
        ratingC: "fas fa-star",
        ratingD: "fas fa-star",
        ratingE: "fas fa-star"
    },
    //home two banner end here
    {
        id: 24,
        productImg: "/assets/img/category/category-thumb-01.png",
        productTitle: "Fruit & Vegetable",
        price: "30.00",
        priceOld: "24.00",
        categoryList: [
            {
                catTitle: "Cauliflower"
            },
            {
                catTitle: "Orange"
            },
            {
                catTitle: "Cucumber"
            },
            {
                catTitle: "Banana"
            },
            {
                catTitle: "Potato"
            },
            {
                catTitle: "Strawberry"
            }
        ]
    },
    {
        id: 25,
        productImg: "/assets/img/category/category-thumb-02.png",
        productTitle: "Dairy Product",
        price: "30.00",
        priceOld: "24.00",
        categoryList: [
            {
                catTitle: "Butter"
            },
            {
                catTitle: "Chocolate"
            },
            {
                catTitle: "Honey"
            },
            {
                catTitle: "Cheese"
            },
            {
                catTitle: "Ice Cream"
            },
            {
                catTitle: "Milk"
            }
        ]
    },
    {
        id: 26,
        productImg: "/assets/img/category/category-thumb-03.png",
        productTitle: "Grocery & Staple",
        price: "30.00",
        priceOld: "24.00",
        categoryList: [
            {
                catTitle: "Noodle"
            },
            {
                catTitle: "Oils"
            },
            {
                catTitle: "Onion"
            },
            {
                catTitle: "Red Gram"
            },
            {
                catTitle: "Rice"
            },
            {
                catTitle: "Flavor"
            }
        ]
    },
    {
        id: 27,
        productImg: "/assets/img/category/category-thumb-04.png",
        productTitle: "Miscellaneous",
        price: "30.00",
        priceOld: "24.00",
        categoryList: [
            {
                catTitle: "Nut & Seed"
            },
            {
                catTitle: "Oils"
            },
            {
                catTitle: "Fruits"
            },
            {
                catTitle: "Tomatoe"
            },
            {
                catTitle: "Soup"
            },
            {
                catTitle: "More Product"
            }
        ]
    },
    //home two category end here
    {
        id: 28,
        productImg: "/assets/img/trending/fruits/fruits-01.png",
        productTitle: "Kach Kogozi Labu",
        cartIcon: "fal fa-cart-arrow-down",
        cartEye: "fal fa-eye",
        cartHeart: "fal fa-heart",
        price: "39.00",
        priceOld: "35.00",
        ratingA: "fas fa-star",
        ratingB: "fas fa-star",
        ratingC: "fas fa-star",
        ratingD: "fas fa-star",
        ratingE: "fas fa-star",
        badge: "Sale",
        badgeNew: false,
        badgeDiscount: false,
        badgeSale: true
    },
    {
        id: 29,
        productImg: "/assets/img/trending/fruits/fruits-02.png",
        productTitle: "Organic Tomato",
        cartIcon: "fal fa-cart-arrow-down",
        cartEye: "fal fa-eye",
        cartHeart: "fal fa-heart",
        price: "41.00",
        priceOld: "37.00",
        ratingA: "fas fa-star",
        ratingB: "fas fa-star",
        ratingC: "fas fa-star",
        ratingD: "fas fa-star",
        ratingE: "fas fa-star",
        badge: "New",
        badgeNew: false,
        badgeDiscount: false,
        badgeSale: false
    },
    {
        id: 30,
        productImg: "/assets/img/trending/fruits/fruits-03.png",
        productTitle: "Hisma Green Tea",
        cartIcon: "fal fa-cart-arrow-down",
        cartEye: "fal fa-eye",
        cartHeart: "fal fa-heart",
        price: "30.00",
        priceOld: "24.00",
        ratingA: "fas fa-star",
        ratingB: "fas fa-star",
        ratingC: "fas fa-star",
        ratingD: "fas fa-star",
        ratingE: "fas fa-star",
        badge: "Sale",
        badgeNew: false,
        badgeDiscount: false,
        badgeSale: true
    },
    {
        id: 31,
        productImg: "/assets/img/trending/fruits/fruits-04.png",
        productTitle: "Fresh Payaz Milk",
        cartIcon: "fal fa-cart-arrow-down",
        cartEye: "fal fa-eye",
        cartHeart: "fal fa-heart",
        price: "53.00",
        priceOld: "47.00",
        ratingA: "fas fa-star",
        ratingB: "fas fa-star",
        ratingC: "fas fa-star",
        ratingD: "fas fa-star",
        ratingE: "fas fa-star",
        badge: "New",
        badgeNew: true,
        badgeDiscount: false,
        badgeSale: false
    },
    {
        id: 32,
        productImg: "/assets/img/trending/fruits/fruits-05.png",
        productTitle: "Kach Kogozi Labu",
        cartIcon: "fal fa-cart-arrow-down",
        cartEye: "fal fa-eye",
        cartHeart: "fal fa-heart",
        price: "27.00",
        priceOld: "23.00",
        ratingA: "fas fa-star",
        ratingB: "fas fa-star",
        ratingC: "fas fa-star",
        ratingD: "fas fa-star",
        ratingE: "fas fa-star",
        badge: "30%",
        badgeNew: false,
        badgeDiscount: true,
        badgeSale: false
    },
    {
        id: 33,
        productImg: "/assets/img/trending/fruits/fruits-06.png",
        productTitle: "Organic Tomato",
        cartIcon: "fal fa-cart-arrow-down",
        cartEye: "fal fa-eye",
        cartHeart: "fal fa-heart",
        price: "30.00",
        priceOld: "24.00",
        ratingA: "fas fa-star",
        ratingB: "fas fa-star",
        ratingC: "fas fa-star",
        ratingD: "fas fa-star",
        ratingE: "fas fa-star",
        badge: "New",
        badgeNew: false,
        badgeDiscount: false,
        badgeSale: false
    },
    {
        id: 34,
        productImg: "/assets/img/trending/fruits/fruits-07.png",
        productTitle: "Hisma Green Tea",
        cartIcon: "fal fa-cart-arrow-down",
        cartEye: "fal fa-eye",
        cartHeart: "fal fa-heart",
        price: "12.00",
        priceOld: "08.00",
        ratingA: "fas fa-star",
        ratingB: "fas fa-star",
        ratingC: "fas fa-star",
        ratingD: "fas fa-star",
        ratingE: "fas fa-star",
        badge: "New",
        badgeNew: true,
        badgeDiscount: false,
        badgeSale: false
    },
    {
        id: 35,
        productImg: "/assets/img/trending/fruits/fruits-08.png",
        productTitle: "Fresh Payaz Milk",
        cartIcon: "fal fa-cart-arrow-down",
        cartEye: "fal fa-eye",
        cartHeart: "fal fa-heart",
        price: "31.00",
        priceOld: "19.00",
        ratingA: "fas fa-star",
        ratingB: "fas fa-star",
        ratingC: "fas fa-star",
        ratingD: "fas fa-star",
        ratingE: "fas fa-star",
        badge: "17%",
        badgeNew: false,
        badgeDiscount: true,
        badgeSale: false
    },
    {
        id: 36,
        productImg: "/assets/img/trending/fruits/fruits-09.png",
        productTitle: "Kach Kogozi Labu",
        cartIcon: "fal fa-cart-arrow-down",
        cartEye: "fal fa-eye",
        cartHeart: "fal fa-heart",
        price: "65.00",
        priceOld: "57.00",
        ratingA: "fas fa-star",
        ratingB: "fas fa-star",
        ratingC: "fas fa-star",
        ratingD: "fas fa-star",
        ratingE: "fas fa-star",
        badge: "New",
        badgeNew: false,
        badgeDiscount: false,
        badgeSale: false
    },
    {
        id: 37,
        productImg: "/assets/img/trending/fruits/fruits-10.png",
        productTitle: "Organic Tomato",
        cartIcon: "fal fa-cart-arrow-down",
        cartEye: "fal fa-eye",
        cartHeart: "fal fa-heart",
        price: "47.00",
        priceOld: "36.00",
        ratingA: "fas fa-star",
        ratingB: "fas fa-star",
        ratingC: "fas fa-star",
        ratingD: "fas fa-star",
        ratingE: "fas fa-star",
        badge: "New",
        badgeNew: true,
        badgeDiscount: false,
        badgeSale: false
    },
    {
        id: 38,
        productImg: "/assets/img/trending/fruits/fruits-11.png",
        productTitle: "Hisma Green Tea",
        cartIcon: "fal fa-cart-arrow-down",
        cartEye: "fal fa-eye",
        cartHeart: "fal fa-heart",
        price: "30.00",
        priceOld: "24.00",
        ratingA: "fas fa-star",
        ratingB: "fas fa-star",
        ratingC: "fas fa-star",
        ratingD: "fas fa-star",
        ratingE: "fas fa-star",
        badge: "New",
        badgeNew: false,
        badgeDiscount: false,
        badgeSale: false
    },
    {
        id: 39,
        productImg: "/assets/img/trending/fruits/fruits-12.png",
        productTitle: "Fresh Payaz Milk",
        cartIcon: "fal fa-cart-arrow-down",
        cartEye: "fal fa-eye",
        cartHeart: "fal fa-heart",
        price: "28.00",
        priceOld: "17.00",
        ratingA: "fas fa-star",
        ratingB: "fas fa-star",
        ratingC: "fas fa-star",
        ratingD: "fas fa-star",
        ratingE: "fas fa-star",
        badge: "16%",
        badgeNew: false,
        badgeDiscount: true,
        badgeSale: false
    },
    {
        id: 40,
        productImg: "/assets/img/trending/fruits/fruits-13.png",
        productTitle: "Kach Kogozi Labu",
        cartIcon: "fal fa-cart-arrow-down",
        cartEye: "fal fa-eye",
        cartHeart: "fal fa-heart",
        price: "42.00",
        priceOld: "35.00",
        ratingA: "fas fa-star",
        ratingB: "fas fa-star",
        ratingC: "fas fa-star",
        ratingD: "fas fa-star",
        ratingE: "fas fa-star",
        badge: "New",
        badgeNew: true,
        badgeDiscount: false,
        badgeSale: false
    },
    {
        id: 41,
        productImg: "/assets/img/trending/fruits/fruits-14.png",
        productTitle: "Organic Tomato",
        cartIcon: "fal fa-cart-arrow-down",
        cartEye: "fal fa-eye",
        cartHeart: "fal fa-heart",
        price: "23.00",
        priceOld: "13.00",
        ratingA: "fas fa-star",
        ratingB: "fas fa-star",
        ratingC: "fas fa-star",
        ratingD: "fas fa-star",
        ratingE: "fas fa-star",
        badge: "New",
        badgeNew: false,
        badgeDiscount: false,
        badgeSale: false
    },
    {
        id: 42,
        productImg: "/assets/img/trending/fruits/fruits-15.png",
        productTitle: "Hisma Green Tea",
        cartIcon: "fal fa-cart-arrow-down",
        cartEye: "fal fa-eye",
        cartHeart: "fal fa-heart",
        price: "20.00",
        priceOld: "14.00",
        ratingA: "fas fa-star",
        ratingB: "fas fa-star",
        ratingC: "fas fa-star",
        ratingD: "fas fa-star",
        ratingE: "fas fa-star",
        badge: "New",
        badgeNew: false,
        badgeDiscount: false,
        badgeSale: false
    },
    {
        id: 43,
        productImg: "/assets/img/trending/fruits/fruits-16.png",
        productTitle: "Fresh Payaz Milk",
        cartIcon: "fal fa-cart-arrow-down",
        cartEye: "fal fa-eye",
        cartHeart: "fal fa-heart",
        price: "31.00",
        priceOld: "25.00",
        ratingA: "fas fa-star",
        ratingB: "fas fa-star",
        ratingC: "fas fa-star",
        ratingD: "fas fa-star",
        ratingE: "fas fa-star",
        badge: "Sale",
        badgeNew: false,
        badgeDiscount: false,
        badgeSale: true
    },
    //home two trending end here
    {
        id: 44,
        productImg: "/assets/img/product/banner/product-banner-04.jpg",
        productTag: "Organic",
        productTitle: "Meat & Milk",
        productDesc: "Premium quality meat & milk",
        productBtn: "Shop Now",
        bannerClass: "bd-product__banner-content banner-food product__content-2",
        columnClass: "col-xxl-5 col-xl-6 col-lg-5",
        price: "28.00",
        priceOld: "24.00",
        ratingA: "fas fa-star",
        ratingB: "fas fa-star",
        ratingC: "fas fa-star",
        ratingD: "fas fa-star",
        ratingE: "fas fa-star"
    },
    {
        id: 45,
        productImg: "/assets/img/product/banner/product-banner-05.jpg",
        productTag: "Organic",
        productTitle: "Vegetables",
        productDesc: "Premium quality Vegetables",
        productBtn: "Shop Now",
        bannerClass: "bd-product__banner-content banner-dairy  product__content-2",
        columnClass: "col-xxl-7 col-xl-6 col-lg-7",
        price: "15.00",
        priceOld: "12.00",
        ratingA: "fas fa-star",
        ratingB: "fas fa-star",
        ratingC: "fas fa-star",
        ratingD: "fas fa-star",
        ratingE: "fas fa-star"
    },
    //home two product banner end here
    {
        id: 46,
        productImg: "/assets/img/trending/flash/flash-thumb-01.png",
        productTag: "Organic",
        productTitle: "Fresh Orange Nuts",
        price: "15.00",
        priceOld: "12.00",
        discountText: "50%",
        discountOff: "off",
        available: "Available : ",
        availableCount: "300",
        stock: "/ 420 in stock",
        ratingA: "fas fa-star",
        ratingB: "fas fa-star",
        ratingC: "fas fa-star",
        ratingD: "fas fa-star",
        ratingE: "fas fa-star"
    },
    {
        id: 47,
        productImg: "/assets/img/trending/flash/flash-thumb-02.png",
        productTag: "Organic",
        productTitle: "Tock Orange Honey",
        price: "20.00",
        priceOld: "15.00",
        discountText: "30%",
        discountOff: "off",
        available: "Available : ",
        availableCount: "250",
        stock: "/ 350 in stock",
        ratingA: "fas fa-star",
        ratingB: "fas fa-star",
        ratingC: "fas fa-star",
        ratingD: "fas fa-star",
        ratingE: "fas fa-star"
    },
    {
        id: 48,
        productImg: "/assets/img/trending/flash/flash-thumb-03.png",
        productTag: "Organic",
        productTitle: "Fresh Organic Apple",
        price: "18.00",
        priceOld: "14.00",
        discountText: "25%",
        discountOff: "off",
        available: "Available : ",
        availableCount: "350",
        stock: "/ 450 in stock",
        ratingA: "fas fa-star",
        ratingB: "fas fa-star",
        ratingC: "fas fa-star",
        ratingD: "fas fa-star",
        ratingE: "fas fa-star"
    },
    //home two flash product start here
    {
        id: 49,
        productImg: "/assets/img/trending/populer-item/populer-thumb-01.png",
        productTitle: "Fresh Apple",
        cartIcon: "fal fa-cart-arrow-down",
        cartEye: "fal fa-eye",
        cartHeart: "fal fa-heart",
        price: "31.00",
        priceOld: "25.00",
        ratingA: "fas fa-star",
        ratingB: "fas fa-star",
        ratingC: "fas fa-star",
        ratingD: "fas fa-star",
        ratingE: "fas fa-star"
    },
    {
        id: 50,
        productImg: "/assets/img/trending/populer-item/populer-thumb-02.png",
        productTitle: "Organic Banana",
        cartIcon: "fal fa-cart-arrow-down",
        cartEye: "fal fa-eye",
        cartHeart: "fal fa-heart",
        price: "20.00",
        priceOld: "15.00",
        ratingA: "fas fa-star",
        ratingB: "fas fa-star",
        ratingC: "fas fa-star",
        ratingD: "fas fa-star",
        ratingE: "fas fa-star"
    },
    {
        id: 51,
        productImg: "/assets/img/trending/populer-item/populer-thumb-03.png",
        productTitle: "Fresh Fulkofy",
        cartIcon: "fal fa-cart-arrow-down",
        cartEye: "fal fa-eye",
        cartHeart: "fal fa-heart",
        price: "18.00",
        priceOld: "12.00",
        ratingA: "fas fa-star",
        ratingB: "fas fa-star",
        ratingC: "fas fa-star",
        ratingD: "fas fa-star",
        ratingE: "fas fa-star"
    },
    {
        id: 52,
        productImg: "/assets/img/trending/populer-item/populer-thumb-04.png",
        productTitle: "Orange Garlic",
        cartIcon: "fal fa-cart-arrow-down",
        cartEye: "fal fa-eye",
        cartHeart: "fal fa-heart",
        price: "28.00",
        priceOld: "24.00",
        ratingA: "fas fa-star",
        ratingB: "fas fa-star",
        ratingC: "fas fa-star",
        ratingD: "fas fa-star",
        ratingE: "fas fa-star"
    },
    {
        id: 53,
        productImg: "/assets/img/trending/populer-item/populer-thumb-05.png",
        productTitle: "Tock Orange Juice",
        cartIcon: "fal fa-cart-arrow-down",
        cartEye: "fal fa-eye",
        cartHeart: "fal fa-heart",
        price: "29.00",
        priceOld: "23.00",
        ratingA: "fas fa-star",
        ratingB: "fas fa-star",
        ratingC: "fas fa-star",
        ratingD: "fas fa-star",
        ratingE: "fas fa-star"
    },
    {
        id: 54,
        productImg: "/assets/img/trending/populer-item/populer-thumb-01.png",
        productTitle: "Fresh Apple",
        cartIcon: "fal fa-cart-arrow-down",
        cartEye: "fal fa-eye",
        cartHeart: "fal fa-heart",
        price: "37.00",
        priceOld: "28.00",
        ratingA: "fas fa-star",
        ratingB: "fas fa-star",
        ratingC: "fas fa-star",
        ratingD: "fas fa-star",
        ratingE: "fas fa-star"
    },
    //home two popular product end here
    {
        id: 55,
        productImg: "/assets/img/product/banner/product-banner-07.jpg",
        productTag: "100% Organic",
        productTitle: "Sunflower Oil",
        productDesc: "From",
        productBtn: "Shop Now",
        bannerClass: "bd-product__banner-content banner-oil product__content-3",
        price: "18.00",
        priceOld: "12.00",
        ratingA: "fas fa-star",
        ratingB: "fas fa-star",
        ratingC: "fas fa-star",
        ratingD: "fas fa-star",
        ratingE: "fas fa-star"
    },
    {
        id: 56,
        productImg: "/assets/img/product/banner/product-banner-08.jpg",
        productTag: "Fresh & Pure",
        productTitle: "Black Coffee",
        productDesc: "From",
        productBtn: "Shop Now",
        bannerClass: "bd-product__banner-content banner-coffee product__content-3",
        price: "15.00",
        priceOld: "12.00",
        ratingA: "fas fa-star",
        ratingB: "fas fa-star",
        ratingC: "fas fa-star",
        ratingD: "fas fa-star",
        ratingE: "fas fa-star"
    },
    {
        id: 57,
        productImg: "/assets/img/product/banner/large/banner-2.jpg",
        productTag: "Price",
        productTitle: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                "Fresh and organic ",
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                "Grocery shop"
            ]
        }),
        productDesc: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                "Breakfast, Oils, Sauces, Salad, Pasta Rice. Bread ",
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                " Condiment and many more"
            ]
        }),
        productBtn: "Shop Now",
        price: "15.00",
        priceOld: "12.00",
        ratingA: "fas fa-star",
        ratingB: "fas fa-star",
        ratingC: "fas fa-star",
        ratingD: "fas fa-star",
        ratingE: "fas fa-star"
    },
    {
        id: 58,
        productImg: "/assets/img/product/banner/large/banner-1.jpg",
        productTag: "Price",
        productTitle: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                "Fresh and organic ",
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                "Grocery shop"
            ]
        }),
        productDesc: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                "Breakfast, Oils, Sauces, Salad, Pasta Rice. Bread ",
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                " Condiment and many more"
            ]
        }),
        productBtn: "Shop Now",
        price: "21.00",
        priceOld: "12.00",
        ratingA: "fas fa-star",
        ratingB: "fas fa-star",
        ratingC: "fas fa-star",
        ratingD: "fas fa-star",
        ratingE: "fas fa-star"
    },
    {
        id: 59,
        productImg: "/assets/img/product/banner/large/banner-3.jpg",
        productTag: "Price",
        productTitle: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                "Fresh and organic ",
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                "Grocery shop"
            ]
        }),
        productDesc: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                "Breakfast, Oils, Sauces, Salad, Pasta Rice. Bread ",
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                " Condiment and many more"
            ]
        }),
        productBtn: "Shop Now",
        price: "27.00",
        priceOld: "12.00",
        ratingA: "fas fa-star",
        ratingB: "fas fa-star",
        ratingC: "fas fa-star",
        ratingD: "fas fa-star",
        ratingE: "fas fa-star"
    },
    //home three hero banner end here
    {
        id: 60,
        productImg: "/assets/img/product/banner/product-banner-11.jpg",
        productTag: "Organic",
        productTitle: "Vegetables",
        productDesc: "Premium quality meat & milk",
        productBtn: "Shop Now",
        bannerClass: "bd-product__banner-content banner-meat",
        price: "16.00",
        priceOld: "24.00",
        ratingA: "fas fa-star",
        ratingB: "fas fa-star",
        ratingC: "fas fa-star",
        ratingD: "fas fa-star",
        ratingE: "fas fa-star"
    },
    {
        id: 61,
        productImg: "/assets/img/product/banner/product-banner-12.jpg",
        productTag: "Fresh",
        productTitle: "Food",
        productDesc: "Premium quality meat & milk",
        productBtn: "Shop Now",
        bannerClass: "bd-product__banner-content banner-vegetable",
        price: "10.00",
        priceOld: "24.00",
        ratingA: "fas fa-star",
        ratingB: "fas fa-star",
        ratingC: "fas fa-star",
        ratingD: "fas fa-star",
        ratingE: "fas fa-star"
    },
    {
        id: 62,
        productImg: "/assets/img/product/banner/product-banner-13.jpg",
        productTag: "Organic",
        productTitle: "Fresh Cake",
        productDesc: "Premium quality meat & milk",
        productBtn: "Shop Now",
        bannerClass: "bd-product__banner-content banner-fruits",
        price: "16.00",
        priceOld: "24.00",
        ratingA: "fas fa-star",
        ratingB: "fas fa-star",
        ratingC: "fas fa-star",
        ratingD: "fas fa-star",
        ratingE: "fas fa-star"
    },
    //browse product banner end here
    {
        id: 63,
        productImg: "/assets/img/trending/product/product-01.png",
        productTitle: "Kach Kogozi Labu",
        cartIcon: "fal fa-cart-arrow-down",
        cartEye: "fal fa-eye",
        cartHeart: "fal fa-heart",
        price: "31.00",
        priceOld: "25.00",
        ratingA: "fas fa-star",
        ratingB: "fas fa-star",
        ratingC: "fas fa-star",
        ratingD: "fas fa-star",
        ratingE: "fa-regular fa-star",
        badge: "New",
        badgeNew: true,
        badgeDiscount: false,
        badgeSale: false
    },
    {
        id: 64,
        productImg: "/assets/img/trending/product/product-02.png",
        productTitle: "Organic Banna",
        cartIcon: "fal fa-cart-arrow-down",
        cartEye: "fal fa-eye",
        cartHeart: "fal fa-heart",
        price: "24.00",
        priceOld: "12.00",
        ratingA: "fas fa-star",
        ratingB: "fas fa-star",
        ratingC: "fas fa-star",
        ratingD: "fas fa-star",
        ratingE: "fas fa-star",
        badge: "50%",
        badgeNew: false,
        badgeDiscount: true,
        badgeSale: false
    },
    {
        id: 65,
        productImg: "/assets/img/trending/product/product-03.png",
        productTitle: "Hisma Green Tea",
        cartIcon: "fal fa-cart-arrow-down",
        cartEye: "fal fa-eye",
        cartHeart: "fal fa-heart",
        price: "28.00",
        priceOld: "14.00",
        ratingA: "fas fa-star",
        ratingB: "fas fa-star",
        ratingC: "fas fa-star",
        ratingD: "fas fa-star",
        ratingE: "fas fa-star",
        badge: "50%",
        badgeNew: false,
        badgeDiscount: true,
        badgeSale: false
    },
    {
        id: 66,
        productImg: "/assets/img/trending/product/product-04.png",
        productTitle: "Fresh Payaz Milk",
        cartIcon: "fal fa-cart-arrow-down",
        cartEye: "fal fa-eye",
        cartHeart: "fal fa-heart",
        price: "31.00",
        priceOld: "25.00",
        ratingA: "fas fa-star",
        ratingB: "fas fa-star",
        ratingC: "fas fa-star",
        ratingD: "fas fa-star",
        ratingE: "fas fa-star",
        badge: "Sale",
        badgeNew: false,
        badgeDiscount: false,
        badgeSale: true
    },
    {
        id: 67,
        productImg: "/assets/img/trending/product/product-05.png",
        productTitle: "Kach Kogozi Labu",
        cartIcon: "fal fa-cart-arrow-down",
        cartEye: "fal fa-eye",
        cartHeart: "fal fa-heart",
        price: "39.00",
        priceOld: "28.00",
        ratingA: "fas fa-star",
        ratingB: "fas fa-star",
        ratingC: "fas fa-star",
        ratingD: "fas fa-star",
        ratingE: "fas fa-star",
        badge: "New",
        badgeNew: true,
        badgeDiscount: false,
        badgeSale: false
    },
    {
        id: 68,
        productImg: "/assets/img/trending/product/product-06.png",
        productTitle: "Organic Pringless",
        cartIcon: "fal fa-cart-arrow-down",
        cartEye: "fal fa-eye",
        cartHeart: "fal fa-heart",
        price: "26.00",
        priceOld: "13.00",
        ratingA: "fas fa-star",
        ratingB: "fas fa-star",
        ratingC: "fas fa-star",
        ratingD: "fas fa-star",
        ratingE: "fa-regular fa-star",
        badge: "",
        badgeNew: false,
        badgeDiscount: false,
        badgeSale: false
    },
    {
        id: 69,
        productImg: "/assets/img/trending/product/product-07.png",
        productTitle: "Hisma Green Tea",
        cartIcon: "fal fa-cart-arrow-down",
        cartEye: "fal fa-eye",
        cartHeart: "fal fa-heart",
        price: "30.00",
        priceOld: "15.00",
        ratingA: "fas fa-star",
        ratingB: "fas fa-star",
        ratingC: "fas fa-star",
        ratingD: "fas fa-star",
        ratingE: "fas fa-star",
        badge: "50%",
        badgeNew: false,
        badgeDiscount: true,
        badgeSale: false
    },
    {
        id: 70,
        productImg: "/assets/img/trending/fruits/fruits-16.png",
        productTitle: "Fresh Payaz Honey",
        cartIcon: "fal fa-cart-arrow-down",
        cartEye: "fal fa-eye",
        cartHeart: "fal fa-heart",
        price: "20.00",
        priceOld: "14.00",
        ratingA: "fas fa-star",
        ratingB: "fas fa-star",
        ratingC: "fas fa-star",
        ratingD: "fas fa-star",
        ratingE: "fa-regular fa-star",
        badge: "sale",
        badgeNew: false,
        badgeDiscount: false,
        badgeSale: false
    },
    {
        id: 71,
        productImg: "/assets/img/trending/fruits/fruits-15.png",
        productTitle: "Fresh Payaz Fruits",
        cartIcon: "fal fa-cart-arrow-down",
        cartEye: "fal fa-eye",
        cartHeart: "fal fa-heart",
        price: "16.00",
        priceOld: "13.00",
        ratingA: "fas fa-star",
        ratingB: "fas fa-star",
        ratingC: "fas fa-star",
        ratingD: "fas fa-star",
        ratingE: "fas fa-star",
        badge: "Sale",
        badgeNew: false,
        badgeDiscount: false,
        badgeSale: false
    },
    {
        id: 72,
        productImg: "/assets/img/trending/fruits/fruits-14.png",
        productTitle: "Fresh Payaz Juice",
        cartIcon: "fal fa-cart-arrow-down",
        cartEye: "fal fa-eye",
        cartHeart: "fal fa-heart",
        price: "21.00",
        priceOld: "17.00",
        ratingA: "fas fa-star",
        ratingB: "fas fa-star",
        ratingC: "fas fa-star",
        ratingD: "fas fa-star",
        ratingE: "fas fa-star",
        badge: "",
        badgeNew: false,
        badgeDiscount: false,
        badgeSale: false
    },
    {
        id: 73,
        productImg: "/assets/img/trending/fruits/fruits-09.png",
        productTitle: "Fresh Payaz Badam",
        cartIcon: "fal fa-cart-arrow-down",
        cartEye: "fal fa-eye",
        cartHeart: "fal fa-heart",
        price: "31.00",
        priceOld: "25.00",
        ratingA: "fas fa-star",
        ratingB: "fas fa-star",
        ratingC: "fas fa-star",
        ratingD: "fas fa-star",
        ratingE: "fa-regular fa-star",
        badge: "",
        badgeNew: false,
        badgeDiscount: false,
        badgeSale: false
    },
    {
        id: 74,
        productImg: "/assets/img/trending/fruits/fruits-10.png",
        productTitle: "Fresh Payaz coconut",
        cartIcon: "fal fa-cart-arrow-down",
        cartEye: "fal fa-eye",
        cartHeart: "fal fa-heart",
        price: "25.00",
        priceOld: "22.00",
        ratingA: "fas fa-star",
        ratingB: "fas fa-star",
        ratingC: "fas fa-star",
        ratingD: "fa-regular fa-star",
        ratingE: "fa-regular fa-star",
        badge: "",
        badgeNew: false,
        badgeDiscount: false,
        badgeSale: false
    },
    //shop page grid end here
    {
        id: 75,
        productImg: "/assets/img/trending/fruits/fruits-16.png",
        productTitle: "Organic Fresh Honney",
        productDesc: "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms we denounce with righteous indignation and dislike men who are so beguiled with righteous",
        cartIcon: "Add To Cart",
        cartEye: "fal fa-eye",
        cartHeart: "fal fa-heart",
        price: "25.00",
        priceOld: "22.00",
        ratingA: "fas fa-star",
        ratingB: "fas fa-star",
        ratingC: "fas fa-star",
        ratingD: "fa-regular fa-star",
        ratingE: "fa-regular fa-star",
        badge: "",
        badgeNew: false,
        badgeDiscount: false,
        badgeSale: false
    },
    {
        id: 76,
        productImg: "/assets/img/trending/fruits/fruits-09.png",
        productTitle: "Organic Fresh Nutes",
        productDesc: "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms we denounce with righteous indignation and dislike men who are so beguiled with righteous",
        cartIcon: "Add To Cart",
        cartEye: "fal fa-eye",
        cartHeart: "fal fa-heart",
        price: "12.00",
        priceOld: "24.00",
        ratingA: "fas fa-star",
        ratingB: "fas fa-star",
        ratingC: "fas fa-star",
        ratingD: "fa-regular fa-star",
        ratingE: "fa-regular fa-star",
        badge: "",
        badgeNew: false,
        badgeDiscount: false,
        badgeSale: false
    },
    {
        id: 77,
        productImg: "/assets/img/trending/fruits/fruits-10.png",
        productTitle: "Organic Fresh coconut",
        productDesc: "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms we denounce with righteous indignation and dislike men who are so beguiled with righteous",
        cartIcon: "Add To Cart",
        cartEye: "fal fa-eye",
        cartHeart: "fal fa-heart",
        price: "24.00",
        priceOld: "16.00",
        ratingA: "fas fa-star",
        ratingB: "fas fa-star",
        ratingC: "fas fa-star",
        ratingD: "fa-regular fa-star",
        ratingE: "fa-regular fa-star",
        badge: "",
        badgeNew: false,
        badgeDiscount: false,
        badgeSale: false
    },
    {
        id: 78,
        productImg: "/assets/img/trending/fruits/fruits-15.png",
        productTitle: "Organic French Vegetables",
        productDesc: "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms we denounce with righteous indignation and dislike men who are so beguiled with righteous",
        cartIcon: "Add To Cart",
        cartEye: "fal fa-eye",
        cartHeart: "fal fa-heart",
        price: "25.00",
        priceOld: "22.00",
        ratingA: "fas fa-star",
        ratingB: "fas fa-star",
        ratingC: "fas fa-star",
        ratingD: "fa-regular fa-star",
        ratingE: "fa-regular fa-star",
        badge: "",
        badgeNew: false,
        badgeDiscount: false,
        badgeSale: false
    },
    {
        id: 79,
        productImg: "/assets/img/trending/fruits/fruits-14.png",
        productTitle: "Organic Fresh juice",
        productDesc: "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms we denounce with righteous indignation and dislike men who are so beguiled with righteous",
        cartIcon: "Add To Cart",
        cartEye: "fal fa-eye",
        cartHeart: "fal fa-heart",
        price: "25.00",
        priceOld: "22.00",
        ratingA: "fas fa-star",
        ratingB: "fas fa-star",
        ratingC: "fas fa-star",
        ratingD: "fa-regular fa-star",
        ratingE: "fa-regular fa-star",
        badge: "",
        badgeNew: false,
        badgeDiscount: false,
        badgeSale: false
    },
    {
        id: 80,
        productImg: "/assets/img/trending/fruits/fruits-07.png",
        productTitle: "Organic Fresh Banana",
        productDesc: "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms we denounce with righteous indignation and dislike men who are so beguiled with righteous",
        cartIcon: "Add To Cart",
        cartEye: "fal fa-eye",
        cartHeart: "fal fa-heart",
        price: "26.00",
        priceOld: "19.00",
        ratingA: "fas fa-star",
        ratingB: "fas fa-star",
        ratingC: "fas fa-star",
        ratingD: "fa-regular fa-star",
        ratingE: "fa-regular fa-star",
        badge: "",
        badgeNew: false,
        badgeDiscount: false,
        badgeSale: false
    },
    {
        id: 81,
        productImg: "/assets/img/trending/fruits/fruits-08.png",
        productTitle: "Organic Fresh Badam",
        productDesc: "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms we denounce with righteous indignation and dislike men who are so beguiled with righteous",
        cartIcon: "Add To Cart",
        cartEye: "fal fa-eye",
        cartHeart: "fal fa-heart",
        price: "28.00",
        priceOld: "23.00",
        ratingA: "fas fa-star",
        ratingB: "fas fa-star",
        ratingC: "fas fa-star",
        ratingD: "fa-regular fa-star",
        ratingE: "fa-regular fa-star",
        badge: "",
        badgeNew: false,
        badgeDiscount: false,
        badgeSale: false
    },
    {
        id: 82,
        productImg: "/assets/img/trending/fruits/fruits-02.png",
        productTitle: "Organic Fresh Tomatto",
        productDesc: "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms we denounce with righteous indignation and dislike men who are so beguiled with righteous",
        cartIcon: "Add To Cart",
        cartEye: "fal fa-eye",
        cartHeart: "fal fa-heart",
        price: "27.00",
        priceOld: "20.00",
        ratingA: "fas fa-star",
        ratingB: "fas fa-star",
        ratingC: "fas fa-star",
        ratingD: "fa-regular fa-star",
        ratingE: "fa-regular fa-star",
        badge: "",
        badgeNew: false,
        badgeDiscount: false,
        badgeSale: false
    },
    {
        id: 83,
        productImg: "/assets/img/trending/fruits/fruits-04.png",
        productTitle: "Organic Fresh Vegetables",
        productDesc: "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms we denounce with righteous indignation and dislike men who are so beguiled with righteous",
        cartIcon: "Add To Cart",
        cartEye: "fal fa-eye",
        cartHeart: "fal fa-heart",
        price: "32.00",
        priceOld: "29.00",
        ratingA: "fas fa-star",
        ratingB: "fas fa-star",
        ratingC: "fas fa-star",
        ratingD: "fa-regular fa-star",
        ratingE: "fa-regular fa-star",
        badge: "",
        badgeNew: false,
        badgeDiscount: false,
        badgeSale: false
    },
    //shop page list end here
    {
        id: 84,
        productImg: "/assets/img/product/details/1.png",
        productTitle: "Organic Fresh Vegetables",
        productDesc: "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms we denounce with righteous indignation and dislike men who are so beguiled with righteous",
        cartIcon: "Add To Cart",
        cartEye: "fal fa-eye",
        cartHeart: "fal fa-heart",
        price: "32.00",
        priceOld: "29.00",
        ratingA: "fas fa-star",
        ratingB: "fas fa-star",
        ratingC: "fas fa-star",
        ratingD: "fa-regular fa-star",
        ratingE: "fa-regular fa-star",
        badge: "",
        badgeNew: false,
        badgeDiscount: false,
        badgeSale: false
    },
    {
        id: 85,
        productImg: "/assets/img/product/details/2.png",
        productTitle: "Organic Fresh Vegetables",
        productDesc: "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms we denounce with righteous indignation and dislike men who are so beguiled with righteous",
        cartIcon: "Add To Cart",
        cartEye: "fal fa-eye",
        cartHeart: "fal fa-heart",
        price: "32.00",
        priceOld: "29.00",
        ratingA: "fas fa-star",
        ratingB: "fas fa-star",
        ratingC: "fas fa-star",
        ratingD: "fa-regular fa-star",
        ratingE: "fa-regular fa-star",
        badge: "",
        badgeNew: false,
        badgeDiscount: false,
        badgeSale: false
    },
    {
        id: 86,
        productImg: "/assets/img/product/details/3.png",
        productTitle: "Organic Fresh Vegetables",
        productDesc: "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms we denounce with righteous indignation and dislike men who are so beguiled with righteous",
        cartIcon: "Add To Cart",
        cartEye: "fal fa-eye",
        cartHeart: "fal fa-heart",
        price: "32.00",
        priceOld: "29.00",
        ratingA: "fas fa-star",
        ratingB: "fas fa-star",
        ratingC: "fas fa-star",
        ratingD: "fa-regular fa-star",
        ratingE: "fa-regular fa-star",
        badge: "",
        badgeNew: false,
        badgeDiscount: false,
        badgeSale: false
    },
    {
        id: 87,
        productImg: "/assets/img/product/details/4.png",
        productTitle: "Organic Fresh Vegetables",
        productDesc: "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms we denounce with righteous indignation and dislike men who are so beguiled with righteous",
        cartIcon: "Add To Cart",
        cartEye: "fal fa-eye",
        cartHeart: "fal fa-heart",
        price: "32.00",
        priceOld: "29.00",
        ratingA: "fas fa-star",
        ratingB: "fas fa-star",
        ratingC: "fas fa-star",
        ratingD: "fa-regular fa-star",
        ratingE: "fa-regular fa-star",
        badge: "",
        badgeNew: false,
        badgeDiscount: false,
        badgeSale: false
    },
    {
        id: 88,
        productImg: "/assets/img/product/details/5.png",
        productTitle: "Organic Fresh Vegetables",
        productDesc: "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms we denounce with righteous indignation and dislike men who are so beguiled with righteous",
        cartIcon: "Add To Cart",
        cartEye: "fal fa-eye",
        cartHeart: "fal fa-heart",
        price: "32.00",
        priceOld: "29.00",
        ratingA: "fas fa-star",
        ratingB: "fas fa-star",
        ratingC: "fas fa-star",
        ratingD: "fa-regular fa-star",
        ratingE: "fa-regular fa-star",
        badge: "",
        badgeNew: false,
        badgeDiscount: false,
        badgeSale: false
    },
    {
        id: 89,
        productImg: "/assets/img/product/details/6.png",
        productTitle: "Organic Fresh Vegetables",
        productDesc: "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms we denounce with righteous indignation and dislike men who are so beguiled with righteous",
        cartIcon: "Add To Cart",
        cartEye: "fal fa-eye",
        cartHeart: "fal fa-heart",
        price: "32.00",
        priceOld: "29.00",
        ratingA: "fas fa-star",
        ratingB: "fas fa-star",
        ratingC: "fas fa-star",
        ratingD: "fa-regular fa-star",
        ratingE: "fa-regular fa-star",
        badge: "",
        badgeNew: false,
        badgeDiscount: false,
        badgeSale: false
    }
];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (productList);


/***/ })

};
;