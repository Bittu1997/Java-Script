/*Author name: P.V.Srikar, https://www.linkedin.com/in/pullipudi-venkata-srikar-943418132/
* Organization : http://www.cedarinfotech.com, https://www.linkedin.com/company/cedarinfotech
* Mentor name: Pankaj Bhagat,  https://www.linkedin.com/in/pankajbhagat/
* Date : 03/03/2019.*/
var obj = Object(prompt('Object'));
console.log(Object.getOwnPropertyNames(obj));

var prop=Object.getOwnPropertyNames(Math).filter(function (a){
    return typeof(math[a])==='function';
});

console.log(prop);