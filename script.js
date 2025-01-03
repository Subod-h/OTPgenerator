 function myFunc() {
    var num = '0123456789';

    var otp = num[Math.floor(Math.random() * num.length)];

    while(otp.length < 6) {
        otp += num[Math.floor(Math.random() * num.length)];
    }
    
    document.getElementById('input1').value = otp[0];
    document.getElementById('input2').value = otp[1];
    document.getElementById('input3').value = otp[2];
    document.getElementById('input4').value = otp[3];
    document.getElementById('input5').value = otp[4];
    document.getElementById('input6').value = otp[5];
 }

 //const elements = document.querySelectorAll('#input1, #input2, #input3, #input4, #input5, #input6');

 function copyOTP() {
    var otp = '';
   for (var i = 1; i <= 6; i++) {
       otp += document.getElementById('input' + i).value;
   }

   var tempTextArea = document.createElement('textarea');
   tempTextArea.value = otp; 
   document.body.appendChild(tempTextArea);
   tempTextArea.select(); 
   document.execCommand('copy'); 
   document.body.removeChild(tempTextArea);
   alert('OTP copied to clipboard!');
 }
