$(document).ready(function() {
    $('#drag1, #drag2').draggable({
        create: function(){$(this).data('position',$(this).position())},
        cursor:'move',
        start:function(){$(this).stop(true,true)}
    });

    $('.dropable').find('td').droppable({
        drop:function(event, ui){
            snapToMiddle(ui.draggable,$(this));
        }
    });
});

function snapToMiddle(dragger, target){
   var topMove = target.position().top - dragger.data('position').top + (target.outerHeight(true) - dragger.outerHeight(true)) / 2;
   var leftMove= target.position().left - dragger.data('position').left + 10;
   dragger.animate({top:topMove,left:leftMove},{duration:600,easing:'easeOutBack'});
}
