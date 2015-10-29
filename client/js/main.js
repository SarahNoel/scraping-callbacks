
$.get('/newsies', function(data){
  console.log(data.html);
  $('#type').html(data.url);
  $('#imgPlace').html('<img src="'+data.img+'">');




});


