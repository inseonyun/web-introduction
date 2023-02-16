
var checkboxes = document.getElementsByName("movie")

function button1Click() {
    var name = document.getElementById("editText").value

    if(name != "") {
        var same = 0;
        for(var i = 0; i < checkboxes.length; i++) {
            if(checkboxes[i].checked)
                same++;
        }
        if(same != 0)
            alert(name + "님, 저와 " + same + "개의 취향이 같으시네요!")
    }
}

function button2Click() {
    document.getElementById("editText").value = ""
    for(var i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = false
    }
}