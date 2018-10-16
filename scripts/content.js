//console.log("Test /////////////////////////////////////////////////")

chrome.runtime.onMessage.addListener( function(request, sender, sendResponse) {

    //console.log(request.data)

    // Grab the h1

    var header1 = document.getElementsByTagName('h1')[0].textContent;

    sendResponse(header1)

});