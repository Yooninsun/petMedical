(function ($){

//로고를 클릭하면 main.html의 #content를 load()
$('#content div a').on(function() {
  var url = this.href  // $(this).attr('href')
  $('#container > #content').remove(); 
  $('#container').load(url + " #content");
  return false;
})

//lnb 버튼 클릭하면 메뉴 보여주기
$('#lnb_menu').on('click',function(){
 $('#lnb_navi').addClass('on');
 $(this).removeClass('on');
 $('#close_menu').addClass('on') 
})
//X 버튼 클릭하면 메뉴 닫기
$('#close_menu').on('click',function(){
  $('#lnb_navi').removeClass('on');
  $(this).removeClass('on');
  $('#lnb_menu').addClass('on');
})


var usedata;
$.ajax({
  type : 'GET',
  url : 'data/medicalCenter.json', 
  beforeSend : function(xhr) {
    if (xhr.ovrrideMimeType) {
      xhr.overrideMimetype("application/json")
    }
  },
  success : function(data) {
    usedata = data;
  },
  error : function(error) {
    alert(error.status + '오류발생')
  }
})

var usedata2;
$.ajax({
  type : 'GET',
  url : 'data/allHours.json', 
  beforeSend : function(xhr) {
    if (xhr.ovrrideMimeType) {
      xhr.overrideMimetype("application/json")
    }
  },
  success : function(data2) {
    usedata2 = data2;
  },
  error : function(error) {
    alert(error.status + '오류발생')
  }
})

/* 전체병원 list 클릭시 medicalCenter json파일 불러오기 */
$('body').on('click', '.mainContent .hospital a, #lnb_navi a', function(e) {
  e.preventDefault();
  var url = $(this).attr('href');
  var part = $(this).attr('class');
  $('#container > #content').remove();
  $('#container').load(url + ' #content', function() {
    var newContent = '';
    for(var i in usedata[part]) {
      newContent += `<li><div class="medicalInfo col-12 col-md-12"><div class="img"><img src="${usedata[part][i].img}" alt="동물병원사진"></div>`; 
      newContent += `<h4>${usedata[part][i].name}</h4>`;
      newContent += `<a href="tel:${usedata[part][i].tell}">${usedata[part][i].tell}</a>`;
      newContent += `<p class="add">${usedata[part][i].address}</p>`;
      newContent += `<p class="hour1">${usedata[part][i].hours1}</p>`;
      newContent += `<p class="hour2">${usedata[part][i].hours2}</p>`;
      newContent += `<p class="homepage"><a href="${usedata[part][i].hompage}">${usedata[part][i].hompage}</a></p></div></li>`
    }
    $('#content .medicalList').html(`<ul>${newContent}</ul>`);
  })
})

/* 24시간 병원 클릭시 hour24.json 파일 불러오기 */
$('body').on('click', '.mainContent .allDay a, #lnb_navi a', function(e) {
  e.preventDefault();
  var url = $(this).attr('href');
  var part = $(this).attr('class');
  $('#container > #content').remove();
  $('#container').load(url + ' #content', function() {
    var newContent = '';
    for(var i in usedata2[part]) {
      newContent += `<li><div class="allHoursInfo col-12 col-md-12"><div class="img"><img src="${usedata2[part][i].img}" alt="동물병원사진"></div>`; 
      newContent += `<h4>${usedata2[part][i].name}</h4>`;
      newContent += `<a href="tel:${usedata2[part][i].tell}">${usedata2[part][i].tell}</a>`;
      newContent += `<p class="add">${usedata2[part][i].address}</p>`;
      newContent += `<p class="hour1">${usedata2[part][i].hours1}</p>`;
      newContent += `<p class="hour2">${usedata2[part][i].hours2}</p>`;
      newContent += `<p class="homepage"><a href="${usedata2[part][i].hompage}">${usedata2[part][i].hompage}</a></p></div></li>`
    }
    $('#content .allHoursList').html(`<ul>${newContent}</ul>`);
  })
})






})(jQuery)