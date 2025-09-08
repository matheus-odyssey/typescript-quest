"use strict";
const links = document.querySelectorAll('.link');
links.forEach((link) => {
    if (link instanceof HTMLAnchorElement) {
        console.log(link.href);
    }
});
const arrayLinks = Array.from(links);
const anchorLinks = arrayLinks.filter((link) => {
    return link instanceof HTMLAnchorElement;
});
console.log(anchorLinks);
