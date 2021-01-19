
$('.list__choose_cars').click(function (event) {
	$('.list__arrow_cars').toggleClass('active')
	$('.cars__link').slideToggle(300)
})

$('.list__choose_model').click(function (event) {
	$('.list__arrow_model').toggleClass('active')
	$('.model__link').slideToggle(300)
})

$('.list__choose_modif').click(function (event) {
	$('.list__arrow_modif').toggleClass('active')
	$('.modif__link').slideToggle(300)
})

$('.list__choose_year').click(function (event) {
	$('.list__arrow_year').toggleClass('active')
	$('.year__link').slideToggle(300)
})

$('.cars__link').click(function (event) {
	let data = $(this).text();
	$('.list__choose_cars').text(data)
	$('.cars__link').slideUp(300)
	$('.list__arrow_cars').removeClass('active')
})

$('.model__link').click(function (event) {
	let data = $(this).text();
	$('.list__choose_model').text(data)
	$('.model__link').slideUp(300)
	$('.list__arrow_model').removeClass('active')
})

$('.modif__link').click(function (event) {
	let data = $(this).text();
	$('.list__choose_modif').text(data)
	$('.modif__link').slideUp(300)
	$('.list__arrow_modif').removeClass('active')
})

$('.year__link').click(function (event) {
	let data = $(this).text();
	$('.list__choose_year').text(data)
	$('.year__link').slideUp(300)
	$('.list__arrow_year').removeClass('active')
})

$('.details__title').click(function (event) {
	$('.details__arrow').toggleClass('active')
	$('.brands').slideToggle(300)
})

// $('.table__text').click(function (event) {
// 	$('.table__arrow').toggleClass('active')
// 	$('.work-list').slideToggle(300)
// })

// $('.work-list__item').click(function (event) {
// 	let data = $(this).text();
// 	$('.table__text').text(data)
// 	$('.work-list').slideUp(300)
// 	$('.table__arrow').removeClass('active')
// })