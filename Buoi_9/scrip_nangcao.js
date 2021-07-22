function Lay_gia_tri_cu(){
    return document.getElementById(gia_tri_cu).innerText;
}
function In_gia_tri_cu(so) {
    document.getElementById("gia_tri_cu").innerText = so;
}
function Lay_ket_qua() {
    return document.getElementById("gia_tri_xuat").innerText;
}
function In_Ket_qua(so) {
    if(so=="") {
        document.getElementById("gia_tri_xuat").innerText = so;
    } else {
        document.getElementById("gia_tri_xuat").innerText = Dinh_dang_chuoi(so);
    }
}
function Xoa_Dinh_dang_chuoi(so) {
    return Number(so.replace(/,/g, ''))
}
var con_so = document.getElementsByClassName('con_so');
 for(var i=0; i<con_so.length; i++) {
     con_so[i].addEventListener('click', function() {
         var ket_qua = Xoa_Dinh_dang_chuoi(Lay_ket_qua())
         if(ket_qua != NaN) {
             ket_qua = ket_qua + this.id;
             In_Ket_qua(ket_qua)
         }
     })
 }