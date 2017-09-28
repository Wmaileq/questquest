/* Слайдер категорий */
$(document).ready(function(){
	var slides = $('.cat_s-cat ul').children().length;
	$('.cat_s-cat').width(14.32 * slides + 'rem');
	var numSlides = 5;
	var NowSlide = 0
	$('.cat_s-right_b').click(function(){
		if (numSlides < slides) {
		NowSlide++;
		$('.cat_s-cat').css({
                'transform': 'translate(-' + 14.32 * NowSlide + 'rem, 0)',
                '-webkit-transform': 'translate(-' + 14.32 * NowSlide  + 'rem, 0)',
                '-ms-transform': 'translate(-' + 14.32 * NowSlide  + 'rem, 0)',
            });
		numSlides++;
	};
	});
	$('.cat_s-left_b').click(function(){
		if (NowSlide > 0) {
			NowSlide--;
		$('.cat_s-cat').css({
                'transform': 'translate(-' + 14.32 * NowSlide + 'rem, 0)',
                '-webkit-transform': 'translate(-' + 14.32 * NowSlide  + 'rem, 0)',
                '-ms-transform': 'translate(-' + 14.32 * NowSlide  + 'rem, 0)',
            });
		numSlides--;
		
	};
	});
});
/* Запуск видео при клике на плей в whatis */
  $(document).ready(function(){
    $(".video-play").click(function(){
        var video = $(this).attr('data-video');
        var srca = $(video).attr('src');
        $(video).attr('src', srca + '?modestbranding=0&amp;showinfo=0&amp;rel=0&amp;loop=1&autoplay=1');
        console.log(video);
        $(video + "-preview").hide();
        $(video).show();
        
    });
  });

/* Запуск видео в главном экране */
    $(document).ready(function(){
      $(".videoq-overlay").click(function(){
        var videosrc = $(this).attr('data-video-src');
        $('.videoq-main').attr('src', videosrc + '?modestbranding=0&amp;showinfo=0&amp;rel=0&amp;loop=1&autoplay=1')
        $('.videoq-preview').hide();
        $('.videoq-main').show();
        var text = $(this).siblings("p").html();
        var h4text = $(this).siblings("h4").html();
        $('.videoq-mb p').html(text);
        $('.videoq-mb h4').html(h4text);
        var scroll = $('.videoq').position().top;
        $("html, body").animate({scrollTop: scroll}, 1000);
      });
      $(".quest-video div").click(function(){
        var videosrc = $(this).attr('data-video-src');
        console.log(videosrc);
        $('.videoq-main').attr('src', videosrc + '?modestbranding=0&amp;showinfo=0&amp;rel=0&amp;loop=1&autoplay=1')
        $('.videoq-preview').hide();
        $('.videoq-main').show();
        var scroll = $('.videoq').position().top;
        $("html, body").animate({scrollTop: scroll}, 1000);
        var text = 'Тут должен быть текст под видео, main.js либо скрытый блок в карточке видео';
        $('.videoq-mb p').html(text);
      });
    });
/* Плавающая менюшка */
    $(window).scroll(function(){
       if (($(window).scrollTop() - 28) >= $(".navigation").position().top ) {
        $("header").css('transform', 'translateY(-5rem)');
        $(".navigation-menu").addClass('navigation-sticky');
        $(".navigation").css('height', '19rem');
        $(".navigation").css('margin-top', '7.7rem');
    } 
        else {
            $("header").css('transform', 'translateY(0)');
            $(".navigation-menu").removeClass('navigation-sticky');
            $(".navigation").css('height', '26.7rem');
            $(".navigation").css('margin-top', '0rem');
        }
    })
/* Формы */
$(document).ready(function(){
    $("#form-subscribe").validate({
      rules: {
      email:{
        required: true,
        email: true
      }
    },
    messages: {
      email:{
        required: "Пожалуйста, введите email",
        email: "Некорректный email"
      }
    },
    submitHandler: function() {
    $("#modal-subscribe").modal('show');
    $.ajax({
      type: "POST",
      url: "mail.php",
      data: $("#form-subscribe").serialize()
    }).done(function() {
      $(this).find("input").val("");
      $("#form-subscribe").trigger("reset");
    });
  }
    });
});

$(document).ready(function(){
    $("#form-phone").validate({
      rules: {
      phone:{
        required: true,
        minlength: 6
      }
    },
    messages: {
      phone:{
        required: "Пожалуйста, введите номер",
        minlength: "Введите корректный номер"
      }
    },
    submitHandler: function() {
    $.ajax({
      type: "POST",
      url: "mail.php",
      data: $("#form-phone").serialize()
    }).done(function() {
    $("#modal-phone").modal('hide');
    $("#modal-phone-result").modal('show');
      $(this).find("input").val("");
      $("#form-phone").trigger("reset");
    });
  }
    });
});
/* Маска ввода номера */
$(document).ready(function(){
$("#phone-modal").intlTelInput({
    utilsScript: "js/utils.js",
    onlyCountries: ["ru","es","by","kz","sk"],
    preferredCountries: ["ru"]
});
});
/* Плавный скролл */
$(document).ready(function(){
  $(".slicy").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 800);
  });
});
/* Авто высота */
$(document).ready(function(){
$('#region').on('show.bs.modal', function (e) {
  var DeviceWidth = $(window).width();
  if ($(window).width() > 1099) {
  $('#region-cities').height(4 * Math.ceil($('#region-cities').children().length / 6) + 'rem');
} else if ($(window).width() > 479) {
  $('#region-cities').height(4 * Math.ceil($('#region-cities').children().length / 2) + 'rem');
} else {
  $('#region-cities').height('auto');
}
});
});