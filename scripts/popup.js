
document.addEventListener('DOMContentLoaded', function() {

  document.getElementById('scrapePage').addEventListener('click', function(){

    console.log('Clicked!');

    chrome.tabs.query({active: true, currentWindow: true}, tabs => {

      chrome.tabs.sendMessage(tabs[0].id, {data: "hello"}, response => {

      });

    });

  });

});

