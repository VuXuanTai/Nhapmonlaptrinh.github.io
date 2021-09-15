class car{
      color;
      speed;

      move(){
            document.write("xe có màu " + this.color + " chạy với vận tốc " + this.speed + "<br>")
      }
}
let car1 = new car()
car1.color = "blue";
car1.speed = 80;
car1.move()