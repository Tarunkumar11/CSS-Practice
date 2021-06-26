$(document).ready(function()
{
  
  signup = document.getElementById("signup")
  signup.style.visibility = "hidden"
  
})

$("#loginbtn").click(function()
{
  signup = document.getElementById("signup")
  login = document.getElementById("login")
  signup.style.visibility = "hidden"
  login.style.visibility = "visible"
  

  
}
)

$("#signupbtn").click(function()
{
  login = document.getElementById("login")
  login.style.visibility = "hidden"
  signup = document.getElementById("signup")
  signup.style.visibility = "visible"
  form = document.getElementsByTagName("form")[0]
  form.style.padding =  "0px 57px 57px 57px";
  
}
)

function validate()
{
  console.log("Validating the password")
  password1 = document.getElementById("passward1");
  password2 = document.getElementById("passward1");
  error = document.getElementById("error")

  if(password2 == null || password2 == null)
  {
    error.innerHTML = "Password can not be null"
  }
  else if(password1 != password2)
  {
    error.innerHTML = "Password is not mactching"
    
  }
  else
  {
    location.reload();
   
  }

}

