// e1a342dc3fe3e3603e1ad544f3cdb8dd : Open Weather Map API keys

// samples. 을 api.으로

// #1 - Current Weather
// https://api.openweathermap.org/data/2.5/weather?id=1835848&appid=e1a342dc3fe3e3603e1ad544f3cdb8dd&units=metric
// #2 - 5 Days Weather & 3 Hours interval
// https://api.openweathermap.org/data/2.5/forecast?id=1835848&appid=e1a342dc3fe3e3603e1ad544f3cdb8dd&units=metric

var apiURL = "https://api.openweathermap.org/data/2.5/";
var appid = "e1a342dc3fe3e3603e1ad544f3cdb8dd";
var units = "metric";
var files = ["weather", "forecast"];

// modal init
$.ajax({
    type: "get",
    url: "../json/city.json",
    dataType: "json",
    success: function (data) {
        var html = '<option value = "">도시를 선택하세요.</option>';
        // console.log(data.cities[0].name);
        for (var i in data.cities) {
            html += '<option value= "' + data.cities[i].id + '">';
            html += data.cities[i].name + ' [' + data.cities[i].id + ']</option>';
        }
        $("#city").html(html);
    }
});

// click했을 때 하이라이트 해주기
$(".nav").click(function () {
    var n = $(this).index();
    $(".nav").css({
        "background-color": "#666",
        "color": "#222",
        "border-top": "5px solid #444",
        "border-right": "5px solid #444",
        "border-left": "5px solid #444  "
    });

    $(this).css({
        "background-color": "orange",
        "color": "#fff",
        "border-top": "5px solid #ff9100",
        "border-right": "5px solid #ff9100",
        "border-left": "5px solid #ff9100"
    });

    $(".cont").hide(); // 즉시 실행, 시간을 넣으면 animation이 생긴다.
    $(".cont").eq(n).show(); // show() 안에 있는 숫자는 시간을 의미.

});

// default 설정하기
$(".nav").eq(0).trigger("click"); // 우리가 클릭하지 않아도, 여기를 만나면 click이 먹는 것.