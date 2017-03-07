(function ( $ ) {
 
    $.fn.update = function(url) {
	      var settings = $.extend({
            // These are the defaults.
            url: window.location.href
           }, url );
	      $.ajax({
	        url: url,
	        beforeSend: function(request) {
	            request.setRequestHeader("Access-Control-Allow-Origin", '*');
	        },
	        cache: false
	      })
        .done(function (data) {
        	var result = $(data).filter(this);
        	this.html(result);
        });
        return this;
    };
 
}( jQuery ));