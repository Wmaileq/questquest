$(document).ready(function(){
    $('.scrollbar-inner').scrollbar();
});
$(document).ready(function(){
    for (var i = 0; i < 5; i++) {
    var q = $('.mobile-quest-slider:eq(' + i + ')').children().length;
    if ( q != 0 ) {
    $('.mobile-quest-wrapper:eq(' + i + ')').width(q * 26.2 + 'rem');
  } else {
    $('.mobile-quest-wrapper:eq(' + i + ')').parent().parent().hide();
  }
};
});
$(document).ready(function(){
    $('.mobile-quest-viewport').scrollLeft(230);
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