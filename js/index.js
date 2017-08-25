$(document).ready(

function () {



    $("#playerO,#playerX").click(function () {

        if(this.id =='playerO'){
            $("#selectionDivTitle").html("You choose O");

        }

        else
            $("#selectionDivTitle").html("You choose X");


        console.log("click");
        $("#playerChoose").html("263A");


    })

}








);