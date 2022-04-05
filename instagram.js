function mmm()
{
alert("this is a test");
}

function addMe()
{
var temp="<button onclick=\"mmm()\">uuu</button>";
document.body.insertAdjacentHTML("AfterBegin",temp);
}
mmm();
