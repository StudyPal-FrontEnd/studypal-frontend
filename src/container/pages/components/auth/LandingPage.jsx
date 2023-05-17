import React from "react";
import { Link, useNavigate } from "react-router-dom";
import brandImg from "../../../../assets/images/svg/brand.svg"
import banner from "../../../../assets/images/svg/banner.svg"
import '../../styles/landingPage.css';




const LandingPage = () => {
    const navigate = useNavigate(); 
    return (
        <div className="section">
            <header>
                <div className="nav-brand">
                    <img className="brand" src={brandImg} alt="brand" />
                </div>
                <nav>
                    <ul>
                        <li><Link to="/">About</Link></li>
                        <li><Link to="/">Offer</Link></li>
                        <li><Link to="/">Contact</Link></li>
                    </ul>
                </nav>
            </header>
            <main>
                <article>
                    <h3>StudyPal help organize, schedule and track studying activities and aid learning capacity.</h3>
                    <button className="banner-btn" onClick={() => navigate('/login')}>Get Started</button>
                </article>
                <aside>
                <img className="brand" src={banner} alt="banner" />
                </aside>

            </main>

                

        </div>

    )
}

export default LandingPage;