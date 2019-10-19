$(document).ready(function() {
      $('input.box-calculation').attr('disabled', 'true');
      $('input.box-result').attr('disabled', 'true');
      $('button.times').attr('disabled', 'true');
      $('button.divide').attr('disabled', 'true');
      $('button.plus').attr('disabled', 'true');
      $('button.equal').attr('disabled', 'true');
    });
//////
     let $char;
     let $value_calculation;
//////
    $('button.number').on('click', function() {
      $char = $(this).html();
      $value_calculation = $('.box-calculation').val();
      $('.box-calculation').val($value_calculation + $char);
      $('button.operation').removeAttr('disabled');
      $('button.equal').removeAttr('disabled');
    });

//////
    $('button.dot').on('click', function() {
      $char = $(this).html();
      $value_calculation = $('input.box-calculation').val();
      $('input.box-calculation').val($value_calculation + $char);
      $('button.operation').attr('disabled', 'true');
      $(this).attr('disabled', 'true');
    });
//////
    $('button.clearAll').on('click', function() {
      $('input.box-calculation').val('');
      $('input.box-result').val('');
    });
/////
    $('button.del').on('click', function() {
      $string = $('input.box-calculation').val();
      $('input.box-calculation').val($string.substring(0, $string.length - 1));
    });
///////
    $('button.operation').on('click', function() {
      $char = $(this).html(); 
      $value_calculation = $('.box-calculation').val();
      $('input.box-calculation').val($value_calculation + $char);
      $('button.operation').attr('disabled', 'true');
      // $('button.times').attr('disabled', 'true');
      // $('button.divide').attr('disabled', 'true');
      $('button.dot').removeAttr('disabled');
    });

////////
    $('button.equal').on('click', function() {
      $result = $('input.box-calculation').val();
      // if(!isNaN(($result)))
      $('input.box-result').val(eval($result));
      // else
      // $('input.box-result').val('ERROR')
    });