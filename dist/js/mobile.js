$(document).ready(function(){
    for (var i = 0; i < 5; i++) {
    var q = $('.mobile-quest-slider:eq(' + i + ')').children().length;
    $('.mobile-quest-wrapper:eq(' + i + ')').width(q * 25 + 'rem');
};
});
$(document).ready(function(){
    $('.mobile-quest-viewport').scrollLeft(200);
    $('.mobile-banner-view').scrollLeft(70);
});
$(document).ready(function(){
    $('.more').click(function(e){
  e.preventDefault();
  $(this).hide();
  $(this).parent().css('max-height', 'inherit');
  $(this).parent().css('-webkit-line-clamp', 'inherit');
  $(this).parent().css('-webkit-box-orient', 'inherit');
  $(this).parent().parent().css('height', 'auto');
});
    });