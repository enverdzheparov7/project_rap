<?php


if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $message = "Line 1\r\nLine 2\r\nLine 3";

    // Форматирование
    $message = wordwrap($message, 70, "\r\n");

    $to = 'dzheparovenver@gmail.com';
    $subject = 'My Subject';

    // Отправка письма
    $success = mail($to, $subject, $message);

    if ($success) {
        echo 'Письмо отправлено успешно.';
    } else {
        echo 'Ошибка при отправке письма.';
    }
} else {
    echo 'Неверный метод запроса.';
}
