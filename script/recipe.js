function getsource(id){
    $.ajax({
        url:"https://api.spoonacular.com/recipes/"+id+"/information?apiKey",
        success:function(res) {
            document.getElementById("readymin").innerHTML=" 🕒 Ready in "+res.readyInMinutes + " minutes";
            document.getElementById("reciperesult").innerHTML=
                "<span class='source'> Source from <a href='"+res.sourceUrl+"'>"+res.sourceUrl+"</a></span><br>";
            document.getElementById("dishtype").innerHTML=
                "<h3> Dish types</h3>"+res.dishTypes+"<h3> What else you need </h3>";
            if(res.likes === undefined) {
                res.likes = "0";
            } 
            for(var i=0; i<res.extendedIngredients.length; i++) {
                document.getElementById("exingredients").innerHTML+=res.extendedIngredients[i].originalString;
            }
            document.getElementById("summary").innerHTML="<h3> Summary </h3>"+res.summary
            document.getElementById("diets").innerHTML="<h3> Diets information</h3>"+res.diets
            document.getElementById("instructions").innerHTML="<h3> Instructions</h3>"+res.instructions;
            for(var j=0; j<res.analyzedInstructions[0].steps.length; j++) {
                document.getElementById("steps").innerHTML+=
                "Step "+res.analyzedInstructions[0].steps[j].number+". "+
                res.analyzedInstructions[0].steps[j].step+"<br>";
            }
        }
    });
}
function getrecipe(q){
    $.ajax({
        url:"https://api.spoonacular.com/recipes/findByIngredients?ingredients="+q +"&number=1&apiKey",
        success:function(res){
            document.getElementById("output").style.display = "block";
            document.getElementById("title").innerHTML=res[0].title;
            document.getElementById("recipeimg").innerHTML="<img class='receipeimg' src='"+res[0].image+"' />";
            getsource(res[0].id);
        }
    })
    var guideText = document.getElementById("guidetext");
    guideText.style.display="none";
}

//need to fix: ajax request send second time, the previous information still there.
//resource:https://www.youtube.com/watch?v=3AXaP31nT74
