<?php

  $id = $_POST['userId'];
  $pw = $_POST['pw'];

  $con = mysqli_connect('localhost','user1','12345','sample');
  $sql = "select * from petmedical where id='$id'";
  $result = mysqli_query($con, $sql);

  $num_match = mysqli_num_rows($result);//매칭된 레코드 수를 카운트함

  if(!$num_match){
    echo ("
      <script>
        alert('등록되지 않은 아이디입니다.')
      </script>  
    ");
    exit;
  } else {
    // $result에 담긴 레코드의 필드를 배열로 만듬: mysqli_fetch_array()
    $row = mysqli_fetch_array($result);
    $db_pw = $row['pw'];
    mysqli_close($con);
    
    if ($pw != $db_pw) {
      echo ("
        <script>
          alert('비밀번호를 확인해주세요')
          history.go(-1)
        </script>  
      ");
      //history.go(-1) 경고창 이전 페이지로 돌아가기
      exit;
    } else {
      //session : 대화 처리로 이용자가 단말을 사용하고부터 사용이 끝나기까지를 말함. 
      //즉 login 명령을 입력하고 logout명령을 입력하기까지의 사이를 말함.
      session_start(); //세션을 활성화됨
      $_SESSION['userId'] = $row['id'];
      $_SESSION['userName'] = $row['name'];
      echo ("
        <script>
          location.href = 'index.php';
        </script>  
      ");
    }

  }

?>