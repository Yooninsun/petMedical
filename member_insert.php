<?php

$id = $_POST['userId'];
$pw = $_POST['pw'];
$name = $_POST['userName'];
$tel = $_POST['tel'];
$email = $_POST['userEmail'];

$con = mysqli_connect('localhost', 'user1', '12345','sample');
$sql = "insert into petmedical (userId,pw,userName,tel,userEmail) ";
$sql .= "values('$id','$pw','$name','$tel','$email')";

mysqli_query($con, $sql);
mysqli_close($con);

echo "
  <script>
    location.href = 'index.php'
  </script>
";

?>
