"use strict";
(function(){
  // $(document).ready(function() {
  //   console.log('jq loaded!');
  // });


  // var check = function(){
  //   if($('.square').empty()){
  //     playerMove();
  //   }
  //   else{
  //     //do nothing
  //   }
  // }

  var game =[
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ];


  var playerMove = function(){
    $('.square').click(function(){
      if($(this).empty()){
        var divID = $(this).attr('id');
        console.log(divID)
        $("#" + divID).append('<img id="X" class="imagesize" src="http://2.bp.blogspot.com/-44FEkFGb5h8/Ux3Ul5ly3LI/AAAAAAAAEGU/jl4_ktKNJp0/s1600/playX.png" />');
        if(divID === 'topL'){
          game[0][0] = 1
          console.log(game);
        }
        else if(divID === 'topM'){
          game[0][1] = 1;
        }
        else if(divID === 'topR'){
          game[0][2] = 1;
        }
        else if(divID === 'midL'){
          game[1][0] = 1;
        }
        else if(divID === 'midM'){
          game[1][1] = 1;
        }
        else if(divID === 'midR'){
          game[1][2] = 1;
        }
        else if(divID === 'botL'){
          game[2][0] = 1;
        }
        else if(divID === 'botM'){
          game[2][1] = 1;
        }
        else if(divID === 'botR'){
          game[2][2] = 1;
        }
      }else{
      // do nothing
      }
    });
  };

  var game = function(){

  }

  playerMove();




    //var location = $(this).attr('id')
    //$(this).css('background-color','red')
    // $('#TopL').append('<img id="X" class="imagesize" src="http://2.bp.blogspot.com/-44FEkFGb5h8/Ux3Ul5ly3LI/AAAAAAAAEGU/jl4_ktKNJp0/s1600/playX.png" />')


})();
