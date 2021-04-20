'use strict';

$('#select').change(function(){
  $( '#content' ).empty();
  loadImg();
});

function loadImg() {
  $.getJSON('data/page-1.json', function (data) {
    $.each(data,function(index,item){
      $('#select').append('<option value="'+item.keyword+'">'+item.keyword+'</option>');
      var html = ''
          + '<div class="dataItem">'
              + '<p>{{title}} <br> <img src={{image_url}} alt="Girl in a jacket" width="200" height="200"> <br>{{keyword}} <br> {{horns}} </p>'
          + '</div>';
      var value = $('#select').val();
      if(value === '0'){
        $('#content').append(Mustache.render(html,item));

      }
      if(value === item.keyword){
        $('#content').append(Mustache.render(html,item));
      }


    });
  });
}

