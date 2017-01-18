$(document).ready(function() {
  $(".link").fastClick(function(){
    screen = "#" + $(this).attr("page-load");
    if ($(this).hasClass("album-artwork")) {
      $(".selected").addClass("previous");
      $(screen).css({x:$(window).width() + "px"}).addClass("selected");
      $(".previous").transition({x:"-" + $(window).width() + "px"},300,"ease");
      $(screen).transition({x:"0px"},300,"ease",function(){
        $(".previous").removeClass("selected");
        $(".previous").removeClass("previous");
        $(".sc").removeAttr("style");
      });
    }
    if($(this).hasClass("now-playing-bar") || $(this).hasClass("now-playing-bar-arrow")){
      $(".selected").addClass("previous");
      $(screen).css({y:$(window).height() + "px"}).addClass("selected");
      $(screen).transition({y:"0px"},300,"ease",function() {
        $(".previous").removeClass("selected");
        $(".previous").removeClass("previous");
        $(".sc").removeAttr("style");
      });
    }
    if($(this).hasClass("back-button-black") || $(this).hasClass("back-button-white")){
      $(".selected").addClass("previous");
      $(screen).css({x:"-" + $(window).width() + "px"}).addClass("selected");
      $(".previous").transition({x:$(window).width() + "px"},300,"ease");
      $(screen).transition({x:"0px"},300,"ease",function () {
        $(".previous").removeClass("selected");
        $(".previous").removeClass("previous");
        $(".sc").removeAttr("style");
      });
    }
    if($(this).hasClass("backdown") || $(this).hasClass("now-playing-header-arrow")){
      $(".selected").addClass("previous");
      $(screen).show();
      $(".previous").css("z-index","24").transition({y:$(window).height() + "px"},300,"ease",function() {
        $(".previous").removeClass("selected");
        $(".previous").removeClass("previous");
        $(screen).addClass("selected");
        $(".sc").removeAttr("style")
      });
    }
  })
  $(".play").fastClick(function(){
    $(".pause").css("visibility", "visible");
    $(".play").css("visibility", "hidden");
  })
  $(".pause").fastClick(function(){
    $(".play").css("visibility", "visible");
    $(".pause").css("visibility", "hidden");
  })
  $(".play-thumb").fastClick(function(){
    $(".pause-thumb").css("visibility", "visible");
    $(".play-thumb").css("visibility", "hidden");
  })
  $(".pause-thumb").fastClick(function(){
    $(".play-thumb").css("visibility", "visible");
    $(".pause-thumb").css("visibility", "hidden");
  })
  $(".now-playing-album").fastClick(function(){
    if ($(".play").css("visibility") != null) {
      $(".play").css("visibility", "hidden");
      $(".pause").css("visibility", "visible");
    } else {
      $(".play").css("visibility", "visible");
      $(".pause").css("visibility", "hidden");
    }
  })
  })
