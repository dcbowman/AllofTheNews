//Loads an article from the database
$(document).ready(){
 $.getJSON('/all', function(data){
  for var i = 0; i<data.length; i++{

  }
 }
}


//Pulls user comments and adds them to the database
$('#addcomment').on('click', function(){
  $.ajax({
    type: "POST",
    url: '/submit',
    dataType: 'json',
    data: {
      thoughts: $('#thought').val(),
      created: Date.now()
    }
  })
  .done(function(data){
    console.log(data);
  }
  );
  return false;
});
