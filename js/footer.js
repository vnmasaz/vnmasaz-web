fetch('components/footer.html')
    .then(result => result.text())
    .then(text => {
        let old_element = document.querySelector("script#footer");
        let new_element = document.createElement("footer");
        new_element.className = "site-footer";
        new_element.innerHTML = text;
        old_element.parentNode.replaceChild(new_element,old_element);
    })
