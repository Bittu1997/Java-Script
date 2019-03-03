/*Author name: P.V.Srikar, https://www.linkedin.com/in/pullipudi-venkata-srikar-943418132/
* Organization : http://www.cedarinfotech.com, https://www.linkedin.com/company/cedarinfotech
* Mentor name: Pankaj Bhagat,  https://www.linkedin.com/in/pankajbhagat/
* Date : 03/03/2019.*/
function getExtension(){
    filename = document.getElementById("filename").value;
    extension = filename.split('.').pop();
    count = filename.split('.');
    len = count.length;
    if(len == 1)
    {
        extension = "No extension exists";    
    }
    document.getElementById("res").innerHTML = extension;
}