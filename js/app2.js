'use strict';

$('#select').change(function(){
  $( '#content' ).empty();
  loadImg();
});

function loadImg() {
  $.getJSON('data/page-2.json', function (data) {
    $.each(data,function(index,item){
      $('#select').append('<option value="'+item.keyword+'">'+item.keyword+'</option>');
      $('#name').click(function(){
        item.sort(function(a, b) {
          var nameA = a.title.toUpperCase(); // ignore upper and lowercase
          var nameB = b.title.toUpperCase(); // ignore upper and lowercase
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }

          // names must be equal
          return 0;
        });
      });
      $('#num').click(function(){
        item.sort(function (a, b) {
          return a.horns - b.horns;
        });
      });
      var html = ''
          + '<div class="dataItem">'
              + '<p>{{title}} <br> <img src={{image_url}} alt="Girl in a jacket" width="100" height="100"> <br>{{keyword}} <br> {{horns}} </p>'
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
