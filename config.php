<?php
/**
 * GEF Website Configuration
 * ไฟล์ตั้งค่าพื้นฐานสำหรับเว็บไซต์
 */

// ข้อมูลเว็บไซต์
define('SITE_NAME', 'GEF Premium Blenders');
define('SITE_TITLE', 'GEF | The Future of Espresso Machine');
define('SITE_DESCRIPTION', 'เครื่องปั่นพรีเมียมสำหรับธุรกิจเครื่องดื่มระดับมืออาชีพ');
define('SITE_URL', 'http://localhost:8000');

// ข้อมูลติดต่อ
define('COMPANY_NAME', 'GEF Premium Blenders');
define('COMPANY_EMAIL', 'contact@gef-blenders.com');
define('COMPANY_PHONE', '02-XXX-XXXX');
define('COMPANY_ADDRESS', '123 อาคาร GEF ถนนสุขุมวิท กรุงเทพฯ 10110');

// เวลาทำการ
define('BUSINESS_HOURS_START', '09:00');
define('BUSINESS_HOURS_END', '18:00');

// ข้อมูลสินค้า
$products = array(
    array(
        'id' => 'a9pro',
        'name' => 'GEF A9 PRO',
        'subtitle' => 'สุดยอดเครื่องปั่นสำหรับมืออาชีพ',
        'power' => '300W',
        'description' => 'ยกระดับบาร์เครื่องดื่มของคุณด้วยเครื่องปั่นที่ออกแบบมาเพื่อการใช้งานเชิงพาณิชย์โดยเฉพาะ มาพร้อมมอเตอร์กำลังสูง 300W ที่ให้แรงปั่นเหนือกว่าเครื่องทั่วไปถึง 3 เท่า',
        'features' => array(
            'อายุการใช้งานยาวนานกว่า 300,000 ครั้ง',
            'ทำงานเงียบเพียง 40 เดซิเบล',
            'ประหยัดพลังงานสูงสุด 70%'
        ),
        'image' => 'assets/a9pro-mockup.jpg'
    ),
    array(
        'id' => 'a9plus',
        'name' => 'GEF A9 PLUS',
        'subtitle' => 'ความสมบูรณ์แบบที่ปรับแต่งได้',
        'power' => '300W',
        'description' => 'ควบคุมทุกการปั่นด้วยแผงควบคุมดิจิทัลอัจฉริยะ ให้คุณตั้งโปรแกรมการทำงานได้อย่างอิสระ เพื่อให้ได้เนื้อสัมผัสที่สมบูรณ์แบบในทุกแก้ว',
        'features' => array(
            'แผงควบคุมระบบสัมผัส ใช้งานง่าย',
            'โหมดการทำงานที่ปรับแต่งได้ตามต้องการ',
            'ระบบความปลอดภัยหลายชั้น ปกป้องมอเตอร์'
        ),
        'image' => 'assets/a9plus-mockup.jpg'
    )
);

// ข้อมูลข่าวสาร
$news = array(
    array(
        'date' => '28 กรกฎาคม 2026',
        'title' => 'เปิดตัว GEF A9 PRO รุ่นใหม่ล่าสุด',
        'excerpt' => 'สัมผัสประสบการณ์การปั่นระดับพรีเมียม กับนวัตกรรมใหม่ที่ตอบโจทย์ทุกความต้องการของบาร์เครื่องดื่ม...',
        'image' => 'assets/news1.jpg'
    ),
    array(
        'date' => '15 มิถุนายน 2026',
        'title' => 'เคล็ดลับการดูแลรักษาเครื่องปั่นเชิงพาณิชย์',
        'excerpt' => 'ยืดอายุการใช้งานเครื่องปั่นคู่ใจของคุณด้วยวิธีง่ายๆ ที่สามารถทำได้ด้วยตัวเองทุกวัน...',
        'image' => 'assets/news2.jpg'
    ),
    array(
        'date' => '2 พฤษภาคม 2026',
        'title' => 'GEF ร่วมงานแสดงสินค้าอาหารและเครื่องดื่ม',
        'excerpt' => 'พบกับบูธของ GEF พร้อมโปรโมชั่นพิเศษมากมายในงานแสดงสินค้าอาหารและเครื่องดื่มระดับนานาชาติ...',
        'image' => 'assets/news3.jpg'
    )
);

// ข้อมูลจุดเด่น (Trust Badges)
$trust_badges = array(
    array(
        'icon' => 'fas fa-truck-fast',
        'title' => 'จัดส่งฟรี',
        'description' => 'ทั่วประเทศ เมื่อสั่งซื้อตามเงื่อนไข'
    ),
    array(
        'icon' => 'fas fa-shield-halved',
        'title' => 'รับประกัน 2 ปี',
        'description' => 'มั่นใจในคุณภาพและบริการ'
    ),
    array(
        'icon' => 'fas fa-tools',
        'title' => 'บริการติดตั้ง',
        'description' => 'โดยทีมช่างผู้เชี่ยวชาญ'
    ),
    array(
        'icon' => 'fas fa-store',
        'title' => 'สาขาทั่วประเทศ',
        'description' => 'พร้อมให้บริการและดูแลคุณ'
    )
);

// Social Media Links
$social_links = array(
    'facebook' => 'https://facebook.com/gef-blenders',
    'instagram' => 'https://instagram.com/gef-blenders',
    'line' => 'https://line.me/R/ti/p/@gef-blenders',
    'youtube' => 'https://youtube.com/@gef-blenders'
);

// Color Scheme
$colors = array(
    'primary' => '#00ff00',
    'primary_dark' => '#00cc00',
    'secondary' => '#1a1a1a',
    'bg_dark' => '#0a0a0a',
    'text_light' => '#ffffff',
    'text_muted' => '#aaaaaa'
);
?>
