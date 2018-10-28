function init(){
			document.getElementById("pic1").style.display="none";
			document.getElementById("pic2").style.display="none";
			document.getElementById("pic3").style.display="none";
		
			document.getElementById('dropdown').addEventListener("click", function(){
			myfunction('pic1','symbol1')});
			
			document.getElementById('dropdown2').addEventListener("click", function(){
			myfunction('pic2','symbol2')});
			
			document.getElementById('dropdown3').addEventListener("click", function(){
			myfunction('pic3','symbol3')});
		}
		function myfunction(pic,symbol){
	
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