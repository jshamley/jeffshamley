(function ($, Drupal, window, document, undefined) {

Drupal.behaviors.overlayWindow = {
  attach: function(context, settings) {
    "use strict";

    // do not cache ajaxed pages
    $.ajaxSetup({
      cache: false,
    });

    $('a.image-overlay').click(function() {
      var targetUrl = $(this).attr('href');

      $.ajax({
        type: 'GET',
        url: targetUrl,
        dataType: 'html',
        success: function(response) {
          $('body').addClass('overlay-open');
          $('#overlay').addClass('open');
          var overlayContent = $('#content', $(response));
          $('#overlay .overlay-content').html(overlayContent);
        },
      }).done(function() {
        // all done!
      });

      return false;
    });

    $('#overlay').click(function() {
      closeOverlay();
    });
    $('.overlay-wrapper').click(function(event) {
      if (event.target.className !== 'overlay-close') {
        event.stopPropagation();
      }
    });

    function closeOverlay() {
      $('body').removeClass('overlay-open');
      $('#overlay').removeClass('open');
      $('#overlay .overlay-content').html('');
    }
  }
};

Drupal.behaviors.formLabels = {
  attach: function(context, settings) {
    "use strict";

    if (!$('body').hasClass('is-ie')) {
      $('.form-item').each(function() {
        var label = $(this).children('label').text();
        $(this).addClass('label-hidden');
        $(this).find('input, .form-textarea-wrapper textarea').attr('placeholder', label);
      });
    }
  }
}

})(jQuery, Drupal, this, this.document);
