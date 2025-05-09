<?php
$ios_url = "https://apps.apple.com/us/app/трезвый-водитель-домой-со-мной/id1534855047";
$android_url = "https://play.google.com/store/apps/details?id=ru.taximaster.tmtaxicaller.id3036";
$desktop_url = "https://домой-со-мной.рф";
$log_file = "stats.txt";

// Логирование переходов
function log_platform($platform) {
    $file = 'stats.txt';
    $stats = ['ios' => 0, 'android' => 0, 'desktop' => 0];

    if (file_exists($file)) {
        $lines = file($file, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
        foreach ($lines as $line) {
            [$key, $val] = explode('=', $line);
            $stats[$key] = (int)$val;
        }
    }

    if (isset($stats[$platform])) {
        $stats[$platform]++;
    }

    $data = "";
    foreach ($stats as $key => $val) {
        $data .= "$key=$val\n";
    }

    file_put_contents($file, $data);
}

// Проверка, бот ли это (соцсети)
function is_social_media_bot($user_agent) {
    $bots = ["whatsapp", "telegrambot", "facebook", "twitterbot", "vkshare", "viber"];
    $user_agent = strtolower($user_agent);
    foreach ($bots as $bot) {
        if (strpos($user_agent, $bot) !== false) {
            return true;
        }
    }
    return false;
}

$user_agent = $_SERVER['HTTP_USER_AGENT'] ?? '';

// Если бот — отдаем мета-теги и НЕ редиректим
if (is_social_media_bot($user_agent)) {
    
    $og_title = "Трезвый водитель в Красноярске - тел.  +7(391)272-76-76";
    $og_description = "Круглосуточная, бережная эвакуация Вас и Вашего автомобиля, профессиональными водителями сервиса «Домой со мной»";

    echo "
    <!DOCTYPE html>
    <html lang='ru'>
    <head>
        <meta charset='UTF-8'>
        <meta property='og:title' content='$og_title'>
        <meta property='og:description' content='$og_description'>
        <meta property='og:image' itemprop='image' content='https://xn-----jlcucodidbcd8a.xn--p1ai/src/images/Logotip.webp' />
        <meta property='og:image:width' content='192'>
        <meta property='og:image:height' content='192'>
        <meta property='og:type' content='website'>
        <meta property='og:url' content='https://домой-со-мной.рф/app.php'>
        <meta name='twitter:card' content='summary_large_image'>
        <meta http-equiv='refresh' content='1; url=https://домой-со-мной.рф/app.php'>
        <title>Переход...</title>
    </head>
    <body>
        <p>Переход на приложение...</p>
    </body>
    </html>
    ";
    exit;
}


file_put_contents('user_agents.log', $user_agent . "\n", FILE_APPEND);


// Если обычный пользователь — определяем платформу и редиректим
if (stripos($user_agent, 'iphone') !== false || stripos($user_agent, 'ipad') !== false) {
    log_platform("ios");
    header("Location: $ios_url");
    exit;
} elseif (stripos($user_agent, 'android') !== false) {
    log_platform("android");
    header("Location: $android_url");
    exit;
} else {
    log_platform("desktop");
    header("Location: $desktop_url");
    exit;
}
