jQuery(function() {
    jQuery.ajax({
      url: './header.html',
      dataType: 'html',
      success: function(data) {
          $('#header').html(data);
      },
      error: function(xhr, error){
          //alert('error. see console for details');
          console.error(error);
      }
    });
    jQuery.ajax({
      url: './footer.html',
      dataType: 'html',
      success: function(data) {
          $('#footer').html(data);
      },
      error: function(xhr, error){
          //alert('error. see console for details');
          console.error(error);
      }
    });
});