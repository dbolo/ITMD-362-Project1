$(document).ready(function(){

console.log("document is ready.");

  function record_problem(problem)
  {
    $('#problems > ul').append('<li>'+problem+"</li>");
  }

  $('#event-invitation').on('submit', function(e) { //someone wants to submit
    e.preventDefault();

    $('#problems > ul').empty();

    console.log("first name: " + $('#fname').val());

    console.log("phone no: "+$('#phone').val());

    if($('#phone').val().length <= 0)
    {
      record_problem("Phone number is empty!");
    }
    else
    {
      // do something as phone number is a valid phone number
    }

    if($('#fname').val().length <= 0)
    {
      record_problem('#fname is empty!');
    }
    else
    {
      // do something as phone number is a valid phone number
    }



  if($('#lname').val().length <= 0)
  {
    record_problem('#lname is empty!');
  }
  else
  {
    record_problem ('your full name is correct')
  }

  if($('#email').val().length <= 0)
  {
    record_problem('#email is empty!');
    console.log("Someone tried to submit the form!!!");
  }

  });

})
