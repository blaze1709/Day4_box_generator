var count = 0;

function button() {
    var number1 = document.getElementById("num1").value;
    var color = document.getElementById("color").value;

    for (let i = 0; i < number1; i++) {
        count++
        var btn = document.createElement("button");
        btn.id = "btn1";
        btn.innerHTML = "Box " + count;
        btn.style = "background-color:" + color + ";"
        document.body.appendChild(btn);

    }











}