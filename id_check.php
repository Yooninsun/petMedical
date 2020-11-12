<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>아이디 중복체크 페이지</title>
</head>
<body>
  
<h3>아이디 중복체크</h3>

<?php

$userId = $_GET['userId'];
//주소창에 직접 값을 담아서 php프로그램을 호출할때는 전역변수 $_GET[]을 사용함

if (!$userId) {
  echo ("<p>아이디를 입력해주세요</p>");
} else {
  $con = mysqli_connect('localhost','user1','12345','sample');
  $sql = "select * from petmedical where userId='$userId'";
  $result = mysqli_query($con, $sql);

  $num_record = mysqli_num_rows($result);
  if ($num_record) {
    echo "<p>".$userId."이 아이디는 이미 사용중입니다.</p>";
    echo "<p>다른 아이디를 사용해주세요.</p>";
    echo ("
      <script>
        window.opener.document.getElementById('joinform').classList.remove('on')
      </script>
    ");
  } else {
      echo "<p>".$userId."사용가능한 아이디입니다.</p>";
      echo ("
        <script>
          window.opener.document.getElementById('joinform').classList.add('on')
        </script>
      ");
  }

  mysqli_close($con);
}

?>
<div id="close_btn">
  <button type="button" onclick="window.close()">닫기</button>
</div>



</body>
</html>