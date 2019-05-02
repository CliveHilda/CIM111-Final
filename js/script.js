$(document).ready(function(){
    $("#list1").hide()
    $("#list2").hide()
    $("#list3").hide()

    $("#div1").click(function(){
        $("#list1").toggle(300);
    })

    $("#div2").click(function(){
        $("#list2").toggle(300);
    })

    $("#div3").click(function(){
        $("#list3").toggle(300);
    })

    $("#submit").click(function(){
        alert("Thank you. Your response has been recorded.");
    })

})