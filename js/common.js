$(document).ready(function() {

  var header = $('header');

  $(window).scroll(function(e) {
    if (header.offset().top !== 0) {
      if (!header.hasClass('shadow')) {
        header.addClass('shadow');
      }
    } else {
      header.removeClass('shadow');
    }
  });

  $(".m-header").click(function() {
    $(".nav").toggle();
    $(".depth1-2").removeClass("on");
    $(".depth2").css({"display": "none"});
    $(this).toggleClass("open");
  });

  $(".depth1-2").click(function() {
    $(this).toggleClass("on").children("ul").slideToggle(200).siblings("depth2").slideUp(100);
  });

  $(".menu01, .submenu01").hover(function() {
    $(".menu01, .submenu01").addClass("on");
  }, function() {
    $(".menu01, .submenu01").removeClass("on");
  });

  $(".menu02, .submenu02").hover(function() {
    $(".menu02, .submenu02").addClass("on");
  }, function() {
    $(".menu02, .submenu02").removeClass("on");
  });

  $(".menu03, .submenu03").hover(function() {
    $(".menu03, .submenu03").addClass("on");
  }, function() {
    $(".menu03, .submenu03").removeClass("on");
  });

  $(".menu04, .submenu04").hover(function() {
    $(".menu04, .submenu04").addClass("on");
  }, function() {
    $(".menu04, .submenu04").removeClass("on");
  });

  $(window).resize(function() {
    // width값을 가져오기
    var width_size = window.outerWidth;
    // 770 이상일때 nav 숨김
    if (width_size >= 1025) {
      $(".nav").css({display: "none"});
      $(".m-header").removeClass("open");

    }
  })

  /* 사이드바 닫기 */
  $('.fa-bars-arrow, .list-result-area>ul>li, .tab-button').click(function() {
      if ($('#sidebar').is(":visible") === true) {
        $('#sidebar').hide();
        $("#main-content").addClass("sidebar-closed");
        $(".fa-bars-arrow img").attr("src", "images/toggle_right_panel_btn.png");
        $(".tab-button").css({"background-image": "url(images/btn_tab_open.png)"});
      } else {
        $("#main-content").removeClass("sidebar-closed");
        $('#sidebar').show();
        $(".fa-bars-arrow img").attr("src", "images/toggle_left_panel_btn.png");        $(".tab-button").css({"background-image": "url(images/btn_tab_close.png)"});
      }
    });


  $('[data-popup-open]').on('click', function(e) {
    var targeted_popup_class = jQuery(this).attr('data-popup-open');
    $('[data-popup="' + targeted_popup_class + '"]').fadeIn(350);

    e.preventDefault();
  });

  //----- CLOSE
  $('[data-popup-close]').on('click', function(e) {
    var targeted_popup_class = jQuery(this).attr('data-popup-close');
    $('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);

    e.preventDefault();
  });

});
