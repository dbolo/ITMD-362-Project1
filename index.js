$('#event-invitation').on('submit', function(e) { //someone wants to submit
  e.preventDefault();

  console.log("first name: " + $('#fname').val());

  console.log("phone no: "+$('#phone').val());

  if($('#phone').val().length <= 0)
  {
    alert("Phone number is empty!");
  }
  else
  {
    // do something as phone number is a valid phone number
  }

  if($('#fname').val().length <= 0)
  {
    alert('#lname is empty!');
  }
  else
  {
    // do something as phone number is a valid phone number
  }



  console.log("Someone tried to submit the form!!!");
});
