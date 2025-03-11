chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === "complete" && tab.url.includes("facebook.com")) {
        chrome.storage.local.get(["uglyMode", "hideImages", "hideAds"], (data) => {
            if (data.uglyMode === true) {
                chrome.scripting.insertCSS({
                    target: { tabId: tabId },
                    files: ["ugly.css"]
                });
            }

            if (data.hideImages === true) {
                chrome.scripting.insertCSS({
                    target: { tabId: tabId },
                    files: ["hide-images.css"]
                });
                chrome.scripting.executeScript({
                    target: { tabId: tabId },
                    files: ["hide-images.js"]
                });
            }

            if (data.hideAds === true) {
                chrome.scripting.executeScript({
                    target: { tabId: tabId },
                    files: ["hide-ads.js"]
                });
            }
        });
    }
});