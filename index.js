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
    alert('#fname is empty!');
  }
  else
  {
    // do something as phone number is a valid phone number
  }



if($('#lname').val().length <= 0)
{
  alert('#lname is empty!');
}
else
{
  alert ('your full name is correct')
}

if($('#Email').val().length <= 0)
{
  alert('#Email is empty!');
  console.log("Someone tried to submit the form!!!");
}

});
