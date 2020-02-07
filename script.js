  /* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// login  /////////////////////////////////////////////
var username = ["yeet"];
var password = ["ppp"];

$(".loginButton").click(function(){
  var u = $(".uInput").val();
  var p = $(".pInput").val();
  for(let i = 0; i < username.length; i++){
    if(u === username[i] && p === password[i]){
       console.log("yeet");
    }
  }
});

$(".register").click(function(){
  $(".loginButton").hide();
  $("register").hide();
});
///////////////////////////////////////////////////////

$(".postButton").click(function() {
  let userPost = $("#post").val();
  $(".post1").append(`<h3>${username}</h3> <p class="text">${userPost}</p>`);
});

/* post function^^ */

$(".searchButton").click(function() {
  
  let userInput = $(".searchBar").val();
  
  $("#allPosts").hide();
  $("#articles").hide();
  
  if (userInput === "#category1"){
      $("#category1").show();
  } else if (userInput === "#category2"){
      $("#category2").show();
  } else if (userInput === "#category3"){
      $("#category3").show();
  };
});

$("#title").click(function(){
  $("#allPosts").show();
  $("#articles").show();
});

/*
$("#a").click(function(){
  $().hide();
  $().show();
});
*/