var anchors = document.getElementsByTagName('a');

chrome.storage.sync.get({
    highlightLinks: false
}, function(items) {
    console.debug("Stored Hightlight Links Setting: " + items.highlightLinks);

    var removeCount = 0;
    
    for (var i = 0, l = anchors.length; i < l; i++) {
    
        if(anchors[i].getAttribute("ping") != null) {
            anchors[i].removeAttribute("ping");
            
            if(items.highlightLinks == true) {
                // Inline Style to force priority
                console.debug("Applying highlighting to affected link...");
                anchors[i].style.setProperty('color', '#ff0000', 'important');
                anchors[i].style.setProperty('background-color', '#e0e0e0', 'important');
                anchors[i].style.setProperty('padding', '5px', 'important');
            }
    
            console.debug("Removing ping attribute...");
            removeCount++;
        }
      }
    
    console.info("Removed " + removeCount + " ping attribute(s) from this page.");
});