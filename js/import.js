fetch('components/navbar.html')
    .then(result => result.text())
    .then(text => {
            let element = document.querySelector("div#navbar");
            element.className = "site-wrap";
            element.innerHTML = text;

            let current_page = window.location.pathname.split("/").slice(2).join("/");
            for (let menu of element.querySelectorAll("ul.site-menu")) {
                    let items = menu.getElementsByTagName("li");
                    for (let i = 0; i < items.length; ++i) {
                            if (current_page === items[i].getElementsByTagName("a")[0].getAttribute("href")) {
                                    items[i].classList.add("active");
                            }
                    }
            }
    })

fetch('components/header.html')
    .then(result => result.text())
    .then(text => {
        document.querySelector("div#header").innerHTML = text;
    })

fetch('components/quick-info.html')
    .then(result => result.text())
    .then(text => {
        document.querySelector("div#quick-info").innerHTML = text;
    })

fetch('components/footer.html')
    .then(result => result.text())
    .then(text => {
        let element = document.querySelector("footer#footer");
        element.className = "site-footer";
        element.innerHTML = text;
    })

fetch('components/promotion.html')
    .then(result => result.text())
    .then(text => {
        document.querySelector("div#promotion").innerHTML = text;
    })

fetch('components/testimonials.html')
    .then(result => result.text())
    .then(text => {
        let element = document.querySelector("div#testimonials");
        element.className = "site-section";
        element.innerHTML = text;
    })

fetch('components/metrics.html')
    .then(result => result.text())
    .then(text => {
        document.querySelector("div#metrics").innerHTML = text;
    })
