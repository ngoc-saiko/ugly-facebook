function removeAds() {
    document.querySelectorAll('span').forEach(span => {
        if (span.innerText.trim() === "Follow") {
            let adContainer = span.closest('div.html-div div.html-div');
            if (adContainer) {
                adContainer.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.remove();
                console.log("🚫 Ad removed:", adContainer);
            }
        }
    });
}

removeAds();

const observerRemoveAds = new MutationObserver(removeAds);
observerRemoveAds.observe(document.body, { childList: true, subtree: true });