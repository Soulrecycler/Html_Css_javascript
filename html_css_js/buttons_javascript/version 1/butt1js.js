"use strict";
		
		function init(){
			document.getElementById("drop-content").style.display="none";
		}
	
	
		function dropdown_func(){
			//document.getElementById("symbol").innerHTML="-";
			//document.getElementById("drop-content").style.display="block";
			
			var x=document.getElementById("symbol");
			var y=document.getElementById("drop-content");
			
			if(y.style.display == "none"){
				x.innerHTML= "-";
				y.style.display="block";				
			}
			else{
				x.innerHTML= "+";
				y.style.display="none";	
			}
		}