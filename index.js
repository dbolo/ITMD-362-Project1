$('#event-invitation').on('submit', function(e) { //someone wants to submit
  e.preventDefault();

  console.log("first name: " + $('#fname').val());
