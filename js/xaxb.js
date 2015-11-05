var arr = []
while (arr.length < 8) {
    var randomnumber = Math.ceil(Math.random() * 100)
    var found = false;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == randomnumber) {
            found = true;
            break
        }
    }
    if (!found) arr[arr.length] = randomnumber;
}

$(document).ready(function() {
    var sysarr = []
    while (sysarr.length < 4) {
        var randomnumber = Math.ceil(Math.random() * 10) - 1
        var found = false;
        for (var i = 0; i < sysarr.length; i++) {
            if (sysarr[i] == randomnumber) {
                found = true;
                break
            }
        }
        if (!found) sysarr[sysarr.length] = randomnumber.toString();
    }
    console.log(sysarr);
    $("#xaxb").click(function() {
        var myarr = [];
        myarr.push($("#n1").val());
        myarr.push($("#n2").val());
        myarr.push($("#n3").val());
        myarr.push($("#n4").val());
        var A = 0
        var B = 0
        for (var i = 0; i < myarr.length; i++) {
            var number = myarr[i];
            if ($.inArray(number, sysarr) != -1) {
                B = B + 1;
                if (myarr.indexOf(number) === sysarr.indexOf(number)) {
                    A = A + 1;
                }
            }
        }
        console.log(A, "A", B, "B");
        var result = A.toString().concat("A", B.toString(), "B")
        $("#input").append("<p>"+myarr.toString()+"</p>");
        $("#result").append("<p>"+result+"</p>");
    });
});
