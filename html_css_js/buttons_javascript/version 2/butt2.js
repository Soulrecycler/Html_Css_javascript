	"use strict";
	
	
		/*function dropdown_func(num){
			//document.getElementById("symbol").innerHTML="-";
			//document.getElementById("drop-content").style.display="block";
			
			if(num=="1"){
				var x=document.getElementById("symbol1");
				var y=document.getElementById("drop-content1");				
			}
			
			else if(num=="2"){
				var x=document.getElementById("symbol2");
				var y=document.getElementById("drop-content2");				
			}
			
			else{
				var x=document.getElementById("symbol3");
				var y=document.getElementById("drop-content3");
			}
			if(y.style.display == "none"){
				x.innerHTML= "-";
				y.style.display="block";				
			}
			else{
				x.innerHTML= "+";
				y.style.display="none";	
			}
			
		}*/
		
		function dropdown_func(pic,symbol){
		
			var pic,symbol;
			var x=document.getElementById(pic);
			var y=document.getElementById(symbol);
			
			if(x.style.display=='none'){
				y.innerHTML= "-";
				x.style.display="block";			
			}
			else{
				y.innerHTML= "+";
				x.style.display="none";	
			}
			
		}