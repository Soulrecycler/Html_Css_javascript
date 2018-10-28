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
			if (duplicate(document.getElementById("rollno").value)==true)
			  {
				  alert("Roll Number already exist");
			  }
			else
			  {
					var table = document.getElementById("myTable");
					var row = table.insertRow(table.rows.length);
					var cell1 = row.insertCell(0);
					var cell2 = row.insertCell(1);
					var cell3 = row.insertCell(2);
					var cell4 = row.insertCell(3);
			
					cell1.innerHTML = document.getElementById('rollno').value;
					cell2.innerHTML = document.getElementById('name').value;
					cell3.innerHTML = document.getElementById('paperOptions').value;
					cell4.innerHTML = document.getElementById('gradeOptions').value;
			}
		}
		
		function duplicate(data)
		{
			var x = document.getElementById("myTable");
		
			   for(var i=0;i<x.rows.length;i++)
			  {
				  if(x.rows[i].cells[0].innerHTML==data)					  
						return true;
			  }
		}