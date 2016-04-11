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

  //var turn = 1;

  var images =[
    "http://www.visualnews.com/wp-content/uploads/2014/09/Rowan-Atkinson-Inserted-into-Famous-Paintings-10.jpg",
    "http://blogs.wfmt.com/offmic/files/2013/07/guernica_pablo_picasso-600x600.jpg",
    "http://unitedvirtuoso.com/wp-content/uploads/2013/06/mona_lisa_face_800x800px1-600x600.jpg",
    "http://static.bootic.com/_pictures/66287/van-gogh-starry-night-painting.jpg",
    "http://cdn.shopify.com/s/files/1/0351/1933/products/The_Great_Wave_off_Kanagawa_furo100k-2_grande.jpg?v=1393736525",
    "https://v.cdn.vine.co/v/avatars/3394d6c7-b13e-41f3-be4c-49362c8966c9.jpg?versionId=ncdrsa8DNpVbPac0dMkSDiHzoXW1I8xX",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/El_Tres_de_Mayo,_by_Francisco_de_Goya,_from_Prado_in_Google_Earth-x0-y1.jpg/600px-El_Tres_de_Mayo,_by_Francisco_de_Goya,_from_Prado_in_Google_Earth-x0-y1.jpg"

  ]

  var uRl= images[Math.floor(Math.random() * 7)]

  var game =[
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ];

  var divID;
  var win = false;

  var background = $(".board").css("background-image","url("+uRl+")")

  var resetButton = function(){
    var button = document.createElement("button");
    button.innerHTML = "Reset";
    $('h2').append(button);
    console.log('hey')
    button.addEventListener("click", function() {
      location.reload();
    });

  }

  var oMove = function(){
    //$('.square').click(function(){
      // if($(this).empty()){
      //   var divID = $(this).attr('id');
        //console.log(divID)
        $("#" + divID).append('<img id="O" class="imagesize" src="http://1.bp.blogspot.com/-lyELSi3oPWc/Ux3UlhpiAWI/AAAAAAAAEGI/VLvmMCW7aco/s1600/playO.png" />');
        if(divID === 'topL'){
          game[0][0] = 0;
        }
        else if(divID === 'topM'){
          game[0][1] = 0;
        }
        else if(divID === 'topR'){
          game[0][2] = 0;
        }
        else if(divID === 'midL'){
          game[1][0] = 0;
        }
        else if(divID === 'midM'){
          game[1][1] = 0;
        }
        else if(divID === 'midR'){
          game[1][2] = 0;
        }
        else if(divID === 'botL'){
          game[2][0] = 0;
        }
        else if(divID === 'botM'){
          game[2][1] = 0;
        }
        else if(divID === 'botR'){
          game[2][2] = 0;
        }
    }



  var xMove = function(){
    //$('.square').click(function(){
        //console.log(divID);
        //console.log(divID)
        $("#" + divID).append('<img id="X" class="imagesize" src="http://2.bp.blogspot.com/-44FEkFGb5h8/Ux3Ul5ly3LI/AAAAAAAAEGU/jl4_ktKNJp0/s1600/playX.png" />');

        if(divID === 'topL'){
          game[0][0] = 1
          //console.log(game);
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
    }

    var xCheck = function(){
      while(win === false){
        if (game[0][0] === 1 && game[1][0] === 1 && game[2][0] === 1){
            $('body').append("<h2>Left Row X Win Vertically!<br></h2>");
            $('.square').unbind();
            resetButton();
            win = true;
        }else if(game[0][1] === 1 && game[1][1] === 1 && game[2][1] === 1){
          $('body').append("<h2>Middle Row X Win Vertically!<br></h2>");
          $('.square').unbind();
          win = true;
          resetButton();
        }else if(game[0][2] === 1 && game[1][2] === 1 && game[2][2] === 1){
          $('body').append("<h2>Right Row X Win Vertically!<br></h2>");
          $('.square').unbind();
          win = true;
          resetButton();
        }else if(game[0][0] === 1 && game[0][1] === 1 && game[0][2] === 1){
          //console.log("Top Row X win Horo");
          $('body').append("<h2>Top Row X win Horizontally!<br></h2>");
          $('.square').unbind();
          win = true;
          resetButton();
        }else if(game[1][0] === 1 && game[1][1] === 1 && game[1][2] === 1){
          $('body').append("<h2>Middle Row X win Horizontally!<br></h2>");
          $('.square').unbind();
          win = true;
          resetButton();
        }else if(game[2][0] === 1 && game[2][1] === 1 && game[2][2] === 1){
          //console.log("Bot Row X win Horo");
          $('body').append("<h2>Bot Row X win Horizontally!<br></h2>");
          $('.square').unbind();
          win = true;
          resetButton();
        }else if(game[0][0] === 1 && game[1][1] === 1 && game[2][2] === 1){
          //console.log("Diagonal X win from TopL");
          $('body').append("<h2>Diagonal X win from Top left!<br></h2>");
          $('.square').unbind();
          win = true;
        }else if(game[0][2] === 1 && game[1][1] === 1 && game[2][0] === 1){
          //console.log("Diagonal X win from Top R");
          $('body').append("<h2>Diagonal X win from Top Right!<br></h2>");
          $('.square').unbind();
          win = true;
        }else{
          break;
        }
      }
    }

    var oCheck = function(){
      while(win === false){
        if (game[0][0] === 0 && game[1][0] === 0 && game[2][0] === 0){
            $('body').append("<h2>L Row O Win Vertically!<br></h2>");
            $('.square').unbind();
            win = true;
        }else if(game[0][1] === 0 && game[1][1] === 0 && game[2][1] === 0){
          $('body').append("<h2>M Row O Win Vertically!<br></h2>");
          $('.square').unbind();
          win = true;
        }else if(game[0][2] === 0 && game[1][2] === 0 && game[2][2] === 0){
          $('body').append("<h2>R Row O Win Vertically!<br></h2>");
          $('.square').unbind();
          win = true;
        }else if(game[0][0] === 0 && game[0][1] === 0 && game[0][2] === 0){
          $('body').append("<h2>Top Row O win Horizontally!<br></h2>");
          $('.square').unbind();
          win = true;
        }else if(game[1][0] === 0 && game[1][1] === 0 && game[1][2] === 0){
          $('body').append("<h2>Mid Row O win Horizontally!<br></h2>");
          $('.square').unbind();
          win = true;
        }else if(game[2][0] === 0 && game[2][1] === 0 && game[2][2] === 0){
          $('body').append("<h2>Bot Row O win Horizontally!<br></h2>");
          $('.square').unbind();
          win = true;
        }else if(game[0][0] === 0 && game[1][1] === 0 && game[2][2] === 0){
          $('body').append("<h2>Diagonal O win from Top Left!<br></h2>");
          $('.square').unbind();
          win = true;
        }else if(game[0][2] === 0 && game[1][1] === 0 && game[2][0] === 0){
          $('body').append("<h2>Diagonal O win from Top Right!<br></h2>");
          $('.square').unbind();
          win = true;
        }else{
          break;
        }
      }
    }



    var i = 1;
  //var alternate = function(){
    $('.square').click(function(){
      //for(var i = 1; i <= 9; i++){
      divID = $(this).attr('id');
      $(this).unbind();
      if($(this).empty()){
        if(i%2 === 1){
          xMove();
          i++;
          xCheck();
          $(this).toggleClass('clicked');
          // turn++;
          //console.log(i);
          //console.log(game);
        }
        else if(i%2 === 0){
          oMove();
          i++;
          oCheck();
          $(this).toggleClass('clicked');
          // turn++;
          //console.log(i);
        }
        if(i === 10 && win === false){
          $('body').append("<h2>It's a tie!</h2>")
          resetButton();
        }
      }
    });
    //var location = $(this).attr('id')
    //$(this).css('background-color','red')
    // $('#TopL').append('<img id="X" class="imagesize" src="http://2.bp.blogspot.com/-44FEkFGb5h8/Ux3Ul5ly3LI/AAAAAAAAEGU/jl4_ktKNJp0/s1600/playX.png" />')


})();
