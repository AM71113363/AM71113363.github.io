function grabS()
{
document.all.d.innerHTML=document.all.s.innerHTML;
}

function addMe()
{
var temp="<button onclick=\"mmm()\">uuu</button>";
document.body.insertAdjacentHTML("AfterBegin",temp);
}
