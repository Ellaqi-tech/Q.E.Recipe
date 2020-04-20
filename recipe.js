function getsource(id){
    $.ajax({
        url:"https://api.spoonacular.com/recipes/"+id+"/information?apiKey",
        success:function(res) {
            document.getElementById("readymin").innerHTML="Ready in "+res.readyInMinutes + " minutes"
            document.getElementById("reciperesult").innerHTML=
                "Source from "+res.sourceUrl+"<br>"+
                "Dish types: "+res.dishTypes+"<br>"+
                res.likes+" people likes this recipe <br>"+
                "What else you need: "
            
            for(var i=0; i<res.extendedIngredients.length; i++) {
                document.getElementById("exingredients").innerHTML+=res.extendedIngredients[i].originalString+"<br>";
            }
            
            document.getElementById("summary").innerHTML="Summary: <br>"+res.summary
            document.getElementById("diets").innerHTML="Diets information: <br>"+res.diets
            document.getElementById("instructions").innerHTML="Instructions: <br>"+res.instructions
            
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
            
            document.getElementById("title").innerHTML=res[0].title
            document.getElementById("recipeimg").innerHTML="<img src='"+res[0].image+"' />"
            getsource(res[0].id)
        }
    })
    var guideText = document.getElementById("guidetext");
    guideText.style.display="none";
}

//need to fix: ajax request send second time, the previous information still there.
//resource:https://www.youtube.com/watch?v=3AXaP31nT74