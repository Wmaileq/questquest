$(document).ready(function(){
  // стилизация скролл-баров
  $('.scrollbar-inner').scrollbar();

  // Ширина, скрытие и начальный скролл
  $('.mobile-quest-slider').each(function(){
    var q = $(this).children().length;
    if ( q != 0 ) {
      $(this).parent().width(q * 25.2 + 'rem');
    } else {
      $(this).parent().parent().parent().hide();
    }
  });
  $('.mobile-quest-viewport').scrollLeft(220);
  $('.mobile-banner-view').scrollLeft(70);
  // стрелочка подробнее
  $('.more').click(function(e){
    e.preventDefault();
    $(this).hide();
    $(this).parent().css('max-height', 'inherit');
    $(this).parent().css('-webkit-line-clamp', 'inherit');
    $(this).parent().css('-webkit-box-orient', 'inherit');
    $(this).parent().parent().css('height', 'auto');
  });
});