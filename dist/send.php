<?php
/* Осуществляем проверку вводимых данных и их защиту от враждебных 
скриптов */
$name = htmlspecialchars($_POST["name"]);
$tel = htmlspecialchars($_POST["tel"]);
$email = htmlspecialchars($_POST["email"]);
$subj = 'msg'
/* Устанавливаем e-mail адресата */
$myemail = "flowerdeluc@gmail.com";

/* Создаем новую переменную, присвоив ей значение */
$message_to_myemail = "Здравствуйте! 
Вашей контактной формой было отправлено сообщение! 
Имя отправителя: $name 
E-mail: $email 
Телефон: $tel";
/* Отправляем сообщение, используя mail() функцию */
$headers = "From: \r\nContent-type: text/plain; charset=windows-1251 \r\n";
mail($myemail, $subj, $message_to_myemail, $headers);
?>



<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    
</head>

<body>
    <section class="success-page">
       <div class="overlay">
           <div class="container">
                <div class="success-block">
                    <div class="success-text">
                        <p>
                            Спасибо за вашу заявку!
                        </p>
                        <p>
                           Мы свяжемся с вами в ближайшее время.
                        </p>
                    </div>
                    
                    <a href="/index.html" class="btn subscribe-btn top-banner-btn">
                          Вернуться на главную
                     </a>
                </div>
              
           </div>
             <div class="top-banner-bg-author">
                   Владимир <br>Тарасов
             </div>
       </div>
     </section>

    <link rel="stylesheet" href="css/main.css">
    <script src="js/bild.js"></script>
   
</body>  

</html>