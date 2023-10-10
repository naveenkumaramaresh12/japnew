import Link from 'next/link';
import React from 'react';
import blogItemsList from '../../data/blogs';

const BlogSection = () => {
    return (
        <section className="bd-news__area pt-125 pb-65">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="bd-section__title-wrapper text-center mb-55">
                            <span className="bd-sub__title">We are available on</span>
                            <h2 className="bd-section__title mb-30">Playstore & Apple Store</h2>
                        </div>
                    </div>
                </div>
                
                    <div className="row">
                        
                            <div className="col-xl-6 col-lg-6 col-md-6" >
                                <div className="bd-news__item mb-60">
                                    <div className="bd-news__thumb w-img">
                                    <a href="#"><img src="/assets/img/about/playstore.png" alt="about-icon"/></a>
                                    </div>
                                   
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6" >
                                <div className="bd-news__item mb-60">
                                    <div className="bd-news__thumb w-img">
                                    <a href="#"><img src="/assets/img/about/applestore.jpg"  alt="about-icon"/></a>
                                    </div>
                                   
                                </div>
                            </div>
                      
                    </div>
                
            </div>
        </section>
    );
};

export default BlogSection;