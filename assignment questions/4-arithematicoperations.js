/*Author name: P.V.Srikar, https://www.linkedin.com/in/pullipudi-venkata-srikar-943418132/
* Organization : http://www.cedarinfotech.com, https://www.linkedin.com/company/cedarinfotech
* Mentor name: Pankaj Bhagat,  https://www.linkedin.com/in/pankajbhagat/
* Date : 03/03/2019.*/
function multiply() {
    num1 = document.getElementById("first").value;
    num2 = document.getElementById("second").value;
    document.getElementById("res").innerHTML = num1 * num2;
}

function divide() {
    num1 = document.getElementById("first").value;
    num2 = document.getElementById("second").value;
    if(num2 != 0)
        document.getElementById("res").innerHTML = num1 / num2;
    else
        alert("Division not possible");
}