function createElement(data) {
    let paragraph = document.createElement("p")
    paragraph.innerHTML = data;
    document.body.appendChild(paragraph);
}
function queryWikipedia(callback) {
    let articleRequested = new XMLHttpRequest();
    articleRequested.open("GET", "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*", true);
    articleRequested.onload = () => {
        let apiResponse = JSON.parse(articleRequested.responseText);
        let pages = apiResponse.query.pages;
        for (let key of Object.keys(pages)) {
            callback(pages[key].extract);
        }
    };
    articleRequested.send();
}
queryWikipedia(createElement);
