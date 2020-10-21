
window.onload = function() {
	var slider = document.querySelector(".slider");
	var slides = slider.querySelector(".slider-item");
	var navPrev = document.querySelector("#prevButton");
	var navNext = document.querySelector("#nextButton");

	var startAutoplay = document.querySelector(".start-autoplay");
	var stopAutoplay = document.querySelector(".stop-autoplay");

	var slidesNum = slides.length;
	var prevSlideID = null;
	var currentSlideID = 0;
	var isAnimating = false;
	var isAutoPlay = false;



	function init() {
		console.log(slides);
		TweenLite.set(slides, {
			left: "-100%"
		});

		navPrev.addEventListener("click", gotoPrevSlide);
		navNext.addEventListener("click", gotoNextSlide);

		startAutoplay.addEventListener("click", startAutoplay);
		stopAutoplay.addEventListener("click", stopAutoplay);

		gotoSlide(0, 0);
	}


	function gotoPrevSlide() {
		var slideToGo = currentSlideID - 1;
		if (slideToGo <= -1) {
			slideToGo = slidesNum - 1;
		}
		stopAutoPlay();
		gotoSlide(slideToGo, 1, "prev");
	}


	function gotoNextSlide() {
		var slideToGo = currentSlideID + 1;
		if (slideToGo >= slidesNum) {
			slideToGo = 0;
		}
		stopAutoPlay();
		gotoSlide(slideToGo, 1, "next");
	}

	function gotoSlide(slideID, _time, _direction) {
		if (!isAnimating) {
			isAnimating = true;
			prevSlideID = currentSlideID;
			currentSlideID = slideID;


			var prevSlide = slides[prevSlideID];
			var currentSlide = slides[currentSlide];

			var time = 1;
			if (_time !== null) {
				time = _time;
			}
			var direction = "next";
			if (_direction != null) {
				direction = _direction;
			}
			if (direction == "next") {
				console.log(prevSlide, currentSlide, "next");

				TweenLite.to(prevSlide, time, {
					left: "-100%"
				});
				TweenLite.fromTo(currentSlide, time, {
					left: "100%"
				}, {
					left: "0"
				});
			} else {
				console.log(prevSlide, currentSlide, "else");

				TweenLite.to(prevSlide, time, {
					left: "100%"
				});
				TweenLite.fromTo(currentSlide, time, {
					left: "-100%"
				}, {
					left: "0"
				});
			}
			TweenLite.delayedCall(time, function() {
				isAnimating = false;
			});
		}
	}

	function play(){
	  gotoNextSlide();
	  TweenLite.delayedCall(4, play);
	}

	function startAutoPlay(immediate) {
		if (immediate != null) {
			immediate = false;
		}

		if (immediate) {
			gotoNextSlide();
		}
		TweenLite.delayedCall(4, play);
	}

	function stopAutoPlay() {
	  isAutoPlay = false;
		TweenLite.killDelayedCallsTo(play);
	}

  init();
};
