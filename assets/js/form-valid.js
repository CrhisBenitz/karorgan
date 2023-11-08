// function validationFunction() {
//   $('input').each(function() {
// 			input.checkValidity();
// 			console.log(input.checkValidity());
//   })
//   if(good) {
//     return true;
//   }
//   return false;
// }
//
// $(document).ready(function() {
//   $(window).keydown(function(event){
//     if( (event.key == "Enter") && (validationFunction() == false) ) {
//       event.preventDefault();
//       return false;
//     }
//   });
// });

$(document).ready(function() {
  $('form').submit(function(event) {
    var isValid = true;
    $('input').each(function() {
      var input = this; // Get the current input element

			console.log(input);
			console.log(input.checkValidity());
      if (!input.checkValidity()) {
        isValid = false;
				input.setCustomValidity(input.title);
        input.reportValidity(); // Display the validation message
				input.setCustomValidity("");
      }
    });

    if (!isValid) {
      event.preventDefault(); // Prevent form submission if any input is invalid
    }
  });

  $('button[type="submit"]').click(function(event) {
    var isValid = true;
    $('input').each(function() {
      var input = this; // Get the current input element
      if (!input.checkValidity()) {
        isValid = false;
        input.reportValidity(); // Display the validation message
      }
    });

    if (!isValid) {
      event.preventDefault(); // Prevent button action if any input is invalid
    }
  });

  $(window).keydown(function(event) {
    if (event.key === "Enter" && !$(event.target).is('textarea[name="message"]')) {
      event.preventDefault(); // Prevent default "Enter" key behavior unless in the 'message' textarea
    }
  });
});
