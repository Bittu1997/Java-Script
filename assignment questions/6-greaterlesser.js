/*Author name: P.V.Srikar, https://www.linkedin.com/in/pullipudi-venkata-srikar-943418132/
* Organization : http://www.cedarinfotech.com, https://www.linkedin.com/company/cedarinfotech
* Mentor name: Pankaj Bhagat,  https://www.linkedin.com/in/pankajbhagat/
* Date : 03/03/2019.*/
function lessThan(){
    values = convertor();
    threshold = document.getElementById("threshold").value;
    return values <= threshold;
}

function moreThan(){
    values = convertor();
    threshold = document.getElementById("threshold").value;
    return values >= threshold;
}

function convertor(){
    str = document.getElementById("array").value;
    var numbers = str.split(",");
    var values = [];
    var i = numbers.length;
    for(var j = 0; j < i; j++)
    {
        values.push(Number(numbers[j]));
    }
    console.log(typeof(values));
    return values;
}

function myFunction1(){
    document.getElementById("result1").innerHTML = convertor().filter(lessThan);
}

function myFunction2(){
    document.getElementById("result2").innerHTML = convertor().filter(moreThan);
}