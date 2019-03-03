/*Author name: P.V.Srikar, https://www.linkedin.com/in/pullipudi-venkata-srikar-943418132/
* Organization : http://www.cedarinfotech.com, https://www.linkedin.com/company/cedarinfotech
* Mentor name: Pankaj Bhagat,  https://www.linkedin.com/in/pankajbhagat/
* Date : 03/03/2019.*/
function myFunction(){
    var value = document.getElementById("number").value;
    if(value < 0){
        alert("Please enter a positive number");
        document.getElementById("number") = null;
    }
    else{
        alert("Ok! Submission successful...");
    }
}