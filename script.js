$(document).ready(function () {
    $('#btnSave').click(function () {
        addCheckbox();
    });
});

function retrieveLocal() {
    if (localStorage.length != 0) {
        for (i = 0; i <localStorage.length; i++) {
            $('#cblist').append(JSON.parse(localStorage.getItem(i)));
        };
    };
};

function addCheckbox() { 
    var counter = localStorage.length;
    var container = $('#cblist');
    var task = {
        id: counter,
        item: document.getElementById("txtName").value,
        checkbox: "<input type = 'checkbox' onChange = $(this.parentNode).remove; >",
        time: Time(),
        button: "<input type ='button' id = 'counter' value ='Remove' onClick = $(this.parentNode).remove(); localStorage.removeItem(float(this.id)/>"
    }; 
    var div_folder = "<div>" + task.checkbox + " " + task.item + " " + task.time + " " + task.button + "</br>" + "<div>";
    container.append(div_folder);
    localStorage.setItem(localStorage.length, JSON.stringify(div_folder));
    counter += 1;
}

function Clear() {
    document.getElementById("txtName").value = "";
}

function Time() {
    var time = new Date();
    var hour = time.getHours();
    if (hour > 12) {
        hour = hour - 12.00;
    }
    var minute = time.getMinutes();
    var second = time.getSeconds();
    clock =  "@ " + hour + ":" + minute + ":" + second;
    return clock
}