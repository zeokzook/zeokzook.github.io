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

var carousels = document.getElementsByClassName("carousel");

if(carousels.length > 1)
{
    for (let index = 0; index < carousels.length; index++) {
        const carouselID = "carousel"+index;
        carousels[index].id = carouselID;
        carousels[index].getElementsByClassName("carousel-control-prev")[0].dataset.bsTarget = "#"+carouselID;
        carousels[index].getElementsByClassName("carousel-control-next")[0].dataset.bsTarget = "#"+carouselID;
    }
}