/**
 * Returns a handler which will open a new window when activated.
 */

function rotateRight() {
    return function(info, tab1) {
        chrome.tabs.getSelected(null, function(tab) {
            chrome.tabs.sendRequest(tab.id, {
                angle: 90,
                rotation: 'rotate'
            }, function(response) {});
        });
    };
}

function rotateLeft() {
    return function(info, tab1) {
        chrome.tabs.getSelected(null, function(tab) {
            chrome.tabs.sendRequest(tab.id, {
                angle: -90,
                rotation: 'rotate'
            }, function(response) {});
        });
    };
}

function rotateDown() {
    return function(info, tab1) {
        chrome.tabs.getSelected(null, function(tab) {
            chrome.tabs.sendRequest(tab.id, {
                angle: 180,
                rotation: 'rotate'
            }, function(response) {});
        });
    };
}

function rotateReset() {
    return function(info, tab1) {
        chrome.tabs.getSelected(null, function(tab) {
            chrome.tabs.sendRequest(tab.id, {
                angle: 0,
                rotation: 'flip'
            }, function(response) {});
        });
    };
}

/**
 * Create a context menu which will only show up for images.
 */

chrome.contextMenus.create({
    "title": "Rotate Right",
    "type": "normal",
    "contexts": ["image"],
    "onclick": rotateRight()
});

chrome.contextMenus.create({
    "title": "Rotate Left",
    "type": "normal",
    "contexts": ["image"],
    "onclick": rotateLeft()
});

chrome.contextMenus.create({
    "title": "Rorate 180°",
    "type": "normal",
    "contexts": ["image"],
    "onclick": rotateDown()
});

chrome.contextMenus.create({
    "title": "Rorate Reset",
    "type": "normal",
    "contexts": ["image"],
    "onclick": rotateReset()
});
