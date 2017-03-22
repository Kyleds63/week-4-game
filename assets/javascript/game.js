var choice = 0; //Character has not been chosen

///-------------------------------------------///
///                                           ///
///            Character Chosing              ///
///                                           ///
///-------------------------------------------///

$(".char").click(function(){

  	
//----Moves clicked item to Your Character-----//
//--Sets New Atrributes for Selected Chracter--//
  	 
  if(choice===0){
    $(this).appendTo("#your-character");
  	choice=1;//Character has been chosen
  

    $(this).css({
      "max-width"   :   "25%",
      "max-height"  :   "95%",
      "display"     : "block",
      "margin-left" :  "10px",
      "font-size"   :   "60%"
    });

    $("img",this).css({
      "max-width" :   "80%",
      "display"   : "block",
      "margin"    :  "auto"
    }); 
  }

//--Moving Other Characters to Enimies and Resetting--//
//-------------------Attributes-----------------------//      
      
  var x= $(this).attr("id");

  
//---------------------Obi------------------//
     
  if (x!= "obi" && choice===1){
    $("#obi").appendTo("#enemies");
    $("#obi").css({
      "max-width"  :    "15%",
	  "max-height" :    "95%",
	  "display"    :  "block",
	  "margin-left":    "5px",
	  "font-size"  :    "60%",
	  "border"     :  "black",
	  "background" :    "red",
	  "text-align" : "center"
    });

    $("img","#obi").css({
      "max-width" :   "80%",
      "display"   : "block",
      "margin"    :  "auto"
    });
  }
//-------------------Luke----------------------// 
  if (x!= "luke" && choice===1){
    $("#luke").appendTo("#enemies");
    $("#luke").css({
      "max-width"  :    "15%",
	  "max-height" :    "95%",
	  "display"    :  "block",
	  "margin-left":    "5px",
	  "font-size"  :    "60%",
	  "border"     :  "black",
	  "background" :    "red",
	  "text-align" : "center"
    });

    $("img","#luke").css({
      "max-width" :   "80%",
      "display"   : "block",
      "margin"    :  "auto"
    }); 
  }
//------------------Sidious-------------------//
  if (x!= "sidious" && choice===1){
    $("#sidious").appendTo("#enemies");
    $("#sidious").css({
      "max-width"   :    "15%",
	  "max-height"  :    "95%",
	  "display"     :  "block",
	  "margin-left" :    "5px",
	  "font-size"   :    "60%",
	  "border"      :  "black",
	  "background"  :    "red",
	  "text-align"  : "center"
    });

    $("img","#sidious").css({
      "max-width" :   "80%",
      "display"   : "block",
      "margin"    :  "auto"
    });
  }

//------------------MAUL----------------------//
    if (x!= "maul" && choice===1){
      $("#maul").appendTo("#enemies");
      $("#maul").css({
      	"max-width"   :    "15%",
	    "max-height"  :    "95%",
	    "display"     :  "block",
	    "margin-left" :    "5px",
	    "font-size"   :    "60%",
	    "border"      :  "black",
	    "background"  :    "red",
	    "text-align"  : "center"
      });

      $("img","#maul").css({
        "max-width" :   "80%",
        "display"   : "block",
        "margin"    :  "auto"
      });
    }
    choice=2;
    return choice;  
});

///-------------------------------------------///
///                                           ///
///                Fight Section              ///
///                                           ///  
///-------------------------------------------///

///----------------1st Fight------------------///

$(".char").click(function(){
  if(choice==2){
    console.log(this);
//----Moves clicked item to Fight Section-----//
//--Sets New Atrributes for Selected Chracter--//
    $(this).appendTo("#defender");
  
    $(this).css({
      "max-width"   :    "25%",
      "max-height"  :    "95%",
      "display"     :  "block",
      "margin-left" :   "10px",
      "font-size"   :    "60%",
      "border"      :  "green",
      "background"  :  "black",
	  "color"       :  "white",
	  "text-align"  : "center"
    });

    $("img",this).css({
      "max-width" :   "80%",
      "display"   : "block",
      "margin"    :  "auto"
    });
    
    choice=3;
    return choice;
  };
});












