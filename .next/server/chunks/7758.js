"use strict";
exports.id = 7758;
exports.ids = [7758];
exports.modules = {

/***/ 7758:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ blog_details_area)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/blog/blog-sidebar-about.jsx
var blog_sidebar_about = __webpack_require__(8385);
// EXTERNAL MODULE: ./components/blog/blog-sidebar-blogs.jsx
var blog_sidebar_blogs = __webpack_require__(4839);
// EXTERNAL MODULE: ./components/blog/blog-sidebar-category.jsx
var blog_sidebar_category = __webpack_require__(1377);
// EXTERNAL MODULE: ./components/blog/blog-sidebar-search.jsx
var blog_sidebar_search = __webpack_require__(4024);
// EXTERNAL MODULE: ./components/blog/blog-sidebar-tags.jsx
var blog_sidebar_tags = __webpack_require__(5055);
;// CONCATENATED MODULE: ./components/blog-details/blog-comment-form.jsx


const BlogCommentForm = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "bd-postbox__contact",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                children: "Leave a Comment"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("form", {
                action: "#",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "row",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-xxl-6 col-xl-6 col-lg-6",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "bd-postbox__singel-input",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    type: "text",
                                    placeholder: "Your Name"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-xxl-6 col-xl-6 col-lg-6",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "bd-postbox__singel-input",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    type: "email",
                                    placeholder: "Your Email"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-xxl-12",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "bd-postbox__singel-input",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    type: "text",
                                    placeholder: "Website"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-xxl-12",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "bd-postbox__singel-input",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                                    placeholder: "Enter your comment ..."
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-xxl-12",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "bd-postbox__check d-flex align-items-center mb-20",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        className: "e-check-input",
                                        type: "checkbox",
                                        id: "e-agree"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                        className: "e-check-label",
                                        htmlFor: "e-agree",
                                        children: "Save my name, email, and website in this browser for the next time I comment."
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-xxl-12",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "bd-postbox__btn",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    type: "submit",
                                    className: "bd-fill__btn",
                                    children: "Post Comment"
                                })
                            })
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const blog_comment_form = (BlogCommentForm);

;// CONCATENATED MODULE: ./components/blog-details/blog-comments.jsx


const BlogComments = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "bd-postbox__comment mb-55 mt-30",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                className: "postbox__comment-title",
                children: "3 Comments"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "bd-postbox__comment-box d-flex",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "bd-postbox__comment-avater mr-30",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: "/assets/img/news/comment/comments-1.png",
                                        alt: "comments-img"
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "bd-postbox__comment-info",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "bd-postbox__comment-avater-info d-flex justify-content-between",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "bd-postbox__comment-name",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                            children: "Rosalina Kelian"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                            className: "post-meta",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "fa-light fa-calendar-days"
                                                                }),
                                                                " 24th March 2022"
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "bd-postbox__comment-reply",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                        href: "#",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fa-solid fa-share"
                                                            }),
                                                            " Reply"
                                                        ]
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "bd-postbox__comment-text",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: "For all the assets is hard and time-consuming technical work. And, of course, the result needs to be seamless and delightful \u2014 dare we say, even fun \u2014 to develop and maintain. Regardless of whether you\u2019re ing up a storefront for a new merchant."
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: "children",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "bd-postbox__comment-box d-flex mb-40",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "bd-postbox__comment-avater mr-30",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: "/assets/img/news/comment/comments-2.png",
                                        alt: "comments-img"
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "bd-postbox__comment-info",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "bd-postbox__comment-avater-info d-flex justify-content-between",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "bd-postbox__comment-name",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                            children: "Rosalina Kelian"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                            className: "post-meta",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "fa-light fa-calendar-days"
                                                                }),
                                                                " 24th March 2022"
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "bd-postbox__comment-reply",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                        href: "#",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fa-solid fa-share"
                                                            }),
                                                            " Reply"
                                                        ]
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "bd-postbox__comment-text",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: "For all the assets is hard and time-consuming technical work. And, of course, the result needs to be seamless and delightful \u2014 dare we say, even fun \u2014 to develop and maintain. Regardless of whether you\u2019re ing up a storefront for a new merchant."
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "bd-postbox__comment-box d-flex mb-40",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "bd-postbox__comment-avater mr-30",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: "/assets/img/news/comment/comments-3.png",
                                        alt: "comments-img"
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "bd-postbox__comment-info",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "bd-postbox__comment-avater-info d-flex justify-content-between",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "bd-postbox__comment-name",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                            children: "Arista Williamson"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                            className: "post-meta",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "fa-light fa-calendar-days"
                                                                }),
                                                                " 24th March 2022"
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "bd-postbox__comment-reply",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                        href: "#",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fa-solid fa-share"
                                                            }),
                                                            " Reply"
                                                        ]
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "bd-postbox__comment-text",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: "For all the assets is hard and time-consuming technical work. And, of course, the result needs to be seamless and delightful \u2014 dare we say, even fun \u2014 to develop and maintain. Regardless of whether you\u2019re ing up a storefront for a new merchant."
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
/* harmony default export */ const blog_comments = (BlogComments);

;// CONCATENATED MODULE: ./components/blog-details/blog-details-area.jsx










const BlogDetailsArea = ({ item  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "blog-area pt-115 pb-100",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container small-container",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-xl-8 col-lg-12",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "blog-main-wrapper mb-30",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "row",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "blog-wrapper position-relative blog-details-wrapper mb-30",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "blog-thumb ",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: item.img,
                                                    alt: "blog-img"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "blog-content-wrapper",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "blog-meta",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "blog-date",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "fa-solid fa-calendar-days"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        children: item.date
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "blog-user",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "fa-regular fa-user"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        children: item.metaAuthor
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "blog-comrent",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "fal fa-comments"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        children: item?.comment
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "blog-content",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                                children: item.title
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                children: "When it comes to designing better links and sending better emails, Slava Shestopalov has a few tips on how to improve your website\u2019s experience while accessibility in mind. There are so many websites out there that have not considered the overall usability of their visually impaired users. The participants will get general ideas of the land management system of business. Everyone must work, but for many of us that job isn\u2019t just a paycheck, it\u2019s an opportunity to express ourselves and make something better. Entrepreneurs and go-getters often feel as if they carry the weight of an entire organization on their backs, and therefore could always use a little extra motivation."
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("blockquote", {
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                        children: "Tosser argy-bargy mush loo at public school Elizabeth up the duff buggered chinwag on your bike mate don\u2019t get shirty with me super, Jeffrey bobby Richard cheesed off spend a penny a load of old tosh blag horse."
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                        className: "mb-0",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("cite", {
                                                                            children: "Orgado"
                                                                        })
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                children: "Cheeky bugger cracking goal starkers lemon squeezy lost the plot pardon me no biggie the BBC burke gosh boot so I said wellies, zonked a load of old tosh bodge barmy skive off he legged it morish spend a penny my good sir wind up hunky-dory. Naff grub elizabeth cheesed off don\u2019t get shirty with me arse over tit mush a blinding shot young delinquent bloke boot blatant."
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "blog-thumb mb-25",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                    src: "/assets/img/news/news-02.jpg",
                                                                    alt: "blog-img"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                                children: "Adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore."
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                children: "The participants will get general ideas of the land management system of business. Everyone must work, but for many of us that job isn\u2019t just a paycheck, it\u2019s an opportunity to express ourselves and make something better. Entrepreneurs and go-getters often feel as if they carry the weight of an entire organization on their backs, and therefore could always use a little extra motivation."
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                children: "When it comes to designing better links and sending better emails, Slava Shestopalov has a few tips on how to improve your website\u2019s experience while accessibility in mind. There are so many websites out there that have not considered the overall usability of their visually impaired users."
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "blog__details__tag tagcloud",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        children: "Post Tags : "
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                        href: "/blog",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                            children: "Garden"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                        href: "/blog",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                            children: "Vagitable"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                        href: "/blog",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                            children: "Planting"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                        href: "/blog",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                            children: "Garden care"
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(blog_comments, {}),
                                /*#__PURE__*/ jsx_runtime_.jsx(blog_comment_form, {})
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-xl-4 col-lg-8 col-md-8",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "sidebar-widget-wrapper mb-30",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(blog_sidebar_search/* default */.Z, {}),
                                /*#__PURE__*/ jsx_runtime_.jsx(blog_sidebar_about/* default */.Z, {}),
                                /*#__PURE__*/ jsx_runtime_.jsx(blog_sidebar_blogs/* default */.Z, {}),
                                /*#__PURE__*/ jsx_runtime_.jsx(blog_sidebar_category/* default */.Z, {}),
                                /*#__PURE__*/ jsx_runtime_.jsx(blog_sidebar_tags/* default */.Z, {})
                            ]
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const blog_details_area = (BlogDetailsArea);


/***/ })

};
;