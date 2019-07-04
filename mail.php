<?php

require_once("../../../wp-load.php");

$recepient = 'alex@shinningcreation.com';
$sitename = 'Quest Marketing';

$title = trim($_POST['title']);
$name = trim($_POST['name']);
$email = trim($_POST['email']);
$portfolio = trim($_POST['portfolio']);
$comment = trim($_POST['comment']);
$year = date('Y');
$month = date('m');

$target_dir = '../../uploads/resume/' . $year . '/' . $month . '/';

if (!is_dir($target_dir)) {
    mkdir($target_dir, 0777, true);
}

$file = $_FILES['resume']['tmp_name'];
$for_check = $_FILES['resume'];

if(!check_file_type($for_check)) {
    echo 'bad_file';
    exit;
}

$target = $target_dir . $_FILES['resume']['name'];

$message = "Positon: $title <br>Name: $name <br>E-mail: $email <br>Portfolio link: $portfolio<br>Commentary: $comment";
$pagetitle = "New resume from website \"$sitename\"";

move_uploaded_file($file, $target);
$mails_option = get_option('hr_mails');

$mails = explode(",", $mails_option);

$to = $mails[0];

$subject = $pagetitle;
$body = $message;
$attachments = array($target);
$headers[] = 'Content-Type: text/html; charset=UTF-8';
foreach ($mails as $mail) {
    $headers[] = 'Cc: <' . $mail . '>';
}

wp_mail($to, $subject, $body, $headers, $attachments);
exit;

function check_file_type($file){

    $file_types = array('png', 'jpg', 'jpeg', 'xlsx', 'xls', 'doc', 'docx', 'pdf', 'csv', 'txt');
    $current_file_type = substr(strrchr($file['name'], '.'), 1);

    if(!in_array($current_file_type, $file_types)){
        return false;
    }

    $file_mime_types = array('image/png', 'image/jpeg', 'image/bmp', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.ms-excel', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/pdf', 'text/csv');

    if(!in_array($file['type'], $file_mime_types)){
        return false;
    }

    return true;
}
