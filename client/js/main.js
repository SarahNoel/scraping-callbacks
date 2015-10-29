
$.get('/newsies', function(data){
  console.log(data.html);
  $('#type').html(data.url);
  console.log(data.img);
  $('#imgPlace').html('<img src="'+data.img+'">');




});


