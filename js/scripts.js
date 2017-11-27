$(document).ready(function() {
    // Set recipe image displayer in recipes.html to recipe1 image
    $("#recipeImage").attr("src", $("#recipe1").children().children("img").attr("src"));    

    // On hover over recipe1 in recipes.html set recipe image displayer img to recipe1 image
    $("#recipe1").hover(function(){             
        $("#recipeImage").attr("src", $("#recipe1").children().children("img").attr("src"));
    });  

    // On hover over recipe1 in recipes.html set recipe image displayer img to recipe2 image
    $("#recipe2").hover(function(){        
        $("#recipeImage").attr("src", $("#recipe2").children().children("img").attr("src"));
    }); 

    // On hover over recipe1 in recipes.html set recipe image displayer img to recipe3 image
    $("#recipe3").hover(function(){
        $("#recipeImage").attr("src", $("#recipe3").children().children("img").attr("src"));
    }); 

    // On hover over recipe1 in recipes.html set recipe image displayer img to recipe4 image
    $("#recipe4").hover(function(){
        $("#recipeImage").attr("src", $("#recipe4").children().children("img").attr("src"));
    });

    // On login button click check credentials. If username and password match "user" and "1234" respectivly
    // direct user to recipes.html page else show alert message.
    $("#loginButton").click(function(){
        if($("#userName").val() === "user" && $("#password").val() === "1234")  {                   
            window.location.href = "./recipes.html";
        } else {
            window.alert("Could not find user with matching credentials");
        }
    });
    
});