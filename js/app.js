'use strict';

$('#select').change(function(){
  $( '#content' ).empty();
  loadImg();
});

function loadImg() {
  $.getJSON('page-1.json', function (data) {
    $.each(data, function(i,f) {
      $('#select').append('<option value="'+f.keyword+'">'+f.keyword+'</option>');
      var value = $('#select').val();
      if(value === '0'){
        $('#content').append('<div><img height="80" width="100" src="' + f.image_url + '">  </div>');
      }
      if(value === f.keyword){
        $('#content').append('<div><img height="80" width="100" src="' + f.image_url + '">  </div>');
      }
    });
  });
}
