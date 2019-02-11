// e1a342dc3fe3e3603e1ad544f3cdb8dd : Open Weather Map API keys

// samples. 을 api.으로

// #1 - Current Weather
// https://api.openweathermap.org/data/2.5/weather?id=1835848&appid=e1a342dc3fe3e3603e1ad544f3cdb8dd&units=metric
// #2 - 5 Days Weather & 3 Hours interval
// https://api.openweathermap.org/data/2.5/forecast?id=1835848&appid=e1a342dc3fe3e3603e1ad544f3cdb8dd&units=metric

// GMT +09 해줘야함. 영국 시간 기준이기 때문에

/*
$.ajax({
    url: "../json/city.json",
    type: "get", // 정보 요청 방식 설정(method)
    dataType: "json", // xml or json 등
    success: function(data){
        console.log(data);
    }, // callback 함수
    error: function(xhr, status, error){ // xhr(xml header request)
        console.log(xhr, status, error);
    } // error가 발생한다면.
    
}); // jQuery에 있는 ajax method를 쓰겠습니다. JS 객체 형식으로 정보를 보낸다.
*/


// jqaj snippet 활용
$.ajax({
    type: "get",
    url: "https://api.openweathermap.org/data/2.5/weather",
    data: {
        id: "1835848",
        appid: "e1a342dc3fe3e3603e1ad544f3cdb8dd",
        units: "metric"
    },
    dataType: "json",
    success: function (data) {
        console.log(data);
        var imgRoot = "http://openweathermap.org/img/w/";
        var imgSrc = imgRoot + data.weather[0].icon + ".png";
        var html = '';
        html += '<div><img src="' + imgSrc + '"></div>';
        html += '<h1>서울 날씨: ' + data.main.temp + ' 도</h1>';
        $("body").append(html);

    }
});