/**
 * Returns a handler which will open a new window when activated.
 */

function rotateClockWise() {
    return function(info, tab1) {
        chrome.tabs.getSelected(null, function(tab) {
            chrome.tabs.sendRequest(tab.id, {
                angle: 90,
                rotation: 'rotate'
            }, function(response) {});
        });
    };
}

function rotateCounterClockWise() {
    return function(info, tab1) {
        chrome.tabs.getSelected(null, function(tab) {
            chrome.tabs.sendRequest(tab.id, {
                angle: -90,
                rotation: 'rotate'
            }, function(response) {});
        });
    };
}

function upright() {
    return function(info, tab1) {
        chrome.tabs.getSelected(null, function(tab) {
            chrome.tabs.sendRequest(tab.id, {
                angle: 0,
                rotation: 'flip'
            }, function(response) {});
        });
    };
}

function upsideDown() {
    return function(info, tab1) {
        chrome.tabs.getSelected(null, function(tab) {
            chrome.tabs.sendRequest(tab.id, {
                angle: 180,
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
    "contexts": ["all"],
    "onclick": rotateClockWise()
});

chrome.contextMenus.create({
    "title": "Rotate Left",
    "type": "normal",
    "contexts": ["all"],
    "onclick": rotateCounterClockWise()
});

chrome.contextMenus.create({
    "title": "Rorate 180°",
    "type": "normal",
    "contexts": ["all"],
    "onclick": upsideDown()
});

chrome.contextMenus.create({
    "title": "Rorate Reset",
    "type": "normal",
    "contexts": ["all"],
    "onclick": upright()
});
