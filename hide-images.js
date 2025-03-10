function hideImagesAndWrappers() {
    document.querySelectorAll("img, video").forEach((media) => {
        media.style.display = "none";
        const link = media.closest('div > a');
        if (link) {
            const wrapper = link.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
            if (wrapper.tagName === 'DIV' && wrapper.id) {
                wrapper.remove();
            } else {
                link.remove();
            }
        }
    });
}

// Run immediately when the script is injected
hideImagesAndWrappers();

var prevWidth = window.innerWidth;
window.addEventListener('resize', function() {
    var width = window.innerWidth;
    if (width !== prevWidth) {
        prevWidth = width;
        hideImagesAndWrappers();
    }
});

// Run again when the DOM updates (for dynamic content loading)
const observer = new MutationObserver(hideImagesAndWrappers);
observer.observe(document.body, { childList: true, subtree: true });