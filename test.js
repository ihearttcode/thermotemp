var date = new Date();
var month = date.getMonth();
var day = date.getUTCDate();
var year = date.getFullYear();
var today = (month + 1) + "/" + day + "/" + (year - 2000);
var rows = $("table tbody tr").each(function() {
		var row = $(this).find("td").get();
		var tech = "Thomas H";
		var final = "Finalizing";  
		var dateColumn1 = $(row[3]).get();
		var techColumn1 = $(row[4]).get();
		var dateColumn2 = $(row[5]).get();
		var techColumn2 = $(row[6]).get();
		var dateColumn3 = $(row[7]).get();
		var techColumn3 = $(row[8]).get();
		var dateColumn4 = $(row[9]).get();
		var techColumn4 = $(row[10]).get();
		var ptStat = $(row[1]).get();
		var ptAndId = $(row[0]).get();

  
		$(dateColumn1).text().includes(today) && $(techColumn1).text().includes(tech) && ($(ptStat).text() !== final) || $(dateColumn2).text().includes(today) && $(techColumn2).text().includes(tech) && ($(ptStat).text() !== final) || $(dateColumn3).text().includes(today) && $(techColumn3).text().includes(tech) && ($(ptStat).text() !== final) || $(dateColumn4).text().includes(today) && $(techColumn4).text().includes(tech) && ($(ptStat).text() !== final) ? $(row).css({backgroundColor: "#ff3", Animation: "fadeIn 1000ms infinite alternate"}) : $(row).css({backgroundColor: "inherit"});
});