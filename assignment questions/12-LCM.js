/*Author name: P.V.Srikar, https://www.linkedin.com/in/pullipudi-venkata-srikar-943418132/
* Organization : http://www.cedarinfotech.com, https://www.linkedin.com/company/cedarinfotech
* Mentor name: Pankaj Bhagat,  https://www.linkedin.com/in/pankajbhagat/
* Date : 03/03/2019.*/
function LCM() {
    num1 = document.getElementById("first").value;
    num2 = document.getElementById("second").value;
    lcm = (!num1 || !num2) ? 0 : Math.abs((num1 * num2) / gcd_two_numbers(num1, num2));
    document.getElementById("res").innerHTML =  lcm;
}

function gcd_two_numbers(num1, num2) {
    while(num2) {
      var t = num2;
      num2 = num1 % num2;
      num1 = t;
    }
    return num1;
  }