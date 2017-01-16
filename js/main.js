$(document).ready(function() {
  $(".link").fastClick(function(){
    screen = "#" + $(this).attr("page-load");
    if ($(this).hasClass("slideleft")) {
      $(".selected").addClass("previous");
      $(screen).css({x:$(window).width() + "px"}).addClass("selected");
      $(".previous").transition({x:"-" + $(window).width() + "px"},300,"ease");
      $(screen).transition({x:"0px"},300,"ease",function(){
        $(".previous").removeClass("selected");
        $(".previous").removeClass("previous");
        $(".sc").removeAttr("style");
      });
    }
    if($(this).hasClass("slideup")){
      $(".selected").addClass("previous");
      $(screen).css({y:$(window).height() + "px"}).addClass("selected");
      $(screen).transition({y:"0px"},300,"ease",function() {
        $(".previous").removeClass("selected");
        $(".previous").removeClass("previous");
        $(".sc").removeAttr("style");
      });
    }
    if($(this).hasClass("slidedown")){
      $(".selected").addClass("previous");
      $(screen).addClass("selected");
      $(screen).css({y:"-" + $(window).height() + "px"});
      $(screen).transition({y:"0px"},300,"ease",function() {
        $(".previous").removeClass("selected");
        $(".previous").removeClass("previous");
        $(".sc").removeAttr("style");
      });
    }
    if($(this).hasClass("slideright")){
      $(".selected").addClass("previous");
      $(screen).css({x:"-" + $(window).width() + "px"}).addClass("selected");
      $(".previous").transition({x:$(window).width() + "px"},300,"ease");
      $(screen).transition({x:"0px"},300,"ease",function () {
        $(".previous").removeClass("selected");
        $(".previous").removeClass("previous");
        $(".sc").removeAttr("style");
      });

    }
    if($(this).hasClass("backdown")){
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
  })
