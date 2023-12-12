jQuery(function() {
    jQuery.ajax({
      url: '/header.html',
      dataType: 'html',
      success: function(data) {
          $('#header').html(data);
          document.getElementById("header").scrollIntoView({behavior: "instant"});
      },
      error: function(xhr, error){
          //alert('error. see console for details');
          console.error(error);
      }
    });
    jQuery.ajax({
      url: '/footer.html',
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

function showContent() {
    let temp = document.getElementsByTagName("template")[0];
    let clon = temp.content.cloneNode(true);
    document.body.appendChild(clon);
 };