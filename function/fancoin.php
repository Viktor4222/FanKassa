<?php
if (!empty($_POST['name']) and !empty($_POST['email'])){
	$theme = 'Новая заявка';
	$headers = 'From: info@digital-pr.pro' . "\r\n" .
    		'Reply-To: info@digital-pr.pro' . "\r\n" .
    		'X-Mailer: PHP/' . phpversion();

	$letter = 'данные формы : ';
	$letter .= ' Имя : '.$_POST['name'];
	$letter .= ' Email : '.$_POST['email'];

	if (mail('fadeichev.v@mail.ru', $theme, $letter, $headers)){
		header('Location:/');
	}
}else {
	header('Location:/');
}
