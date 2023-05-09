"use strict";
$(document).ready(function () {
   
   
   
   
   
   
   
    $("#me").click(function (e) {
        e.preventDefault();
        function myel(myclass = "") {
            if (!$.trim($("#inputme").val()) == "") {
                let vall = $("#inputme").val()
                    , newH3 = $('<h3> </h3>')
                    , newDiv = $('<div class="line"> </div>')
                    , bigDiv = $(`<div ${myclass} > </div>`)
                $(newH3).append(vall)
                $(newDiv).append(newH3)
                $(bigDiv).append(newDiv)
                return bigDiv
            }
            else {
                return
            }
        }
        $("#messageyou").append(myel())
        $("#messageme").append(myel('class= "end"'))
        $("#inputme").val("")
    });

    $("#you").click(function (e) {
        e.preventDefault();
        function myel(myclass = "") {
            if (!$.trim($("#inputyou").val()) == "") {
                let vall = $("#inputyou").val()
                    , newH3 = $('<h3> </h3>')
                    , newDiv = $('<div class="line"> </div>')
                    , bigDiv = $(`<div ${myclass} > </div>`)
                $(newH3).append(vall)
                $(newDiv).append(newH3)
                $(bigDiv).append(newDiv)
                return bigDiv
            }
            else {
                return
            }
        }
        $("#messageme").append(myel())
        $("#messageyou").append(myel('class= "end"'))
        $("#inputyou").val("")
    });



    $(document).on('keypress', function (e) {
        if (e.which == 13) {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${$("#myWeather").val()}&appid=7cab24708235fa489b9cc04b133a060b&units=metric`
            async function myweather() {
                let responce = await fetch(url)
                let data = await responce.json()
                $("#city").html(data.name)
                $("#temp").html(data.main.temp)
                $("#feels").html(data.main.feels_like)
                $("#myWeather").val("")
                console.log(data)
            }
            myweather()
        }

    });
    $("#btn").click(function (e) {
        e.preventDefault();
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${$("#myWeather").val()}&appid=7cab24708235fa489b9cc04b133a060b&units=metric`
        async function myweather() {
            let responce = await fetch(url)
            let data = await responce.json()
            $("#city").html(data.name)
            $("#temp").html(data.main.temp)
            $("#feels").html(data.main.feels_like)
            $("#myWeather").val("")
            console.log(data)
        }
        myweather()
    });




    $(".btn").click(function (e) {
        e.preventDefault();
        let a = (a) => {
            if ((Number)(a)) {
                for (let i = 0; i < a; i++) {
                    $('.box').append(`<h2>${a}</h2>`);
                }
            } else {
                for (let i = a; i < a; i++) {
                    $('.box').append(`<h2>${a}</h2>`);
                }
            }
        }
        a($('input').val());
    });
});