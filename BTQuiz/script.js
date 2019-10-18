$(document).ready(function(){

	$('input').addClass('displayDisable');
	$('input.question').attr('disabled','true');
	$('button.next').addClass('displayDisable');
	$('button.finish').addClass('displayDisable');
});
let $question=0;
let $trueAnswer=0;
let $libraryQuestions=[
{'question':'Câu 1: Nước nào ở Đông Nam Á không có địa giới với bất kì nước nào khác?','answer1':'A. Philippines','answer2':'B. Malaysia','answer3':'C. Lào','answerTrue':'1'},
{'question':'Câu 2: Virus sởi lây qua đường nào?','answer1':'A. Tiêu hóa','answer2':'B. Hô hấp','answer3':'C. Máu','answerTrue':'2'},
{'question':'Câu 3: Việt Nam lần đầu tiên vô địch AFF Cup vào năm nào?','answer1':'A. 2004','answer2':'B. 2006','answer3':'C. 2008','answerTrue':'3'},
{'question':'Câu 4: Loài hoa nào được chọn làm quốc hoa của Việt Nam','answer1':'A. Hoa đào','answer2':'B. Hoa mai','answer3':'C. Hoa sen','answerTrue':'3'},
{'question':'Câu 5: Bánh pía là đặc sản có nguồn gốc từ tỉnh nào?','answer1':'A. Sóc Trăng','answer2':'B. Bến Tre','answer3':'C. Hậu Giang','answerTrue':'1'},
];

let $getQuestions= function(index){
	$("input.question").val(element=$libraryQuestions[index].question);
	$("input.answer").eq(0).val(element=$libraryQuestions[index].answer1);
	$("input.answer").eq(1).val(element=$libraryQuestions[index].answer2);
	$("input.answer").eq(2).val(element=$libraryQuestions[index].answer3);
};

$('.quiz button.start').on('click',function(){
	$('ul').addClass('displayDisable')
	$('input').removeClass('displayDisable');
	$(this).addClass('displayDisable');
	$getQuestions($question);
});

$('button.next').on('click',function(){
	$('input.answer').removeAttr('disabled');
	$getQuestions($question);
	$('input.answer').removeClass('colorAnswerFalse');
	$('input.answer').removeClass('colorAnswerTrue');
	$(this).addClass('displayDisable');
});

$('input.answer').on('click',function(){
	var $idClick = $(this).attr('id');
	var $answer=$libraryQuestions[$question].answerTrue;
	if($idClick==$answer){
		$(this).addClass('colorAnswerTrue');
		$trueAnswer++;
	}
	else
		$(this).addClass('colorAnswerFalse');
	// $('input.question').off('click');
	$('input.answer').attr('disabled','true');
	$question++;
	if($question==5){
		$('button.next').addClass('displayDisable');
		$('button.finish').removeClass('displayDisable')
	}
	else
		$('button.next').removeClass('displayDisable');
});

$('button.finish').on('click',function(){
	$question=0;
	alert(`Bạn đã trả lời đúng ${$trueAnswer}/5 câu!`);
})

