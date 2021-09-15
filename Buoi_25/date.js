class MyDate {
      constructor(day, month, year) {
            this.day = day;
            this.month = month;
            this.year = year;
      }
      setDay(day){
            this.day  = day;
      }
      setMonth(month){
            this.month  = month;
      }
      setYear(year){
            this.year  = year;
      }
      getDay(){
            return this.day;
      }
      getMonth(){
            return this.month;
      }
      getYear(){
            return this.year;
      }
      
}
let date = new MyDate(2, 2, 2007);
let day = date.getDay(); // 2
let month = date.getMonth(); // 2
let year = date.getYear(); // 2007
alert(day + "/" + month + "/" + year);