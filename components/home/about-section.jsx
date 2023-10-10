import Link from 'next/link';
import React from 'react';

const AboutSection = () => {
    return (
        <section className="bd-about__area grey-bg p-relative z-index-1 pt-130 pb-70">
            <div className="container">
                <div className="bd-about__bg-wrapper p-relative">
                    <img className="bd-about__bg-shape " src="/assets/img/about/about-big-shape.png" alt="about-big-shape"/>
                </div>
                <div className="row align-items-center">
                    <div className="col-xl-5 col-lg-6">
                        <div className="bd-about__content-wrapper mb-60">
                            <div className="bd-section__title-wrapper mb-35">
                                <span className="bd-sub__title">About Us</span>
                                <h2 className="bd-section__title mb-35" >We believe in pure and organic quality</h2>
                                <p>JVK Organics takes pride in delivering a wide variety of fresh and certified organic vegetables, fruits, eggs, and meats right to your doorstep. The produce offered by JVK Organics comes from their very own ICCOAs JVK farm located in Denkanikottai, as well as from dedicated farmers in the surrounding areas. By sourcing their produce directly from their own farm and local farmers, JVK Organics ensures that their customers receive the highest quality organic products.</p>
                            </div>
                            <div className="bd-about__content">
                                <div className="bd-about__features">
                                    <div className="bd-adbout__icon">
                                        <img src="/assets/img/about/about-icon.png" alt="about-icon"/>
                                    </div>
                                    <div className="bd-about__text">
                                        <h4>100% Healthy Quality</h4>
                                        <p>The stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level.</p>
                                    </div>
                                </div>
                                <div className="bd-about__action">
                                    <Link href="/about"><a className="bd-bn__btn-1">About Us</a></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 offset-xl-1 col-lg-6">
                    <div className="container plate1">
<div className="myimgplate">
<a href="shop?category=cereals"><img src="/assets/img/about/1-min.png" alt="about-icon"/></a>
</div>
<div className="myimgplate">
<a href="shop?category=vegetables"><img src="/assets/img/about/2-min.png" alt="about-icon"/></a>
</div>
<div className="myimgplate">
<a href="shop?category=pulses"><img src="/assets/img/about/4-min.png" alt="about-icon"/></a>
</div>
<div className="myimgplate">
<a href="shop?category=fruits"><img src="/assets/img/about/3-min.png" alt="about-icon"/></a>
</div>
<img src="/assets/img/about/5-min.png" className="plateinside" alt="about-icon"/>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;