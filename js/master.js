$(document).ready(function(){
	$(document).on("click",".close",function(){
		$(".popup").removeClass("active");
	});
	$(document).on("click","#btn1",function(){
		
		$(".popup .title").text('טבריה');	

		var data = [
			{
				waze:'images/waze.png',
				name:'סירונית',
				num:'15.8',
				yl:'18:30-12:30',
			},
			{
				waze:'images/waze.png',
				name:'גני חוגה',
				num:'18.8',
				yl:'18:30-12:30',
			},
			{
				waze:'images/waze.png',
				name:'גני חוגה',
				num:'19.8',
				yl:'18:30-12:30',
			},
			{
				waze:'images/waze.png',
				name:'נאמוס',
				num:'24.8',
				yl:'18:30-12:30',
			},
			{
				waze:'images/waze.png',
				name:'רוב רוי',
				num:'24.8',
				yl:'18:30-12:30',
			},
		];


		$(".popup .list").html('');

		data.forEach(function(v,k){
			$(".popup .list").append(`
				<div class="row-list">
					<div class="waze"><img src="`+v.waze+`"></div>
					<div class="name">`+v.name+`</div>
					<div class="num">`+v.num+`</div>
					<div class="yl">`+v.yl+`</div>
				</div>
			`);
		});

		$(".popup").addClass("active");
	
	});
	$(document).on("click","#btn2",function(){
		

		$(".popup .title").text('תל אביב');	

		var data = [
			{
				waze:'images/waze.png',
				name:'תל אביב',
				num:'23.8',
				yl:'18:30-12:30',
			},
		];

		$(".popup .list").html('');

		data.forEach(function(v,k){
			$(".popup .list").append(`
				<div class="row-list">
					<div class="waze"><img src="`+v.waze+`"></div>
					<div class="name">`+v.name+`</div>
					<div class="num">`+v.num+`</div>
					<div class="yl">`+v.yl+`</div>
				</div>
			`);
		});

		$(".popup").addClass("active");
	
	});
	$(document).on("click","#btn3",function(){
		
		$(".popup .title").text('ראשון לציון');	

		var data = [
			{
				waze:'images/waze.png',
				name:'4X4',
				num:'16.8',
				yl:'18:30-12:30',
			},
			{
				waze:'images/waze.png',
				name:'קלדרון',
				num:'19.8',
				yl:'18:30-12:30',
			},
			{
				waze:'images/waze.png',
				name:'החוף השקט',
				num:'26.8',
				yl:'18:30-12:30',
			},
		];

		$(".popup .list").html('');

		data.forEach(function(v,k){
			$(".popup .list").append(`
				<div class="row-list">
					<div class="waze"><img src="`+v.waze+`"></div>
					<div class="name">`+v.name+`</div>
					<div class="num">`+v.num+`</div>
					<div class="yl">`+v.yl+`</div>
				</div>
			`);
		});

		$(".popup").addClass("active");
	
	});
	$(document).on("click","#btn4",function(){
		
		$(".popup .title").text('אילת');	

		var data = [
			{
				waze:'images/waze.png',
				name:'מיה ביץ',
				num:'21.8',
				yl:'18:30-12:30',
			},
			{
				waze:'images/waze.png',
				name:'דן פנורמה',
				num:'22.8',
				yl:'18:30-12:30',
			},
		];

		$(".popup .list").html('');

		data.forEach(function(v,k){
			$(".popup .list").append(`
				<div class="row-list">
					<div class="waze"><img src="`+v.waze+`"></div>
					<div class="name">`+v.name+`</div>
					<div class="num">`+v.num+`</div>
					<div class="yl">`+v.yl+`</div>
				</div>
			`);
		});

		$(".popup").addClass("active");
	
	});
	$(document).on("click","#btn5",function(){
		
		$(".popup .title").text('בת ים');	

		var data = [
			{
				waze:'images/waze.png',
				name:'חוף תאיו',
				num:'14.8',
				yl:'18:30-12:30',
			},
		];

		$(".popup .list").html('');

		data.forEach(function(v,k){
			$(".popup .list").append(`
				<div class="row-list">
					<div class="waze"><img src="`+v.waze+`"></div>
					<div class="name">`+v.name+`</div>
					<div class="num">`+v.num+`</div>
					<div class="yl">`+v.yl+`</div>
				</div>
			`);
		});

		$(".popup").addClass("active");
	
	});
});