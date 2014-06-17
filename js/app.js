/**
 * Created by Michael on 18/06/2014.
 */

$(document).ready(function() {
    setupFormValidation();
    $("#inputX").focus();

    $("#convertForm").submit(function (event) {
        // need this for validation to work.
        event.preventDefault();
    });

    $("button").on("click", function(event) {
        //event.preventDefault();
        calculate(event.target.name);
        //calculate($(this).name);
    });

    //$("#plus").click(function (event) {
    //    //event.preventDefault();
    //    //var calculator = createCalculator();
    //    //var result = calculator.add();
    //    //var message = "X plus Y is " + result;
    //    //$("#result").text(message);
    //    calculate(event, "plus");
    //});

    //$("#minus").click(function (event) {
    //    //event.preventDefault();
    //    //var calculator = createCalculator();
    //    //var result = calculator.subtract();
    //    //var message = "X minus Y is " + result;
    //    //$("#result").text(message);
    //    calculate(event, "minus");
    //});
});

function Calculator(x, y) {
    this.x = x;
    this.y = y;
    this.plus = function () {
        return x + y;
    };
    this.minus = function () {
        return x - y;
    };
}

function calculate( operation) {
    var calculator = createCalculator();
    var result = calculator[operation]();
    var message = calculator.x + " " + operation + " " + calculator.y + " is " + result;
    $("#result").text(message);
}

function createCalculator() {
    var x = parseInt($("#inputX").val());
    var y = parseInt($("#inputY").val());
    return new Calculator(x, y);
}

function setupFormValidation() {
    $("#convertForm").validate({
        rules: {
            inputX: {
                required: true,
                digits: true
            },
            inputY: {
                required: true,
                digits: true
            }
        },
        messages: {
            inputX: "Please enter an integer for X",
            inputY: "Please enter an integer for Y"
        }
    });
}