$("body").on("keyup keydown keypress change", "input", function (e) {

	let total = 0;

	$(".user_visited").each(function () {
		console.log("hi!");
		const $this_input = $(this),
			$this_item = $this_input.closest(".item"),
			visited = parseFloat($this_input.val()),
			jobs = parseInt($this_item.data("jobs")),
			stores = parseInt($this_item.data("stores"));

		if (!isNaN(visited)) {
			total = Math.round(total + (jobs * visited / stores));
			console.log("visited is a number");
			console.log("visited", visited);
			console.log("jobs", jobs);
			console.log("stores", stores);
			console.log("total", total);
		} else {
			console.log("something is not a number");
			console.log("visited", visited);
			console.log("jobs", jobs);
			console.log("stores", stores);
			console.log("total", total);
		}
	});


	if (total >= 0) {
		$(".total").removeClass("reset").addClass("sticky");

		$(".total").find("span").text(total + " Employees Laid-off")
	}
});


// 	if (total < 0 || typeof total)
//
// 		var this_input = $(this),
// 			this_row = this_input.closest(".item"),
// 			total_visited = this_row.find(".user_visited").val(),
// 			totalstores = parseInt(this_row.data("stores")),
// 			totaljobs = parseInt(this_row.data("jobs"));
// 	if (total_visited === "") {
// 		total_visited = 0;
// 	}
// 	total_visited = parseInt(total_visited);
// 	// ensuring we take an integer from user irrespective of what he types
// 	if (total_visited < 0 || typeof total_visited !== "number") {
// 		$(".total").removeClass("reset");
// 		$(".total").addClass("sticky");
// 		$(".total").find("span").addClass("error");
// 		$(".total").find("span").text("Incorrect values entered");
// 	} else {
// 		$(".total").removeClass("reset");
// 		$(".total").addClass("sticky");
// 		$(".total").find("span").removeClass("error");
// 		var pre_total = parseInt((total_visited * totaljobs) / totalstores);
// 		this_row.find(".pre_total").find("span").text(pre_total);
// 		console.log(pre_total);
// 		var pre_total = 0;
// 		//
// 		$(".pre_total").each(function () {
//
// 			// for (var i = 0; i < 8; i++) {
//
// 			var this_pre_total = $(this).find("span").text();
//
// 			if (this_pre_total !== "") {
// 				this_pre_total = parseFloat(this_pre_total);
// 				pre_total = pre_total + this_pre_total;
// 				console.log(pre_total);
// 				$(".total").find("span").text(pre_total + " Employees Laid-off");
// 			}
//
// 		});
// 	}
//
//
//
// 	// $(".post_total").each(function () {
// 	// 	//more stuff
// 	// 	var this_post_total = parseFloat($(this).find("span").text());
// 	// 	post_total = post_total + this_post_total;
// 	// });
//
// 	// $("#pre_total").find("span").text(pre_total);
// 	// $("#post_total").find("span").text(post_total);
//
// });
$(".resetbutton").click(function () {
	location.reload();
	// var pre_total = null;
	// var this_pre_total = null;
	// total_visited = null;
	// totalstores = null;
	// totaljobs = null;
	// $(".total").find("span").text(pre_total + " Employees Laid-off");
	// $(".total").addClass("reset");
	// console.log(pre_total);
	// form.reset();
});
// $("form").reset(function (event) {
// 	$(".total").removeClass("sticky");
// });