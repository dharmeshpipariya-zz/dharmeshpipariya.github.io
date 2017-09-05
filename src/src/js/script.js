$(document).ready(function () {
  // Text Type rotate
  var rotate = function (t, e, n) {
    this.toRotate = e, this.el = t, this.loopNum = 0, this.period = parseInt(n, 10) || 2e3, this.txt = "", this.tick(), this.isDeleting = !1
  };
  rotate.prototype.tick = function () {
    var t = this.loopNum % this.toRotate.length,
      e = this.toRotate[t];
    this.txt = this.isDeleting ? e.substring(0, this.txt.length - 1) : e.substring(0, this.txt.length + 1), this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";
    var n = this,
      i = 300 - 100 * Math.random();
    this.isDeleting && (i /= 2), this.isDeleting || this.txt !== e ? this.isDeleting && "" === this.txt && (this.isDeleting = !1, this.loopNum++ , i = 500) :
      (i = this.period, this.isDeleting = !0),
      setTimeout(function () {
        n.tick()
      }, i)
  };
  for (var e = document.getElementsByClassName("txt-rotate"), n = 0; n < e.length; n++) {
    var i = e[n].getAttribute("data-rotate"),
      o = e[n].getAttribute("data-period");
    i && new rotate(e[n], JSON.parse(i), o)
  }

  // Onepage Nav
  $('.navbar.fixed-top .navbar-nav').onePageNav({
    currentClass: 'active',
    changeHash: false,
    scrollSpeed: 400
  });

  // Window Scroll
  var navScroll = function () {
    if ($(window).scrollTop() > 10) {
      $('.navbar.fixed-top').addClass('bg-dark');
    } else {
      $('.navbar.fixed-top').removeClass('bg-dark');
    }
  }
  navScroll();
  $(window).on('scroll', navScroll);


  // Wow
  new WOW().init();
});