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

$('body').on('click', '.mainContent .hospital a', function(e) {
  e.preventDefault();
  var url = $(this).attr('href');
  var part = $(this).attr('id');
  $('#container > #content').remove();
  $('#container').load(url + ' #content', function() {
    var newContent = '';
    for(var i in usedata[part]) {
      newContent += `<li><div class="medicalInfo col-6 com-md-6"><div class="img"><img src="${usedata[part][i].Img}" alt="동물병원사진"></div>`; 
      newContent += `<h4>${usedata[part][i].Name}</h4>`;
      newContent += `<a href="tel:02-555-2272">02-555-2272</a>`;
      newContent += `<p class="add">서울 송파구 가락로 140 2층 201호</p>`;
      newContent += `<p class="hour1">월~금요일 10:00-20:00</p>`;
      newContent += `<p class="hour2">토요일 10:00-20:00</p>`;
      newContent += `<p class="homepage"><a href="https://blog.naver.com/raonpet">https://blog.naver.com/raonpet</a></p></div></li>`
    }
    $('#content .medicalList').html(`<ul>${newContent}</ul>`);
  })
})









})(jQuery)