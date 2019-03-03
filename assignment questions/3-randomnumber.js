/*Author name: P.V.Srikar, https://www.linkedin.com/in/pullipudi-venkata-srikar-943418132/
* Organization : http://www.cedarinfotech.com, https://www.linkedin.com/company/cedarinfotech
* Mentor name: Pankaj Bhagat,  https://www.linkedin.com/in/pankajbhagat/
* Date : 03/03/2019.*/
var count = 1;
if(count<6)
{
    count = count + 1;
    function myFunction() {
        var count = 1
        var x = Math.floor((Math.random()*10) +1)
        num1 = document.getElementById("user").value;
        document.getElementById("demo").innerHTML = x;
            if(num1>10||num1<0)
            {
                alert("Number out of bound");
            }
            else
            {
                if (x==num1)
                {
                    document.getElementById("result").innerHTML = "Good Work"
                    document.getElementById("comments").innerHTML = "The number enetered is matching the system value."
                }
                else
                {
                    document.getElementById("result").innerHTML = "Not Good Work"
                    if(num1>x)
                    {
                        document.getElementById("comments").innerHTML = "You have entered a number that is greater than system generated value.";
                    }
                    if(num1<x)
                    {
                        document.getElementById("comments").innerHTML = "You have entered a number that is smaller than system generated value.";
                    }
                }
            }
        }        
}
else{
    alert("You have reaced the limit.");
}