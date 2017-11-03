$(document).ready(function(){
  // Ширина, скрытие и начальный скролл
  $('.quest-carousel').each(function(){
        $(this).owlCarousel({
          loop: true,
          nav: false,
          dots: false,
          autoWidth: true
        });
      });
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