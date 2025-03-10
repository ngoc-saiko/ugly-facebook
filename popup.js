document.getElementById("toggleUgly").addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (tabs.length === 0) {
            alert("No active tab found!");
            return;
        }

        chrome.storage.local.get(["uglyMode"], (data) => {
            let uglyMode = data.uglyMode || false;
            let action = uglyMode ? "removeUgly" : "toggleUgly";

            chrome.runtime.sendMessage({ action: action }, (response) => {
                console.log("Response:", response);
                chrome.storage.local.set({ uglyMode: !uglyMode });
            });
        });
    });
});

document.getElementById("toggleImages").addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.runtime.sendMessage({ action: "toggleImages" });
    });
});
