
import './/ShopPage.scss';
import MiniNavbar from '../components/MiniNavbar';
import NavbarTop from '../components/NavbarTop';
import Image from '../components/Image';
import Footer from '../components/Footer';
import FooterBottom from '../components/FooterBottom';
import { Link } from 'react-router-dom';

// import { FiShoppingCart } from 'react-icons/fi'; 
// import FaRegHeart from 'react-icons/fi';
// import FaSearchPlus from 'react-icons/fa';

const ShopPage = () => {
    return (
        <div>
            <MiniNavbar />
            <NavbarTop />

            <div className="container Breadcrumb">
                <div className="title">
                    Shop Grid Default
                </div>
                <div className="row">
                    <div className="col-12 breadcrumbItems">
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                                <li class="breadcrumb-item"><Link to="/shoppage">Pages</Link></li>
                                <li class="breadcrumb-item active" aria-current="page">Shop grid default</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>



            <div className="ShopPage">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                        <div className="title">
                    <p>E-commerce Acsessories & Fashion item</p>
                    <span>About 9,620 results (0.62 seconds)</span>
                </div>
                        </div>
                    </div>
                </div>



                <div className="container">

                <div className="row shopProduct">
                        <div className="col-lg-3  col-md-6 col-sm-12 shopSection">
                            <div className="img">
                                <img src={require("../components/img/image 9.png")} alt="" />
                            </div>

                            <div className="shopSectionTitle">
                                <div className="name">
                                    Vel elit euismod
                                </div>
                                <div className="colourImg">
                                    <img src={require("../components/img/Group 44.png")} alt="" />
                                </div>
                                <div className='productsPrice'>
                                    <span> $26.00</span> &nbsp;
                                    <span className='nextPrice'> $42.00</span>
                                </div>

                            </div>




                        </div>

                        <div className="col-lg-3  col-md-6 col-sm-12 shopSection">
                            <div className="img">

                                <img src={require("../components/img/image 1165.png")} alt="" />

                            </div>

                            <div className="shopSectionTitle">
                                <div className="name">
                                Ultricies condimentum imperdiet
                                </div>
                                <div className="colourImg">
                                    <img src={require("../components/img/Group 44.png")} alt="" />
                                </div>
                                <div className='productsPrice'>
                                    <span> $26.00</span> &nbsp;
                                    <span className='nextPrice'> $42.00</span>
                                </div>

                            </div>




                        </div>

                        <div className="col-lg-3  col-md-6 col-sm-12 shopSection">
                            <div className="img">

                                <img src={require("../components/img/image 1173.png")} alt="" />

                            </div>

                            <div className="shopSectionTitle">
                                <div className="name">
                                    Vitae suspendisse sed
                                </div>
                                <div className="colourImg">
                                    <img src={require("../components/img/Group 44.png")} alt="" />
                                </div>
                                <div className='productsPrice'>
                                    <span> $26.00</span> &nbsp;
                                    <span className='nextPrice'> $42.00</span>
                                </div>

                            </div>
                        </div>

                        <div className="col-lg-3  col-md-6 col-sm-12 shopSection">
                            <div className="img">

                                <img src={require("../components/img/10011 1.png")} alt="" />

                            </div>

                            <div className="shopSectionTitle">
                                <div className="name">
                                    Sed at fermentum
                                </div>
                                <div className="colourImg">
                                    <img src={require("../components/img/Group 44.png")} alt="" />
                                </div>
                                <div className='productsPrice'>
                                    <span> $26.00</span> &nbsp;
                                    <span className='nextPrice'> $42.00</span>
                                </div>

                            </div>

                        </div>

                    </div>

                    <div className="row mt-5">
                        <div className="col-lg-3  col-md-6 col-sm-12 shopSection">
                            <div className="img">
                                <img src={require("../components/img/unnamed 1.png")} alt="" />
                            </div>

                            <div className="shopSectionTitle">
                                <div className="name">
                                    Fusce pellentesque at
                                </div>
                                <div className="colourImg">
                                    <img src={require("../components/img/Group 44.png")} alt="" />
                                </div>
                                <div className='productsPrice'>
                                    <span> $26.00</span> &nbsp;
                                    <span className='nextPrice'> $42.00</span>
                                </div>

                            </div>




                        </div>

                        <div className="col-lg-3  col-md-6 col-sm-12 shopSection">
                            <div className="img">

                                <img src={require("../components/img/1562173100-movado-connect-1562173094 2.png")} alt="" />

                            </div>

                            <div className="shopSectionTitle">
                                <div className="name">
                                    Vestibulum magna lareet
                                </div>
                                <div className="colourImg">
                                    <img src={require("../components/img/Group 44.png")} alt="" />
                                </div>
                                <div className='productsPrice'>
                                    <span> $26.00</span> &nbsp;
                                    <span className='nextPrice'> $42.00</span>
                                </div>

                            </div>




                        </div>

                        <div className="col-lg-3  col-md-6 col-sm-12 shopSection">
                            <div className="img">

                                <img src={require("../components/img/purepng 1.png")} alt="" />

                            </div>

                            <div className="shopSectionTitle">
                                <div className="name">
                                    Sollicitudin amet orci
                                </div>
                                <div className="colourImg">
                                    <img src={require("../components/img/Group 44.png")} alt="" />
                                </div>
                                <div className='productsPrice'>
                                    <span> $26.00</span> &nbsp;
                                    <span className='nextPrice'> $42.00</span>
                                </div>

                            </div>
                        </div>

                        <div className="col-lg-3  col-md-6 col-sm-12 shopSection">
                            <div className="img">

                                <img src={require("../components/img/image 1164.png")} alt="" />

                            </div>

                            <div className="shopSectionTitle">
                                <div className="name">
                                    Ultrices mauris sit
                                </div>
                                <div className="colourImg">
                                    <img src={require("../components/img/Group 44.png")} alt="" />
                                </div>
                                <div className='productsPrice'>
                                    <span> $26.00</span> &nbsp;
                                    <span className='nextPrice'> $42.00</span>
                                </div>

                            </div>

                        </div>

                    </div>


                    <div className="row mt-5">
                        <div className="col-lg-3  col-md-6 col-sm-12 shopSection">
                            <div className="img">
                                <img src={require("../components/img/res.png")} alt="" />
                            </div>

                            <div className="shopSectionTitle">
                                <div className="name">
                                Pellentesque condimentum ac

                                </div>
                                <div className="colourImg">
                                    <img src={require("../components/img/Group 44.png")} alt="" />
                                </div>
                                <div className='productsPrice'>
                                    <span> $26.00</span> &nbsp;
                                    <span className='nextPrice'> $42.00</span>
                                </div>

                            </div>




                        </div>

                        <div className="col-lg-3  col-md-6 col-sm-12 shopSection">
                            <div className="img">

                                <img src={require("../components/img/cam 2.png")} alt="" />

                            </div>

                            <div className="shopSectionTitle">
                                <div className="name">
                                Cras scelerisque velit

                                </div>
                                <div className="colourImg">
                                    <img src={require("../components/img/Group 44.png")} alt="" />
                                </div>
                                <div className='productsPrice'>
                                    <span> $26.00</span> &nbsp;
                                    <span className='nextPrice'> $42.00</span>
                                </div>

                            </div>




                        </div>

                        <div className="col-lg-3  col-md-6 col-sm-12 shopSection">
                            <div className="img">

                                <img src={require("../components/img/camer.png")} alt="" />

                            </div>

                            <div className="shopSectionTitle">
                                <div className="name">
                                Lectus vulputate faucibus
                                </div>
                                <div className="colourImg">
                                    <img src={require("../components/img/Group 44.png")} alt="" />
                                </div>
                                <div className='productsPrice'>
                                    <span> $26.00</span> &nbsp;
                                    <span className='nextPrice'> $42.00</span>
                                </div>

                            </div>
                        </div>

                        <div className="col-lg-3  col-md-6 col-sm-12 shopSection">
                            <div className="img">

                                <img src={require("../components/img/10011 1.png")} alt="" />

                            </div>

                            <div className="shopSectionTitle">
                                <div className="name">
                                    Purus risus ut
                                </div>
                                <div className="colourImg">
                                    <img src={require("../components/img/Group 44.png")} alt="" />
                                </div>
                                <div className='productsPrice'>
                                    <span> $26.00</span> &nbsp;
                                    <span className='nextPrice'> $42.00</span>
                                </div>

                            </div>

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

export default ShopPage;