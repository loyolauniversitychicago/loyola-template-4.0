var headerOne = $('tr th:nth-child(1)');
var headerTwo = $('tr th:nth-child(2)');
var headerThree = $('tr th:nth-child(3)');
var headerFour = $('tr th:nth-child(4)');
var headerFive = $('tr th:nth-child(5)');
var headerSix = $('tr th:nth-child(6)');
var headerSeven = $('tr th:nth-child(7)');
var headerEight = $('tr th:nth-child(8)');
var headerNine = $('tr th:nth-child(9)');
var headerTen = $('tr th:nth-child(10)');
var one = $(headerOne).html();
var two = $(headerTwo).html();
var three = $(headerThree).html();
var four = $(headerFour).html();
var five = $(headerFive).html();
var six = $(headerSix).html();
var seven = $(headerSeven).html();
var eight = $(headerEight).html();
var nine = $(headerNine).html();
var ten = $(headerTen).html();
$( "tr td:nth-child(1)" ).prepend( "<span>" + one + "</span>" ).one;
$( "tr td:nth-child(2)" ).prepend( "<span>" + two + "</span>" ).one;
$( "tr td:nth-child(3)" ).prepend( "<span>" + three + "</span>" ).one;
$( "tr td:nth-child(4)" ).prepend( "<span>" + four + "</span>" ).one;
$( "tr td:nth-child(5)" ).prepend( "<span>" + five + "</span>" ).one;
$( "tr td:nth-child(6)" ).prepend( "<span>" + six + "</span>" ).one;
$( "tr td:nth-child(7)" ).prepend( "<span>" + seven + "</span>" ).one;
$( "tr td:nth-child(8)" ).prepend( "<span>" + eight + "</span>" ).one;
$( "tr td:nth-child(9)" ).prepend( "<span>" + nine + "</span>" ).one;
$( "tr td:nth-child(10)" ).prepend( "<span>" + ten + "</span>" ).one;


// NEW

$(window).ready(function() {

    var wi = $(window).width();
    var headerOne = $('tr th:nth-child(1)');
    var headerTwo = $('tr th:nth-child(2)');
    var headerThree = $('tr th:nth-child(3)');
    var headerFour = $('tr th:nth-child(4)');
    var headerFive = $('tr th:nth-child(5)');
    var headerSix = $('tr th:nth-child(6)');
    var headerSeven = $('tr th:nth-child(7)');
    var headerEight = $('tr th:nth-child(8)');
    var headerNine = $('tr th:nth-child(9)');
    var headerTen = $('tr th:nth-child(10)');
    var one = $(headerOne).html();
    var two = $(headerTwo).html();
    var three = $(headerThree).html();
    var four = $(headerFour).html();
    var five = $(headerFive).html();
    var six = $(headerSix).html();
    var seven = $(headerSeven).html();
    var eight = $(headerEight).html();
    var nine = $(headerNine).html();
    var ten = $(headerTen).html();
    
    if (wi <= 480) {
    
    $( "tr td:nth-child(1)" ).prepend( "<span>" + one + "</span>" ).one;
    $( "tr td:nth-child(2)" ).prepend( "<span>" + two + "</span>" ).one;
    $( "tr td:nth-child(3)" ).prepend( "<span>" + three + "</span>" ).one;
    $( "tr td:nth-child(4)" ).prepend( "<span>" + four + "</span>" ).one;
    $( "tr td:nth-child(5)" ).prepend( "<span>" + five + "</span>" ).one;
    $( "tr td:nth-child(6)" ).prepend( "<span>" + six + "</span>" ).one;
    $( "tr td:nth-child(7)" ).prepend( "<span>" + seven + "</span>" ).one;
    $( "tr td:nth-child(8)" ).prepend( "<span>" + eight + "</span>" ).one;
    $( "tr td:nth-child(9)" ).prepend( "<span>" + nine + "</span>" ).one;
    $( "tr td:nth-child(10)" ).prepend( "<span>" + ten + "</span>" ).one;
    
    } else {
    
    $( "tr td:nth-child(1)" ).prepend();
    $( "tr td:nth-child(2)" ).prepend();
    $( "tr td:nth-child(3)" ).prepend();
    $( "tr td:nth-child(4)" ).prepend();
    $( "tr td:nth-child(5)" ).prepend();
    $( "tr td:nth-child(6)" ).prepend();
    $( "tr td:nth-child(7)" ).prepend();
    $( "tr td:nth-child(8)" ).prepend();
    $( "tr td:nth-child(9)" ).prepend();
    $( "tr td:nth-child(10)" ).prepend();
    
    }})    