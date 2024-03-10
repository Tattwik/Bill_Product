var moreBtn = document.querySelector('#moreId');
var slno = 1;
var prodId = "";
var prodName = "";
var units = "";
var unitPrice = "";
var totalPrice = 0;

function updateTotalPrice() {
	let totalAllProdPrice = 0;
	document.querySelectorAll("#showId tr").forEach(function(row) {
		const unitId = parseFloat(row.cells[3].textContent);
		const unitPriceId = parseFloat(row.cells[4].textContent);
		totalAllProdPrice += unitId * unitPriceId;
	});
	console.log(totalAllProdPrice+"!!!!!!!!");
	document.getElementById("totalPriceId").value = totalAllProdPrice.toFixed(2);
}

moreBtn.addEventListener('click', (e) => {
	prodId = document.querySelector('#prodId').value;
	prodName = document.querySelector('#prodId');
	units = document.querySelector('#unitId').value;
	unitPrice = document.querySelector('#uniPriceId').value;
	let total = units * unitPrice;
	console.log("total = "+total);
	totalPrice += total;
	console.log("totalPrice = "+totalPrice);
	document.getElementById("totalPriceId").value = totalPrice;
	if (!prodId.trim() == "" && !units.trim() == "" && !unitPrice.trim() == "") {
		var row = document.createElement("tr");
		row.innerHTML = "<td>" + (slno++) + "</td><td>" + prodId + "</td><td>" + prodName.options[prodName.selectedIndex].text +"</td><td>" + units + "</td><td>" + unitPrice + "</td><td>" + total + "</td>"
			+ "<td><a href='#' class='text-danger float-rigth font-weigth bold'>Remove</a></td>";
		var tBody = document.querySelector("#showId");
		tBody.appendChild(row);
		updateTotalPrice();
	} else {
		alert("Please add some values");
	}
	document.querySelector('#prodId').value = "";
	document.querySelector('#units').value = "";
	document.querySelector('#unitPrice').value = "";

	e.preventDefault();
});

var pTbody = document.querySelector("#showId");
pTbody.addEventListener('click', (e) => {
	if (e.target.className == "text-danger float-rigth font-weigth bold") {
		if (pTbody.children.length >= 1 && !confirm("Do you want to proceed?")) {
		    let total = units * unitPrice;
            totalPrice -= total;
			return;
		}
		e.target.parentElement.parentElement.remove();
		updateTotalPrice();
	}
})
