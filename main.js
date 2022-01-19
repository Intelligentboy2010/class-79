display_array=[];
function submit(){
var name1=document.getElementById("t1").value;
var name2=document.getElementById("t2").value;
var name3=document.getElementById("t3").value;
var name4=document.getElementById("t4").value;

display_array.push(name1);
display_array.push(name2);
display_array.push(name3);
display_array.push(name4);

console.log(display_array);
document.getElementById("display_name").innerHTML =display_array;
document.getElementById("submit").style.display="none";
document.getElementById("sort").style.display="inline-block";

}

function sorting()
{
    display_array.sort();
    console.log(display_array);
    document.getElementById("display_name").innerHTML =display_array;
}