$("#dis").submit(function(e) {

    var url = "rand.php"; // the script where you handle the form input.

    $.ajax({
           type: "POST",
           url: url,
           data: $("#dis").serialize(), // serializes the form's elements.
           success: function(data)
           {
				document.getElementById("demo").innerHTML=data;
               
           }
         });

    e.preventDefault(); // avoid to execute the actual submit of the form.
});