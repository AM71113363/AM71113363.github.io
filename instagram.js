function grabS()
{
document.all.d.innerHTML=document.body.innerHTML;
}

function addMe()
{
var temp="<button onclick=\"mmm()\">uuu</button>";
document.body.insertAdjacentHTML("AfterBegin",temp);
}
