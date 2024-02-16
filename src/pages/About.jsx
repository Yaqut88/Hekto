import './/About.scss'
import MiniNavbar from '../components/MiniNavbar'
import NavbarTop from '../components/NavbarTop'
import Image from '../components/Image'
import Footer from '../components/Footer'
import FooterBottom from '../components/FooterBottom'
import { Link } from 'react-router-dom'




const About = () => {
    return (
        <div>
            <MiniNavbar />
            <NavbarTop />

            <div className="container Breadcrumb">
                <div className="title">
                    About us
                </div>
                <div className="row">
                    <div className="col-12 breadcrumbItems">
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                                <li class="breadcrumb-item"><Link to="/">Pages</Link></li>
                                <li class="breadcrumb-item active" aria-current="page">About page</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>

<div className="container mt-5 mb-5 aboutSection">
    <div className="row">
        <div className="col-lg-6 col-md-12 col-sm-12 aboutSection1">
        <img src={require("../components/img/Group 73.png")} alt="" style={{marginTop: '22px'}} />

        </div>
        <div className="col-lg-6 col-md-12 col-sm-12 aboutSection2">
<div className='aboutTitle'>
    <p>Know About Our Ecommerce  <br/>
Business, History
</p>

</div>
<div className="aboutTitle2">
    <p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
 Mattis neque ultrices mattis aliquam, malesuada diam est. 
 Malesuada sem tristique amet 
erat vitae eget dolor lobortis. Accumsan faucibus vitae
 lobortis quis bibendum quam.
</p>
</div>
<Link to="/contact"><button>Contact us</button></Link>
        </div>

    </div>
</div>


            <div className="container aboutContent1">
            <div className="title">
                What Shopex Offer
            </div>
                <div className="row aboutContent">
                    <div className="col-lg-3 col-md-6 col-12 shopex">
                        <div className="cardImage">
                            <img src={require("../components/img/Group (1).png")} alt="" style={{marginTop: '22px'}} />
                        </div>
                        <div className="cardTime">
                            24/7 Support
                        </div>
                        <div className="cardText">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12 shopex">
                        <div className="cardImage">
                            <img src={require("../components/img/cashback 1.png")} alt="" />
                        </div>
                        <div className="cardTime">
                            24/7 Support
                        </div>
                        <div className="cardText">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
                        </div>
                    </div>
                     <div className="col-lg-3 col-md-6 col-12 shopex">
                        <div className="cardImage">
                            <img src={require("../components/img/premium-quality 1.png")} alt="" />
                        </div>
                        <div className="cardTime">
                            24/7 Support
                        </div>
                        <div className="cardText">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
                        </div>
                    </div> 
                    <div className="col-lg-3 col-md-6 col-12 shopex">
                        <div className="cardImage">
                            <img src={require("../components/img/24-hours-support 1.png")} alt="" />
                        </div>
                        <div className="cardTime">
                            24/7 Support
                        </div>
                        <div className="cardText">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
                        </div>
                    </div>
                </div>
            </div>



          
            <Image />

            <Footer />
            <FooterBottom />

        </div>
    )
}

export default About;