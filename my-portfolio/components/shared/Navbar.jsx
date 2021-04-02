const Navbar = () => (
    <div className="header">
        <a className="navbar-brand" href="/"><img className="image" src="https://i.ibb.co/6RTnqHD/Logo.png" alt="Logo" /></a>
        <nav className="navbar navbar-expand-md justify-content-center navbar-light fixed-top shadow-sm">
            <ul className="nav navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="/about">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/portfolio">Portfolio</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-bs-toggle="modal" href="#modal" role="button">Contact</a>
                </li>
            </ul>
            <button className="navbar-toggler sidebar__button" id="openSidebar" type="button">
                <span class="navbar-toggler-icon"></span>
            </button>
        </nav>
        <div id="sidebarDiv" className="sidebar sidebarDiv">
            <button id="closeSidebar" className="btn-close"></button>
            <ul className="sidebar__list">
                <li className="item-1"><a className="nav-link" href="/about">About</a></li>
                <li className="item-2"><a className="nav-link" href="/portfolio">Portfolio</a></li>
                <li className="item-3"><a className="nav-link" href="">Contact</a></li>
            </ul>
        </div>

        <div className="modal fade" id="modal" aria-hidden="true" aria-labelledby="..." tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Contact</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body text-center">
                        <p><i className="bi bi-envelope"></i></p><p><a href="mailto:hello@joshuavayer.com">hello@joshuavayer.com</a></p>
                        <img className="p-4" src="/img/separator.png" alt="separator" />
                        <p><i className="bi bi-telephone"></i></p><p>07.66.31.08.10</p>
                    </div>
                </div>
            </div>
        </div>

    </div>
);
export default Navbar;