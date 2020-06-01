var fleeca_phpURL = "https://LINKZUMPHP";

var url = new URL(window.location.href);
var ownerId = String(url.searchParams.get("ownerId"));
var scode = String(url.searchParams.get("scode"));

function ownerOverview(){
	$.ajax({
		type: 'post',
		url: fleeca_phpURL,
		data: {area: "ownerOverview", ownerId: ownerId, scode: scode},
		success: function(data){
			document.getElementById('ownerOverview').innerHTML = data;
		},
		error: function(data){
			document.getElementById('ownerOverview').innerHTML = "error: "+data;
		}
	})
}

function bankHomeButtons(extra){
	$.ajax({
		type: 'post',
		url: fleeca_phpURL,
		data: {area: "bankHomeButtons", ownerId: ownerId, extra: extra, scode: scode},
		success: function(data){
			document.getElementById('bankHomeButtons').innerHTML = data;
		},
		error: function(data){
			document.getElementById('bankHomeButtons').innerHTML = "error: "+data;
		}
	})
}

function bankStatements(){
	bankHomeButtons(0);

	$.ajax({
		type: 'post',
		url: fleeca_phpURL,
		data: {area: "bankStatements", ownerId: ownerId, scode: scode},
		success: function(data){
			ownerOverview();
			$('#loadContent').replaceWith(`<span id="loadContent">`+data+`</span>`);
		},
		error: function(data){
			ownerOverview();
			$('#loadContent').replaceWith(`<span id="loadContent">error: `+data+`</span>`);
		}
	})
}

function transactionDetails(transactionId){
	bankHomeButtons(0);

	$.ajax({
		type: 'post',
		url: fleeca_phpURL,
		data: {area: "transactionDetails", ownerId: ownerId, scode: scode, transactionId: transactionId},
		success: function(data){
			ownerOverview();
			$('#loadContent').replaceWith(`<span id="loadContent">`+data+`</span>`);
		},
		error: function(data){
			ownerOverview();
			$('#loadContent').replaceWith(`<span id="loadContent">error: `+data+`</span>`);
		}
	})
}

function standingOrderDetails(standingOrderId){
	bankHomeButtons(1);

	$.ajax({
		type: 'post',
		url: fleeca_phpURL,
		data: {area: "standingOrderDetails", ownerId: ownerId, scode: scode, standingOrderId: standingOrderId},
		success: function(data){
			ownerOverview();
			$('#loadContent').replaceWith(`<span id="loadContent">`+data+`</span>`);
		},
		error: function(data){
			ownerOverview();
			$('#loadContent').replaceWith(`<span id="loadContent">error: `+data+`</span>`);
		}
	})
}

function deleteStandingOrder(standingOrderId){
	$.ajax({
		type: 'post',
		url: fleeca_phpURL,
		data: {area: "deleteStandingOrder", standingOrderId: standingOrderId, scode: scode},
		success: function(data){
			if(data.length <= 2){
				ownerOverview();
				loadStandingOrders();
			}else if(data.length > 2){
				loadStandingOrders();
			}
		},
		error: function(data){
			loadStandingOrders();
		}
	})
}

function loadCreateStatement(){
	bankHomeButtons(1);

	$.ajax({
		type: 'post',
		url: fleeca_phpURL,
		data: {area: "loadCreateStatement", ownerId: ownerId, scode: scode},
		success: function(data){
			ownerOverview();
			$('#loadContent').replaceWith(`<span id="loadContent">`+data+`</span>`);
		},
		error: function(data){
			ownerOverview();
			$('#loadContent').replaceWith(`<span id="loadContent">error: `+data+`</span>`);
		}
	})
}

function loadStandingOrders(){
	bankHomeButtons(1);

	$.ajax({
		type: 'post',
		url: fleeca_phpURL,
		data: {area: "loadStandingOrders", ownerId: ownerId, scode: scode},
		success: function(data){
			ownerOverview();
			$('#loadContent').replaceWith(`<span id="loadContent">`+data+`</span>`);
		},
		error: function(data){
			ownerOverview();
			$('#loadContent').replaceWith(`<span id="loadContent">error: `+data+`</span>`);
		}
	})
}

function createStatement(fromCharId){
	var kontonummer = document.getElementById("form_kontonummer").value;
	var summe = document.getElementById("form_summe").value;
	var referenz = document.getElementById("form_referenz").value;
	var standingOrder = document.getElementById("form_standingOrder").checked;
	if(!standingOrder){var standingOrder = 0;}else if(standingOrder){var standingOrder = 1;}

	$.ajax({
		type: 'post',
		url: fleeca_phpURL,
		data: {area: "createStatement", fromCharId: fromCharId, kontonummer: kontonummer, summe: summe, referenz: referenz, standingOrder: standingOrder, scode: scode},
		success: function(data){
			if(data.length <= 2){
				ownerOverview();
				$('#createStatementFails').replaceWith(`<span id="createStatementFails"><div class="alert alert-success font-weight-bold"><small>Der Auftrag wurde ausgeführt!</small></div></span>`);
			}else if(data.length > 2){
				$('#createStatementFails').replaceWith(`<span id="createStatementFails">`+data+`</span>`);
			}
		},
		error: function(data){
			$('#createStatementFails').replaceWith(`<span id="createStatementFails"><div class="alert alert-danger"><small>error: `+data+`</small></div></span>`);
		}
	})
}