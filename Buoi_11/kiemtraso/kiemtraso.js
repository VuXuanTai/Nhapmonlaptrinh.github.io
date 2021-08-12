function check()
{
      let Number = +document.getElementById("nhapso").value;
      let Result;
      if (Number % 2 == 0){
            Result = "Check: " + Number + " là số chẵn!";
      }
      else{
            Result = "Check: " + Number + " không là số chẵn!";
      }
      document.getElementById("check1").innerHTML = Result;
}