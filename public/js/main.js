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
var option = {
    appid: appid, // option의 변수 appid에다가 전역변수 appid를 참조시켰다.
    units: units
};

// modal init
cityInit();

function cityInit() {
    $("#modal").show();
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
}


// click했을 때 하이라이트 해주기
$(".nav").click(function () {
    var n = $(this).index();
    $(".nav").css({
        "background-color": "#666",
        "color": "#222",
        "border-top": "5px solid #444",
        "border-right": "5px solid #444",
        "border-left": "5px solid #444  ",
        "z-index": 10
    });

    $(this).css({
        "background-color": "orange",
        "color": "#fff",
        "border-top": "5px solid #ff9100",
        "border-right": "5px solid #ff9100",
        "border-left": "5px solid #ff9100",
        "z-index": 100
    });

    $(".cont").hide(); // 즉시 실행, 시간을 넣으면 animation이 생긴다.
    $(".cont").eq(n).show(); // show() 안에 있는 숫자는 시간을 의미.

});

// default 설정하기
$(".nav").eq(0).trigger("click"); // 우리가 클릭하지 않아도, 여기를 만나면 click이 먹는 것.


// 값이 change가 되면!
$("#city").change(function () {
    // var v = $(this).val();
    option.id = $(this).val();
    var sendData = {
        type: "get",
        dataType: "json",
        data: option,
    };
    sendData.url = apiURL + files[0];
    sendData.success = dailyInit;
    $.ajax(sendData);

    sendData.url = apiURL + files[1];
    sendData.success = weeklyInit;
    $.ajax(sendData);

    // $.ajax({
    //     type: "get",
    //     url: apiURL + files[0],
    //     data: option,
    //     dataType: "json",
    //     success: dailyInit
    // });
    // 

    // $.ajax({
    //     type: "get",
    //     url: apiURL + files[1],
    //     data: option,
    //     dataType: "json",
    //     success: weeklyInit
    // });
});

function dailyInit(data) {
    // console.log(data);
    $("#modal").hide();
    var $daily = $("#daily"); // jQuery 객체를 다룰 때는 $를 활용해서 변수를 선언한다.
    var src = "../img/icon/" + data.weather[0].icon + ".png";
    var temp = data.main.temp + "℃";
    var temp2 = data.main.temp_max + "℃ / " + data.main.temp_min + "℃";
    var html = '';
    html += '<ul>';
    html += '<li class="icon"><img src="' + src + '" class = "img"></li>';
    html += '<li class="city_name">' + $("#city > option:selected").text() + '</li>';
    html += '<li><button class="w3-button w3-indigo" onclick="cityInit();">도시선택</button></li>'; // onclick하면 cityInit이 실행되겠습니다.
    html += '<li class="temp">현재평균온도: <b class="w3-text-indigo">' + temp + '</b></li>';
    html += '<li class="temp2">최고/최저 온도: <b class="w3-text-indigo">' + temp2 + '</b></li>';
    html += '</ul>';

    $daily.html(html);
}

function weeklyInit(data) {
    console.log(data);
};