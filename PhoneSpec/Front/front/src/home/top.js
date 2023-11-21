import "./css/bootstrap.min.css"
import "./css/style.css"


function App() {
    return(
        <div class="container-fluid nav-bar bg-transparent">
                    <nav class="navbar navbar-expand-lg bg-white navbar-light py-0 px-4">
                        <a href="index.html" class="navbar-brand d-flex align-items-center text-center">
                            <div class="icon p-2 me-2">
                                <img class="img-fluid" src="/icon-deal.png" alt="Icon" className="width: 30px; height: 30px;"/>
                            </div>
                            <h1 class="m-0 text-primary">Makaan</h1>
                        </a>
                        <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarCollapse">
                            <div class="navbar-nav ms-auto">
                                <a href="index.html" class="nav-item nav-link">Home</a>
                                <a href="about.html" class="nav-item nav-link">About</a>
                                <div class="nav-item dropdown">
                                    <a href="#" className="nav-link dropdown-toggle active" data-bs-toggle="dropdown">Property</a>
                                    <div class="dropdown-menu rounded-0 m-0">
                                        <a href="property-list.html" class="dropdown-item active">Property List</a>
                                        <a href="property-type.html" class="dropdown-item">Property Type</a>
                                        <a href="property-agent.html" class="dropdown-item">Property Agent</a>
                                    </div>
                                </div>
                                <div class="nav-item dropdown">
                                    <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                                    <div class="dropdown-menu rounded-0 m-0">
                                        <a href="testimonial.html" class="dropdown-item">Testimonial</a>
                                        <a href="404.html" class="dropdown-item">404 Error</a>
                                    </div>
                                </div>
                                <a href="contact.html" class="nav-item nav-link">Contact</a>
                            </div>
                            <a href="" className="btn btn-primary px-3 d-none d-lg-flex">Add Property</a>
                        </div>
                    </nav>
        </div>
    )
    {/* <!-- Navbar End --> */}
    
}

export default App;