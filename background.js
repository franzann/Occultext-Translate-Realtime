chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action == "translateWord") {
    const word = request.word;

    chrome.storage.local.get(word, function(result) {
      if (result.hasOwnProperty(word)) {
        sendResponse({ original: result[word] });
      } else {
        fetch('https://frenzvalios.com/api/occultext/decrypt/atlas?occultext=' + encodeURIComponent(word))
          .then(response => response.json())
          .then(data => {
            if (data && data.original_word) {
              let storeObject = {};
              storeObject[word] = data.original_word;
              chrome.storage.local.set(storeObject, function() {
                sendResponse({ original: data.original_word });
              });
            } else {
              sendResponse({});
            }
          })
          .catch(error => {
            console.error("error:", error);
            sendResponse({});
          });
      }
    });
    return true; 
  }
});