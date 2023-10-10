"use strict";
exports.id = 8230;
exports.ids = [8230];
exports.modules = {

/***/ 8230:
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
/* harmony import */ var _components_common_sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1187);
/* harmony import */ var _components_common_sidebar_cart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2213);
/* harmony import */ var _components_common_sidebar_wishlist__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7558);
/* harmony import */ var _components_elements_icons_cart_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7443);
/* harmony import */ var _components_elements_icons_wishlist_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5164);
/* harmony import */ var _hooks_use_cart_info__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1542);
/* harmony import */ var _hooks_use_context__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(553);
/* harmony import */ var _header_middle_two__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9970);
/* harmony import */ var _navmenu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1099);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_common_sidebar__WEBPACK_IMPORTED_MODULE_3__, _components_common_sidebar_cart__WEBPACK_IMPORTED_MODULE_4__, _components_common_sidebar_wishlist__WEBPACK_IMPORTED_MODULE_5__, _hooks_use_context__WEBPACK_IMPORTED_MODULE_9__]);
([_components_common_sidebar__WEBPACK_IMPORTED_MODULE_3__, _components_common_sidebar_cart__WEBPACK_IMPORTED_MODULE_4__, _components_common_sidebar_wishlist__WEBPACK_IMPORTED_MODULE_5__, _hooks_use_context__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const HeaderTwo = ()=>{
    const { setShowSidebar  } = (0,_hooks_use_context__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)();
    const { 0: openCart , 1: setOpenCart  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: openWishlist , 1: setOpenWishlist  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { quantity  } = (0,_hooks_use_cart_info__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)();
    // Sticky Menu Area start
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        window.addEventListener("scroll", sticky);
        return ()=>{
            window.removeEventListener("scroll", sticky);
        };
    });
    const sticky = (e)=>{
        const header = document.querySelector("#header-sticky");
        const scrollTop = window.scrollY;
        scrollTop >= 80 ? header.classList.add("header-sticky") : header.classList.remove("header-sticky");
    };
    // Sticky Menu Area End
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_header_middle_two__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        id: "header-sticky",
                        className: "bd-header__bottom-area-3 transparent__header",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "container",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "row align-items-center",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-xxl-2 col-xl-2 col-lg-3 col-md-6 col-6",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "bd-header__logo-3",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                href: "/",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        src: "/assets/img/logo/japlogo.png",
                                                        alt: "logo"
                                                    })
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-xxl-5 col-xl-5 col-lg-6 d-none d-lg-block",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "bd-header__left-3",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "main-menu d-none d-none d-lg-block",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
                                                    id: "mobile-menu",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_navmenu__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {})
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-xxl-5 col-xl-5 col-lg-3 col-md-6 col-6",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "bd-header__right header__right-3",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "bd-action__filter-wrapper d-none d-xl-block",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "bd-action__filter p-relative",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                                            action: "#",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                    type: "text",
                                                                    placeholder: "Search products..."
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                        className: "flaticon-magnifiying-glass"
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "bd-action__cart-list list-3",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "bd-action__item",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "bd-action__cart-wrapper",
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "bd-action__cart-icon",
                                                                    onClick: ()=>setOpenCart(true),
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            className: "bd-cart-mini-btn",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_elements_icons_cart_icon__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {})
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            className: "bd-action__item-number cart-count",
                                                                            children: quantity
                                                                        })
                                                                    ]
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "bd-action__item d-none",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "bd-action__wishlist",
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "bd-action__wistlist-icon",
                                                                    onClick: ()=>setOpenWishlist(true),
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            className: "bd-cart-mini-btn",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_elements_icons_wishlist_icon__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {})
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            className: "bd-action__item-number wishlist-count",
                                                                            children: quantity
                                                                        })
                                                                    ]
                                                                })
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "header__hamburger d-flex d-lg-none",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                        type: "button",
                                                        className: "hamburger-btn",
                                                        onClick: ()=>setShowSidebar(true),
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                            className: "hamburger-icon",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {}),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {}),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {})
                                                            ]
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_sidebar__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_sidebar_cart__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                openCart: openCart,
                setOpenCart: setOpenCart
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_sidebar_wishlist__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                openWishlist: openWishlist,
                setOpenWishlist: setOpenWishlist
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeaderTwo);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;