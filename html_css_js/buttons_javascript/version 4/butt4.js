	function init(){
			document.getElementById("pic1").style.display="none";
			document.getElementById("pic2").style.display="none";
			document.getElementById("pic3").style.display="none";
		
			document.getElementById('btn1').addEventListener("click",myfunction);
			
			document.getElementById('btn2').addEventListener("click",myfunction);
			
			document.getElementById('btn3').addEventListener("click",myfunction);
		}
		function myfunction(){
		var y = event.target;
		var x = y.nextElementSibling;
	
		
		if(x.style.display=='none'){
			y.lastChild.value= "-";
			x.style.display="block";			
		}
		else{
			y.lastChild.value= "+";
			x.style.display="none";	
		}
		
	}
	