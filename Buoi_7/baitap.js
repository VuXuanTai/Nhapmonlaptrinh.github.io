function tonghaiso(){
      
      let a = prompt('nhập số nguyên a: ');
      let b = prompt('nhập số nguyên b: ');
      a = parseInt(a);
      b = parseInt(b);
      let c = (a + b);
      alert('tổng hai số a và b là: ' + c);
}
function hienthi()
{
      let day = prompt('nhập ngày: ');
      let month = prompt('nhập tháng: ');
      let year = prompt('nhập năm: ')
      alert('Hôm nay là: ' + day + '/' + month + '/' + year);
}
function tinhtoan()
{
      const pi = 3.14;
      let r = prompt('Nhập bán kính hình tròn: ');
      let cv = (2*r*pi); // tính chu vi hình tròn
      let dt = (r*r*pi); // tính diện tích hình tròn
      alert('Hình tròn có chu vi: ' + cv + ' và diện tích: ' + dt);
}
function tinhlaisuat()
{
      let tiengui = prompt('Nhập số tiền gửi: ');
      let laisuat = prompt('Nhập lãi suất: ');
      let nam = prompt('Nhập số năm: ')
      nam = parseInt(nam);
      laisuat = parseFloat(laisuat);
      tiengui = parseInt(tiengui);
      let tongtien = (tiengui + nam * (tiengui*(laisuat/100)));
      alert('Tổng tiền ( gốc + lãi): ' + tongtien);
}
function inthu()
{
      let name = prompt('Nhập tên người nhận: ');
      let address = prompt('Nhập địa điểm: ');
      let time = prompt('Nhập thời gian: ');
      let noidung = prompt('Nhập nội dung thư: ');
      alert(name + ' thương nhớ, \n' + noidung + '\n' + address + ', ' + time)
}