var res = 0;
function checking(){
    var a1 = document.getElementById("q1b")
    var a2 = document.getElementById("q2c")
    var a3 = document.getElementById("q3d")
    var a4 = document.getElementById("q4c")
    if(a1.checked == true)
    {
        res++
    }
    if(a2.checked == true)
    {
        res++
    }
    if(a3.checked == true)
    {
        res++
    }
    if(a4.checked == true)
    {
        res++
    }
    
    alert("Your score is "+res+"/4")
}