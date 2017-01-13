// $(document).ready(function() {
//     $('#drag1, #drag2').draggable({
//         helper: "clone",
//         revert: "invalid",
//         // cursor: "move",
//         // cursor-at: {top:56, left:56},
//         snap: ".dropable"
//     });
//
// });

// $(document).ready(function() {
//     alert('ding dong');
//     $('#drag1, #drag2').dblclick(function() {
//         alert('noot noot');
//     });
// });
//
// ﻿//(function (exports) {
// function capture() {
//     alert("click");
//     toDataUrl('https://www.google.com/search?q=google+image&espv=2&biw=1366&bih=638&tbm=isch&imgil=o_gRCLMCFpYWZM%253A%253BnUneulojzU3VnM%253Bhttps%25253A%25252F%25252Fwww.youtube.com%25252Fuser%25252FGoogle&source=iu&pf=m&fir=o_gRCLMCFpYWZM%253A%252CnUneulojzU3VnM%252C_&usg=__oUMpVo97oXsT-PJ5ZbhikTtTnEA%3D', function (base64Img) {
//         console.log(base64Img);
//     }, );
// }
//
// function toDataUrl(src, callback, outputFormat) {
//     var img = new Image();
//     img.crossOrigin = 'Anonymous';
//     img.onload = function () {
//         var canvas = document.createElement('CANVAS');
//         var ctx = canvas.getContext('2d');
//         var dataURL;
//         canvas.height = this.height;
//         canvas.width = this.width;
//         ctx.drawImage(this, 0, 0);
//         dataURL = canvas.toDataURL(outputFormat);
//         callback(dataURL);
//     };
//     img.src = src;
//     if (img.complete || img.complete === undefined) {
//         img.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
//         img.src = src;
//     }
// }
// //})(window);
//
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
