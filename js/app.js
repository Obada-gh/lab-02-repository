'use strict';
var page = 1;
$('#select').change(function () {
  $('#content').empty();
  loadImg();
});


$("#page1").click(function(){
  page = 1;
  loadImg();
})

$("#page2").click(function(){
  page = 2;
  $('#content').empty();
  loadImg();
})

function loadImg() {

  $.get(`data/page-${page}.json`).then(data=>{ $.each(data, function (index, item) {
    $('#select').append('<option  value="' + item.keyword + '">' + item.keyword + '</option>');

    var html = ''
    + '<div class="dataItem" sortbytitle="{{title}}" sortbyid="{{horns}}">'
    + '<p>{{title}} <br> <img src={{image_url}} alt="Girl in a jacket" width="50" height="50"> <br>{{keyword}}  <br> {{horns}} </p>'
    + '</div>';


    var value = $('#select').val();
    if (value === '0') {
      $('#content').append(Mustache.render(html, item));

    }
    if (value === item.keyword) {
      $('#content').append(Mustache.render(html, item));
    }


  });});
}

$('#sort').change(function () {

  var value = $('#sort').val();
  var items = $('.dataItem');
  if(value==='name'){
    items.sort(function(a, b){
      var aText= a.attributes.sortbytitle.value.toUpperCase();
      var bText =b.attributes.sortbytitle.value.toUpperCase();
      return (aText < bText) ? -1 : (aText > bText) ? 1 : 0;
    });
  }else{
    items.sort(function(a, b){
      var aText= parseInt(a.attributes.sortbyid.value);
      var bText =parseInt(b.attributes.sortbyid.value);
      return (aText < bText) ? -1 : (aText > bText) ? 1 : 0;
    });
  }
  $('#content').html('');
  $('#content').html(items);

});








