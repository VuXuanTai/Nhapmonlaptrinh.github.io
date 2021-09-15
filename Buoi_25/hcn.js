class Rectangle{
      width;
      length;
      s;
      c;
      constructor(width,length){
            this.width = width;
            this.length = length;
      }
      getwidth(){
            return this.width;
      }
      getlength(){
            return this.length;
      }
      setwidth(width){
            this.width = width;
      }
      setlength(length){
            this.length = length;
      }
      getArea(){
            return this.width * this.length;
      }
      chuvi(){
            return (this.width + this.length)*2;
      }
}
let hcn1 = new Rectangle(20, 25);
let d = hcn1.getlength();
let r = hcn1.getwidth();
let s = hcn1.getArea();
let c = hcn1.chuvi();
document.write("Diện tích: " + s + "<br>");
document.write("Chu vi: " + c);
