function count() {
  let total=document.getElementById("text").value;
  total=total.replace(/\s/g, '');
  document.getElementById("total").innerHTML="Total Characters:"+total.length;
}