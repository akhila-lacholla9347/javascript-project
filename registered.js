let registrations=
JSON.parse(localStorage.getItem("registrations"))||[];

const table=document.getElementById("tableBody");

registrations.forEach((product,index)=>{

table.innerHTML+=`

<tr>

<td>${product.customerName}</td>

<td>${product.productName}</td>

<td>${product.category}</td>

<td>${product.mobile}</td>

<td>



</tr>

`;

});