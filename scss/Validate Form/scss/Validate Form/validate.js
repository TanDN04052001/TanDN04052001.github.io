function validateForm(){
	var name=document.forms["register"].txtName.value,
		age=document.forms["register"].txtAge.value,
		email=document.forms["register"].txtEmail.value,
		pass=document.forms["register"].txtPassword.value,
		gender=document.forms["register"].gender.value;
	 if (name==""||name==" "){
		alert("Không được để trống tên");
	 }
	 if (age<"18"){
		 alert("Tuổi lớn hơn bằng 18");
	 }
	 if (email==""||email==" "){
		 alert("Không được để trống email");
	 }
	 if (pass==""||pass==" "){
		 alert("Không được để trống Password");
	 }
	 if (gender==""||gender==" "){
		 alert("Không được để trống gender");
	 }
	 if (isNaN(age)){
		 alert("Tuổi nhập vào là số");
	 }
}

