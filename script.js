// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()


document.addEventListener("scroll", function(){
  
  var skillsSection = document.getElementById("skills-title");
  if(isScrolledIntoView(skillsSection) == true){
    $('.progress .progress-bar').css("width",
    function() {
        return $(this).attr("aria-valuenow") + "%";
    }
)
  }
})

  function isScrolledIntoView(el) {
    var rect = el.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;

    // Only completely visible elements return true:
    //var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
    // Partially visible elements return true:
    var isVisible = (elemTop + window.innerHeight *0.25) < window.innerHeight && elemBottom >= 0;
    return isVisible;
}


(function($) {

  /**
   * Copyright 2012, Digital Fusion
   * Licensed under the MIT license.
   * http://teamdf.com/jquery-plugins/license/
   *
   * @author Sam Sehnert
   * @desc A small plugin that checks whether elements are within
   *     the user visible viewport of a web browser.
   *     only accounts for vertical position, not horizontal.
   */

  $.fn.visible = function(partial) {
    
      var $t            = $(this),
          $w            = $(window),
          viewTop       = $w.scrollTop(),
          viewBottom    = viewTop + $w.height(),
          _top          = $t.offset().top,
          _bottom       = _top + $t.height(),
          compareTop    = partial === true ? _bottom : _top,
          compareBottom = partial === true ? _top : _bottom;
    
    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

  };
    
})(jQuery);

$(window).scroll(function(event) {
  
  $(".animate-x").each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("come-x"); 
    } 

  });
  
  $(".animate-y").each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("come-y"); 
    } 

  });

});