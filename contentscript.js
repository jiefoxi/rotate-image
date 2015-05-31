var selectedImage = null;

document.addEventListener("mousedown", function (event) {
    if (event.button == 2) { // right click
        selectedImage = event.target;
    }
}, true);

chrome.extension.onRequest.addListener(onRequest);

function onRequest(request, sender, sendResponse) {
    var degree;
    if (request.rotation == 'flip') {
        degree = request.angle;
    } else {
        degree = getCurrentRotation(request.angle);
    }

    selectedImage.style.webkitTransform = 'rotate(' + degree + 'deg)';
    sendResponse({}); // clean up.
}

function getCurrentRotation(angle) {
    var currentDegree = selectedImage.style['-webkit-transform'];

    if (currentDegree && currentDegree != "") {
        var start = currentDegree.indexOf('(');
        var end = currentDegree.indexOf('deg)');
        angle += parseInt(currentDegree.substring(start + 1, end));
        angle %= 360;
    }

    return angle;
}
