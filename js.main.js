function htt_orion(){

setTimeout(function(){


swal({  

 title: "Bạn nhận được một món quà !",   
text: "Voi Bé Nhỏ vừa gửi bạn một món quà đặc biệt nhân ngày 20-10  ",
imageUrl: "https://graph.facebook.com/100005147710409/picture?type=large",
  showCancelButton: true,
  confirmButtonColor: "#d3d030", 
  confirmButtonText: "Nhận quà ngay",
   cancelButtonText: "Đéo cần, cám ơn .", 
  closeOnConfirm: false,  
 closeOnCancel: false }, 
function(isConfirm){  
 if (isConfirm) {   
 

swal({  
 title: "Bạn có phải là Chi ? ", 
  text: "Nhập mã xác nhận nè ",  
 type: "input",  
 showCancelButton: true,  
 closeOnConfirm: false,   
 showLoaderOnConfirm: true,
animation: "slide-from-top",  
 inputPlaceholder: "Mã xác nhận là gì ?" },
 function(inputValue){   
if (inputValue === false) return false;   
   if (inputValue !== "19/8/19") {   
  swal.showInputError("Nhập sai rồi kìa má ơi :v ");   
  return false   }   
 
setTimeout(function(){


swal({  
 title: "Chúc em 20-10", 
  text: "Luôn luôn xinh đẹp , luôn luôn cute, mãi khỏe mạnh không bị đau gì nữa cả , phải thật mạnh mẽ nhé , anh yêu emmmm <3",  
 type: "input",  
 showCancelButton: true,  
 closeOnConfirm: false,   
animation: "slide-from-top",  

 inputPlaceholder: " ĐM để tiếp tục " },
 function(inputValue){   
if (inputValue === false) return false;   
   if (inputValue === "") {   
  swal.showInputError("Không thể để trống được ");   
  return false   }  
 swal("ok ! ", + inputValue + " Chúc em một ngày 20-10 thật Vui Vẻ nhé ^^   ", "success"); });


},3000);



});

 }
else {   
  swal("KHÔNG NHẬN ", "Bạn vừa từ chối món quà từ Voi Bé Nhỏ ,   tải lại trang nếu muốn nhận lại quà :D ", "error"); 

  } });



},8000);
}
htt_orion();

