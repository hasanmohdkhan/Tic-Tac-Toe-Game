$(document).ready(function () {

    // player and computer variables
    var player = "X";
    var comp = "O";
    var random ;


        $("#playerO,#playerX").click(function () {

            if(this.id =='playerO'){
                player = "O";
                comp = "X";

                $("#selectionDivTitle").html("Player: "+ player +" "+"comp: " +comp );
                console.log("comp: "+comp);
                console.log("Player: "+player);

            }

            else {
                player = "X";
                comp = "O";

                $("#selectionDivTitle").html("Player: " + player + " " + "comp :" + comp);
                console.log("comp: " + comp);
                console.log("Player: " + player);

            }




           // $("#selectionDivCard").hide();
          vari();

        });



            $("#0 , #1 ,#2 ,#3, #4, #5,#6, #7,#8").click(
                function () {
                    console.log("cikldhde");

                    if(this.id=='0'){
                        $("#0").html(player);
                        // may be we call a function for comp choose
                        random = Math.floor(Math.random() * 10);
                        random.toString();
                        console.log(random);
                        


                    }

                    else if(this.id=='1'){
                        $("#1").html(player);
                        // may be we call a function for comp choose

                    }




                }

                //



            );











 function vari() {
     console.log("computer: "+comp);
 }























    /*
    $("#playerO,#playerX").click(function () {

        if(this.id =='playerO'){
            $("#selectionDivTitle").html("You choose O");

        }

        else
            $("#selectionDivTitle").html("You choose X");


        console.log("click");
        $("#selectionDivCard").hide();


    });

    // function --- change font-awsone to text

    $("#0,#1 , #2 ,#3 , #4 , #5 ,#6 , #7 ,#8").click(

        function () {

            $("i").html(this.id);

         console.log(this.id);



        }


    );

*/





}









);