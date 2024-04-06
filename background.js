chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action == "translateWord") {
    fetch('https://frenzvalios.com/api/occultext/decrypt?occultext=' + encodeURIComponent(request.word))
      .then(response => response.json())
      .then(data => {
        sendResponse({ original: data.original_word });
      })
      .catch(error => {
        console.error("error:", error);
        sendResponse({});
      });
    return true;
  }
});