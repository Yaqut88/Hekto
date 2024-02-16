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



          
            <Image />

            <Footer />
            <FooterBottom />

        </div>
    )
}

export default About;