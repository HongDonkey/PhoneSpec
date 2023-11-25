import "../css/bootstrap.min.css"
import "../css/style.css"

function Head(){
    return


}

function App() {
    return(
        
        <div>
        {/* <!-- Google Web Fonts --> */}
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;600&family=Inter:wght@700;800&display=swap" rel="stylesheet"/>
        
        {/* <!-- Icon Font Stylesheet --> */}
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet"/>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet"/>

        {/* <!-- Libraries Stylesheet --> */}
        <link href="lib/animate/animate.min.css" rel="stylesheet"/>
        <link href="lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet"/>

        {/* <!-- Customized Bootstrap Stylesheet --> */}
        <link href="css/bootstrap.min.css" rel="stylesheet"/>

        {/* <!-- Template Stylesheet --> */}
        <link href="css/style.css" rel="stylesheet"/>
        {/* <!-- JavaScript Libraries --> */}
        <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
        <script src="lib/wow/wow.min.js"></script>
        <script src="lib/easing/easing.min.js"></script>
        <script src="lib/waypoints/waypoints.min.js"></script>
        <script src="lib/owlcarousel/owl.carousel.min.js"></script>
        <link rel="sytlesheet" href="/css/bootstrap.min.css"/> 
                    <nav class="navbar navbar-expand-lg bg-white navbar-light py-0 px-4">
                        <a href="index.html" class="navbar-brand d-flex align-items-center text-center">
                            <div class="icon p-2 me-2">
                                <img class="img-fluid" src={process.env.PUBLIC_URL + "img/icon-deal.png"} alt="Icon" className="width: 30px; height: 30px;"/>
                            </div>
                            <h1 class="m-0 text-primary">PhoneSpec</h1>
                        </a>
                        <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarCollapse">
                            <div class="navbar-nav ms-auto">
                                <a href="index.html" class="nav-item nav-link">Home</a>
                                <a href="about.html" class="nav-item nav-link">About</a>
                                <div class="nav-item dropdown">
                                    <a href="/" className="nav-link dropdown-toggle active" data-bs-toggle="dropdown">Property</a>
                                    <div class="dropdown-menu rounded-0 m-0">
                                        <a href="property-list.html" class="dropdown-item active">Property List</a>
                                        <a href="property-type.html" class="dropdown-item">Property Type</a>
                                        <a href="property-agent.html" class="dropdown-item">Property Agent</a>
                                    </div>
                                </div>
                                <div class="nav-item dropdown">
                                    <a href="/" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                                    <div class="dropdown-menu rounded-0 m-0">
                                        <a href="testimonial.html" class="dropdown-item">Testimonial</a>
                                        <a href="404.html" class="dropdown-item">404 Error</a>
                                    </div>
                                </div>
                                <a href="contact.html" class="nav-item nav-link">Contact</a>
                            </div>
                            <a href="/" className="btn btn-primary px-3 d-none d-lg-flex">Add Property</a>
                        </div>
                    </nav>
        
        </div>

    
    )
    // <!-- Navbar End --> 
    
}

export default App;