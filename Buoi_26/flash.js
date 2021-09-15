class Battery {

      constructor() {
          this.energy = 0;
      }
  
      setEnergy(energy) {
          this.energy = energy;
      };
  
      getEnergy() {
          return this.energy;
      };
  
      decreaseEnergy() {
          if (this.energy > 0) {
              this.energy--;
          }
      }
  
  };
  class FlashLamp {

      constructor() {}
  
      setBattery(battery) {
          this.battery = battery;
      };
  
      getBatteryInfo() {
          return this.battery.getEnergy();
      };
  
      light() {
          if(this.status){
            document.write("status: Lighting" + "<br>");
          } else {
            document.write("status: Not Lighting" + "<br>");
          }
      };
  
      turnOn() {
          this.status = true;
          this.battery.decreaseEnergy();
      };
      
      turnOff() {
          this.status = false;
      }
  };

 let battery1 = new Battery();
battery1.setEnergy(10);

let flashLamp = new FlashLamp();
flashLamp.setBattery(battery1);

document.write("Battery info:" + flashLamp.getBatteryInfo() + "<br/>");
flashLamp.turnOn();
flashLamp.light();
document.write("Battery info:" + flashLamp.getBatteryInfo() + "<br/>");

document.write("____Turn off____<br/>")
flashLamp.turnOff();
flashLamp.light();