
$('form').on('submit',function(){
	// event.preventDefault();///rỗng k cho submit.
	var isValid=true;
	if($('#lastName').val()==""){
		$('#lastName').next('span').text('Hãy nhập họ');
		isValid=false;
	}
	else
		$('#lastName').next('span').text('');
///
	if($('#firstName').val()==""){
		$('#firstName').next('span').text('Hãy nhập tên');
		isValid=false;
	}
	else
		$('#firstName').next('span').text('');
///
	if($('#mail').val().match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)==null){
		$('#mail').next('span').text('Chọn một địa chỉ mail');
		isValid=false;
	}
	else
		$('#mail').next('span').text('');
///
	if($('#password').val()==""){
		$('#password').next('span').text('Hãy nhập mật khẩu');
		isValid=false;
	}
	else
		$('#password').next('span').text('');
/////
	if($('#repassword').val()==""|| $('#repassword').val() != $('#password').val()){
		$('#repassword').next('span').text('Hãy nhập lại mật khẩu');
		isValid=false;
	}
	else
		$('#repassword').next('span').text('');
///

return isValid;
})
