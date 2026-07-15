var form = document.getElementById("form");

form.onsubmit = function(e){

    e.preventDefault();

    var fname = document.getElementById("fname").value.trim();
    var lname = document.getElementById("lname").value.trim();
    var sid = document.getElementById("sid").value.trim();
    var email = document.getElementById("email").value.trim();
    var credit = document.getElementById("credit").value;
    var dept = document.getElementById("dept").value;

    if(fname==""){
        alert("Enter First Name");
        return;
    }

    if(lname==""){
        alert("Enter Last Name");
        return;
    }

    if(sid.indexOf("-")==-1){
        alert("Student ID must contain -");
        return;
    }

    if(email.indexOf("@student.aiub.edu")==-1){
        alert("Enter AIUB Student Email");
        return;
    }

    if(credit<0 || credit>=148){
        alert("Credit must be 0 to 147");
        return;
    }

    if(dept==""){
        alert("Select Department");
        return;
    }

    var table = document.getElementById("table");

    var row = table.insertRow();

    row.insertCell(0).innerHTML = fname;
    row.insertCell(1).innerHTML = lname;
    row.insertCell(2).innerHTML = sid;
    row.insertCell(3).innerHTML = email;
    row.insertCell(4).innerHTML = credit;
    row.insertCell(5).innerHTML = dept;

    form.reset();

}