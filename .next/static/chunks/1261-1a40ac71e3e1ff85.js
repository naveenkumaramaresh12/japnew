(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1261],{6597:function(e,s,a){"use strict";var t=a(5893),n=a(1664),c=a.n(n);a(7294);s.Z=function(e){var s=e.breadHome,a=e.breadMenu;return(0,t.jsx)("div",{className:"breadcrumb-area pt-10 pb-10",children:(0,t.jsx)("div",{className:"container",children:(0,t.jsx)("div",{className:"row",children:(0,t.jsx)("div",{className:"col-12",children:(0,t.jsxs)("div",{className:"breadcrumb__list",children:[(0,t.jsx)("span",{children:(0,t.jsx)(c(),{href:"/",children:(0,t.jsx)("a",{children:s})})}),(0,t.jsx)("span",{className:"dvdr",children:(0,t.jsx)("i",{className:"fa-regular fa-angle-right"})}),(0,t.jsx)("span",{children:a})]})})})})})}},1261:function(e,s,a){"use strict";a.d(s,{Z:function(){return v}});var t=a(7568),n=a(4051),c=a.n(n),i=a(5893),r=(a(1664),a(7294)),d=a(6597),l=a(1573),o=a(719),u=a(8116),p=(a(933),a(9473)),h=a(4071),m=a(3921),x=a(6154),j=a(1163),v=function(e){var s=e.item,a=((0,p.v9)((function(e){return e.products.product})).product,(0,r.useState)(null)),n=a[0],v=a[1],f=(0,r.useState)((null===s||void 0===s?void 0:s.quantity)||0),w=(f[0],f[1],(0,p.I0)()),b=((0,p.v9)((function(e){return e.cart.cartProducts})).cartProducts,(0,r.useState)([])),_=(b[0],b[1]),N=(0,r.useState)({}),g=N[0],k=N[1];(0,r.useEffect)((function(){var e=function(){var e=(0,t.Z)(c().mark((function e(){var s;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.Z.get("https://jap.digisole.in/api/v1/product/main/paginate");case 3:s=e.sent,_(s.data),console.log("dsf",s.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error("Failed to fetch products:",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[]);var C=(0,j.useRouter)();(0,r.useEffect)((function(){var e=function(){var e=(0,t.Z)(c().mark((function e(s){var a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.Z.get("https://jap.digisole.in/api/v1/product/main/detail/".concat(s));case 3:a=e.sent,k(a.data.product),console.log("single",a.data.product),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error("Failed to fetch product details:",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(s){return e.apply(this,arguments)}}(),s=C.query.slug;s&&e(s)}),[C.query.slug]);return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("main",{children:[(0,i.jsx)(d.Z,{breadHome:"Home",breadMenu:"Shop Details"}),(0,i.jsx)("div",{className:"bd__shop-details-area pt-115 pb-75",children:(0,i.jsx)("div",{className:"container small-container",children:(0,i.jsx)("div",{className:"row",children:(0,i.jsx)("div",{className:"col-lg-12 col-md-12",children:(0,i.jsx)("div",{className:"bd__shop-details-inner mb-55",children:(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("div",{className:"col-md-6",children:(0,i.jsxs)("div",{className:"product-details__thumb-inner p-relative",children:[(0,i.jsx)("div",{className:"bd__shop-details-img-gallery mb-30",children:(0,i.jsx)("div",{className:"product-details-active swiper-container",children:(0,i.jsx)("div",{className:"swiper-wrappers",children:g&&(0,i.jsx)(o.tq,{thumbs:{swiper:n&&!n.destroyed?n:null},loop:!0,spaceBetween:0,slidesPerView:1,freeMode:!1,watchSlidesProgress:!0,modules:[u.W_,u.Qr,u.Rv,u.o3],navigation:{clickable:!0,nextEl:".product-details__button-next",prevEl:".product-details__button-prev"},children:(0,i.jsx)(o.o5,{children:(0,i.jsx)("div",{className:"swiper-slides",children:(0,i.jsx)("div",{className:"bd-product__details-large-img w-img",children:(0,i.jsx)("img",{src:g.featured_image_link,alt:"product-details-img"})})})})})})})}),(0,i.jsx)("div",{className:"bd-product__details-small-img",children:(0,i.jsx)("div",{className:"swiper-container product-details-nav",children:(0,i.jsx)("div",{className:"swiper-wrappers",children:(0,i.jsx)(o.tq,{loop:!0,spaceBetween:0,slidesPerView:5,onSwiper:v,modules:[u.Qr,u.Rv,u.o3],watchSlidesProgress:!1,children:g&&(0,i.jsx)(o.o5,{children:(0,i.jsx)("div",{className:"swiper-slides m-img",children:(0,i.jsx)("div",{className:"product-small__img",children:(0,i.jsx)("img",{src:g.featured_image_link,alt:"product-thumb"})})})})})})})})]})}),(0,i.jsx)("div",{className:"col-md-6",children:(0,i.jsxs)("div",{className:"modal-product-info modal-product__details-content",children:[(0,i.jsx)("h3",{children:g.name}),(0,i.jsxs)("div",{className:"product-price",children:[(0,i.jsxs)("span",{children:["Rs.",g.discounted_price]}),(0,i.jsxs)("del",{children:["Rs.",g.price]})]}),(0,i.jsxs)("span",{children:["Weight",g.weight]}),(0,i.jsx)("div",{className:"modal-product-meta bd__product-details-menu-1"}),(0,i.jsx)("div",{className:"product-quantity-cart mb-25",children:(0,i.jsxs)("button",{type:"button",className:"cart-btn bd-fill__btn","data-toggle":"tooltip","data-placement":"top",title:"Add to Cart",onClick:function(){return w((0,h.Vu)(s))},children:[(0,i.jsx)("i",{className:"fal fa-cart-arrow-down"}),"Add to Cart"]})},s),(0,i.jsx)("div",{className:"bd__product-details-menu-3",children:(0,i.jsx)("ul",{children:(0,i.jsx)("li",{children:(0,i.jsxs)("span",{className:"wishlist-btn",title:"Wishlist",onClick:function(){return w((0,m.CZ)(s))},children:[(0,i.jsx)("i",{className:"far fa-heart"}),(0,i.jsx)("span",{children:"Add to Wishlist"})]})})})}),(0,i.jsx)("div",{className:"bd__social-media",children:(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:"Share:"}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{title:"Facebook",onClick:function(){var e=window.location.href,s="Check out this product: ".concat(g.name," - ").concat(e);window.open("https://www.facebook.com/sharer/sharer.php?u=".concat(encodeURIComponent(e),"&quote=").concat(encodeURIComponent(s)))},children:(0,i.jsx)("i",{className:"fab fa-facebook-f"})})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{title:"Instagram",onClick:function(){var e=window.location.href,s="Check out this product: ".concat(g.name," - ").concat(e);alert("To share on Instagram, open the app and paste the following text in a new post:\n\n"+s)},children:(0,i.jsx)("i",{className:"fab fa-instagram"})})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{title:"Whatsapp",onClick:function(){var e=window.location.href,s="Check out this product: ".concat(g.name," - ").concat(e);/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)?window.open("whatsapp://send?text=".concat(encodeURIComponent(s))):window.open("https://web.whatsapp.com/send?text=".concat(encodeURIComponent(s)))},children:(0,i.jsx)("i",{className:"fab fa-whatsapp"})})})]})})]})})]})})})})})}),(0,i.jsx)("div",{className:"bd-related-Product__area mb-95",children:(0,i.jsx)("div",{className:"small-container container",children:(0,i.jsx)(l.Z,{trending_product_title:"Related Product"})})})]})})}},933:function(){},1163:function(e,s,a){e.exports=a(387)}}]);