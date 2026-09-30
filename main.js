var question_1 = true
var question_2 = true
var question_3 = true
var question_4 = true

var result_1 = confirm("هل انت حضرت المحاضره الي فاتت؟");


if (result_1 == question_1) {
    var result_2 = confirm("هل انت زاكرات المحاضره ؟");

    if (result_2 == question_2) {

        var result_3 = confirm("هل عملت الtask  ");
        if (result_3 == question_3) {
            console.log("الشطور المجتهد")

        }
        else {
            var result_4 = confirm("عملت الtask الي قبله ؟");
            if (result_4 == question_4) {

                console.log("هنعديها المره دي")


            }
            else{console.log("صفر محمر")}


        }






    }
    else { console.log("هتسقط ي فاشل") }

}

else {
    console.log("-10 درجات")
}