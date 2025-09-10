"use strict";
{
    function extractText(el) {
        return {
            text: el.textContent,
            el,
        };
    }
    const link = document.querySelector('a');
    if (link) {
        console.log(extractText(link).el);
    }
}
{
    function $(selector) {
        return document.querySelector(selector);
    }
    const link = $('a')?.href;
    console.log(link);
}
async function getData(url) {
    const response = await fetch(url);
    return await response.json();
}
async function handleData() {
    const notebook = await getData('https://api.origamid.dev/json/notebook.json');
    console.log(notebook.nome);
}
handleData();
