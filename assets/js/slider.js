$(document).ready(function() { // Ждём загрузки страницы

	var slides = $(".slider .slides").children(".slide"); // Получаем массив всех слайдов
	var width = $(".slider .slides").width(); // Получаем ширину видимой области
	var i = slides.length; // Получаем количество слайдов
	var offset = i * width; // Задаем начальное смещение и ширину всех слайдов

	$(".slider .slides").css('width',offset); // Задаем блоку со слайдами ширину всех слайдов

	for (j=0; j < slides.length; j++) {
		if (j==0) {
			$(".slider .navigation").append("<div class='dot active'></div>");
		}
		else {
			$(".slider .navigation").append("<div class='dot'></div>");
    }
	}

	var dots = $(".slider .navigation").children(".dot");
	offset = 0; // Обнуляем смещение, так как показывается начала 1 слайд
  i = 0; // Обнуляем номер текущего слайда

	$('.slider .navigation .dot').click(function(){
		$(".slider .navigation .active").removeClass("active");
		$(this).addClass("active");
		i = $(this).index();
		offset = i * width;
		$(".slider .slides").css("transform","translate3d(-"+offset+"px, 0px, 0px)"); // Смещаем блок со слайдами к следующему
	});
});