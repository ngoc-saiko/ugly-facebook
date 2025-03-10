document.getElementById("toggleUgly").addEventListener("click", () => {
    chrome.storage.local.get("uglyMode", (data) => {
        let newState = !data.uglyMode; // Toggle state
        alert(newState ? "Turning on Ugly mode!" : "Turning off Ugly mode!");
        chrome.storage.local.set({ uglyMode: newState }, () => {
            chrome.tabs.reload(); // Reload page to apply changes
        });
    });
});

document.getElementById("toggleImages").addEventListener("click", () => {
    chrome.storage.local.get("hideImages", (data) => {
        let newState = !data.hideImages; // Toggle state
        alert(newState ? "Hiding images & videos!" : "Showing images & videos!");
        chrome.storage.local.set({ hideImages: newState }, () => {
            chrome.tabs.reload(); // Reload page to apply changes
        });
    });
});