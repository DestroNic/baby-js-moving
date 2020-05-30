const responsiveMenu = () => {
    let nav = document.getElementById('nav-responsive');
    if (nav.className === "right-nav") {
        nav.className += " responsive";
    } else {
        nav.className = "right-nav";
    }
    }
