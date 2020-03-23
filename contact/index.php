<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title> Contact Form</title>
</head>
<body>
<header>
  <h1> Contact Us </h1>
</header>
<p> </p>
<form action="processform.php" method="POST">
<p><label for="firstname"> First Name </label>
<input type="text" name="firstname" id="firstname" >
</p>
<p>
<label for="lastname"> Last Name</label>
<input type="text" name="lastname" id="lastname" >
</p>
<p>
<label for="surname"> Surname </label>
<input type="text" name="surname" id="surname" >
</p>
<p>
<label for="gender"> Gender </label>
<input type="radio" name="gender" value="male" > Male
<input type="radio" name="gender" value="female" > Female
</p>
<p>
  <label> Select your reason</label>
  <select name="reason">
    <option> Select your reason</option>
    <option value="job"> For a Job</option>
    <option value="Personal">  Personal </option>
    <option value="mentorship"> Mentorship </option>
  </select>
</p>
<p>
<label for="comments"> Comments </label>
<br/>
<textarea name="comments">
</textarea>
</p>
<p>
  <input type="checkbox" name="agree" >By checking this box you agree to our terms and condition
</p>
<button type="submit" > Submit</button>
</form>




</body>
</html>