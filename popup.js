document.getElementById("toggleUgly").addEventListener("click", () => {
    chrome.storage.local.get("uglyMode", (data) => {
        let newState = !data.uglyMode; // Toggle state
        if (newState === false) {
            alert("Turning off Ugly mode!");
        } else {
            alert("Turning on Ugly mode!");
        }
        chrome.storage.local.set({ uglyMode: newState }, () => {
            chrome.tabs.reload(); // Reload page to apply changes
        });
    });
});