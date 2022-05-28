fetch('components/navbar.html')
    .then(result => result.text())
    .then(text => {
        let old_element = document.querySelector("script#navbar");
        let new_element = document.createElement("div");
        new_element.className = "site-wrap";
        new_element.innerHTML = text;
        old_element.parentNode.replaceChild(new_element,old_element);

        let current_page = window.location.pathname.split("/").slice(2).join("/");
        for (let menu of new_element.querySelectorAll("ul.site-menu")) {
            let items = menu.getElementsByTagName("li");
                for (let i = 0; i < items.length; ++i) {
                    if (current_page === items[i].getElementsByTagName("a")[0].getAttribute("href")) {
                        items[i].classList.add("active");
                    }
                }
            }
    })
