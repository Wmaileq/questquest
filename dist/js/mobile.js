$(document).ready(function(){
  // Слайдер
  $('.quest-carousel').each(function(){
        $(this).slick({
          infinite: true,
          mobileFirst: true,
          variableWidth: true,
          arrows: false
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