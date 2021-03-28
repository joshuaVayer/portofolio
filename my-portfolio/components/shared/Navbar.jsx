const Navbar = () => (
  <div className="header">
    <a className="navbar-brand" href="/"><img className="image" src="/img/logo.png" alt="Logo"/></a>
    <nav className="navbar navbar-expand-md justify-content-center navbar-light fixed-top shadow-sm">
        <ul className="nav navbar-nav">
            <li className="nav-item">
                <a className="nav-link" href="/about">About</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/portfolio">Portfolio</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
            </li>
        </ul>
    <button className="sidebar__button" id="openSidebar">Menu</button>
    </nav>
    <div id="sidebarDiv" className="sidebar sidebarDiv">
        <button id="closeSidebar">X</button>
        <ul className="sidebar__list">
            <li className="item-1"><a className="nav-link" href="/about">About</a></li>
            <li className="item-2"><a className="nav-link" href="/portfolio">Portfolio</a></li>
            <li className="item-3"><a className="nav-link" href="#">Contact</a></li>
        </ul>
    </div>
</div>
);
export default Navbar;