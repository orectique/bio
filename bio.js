// Typewriter.js
// https://github.com/ronv/Typewriter.js

$.fn.typewriter = function() {
    this.each(function() {
      var c = $(this),
        b = c.html(),
        a = 0,
        d = 0;
      c.html("");
      var e = function() {
        if ("<" == b.substring(a, a + 1)) {
          var f = new RegExp(/<span class="instant"/),
            g = new RegExp(/<span class="clear"/);
          if (b.substring(a, b.length).match(f)) a += b.substring(a, b.length).indexOf("</span>") + 7;
          else if (b.substring(a, b.length).match(g)) d = a, a += b.substring(a, b.length).indexOf("</span>") + 7;
          else
            for (;
              ">" != b.substring(a, a + 1);) a++
        }
        c.html(b.substring(d, a++) + (a & 1 ? "_" : ""));
        a >= b.length || setTimeout(e, 70 + 100 *
          Math.random())
      };
      e()
    });
    return this
  };
  
  $(".terminal").typewriter();