(function($){
  var MusicSlider = function (slider, options){
    this.slider = slider;
    this.content = slider.children().first();
    this.currentIndex = 0;
    this.songs = this.content.children();
    this.slider.width(this.pages.first().width());

    var totalWidth = 0;
    this.songs.each(function(index,page){
      totalWidth += $(page).width();
    });
    this.content.width(totalWidth);
    this.bindEvents();
  };
  $.extend(MusicSlider.prototype, {
    bindEvents: function () {
      this._removeTransition = $.proxy(this.removeTransition, this);
      this._startDrag = $.proxy(this.startDrag, this);
      this._doDrag = $.proxy(this.doDrag, this);
      this._endDrag = $.proxy(this.endDrag, this);

      this.content
          .on('mousedown', this._startDrag)
          .on('transitionend', this._removeTransition);
      $('body')
          .on('mousemove', this.doDrag)
          .on('mouseup', this._endDrag);
    },
    destroy: function (){
      this.content
          .off('mousedown', this._startDrag)
          .off('transitionend', this._removeTransition);
      $('body')
          .off('mousemove', this._doDrag)
          .off('mouseup', this._endDrag);
    },
    startDrag: function (event){
      this.enableDrag = true;
      this.dragStartX = event.clientX;
    },
    doDrag: function (event) {
      if(this.enableDrag){
        var position = this.songs.eq(this.currentIndex).position();
        var delta = event.clientX - this.dragStartX;

        this.content.css('transform', 'translate3d(' + (delta - position.left) + 'px, 0, 0)');
        event.preventDefault();
      }
    },
    endDrag: function (event){
      if (this.enableDrag){
        this.enableDrag = false;

        var delta = event.clientX - this.dragStartX;
        if (Math.abs(delta) > this.slider.width() / 5) {
          if (delta < 0){
            this.next();
          } else {
            this.prev();
          }
        } else {
          this.current();
        }
      }
    },
    removeTransition: function(){
      this.content.css('transition', 'none');
    },
    goToIndex: function (index){
      var position = this.songs.eq(index).position();

      this.content
          .css('transition', 'all 400ms ease')
          .css('transform', 'translate3d(' + (-1 * (position.left)) + 'px, 0, 0');
          this.currentIndex = index;
    },
    current: function () {
      this.goToIndex(this.currentIndex);
    },
    next: function () {
      if (this.currentIndex >= this.songs.length - 1) {
        this.current();
      } else {
        this.goToIndex(this.currentIndex + 1);
      }
    },
    prev: function () {
      if (this.currentIndex <= 0) {
        this.current();
      } else {
        this.goToIndex(this.currentIndex - 1);
      }
    }
  });
  (function($) {
    $.fn.musicSlider = function(options) {
      this.each(function(index, slider) {
        var $this = $(slider);
        var musicSlider = new MusicSlider($this);
        $this.data('musicSlider', musicSlider);
      });
      return this;
    };
  })(jQuery);
)
  }
})
