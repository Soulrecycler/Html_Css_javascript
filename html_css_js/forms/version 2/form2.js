function radioFunction(element){
			document.getElementById("display").innerHTML=element.value;
		}
		
		function DisableBox(){
			var x = document.getElementById("paperOptions").value;
			if(x!='NULL'){
				document.getElementById("gradeOptions").disabled=false;
			}
			else
				document.getElementById("gradeOptions").disabled=true;			
		}
		
		function submitForm(){
			var table = document.getElementById("myTable");
			var row = table.insertRow(1);
			var cell1 = row.insertCell(0);
			var cell2 = row.insertCell(1);
			var cell3 = row.insertCell(2);
			var cell4 = row.insertCell(3);
	
			cell1.innerHTML = document.getElementById('rollno').value;
			cell2.innerHTML = document.getElementById('name').value;
			cell3.innerHTML = document.getElementById('paperOptions').value;
			cell4.innerHTML = document.getElementById('gradeOptions').value;

		}