$("body").on("keyup keydown keypress change", "input", function (e) {
	var this_input = $(this),
		this_row = this_input.closest(".item"),
		total_visited = this_row.find(".user_visited").val(),
		totalstores = parseInt(this_row.data("stores")),
		totaljobs = parseInt(this_row.data("jobs"));

	if (total_visited === "") {
		total_visited = 0;
	}

	total_visited = parseInt(total_visited);
	// ensuring we take an integer from user irrespective of what he types
	// console.log("stores", totalstores);
	// console.log("jobs", totaljobs);
	if (total_visited < 0 || typeof total_visited !== "number") {
		$(".total").find("span").addClass("error");
		$(".total").find("span").text("Incorrect values entered");
		// this_row.find(".pre_total").find("span").addClass("error");
		// this_row.find(".pre_total").find("span").text("Negative values entered");
	} else {
		$(".total").find("span").removeClass("error");

		// this_row.find(".pre_total").find("span").removeClass("error");
		var pre_total = parseInt((total_visited * totaljobs) / totalstores);
		this_row.find(".pre_total").find("span").text(pre_total);

		// this_row.find(".post_total").find("span").text(post_tariff_cost);
		console.log(pre_total);
		// $(".total").find("span").text(pre_total);
		// var pre_total = 0;


		$(".pre_total").each(function () {
			var this_pre_total = $(this).find("span").text();

			if (this_pre_total !== "") {
				this_pre_total = parseFloat(this_pre_total);
				pre_total = pre_total + this_pre_total;
				// console.log(pre_total);
				// $(".total").find("span").addClass("active");
				$(".total").find("span").text(pre_total + " Unemployed");
			}
		});


	}


	// $(".post_total").each(function () {
	// 	//more stuff
	// 	var this_post_total = parseFloat($(this).find("span").text());
	// 	post_total = post_total + this_post_total;
	// });

	// $("#pre_total").find("span").text(pre_total);
	// $("#post_total").find("span").text(post_total);

});