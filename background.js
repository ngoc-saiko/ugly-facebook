chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === "complete" && tab.url.includes("facebook.com")) {
        chrome.storage.local.get("uglyMode", (data) => {
            if (data.uglyMode !== false) {
                chrome.scripting.insertCSS({
                    target: { tabId: tabId },
                    files: ["ugly.css"]
                });
            }
        });
    }
});
