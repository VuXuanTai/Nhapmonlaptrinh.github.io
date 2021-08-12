function check()
{
     let nang = document.getElementById("height").value;
     let cao = document.getElementById("weight").value;
     let bmi;
     let ketqua;
     bmi = nang / (cao * 2)
      if(bmi < 16){
            ketqua = "Gầy độ III";
      }
      if(16 <= bmi && bmi <= 17){
            ketqua = "Gầy độ II";
      }
     if(17 <= bmi && bmi <= 18.5){
      ketqua = "Gầy độ II";
      }
      if(18.5 <= bmi && bmi <= 25){
            ketqua = "Bình thường";
      }
      if(25 <= bmi && bmi <= 30){
            ketqua = "Thừa cân";
      }
      if(30 <= bmi && bmi <= 35){
            ketqua = "Béo phì độ I";
      }
      if(35 <= bmi && bmi <= 40){
            ketqua = "Béo phì độ II";
      }
      if(bmi > 40){
            ketqua = "Béo phì độ III";
      }
      document.getElementById("result").innerHTML = "Chỉ số của bạn: " + ketqua;
}