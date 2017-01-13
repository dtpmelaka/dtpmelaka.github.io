$(document).ready(function() {
    $('#drag_s, #drag_b').draggable({
        create: function(){$(this).data('position',$(this).position())},
        cursor:'move',
        helper: 'clone',
        start:function(){$(this).stop(true,true)}
    });

    $('.dropable').find('td').droppable({
        accept: '#drag_s, #drag_b',
        drop:function(event, ui){
            var weight = $(this).children('#clone_s').length * 4 + $(this).children('#clone_b').length * 6;
            if (ui.draggable.attr("id") == "drag_s" && weight < 9) {
                $(this).append(ui.draggable.clone().prop('id', 'clone_s'));
            }
            else if (ui.draggable.attr("id") == "drag_b" && weight < 7) {
                $(this).append(ui.draggable.clone().prop('id', 'clone_b'));
            }
        }
    });

    $('#drop_zone').droppable({
        accept: '#drag_s, #drag_b',
        drop:function(event, ui){
            if (ui.draggable.attr("id") == "drag_s") {
                $(this).append(ui.draggable.clone().prop('id', 'clone_s'));
            }
            else if (ui.draggable.attr("id") == "drag_b") {
                $(this).append(ui.draggable.clone().prop('id', 'clone_b'));
            }
        }
    });

    $("#container").resizable();
});

function deleteImg(e) {
    var getID = $(e).attr("id");
    if (getID == 'clone_s' || getID == 'clone_b') {
        e.parentNode.removeChild(e);
    }
}
