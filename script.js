  /* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// login  /////////////////////////////////////////////
$(".confirm").hide();
$(".cancel").hide();
$(".logout").hide();

var username = ["yeet"];
var password = ["ppp"];
var currentUser = "";
    
$(".loginButton").click(function(){
   var u = $(".uInput").val();
   var p = $(".pInput").val();
   for(let i = 0; i < username.length; i++){
     if(u === username[i] && p === password[i]){
       $(".p").text("Welcome " + username[i]);
       $(".logout").show();
       $(".loginButton").hide();
  $(".register").hide();
       $(".uInput").hide();
       $(".pInput").hide();
       currentUser = username[i];
     }
   }
   $(".uInput").val("");
   $(".pInput").val("");
 });

 $(".logout").click(function(){
   $(".p").text("");
   $(".logout").hide();
   $(".loginButton").show();
   $(".register").show();
   $(".uInput").show();
   $(".pInput").show();
   currentUser = "";
 })

 $(".register").click(function(){
   $(".loginButton").hide();
   $(".register").hide();
   $(".confirm").show();
   $(".cancel").show();
 });

 $(".confirm").click(function(){
   var u = $(".uInput").val();
   var p = $(".pInput").val();

   if(u.length < 6){
     $(".p").text("username must be longer than 5 characters");
     return;
   }
   for(var i = 0; i < username.length; i++){
     if(u === username[i]){
       $(".p").text("username taken");
      return;
     }
   }
   if(p.length < 6){
      $(".p").text("password must be longer than 5 characters");
     return;
   }
   $(".p").text("Account Registered");
   username.push(u);
   password.push(p);
   $(".loginButton").show();
   $(".register").show();
   $(".confirm").hide();
   $(".cancel").hide();
   $(".uInput").val("");
   $(".pInput").val("");
 });

 $(".cancel").click(function(){
   $(".loginButton").show();
   $(".register").show();
   $(".confirm").hide();
   $(".cancel").hide();
 });

var cl = "post1 ";
$(".r").click(function (){
  cl += "racism ";
});

$(".l").click(function (){
  cl += "lgbtq ";
});

$(".i").click(function (){
  cl += "immigration ";
});

$(".g").click(function (){
  cl += "gender ";
});

$(".p").click(function (){
  cl += "poverty ";
});

$(".a").click(function (){
  cl += "ableism ";
});

$(".postButton").click(function() {
  if (currentUser !== "") {
  let userPost = $("#post").val();
  $(".post1").append(`<div class=${cl}><h3>${currentUser}</h3> <p class="text">${userPost}</p></div>
          <div id="reactions">
            <i  class=" far fa-heart"></i>
            <i  class="far fa-thumbs-up"> </i>
            <i class="far fa-thumbs-down"> </i>
          </div>`).addClass(cl);
    console.log(cl);
  $("#post").val("");
  cl = "post1 ";
  }
  else {
    alert("log in first! ");
    $("#post").val("");
  }
});

/* post function^^ */

let elementCheck = document.getElementsByClassName("text");
  console.log(elementCheck);

$("#title").click(function(){
  $("#allPosts").show();
  $("#articles").show();
});

$("#category1").click(function() {
  $(".post1").hide();
  $(".racism").show();
});

$("#category2").click(function() {
  $(".post1").hide();
  $(".lgbtq").show();
});

$("#heart").click(function( ){
  if (currentUser !== ""){
    $("#heart").css("color", "red")
  }
  else {
     alert("log in to like!");
  }
});


$(".fa-heart").click(function( ){ 
 $(".fa-heart").css("color", "red")
});

$(".fa-thumbs-up").click(function() {
  $(".fa-thumbs-up").css("color", "blue");
});

$(".fa-thumbs-down").click(function() {
  $(".fa-thumbs-down").css("color", "blue");
});

$(".fa-heart").click(function(){ 
  if ($(".fa-heart").css("color") == "red") {
    $(".fa-heart").css("color", "black")
  } 
});
