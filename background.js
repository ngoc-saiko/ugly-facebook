chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === "complete" && tab.url.includes("facebook.com")) {
        chrome.scripting.insertCSS({
            target: { tabId: tabId },
            files: ["ugly.css"]
        });
    }
});