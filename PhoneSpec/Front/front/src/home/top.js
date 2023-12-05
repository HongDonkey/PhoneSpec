import bootstrap from "../css/bootstrap.min.css"
import css from "../css/style.css"
import {Link} from "react-router-dom";


function Navbar() {
    return(
<div>
        {/* <!-- Google Web Fonts --> */}
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
        <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;600&family=Inter:wght@700;800&display=swap" rel="stylesheet"/>
        
        {/* <!-- Icon Font Stylesheet --> */}
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet"/>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet"/>

        {/* <!-- Libraries Stylesheet --> */}
        {/* <link href="../lib/animate/animate.min.css" rel="stylesheet"/> */}
        {/* <link href="../lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet"/> */}

        {/* <!-- Customized Bootstrap Stylesheet --> */}
        <link href={bootstrap} rel="stylesheet"/>

        {/* <!-- Template Stylesheet --> */}
        <link href={css} rel="stylesheet"/>
        {/* <!-- JavaScript Libraries --> */}
        <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
        <script src="../lib/wow/wow.min.js"></script>
        <script src="../lib/easing/easing.min.js"></script>
        <script src="../lib/waypoints/waypoints.min.js"></script>
        <script src="../lib/owlcarousel/owl.carousel.min.js"></script>
        <link rel="sytlesheet" href="/css/bootstrap.min.css"/> 
                    <nav className="navbar navbar-expand-lg bg-white navbar-light py-0 px-4">
                        <a href="index.html" className="navbar-brand d-flex align-items-center text-center">
                            <div className="icon p-2 me-2">
                                <img className="img-fluid; width: 30px; height: 30px;" src={process.env.PUBLIC_URL + "img/mainimg.png"} alt="Icon" />
                            </div>
                            <Link to="/">
                            <h1 className="m-0 text-primary">PhoneSpec</h1>
                            </Link>
                        </a>
                        <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <div className="navbar-nav ms-auto">
                                <a href="/" className="nav-item nav-link">Home</a>
                                <a href="about.html" class="nav-item nav-link">About</a>
                                <div className="nav-item dropdown">
                                    <a href="/" className="nav-link dropdown-toggle active" data-bs-toggle="dropdown">Property</a>
                                    <div className="dropdown-menu rounded-0 m-0">
                                        <a href="property-list.html" className="dropdown-item active">Property List</a>
                                        <a href="property-type.html" className="dropdown-item">Property Type</a>
                                        <a href="property-agent.html" className="dropdown-item">Property Agent</a>
                                    </div>
                                </div>
                                <div className="nav-item dropdown">
                                    <a href="/" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                                    <div className="dropdown-menu rounded-0 m-0">
                                        <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                                        <a href="404.html" className="dropdown-item">404 Error</a>
                                    </div>
                                </div>
                                <a href="contact.html" className="nav-item nav-link">Contact</a>
                            </div>
                            <Link to ="/login">
                            <button className="btn btn-primary px-3 d-none d-lg-flex">Login</button>
                            </Link>
                        </div>
                    </nav>
        
        </div>
    )
}
function App() {

    return(
    <div>
        <Navbar></Navbar>
    </div>   

    )
    // <!-- Navbar End --> 
    
}

export default App