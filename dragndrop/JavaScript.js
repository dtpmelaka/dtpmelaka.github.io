(function (exports) {
    function urlsToAbsolute(nodeList) {
        if (!nodeList.length) {
            return [];
        }
        var attrName = 'href';
        if (nodeList[0].__proto__ === HTMLImageElement.prototype
        || nodeList[0].__proto__ === HTMLScriptElement.prototype) {
            attrName = 'src';
        }
        nodeList = [].map.call(nodeList, function (el, i) {
            var attr = el.getAttribute(attrName);
            if (!attr) {
                return;
            }
            var absURL = /^(https?|data):/i.test(attr);
            if (absURL) {
                return el;
            } else {
                return el;
            }
        });
        return nodeList;
    }

    function screenshotPage() {
        urlsToAbsolute(document.images);
        urlsToAbsolute(document.querySelectorAll("link[rel='stylesheet']"));
        var screenshot = document.documentElement.cloneNode(true);
        var b = document.createElement('base');
        b.href = document.location.protocol + '//' + location.host;
        var head = screenshot.querySelector('head');
        head.insertBefore(b, head.firstChild);
        screenshot.style.pointerEvents = 'none';
        screenshot.style.overflow = 'hidden';
        screenshot.style.webkitUserSelect = 'none';
        screenshot.style.mozUserSelect = 'none';
        screenshot.style.msUserSelect = 'none';
        screenshot.style.oUserSelect = 'none';
        screenshot.style.userSelect = 'none';
        screenshot.dataset.scrollX = window.scrollX;
        screenshot.dataset.scrollY = window.scrollY;
        var script = document.createElement('script');
        script.textContent = '(' + addOnPageLoad_.toString() + ')();';
        screenshot.querySelector('body').appendChild(script);
        var blob = new Blob([screenshot.outerHTML], {
            type: 'text/html'
        });
        return blob;
    }

    function addOnPageLoad_() {
        window.addEventListener('DOMContentLoaded', function (e) {
            var scrollX = document.documentElement.dataset.scrollX || 0;
            var scrollY = document.documentElement.dataset.scrollY || 0;
            window.scrollTo(scrollX, scrollY);
        });
    }

    function generate() {
        window.URL = window.URL || window.webkitURL;
        window.open(window.URL.createObjectURL(screenshotPage()));
    }
    exports.screenshotPage = screenshotPage;
    exports.generate = generate;
})(window);

var full1, full2, full2, full4, full5, full6, full7 = 0;
var full8, full9, full10, full11, full12, full13, full14 = 0;
var full15, full16, full17, full18, full19, full20, full21 = 0;
var full22, full23, full24, full25, full26, full27, full28 = 0;

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    if (!ev.ctrlKey) {
        var nodeCopy = document.getElementById(data).cloneNode(true);
        var num = parseInt(ev.target.getAttributeNode('curr').value);
        if (data == 'drag1' && num < 9) {
            nodeCopy.id = Math.floor((Math.random() * 10000));
            ev.target.setAttribute('curr', num + 4);
            ev.target.appendChild(nodeCopy);
        }
        else if (data == 'drag2' && num < 7) {
            nodeCopy.id = Math.floor((Math.random() * 10000) + 10000);
            ev.target.setAttribute('curr', num + 6);
            ev.target.appendChild(nodeCopy);
        }
        else {
        }
    }
    else {
        ev.target.appendChild(document.getElementById(data));
    }
}

function tapTap(e) {
    var num = parseInt(e.parentNode.getAttributeNode('curr').value);
    if (e.id < 10000) {
        e.parentNode.setAttribute('curr', num - 4);
    }
    else {
        e.parentNode.setAttribute('curr', num - 6);
    }
    e.parentNode.removeChild(e);
}