$("body").on("keyup keydown keypress change", "input", function (e) {
	var this_input = $(this),
		this_row = this_input.closest(".item"),
		total_visited = parseFloat(this_row.find(".user_visited").val()),
		//how to ensure we don't get negative values from user
		totalstores = parseFloat(this_row.data("stores")),
		totaljobs = parseFloat(this_row.data("jobs"));
	console.log("stores", totalstores);
	console.log("jobs", totaljobs);
	var total = parseInt((total_visited * totaljobs) / totalstores);
	// post_tariff_cost = (pre_tariff_cost + (pre_tariff_cost * (tariff / 100)));

	// console.log("Quantity", quantity);

	this_row.find(".pre_total").find("span").text(total);
	// this_row.find(".post_total").find("span").text(post_tariff_cost);

	var pre_total = 0

	$(".pre_total").each(function () {
		var this_pre_total = parseFloat($(this).find("span").text());
		pre_total = pre_total + this_pre_total;
		// console.log(pre_total);
		$(".total").find("span").text(pre_total);
		// console.log("Quantity", pre_total);
	});

	// $(".post_total").each(function () {
	// 	//more stuff
	// 	var this_post_total = parseFloat($(this).find("span").text());
	// 	post_total = post_total + this_post_total;
	// });

	// $("#pre_total").find("span").text(pre_total);
	// $("#post_total").find("span").text(post_total);

});