<?php
if (isset($_POST['registerBtn'])) {
    // 設定資料庫連接資訊
    $servername = "ns1";
    $username = "guest_user";
    $password = "guest_password";
    $dbname = "membership_db";

    // 創建連接
    $conn = new mysqli($servername, $username, $password, $dbname);

    // 檢查連接
    if ($conn->connect_error) {
        die("連接失敗: " . $conn->connect_error);
    }

    // 獲取表單數據
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $username = $_POST['username'];
    $gender = $_POST['gender'];
    $dob = $_POST['dob'];
    $altPhone = $_POST['altPhone'];
    $address = $_POST['address'];

    // 準備 SQL 語句，插入數據到資料庫
    $sql = "INSERT INTO members (phone, email, password, username, gender, dob, altPhone, address) VALUES ('$phone', '$email', '$password', '$username', '$gender', '$dob', '$altPhone', '$address')";

    // 執行 SQL 語句
    if ($conn->query($sql) === true) {
        echo "新紀錄插入成功";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    // 關閉連接
    $conn->close();
}
?>
