$(document).ready(function(){
	var $imgList = $('.bgwrap>div');
	var nImgCount = $imgList.children().length;
	var nDuration = 5000;
	var bAuto = true;
	var nIndex = 0;
	
	if(bAuto == true) {
		setInterval(autoSlide, nDuration);
	}

	function autoSlide() {
		var next = (++nIndex % nImgCount);
		$($imgList.get(next - 1)).fadeOut(1000);
		$($imgList.get(next)).fadeIn(1000);
	};

	console.log($(".image").attr("class"));
	console.log($(".image").attr("src"));


	$(".mouseover").on("mouseover", function(){
		$(".image").show();
	})
	.on("mouseleave", function(){
		$(".image").hide();
	});

});


