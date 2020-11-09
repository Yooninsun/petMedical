(function ($){

//클릭한 a의  href의 #content를 load()
$('body').on('click','#content div a, .r_menu .login > a, .r_menu .join > a',function() {
  var url= $(this).attr('href');
  $('#container > #content').remove(); 
  $('#container').load(url + " #content");
  return false;
})

//lnb 버튼 클릭하면 메뉴 보여주기
$('#lnb_menu').on('click',function(){
 $('#lnb_navi').stop().slideDown(300);
 $(this).removeClass('on');
 $('#close_menu').addClass('on') ;
})
//X 버튼 클릭하면 메뉴 닫기
$('#close_menu').on('click',function(){
  $('#lnb_navi').stop().slideUp(300);
  $(this).removeClass('on');
  $('#lnb_menu').addClass('on');
})


var usedata;
$.ajax({
  type : 'GET',
  url : 'data/medicalCenter.json', 
  beforeSend : function(xhr) {
    if (xhr.overrideMimeType) {
      xhr.overrideMimeType("application/json")
    }
  },
  success : function(data) {
    usedata = data;
  },
  error : function(error) {
    alert(error.status + '오류발생')
  }
})


/* 전체병원 list 클릭시 medicalCenter json파일 불러오기 */
$('body').on('click', '.mainContent a, #lnb_navi a', function(e) {
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
    $('#content .listBox').html(`<ul>${newContent}</ul>`);
  })
})
$('body').on('click', '#lnb_navi a', function(e) {
  e.preventDefault();
  $('#lnb_navi').stop().slideUp(300);
  $('#close_menu').removeClass('on');
  $('#lnb_menu').addClass('on');
})

})(jQuery)

/* 회원가입페이지 check */

function join_check() {
  if ( !document.join_form.userId.value) {
    alert('아이디를 입력해주세요.');
    document.join_form.userId.focus();
    return false;
  }

  if ( !document.join_form.pw.value) {
    alert('비밀번호를 입력해주세요.');
    document.join_form.pw.focus();
    return false;
  }
  if ( !document.join_form.pwCheck.value) {
    alert('비밀번호 확인을 입력해주세요.');
    document.join_form.pwCheck.focus();
    return false;
  }

  if( !document.join_form.userName.value) {
    alert('이름을 입력해주세요.');
    document.join_form.userName.focus();
    return false;
  }

  if ( !document.join_form.tel.value) {
    alert('전화번호를 입력햊세요.');
    document.join_form.tel.focus();
    return false;
  }

  if (document.join_form.pw.value !== document.join_form.pwCheck.value) {
    alert('비밀번호가 일치하지 않습니다. 확인해주세요.');
    document.join_form.pw.focus();
    return false;
  }

  var eljoinform = document.getElementById('joinform')
  if (!eljoinform.classList.contains('on')) {
    alert('아이디 중복체크 해주세요!!')
    return false;
  }

  document.join_form.submit();

}

/* 로그인 체크 */
function login_check() {
  if (!document.login_form.userId.value) {
    alert('아이디를 입력해주세요.');
    document.login_form.userId.focus();
    return false;
  }

  if(!document.login_form.pw.value) {
    alert('비밀번호를 입력해주세요.');
    document.login_form.pw.focus();
    return false;
  }

  document.login_form.submit();

}

function id_check() {
  //window.open("url","창제목","옵션값")
  window.open("id_check.php?userId="+document.join_form.userId.value,"","width=350, height=200, left= 300, top= 300, scrollbars=no, resizable=yes")

}








