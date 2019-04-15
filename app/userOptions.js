function saveOptions() {
    var highlightAffectedLinks = document.getElementById('highlight').checked;

    chrome.storage.sync.set({
        highlightLinks: highlightAffectedLinks
        }, function() {
            // Update status to let user know options were saved
            var status = document.getElementById('status');
            status.textContent = 'Options successfully saved...';
            setTimeout(function() {
                status.textContent = '';
            }, 1500);
    });
}

function restoreOptions() {
    // Use default values
    chrome.storage.sync.get({
        highlightLinks: false
    }, function(items) {
        document.getElementById('highlight').checked = items.highlightLinks;
    });
}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('save').addEventListener('click', saveOptions);