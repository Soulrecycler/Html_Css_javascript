function radioButtons(){
			var x=document.getElementById("radiobtn1");
			var y=document.getElementById("radiobtn2");

		if(x.checked){
		var x=document.getElementById("radiobtn1").value;
		document.getElementById("display").innerHTML = x;
		}
		else{
		var x=document.getElementById("radiobtn2").value;
		document.getElementById("display").innerHTML = x;
		}
		}
		
		function DisableBox(){
			var x = document.getElementById("paperOptions").value;
			if(x!='NULL'){
				document.getElementById("gradeOptions").disabled=false;
			}
			else
				document.getElementById("gradeOptions").disabled=true;
			
		}
		
		function Essentials(){/* you will be required to till this box*/
			
			var y=document.getElementById('ab');
			if(y.value==""){
				y.style.border = "thick solid red";
			}
			
		}
		
		