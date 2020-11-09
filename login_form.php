<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="shortcut icon" href="images/favicon.png">
  <title>송파구 동물병원 안내</title>
  <link href="css/bootstrap.min.css" rel="stylesheet">
  <link rel="stylesheet" href="css/style.css">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css">
  <link href="https://fonts.googleapis.com/css2?family=Gamja+Flower&display=swap" rel="stylesheet">
  <script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
</head>
<body>
  <div id="wrap">
    
    <?php
    session_start();
    if (isset($_SESSION['userId'])) {
      $userId = $_SESSION['userId'];
      $userName = $_SESSION['name'];
    } else { $userId=''; }
    ?>

    <header id="header">
      <h1 class="logo">
        <a href="index.html"><img src="images/petmedical_logo.png" alt="로고이미지" width="180px"></a>
      </h1>
      <div id="lnb_menu" class="lnb_menu on">
        <a href="#"><i class="fas fa-bars"><span class="blind">메뉴열기</span></i></a>
      </div>
      <div id="close_menu" class="close_menu">
        <a href="#"><i class="fas fa-times"><span class="blind">메뉴닫기</span></i></a>
      </div>
      <div class="r_menu">
          <div class="join"><a href="join.html">회원가입</a></div>
          <div class="login"><a href="login.html">로그인</a></div>
          <div class="search"><a href="#"><i class="fas fa-search"></i><span class="blind">검색</span></a></div>
        
      </div>
    </header>

    <div class="lnb_outer">
      <div class="lnb_inner">
        <div id="lnb_navi">
          <ul>
            <li><a href="notice.html">필독공지사항</a></li>
            <li><a href="allHours.html" class="allHours">24시동물병원</a></li>
            <li><a href="onlyCat.html" class="onlyCat">고양이전문병원</a></li>
            <li><a href="medicalList.html" class="allCenter">전체병원리스트</a></li>
            <li><a href="#">호텔링 서비스</a></li>
            <li><a href="#">반려동물미용</a></li>
          </ul>
        </div>
      </div>
    </div>



    <section id="container">
      <div id="content" class="loginPage">
        <div class="contTit">
          <h2>로그인 페이지</h2>
        </div>
        <div class="wrapper_loginBox">

          <div class="loginBox">
              <form name="login_form" method="post" action="login.php">
                <fieldset>
                    <legend>로그인페이지</legend>
                    <p>
                        <label for="userId">아이디</label>
                        <input type="text" name="userId"    id="userId" placeholder="아이디 입력">
                    </p>
                    <p>
                        <label for="pw">비밀번호</label>
                        <input type="password" name="pw" id="pw"    placeholder="비밀번호 입력">
                    </p>
                </fieldset>
                <button type="button" onclick="login_check()">로그인</button>
              </form>
          </div>
        </div>
      </div>
    </section>

    <footer id="footer">
      <div class="callBox row">
        <div class="tel_number col-7 col-md-7">
          <a href="tel:010-5250-8954"> 문의사항 : 010 - 5250 - 8954</a>
        </div>
        <div class="directCall col-5 col-md-5">
          <a href="tel:010-5250-8954">전화걸기 <i class="fas fa-phone"></i></a>
        </div>
      </div>
      <div class="csBox row">
        <div class="col-3 col-md-3"><a href="#"> 이용약관</a>
        </div>
        <div class="col-6 col-md-6"><a href="#"> 개인정보취급방침</a>
        </div>
        <div class="col-3 col-md-3"><a href="#"> 제휴문의</a>
        </div>

      </div>
      <div class="companyInfo">
        <span>상호 </span> Pet Medical In Songpa <span>대표 </span> 윤인선 <br> 
        <span>주소 </span> 서울시 강남구 강남대로 428 만이빌딩 6층 <br>
        <span>대표 전화 번호 </span> 0105250-8954 <br>
        <span>e-mail </span> jein8954@naver.com <br>
      </div>
      <p>&copy Pet Medical In SongPa. All rights reserved</p>
    </footer>
  
    <div id="onlyMobile">
        이 사이트는 768px 이하에서만 보실 수 있습니다.
    </div>

  </div>

  <!-- jQuery (부트스트랩의 자바스크립트 플러그인을 위해 필요합니다) -->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
  <!-- 모든 컴파일된 플러그인을 포함합니다 (아래), 원하지 않는다면 필요한 각각의 파일을 포함하세요 -->
  <script src="js/bootstrap.min.js"></script>
  <script src="js/index.js"></script>

</body>
</html>