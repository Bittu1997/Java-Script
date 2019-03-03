/*Author name: P.V.Srikar, https://www.linkedin.com/in/pullipudi-venkata-srikar-943418132/
* Organization : http://www.cedarinfotech.com, https://www.linkedin.com/company/cedarinfotech
* Mentor name: Pankaj Bhagat,  https://www.linkedin.com/in/pankajbhagat/
* Date : 03/03/2019.*/
function removeVowels(){
    var sentence = document.getElementById("text").value;
    sentence = sentence.split('a').join('').split('e').join('').split('i').join('').split('o').join('').split('u').join('').split('A').join('').split('E').join('').split('I').join('').split('O').join('').split('U').join('');
    document.getElementById("result").innerHTML = sentence;
}