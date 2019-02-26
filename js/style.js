const dialog=new mdc.dialog.MDCDialog.attachTo(document.querySelector('.mdc-dialog'));
const dialog2=new mdc.dialog.MDCDialog.attachTo(document.querySelector('.dialog2'));

$('#sign').on('click',function(evt){
	
	dialog.open();
})
$('#canclebtn').on('click',function(evt){
	
	dialog.close();
})


$(function(){


	$("#submit").on("click", function(){

		var EMAIL = document.getElementById("email").value;
		var PASSWORD = document.getElementById("password").value;
		var data={
			email:EMAIL,
			password:PASSWORD
		}
		console.log(data);
   return false; 

});
});

mdc.textField.MDCTextField.attachTo(document.querySelector('.email'));
mdc.textField.MDCTextField.attachTo(document.querySelector('.password'));

$('#reg').on('click',function(evt){
	
	dialog2.open();
})
$('#canclebtn').on('click',function(evt){
	
	dialog2.close();
})

$(function(){


	$("#submitt").on("click", function(){

		var Firstname = document.getElementById("firstname").value;
		var Lastname = document.getElementById("lastname").value;
		var EMAIL = document.getElementById("email1").value;
		var PASSWORD = document.getElementById("password1").value;

		var data={
			firstname:Firstname,
			lastname:Lastname,
			email:EMAIL,
			password:PASSWORD
		}
		console.log(data);
   return false; 

});
});

mdc.textField.MDCTextField.attachTo(document.querySelector('.email1'));
mdc.textField.MDCTextField.attachTo(document.querySelector('.password1'));
mdc.textField.MDCTextField.attachTo(document.querySelector('.firstname'));
mdc.textField.MDCTextField.attachTo(document.querySelector('.lastname'));
