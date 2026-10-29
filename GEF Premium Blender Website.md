# GEF Premium Blender Website

เว็บไซต์แบรนด์สินค้าเครื่องปั่นพรีเมียม GEF ที่ออกแบบมาสำหรับการแสดงสินค้าระดับมืออาชีพและสร้างความเชื่อมั่นให้กับลูกค้า

## 📋 ข้อมูลโครงสร้างไฟล์

```
websitegefblender/
├── index.php              # ไฟล์หลักของเว็บไซต์
├── css/
│   └── style.css         # ไฟล์ CSS สำหรับสไตล์ทั้งเว็บไซต์
├── js/
│   └── script.js         # ไฟล์ JavaScript สำหรับพฤติกรรมและ animation
├── assets/               # โฟลเดอร์สำหรับเก็บภาพและสื่อ
│   ├── hero-a9pro.jpg
│   ├── a9pro-mockup.jpg
│   ├── a9plus-mockup.jpg
│   ├── about-bg.jpg
│   ├── gallery1.jpg - gallery6.jpg
│   ├── news1.jpg - news3.jpg
│   └── [อื่นๆ]
└── README.md             # ไฟล์คำแนะนำนี้
```

## 🎨 ส่วนประกอบของเว็บไซต์

### 1. **Navbar (แถบนำทาง)**
- ติดอยู่ด้านบนของหน้าจอ (Sticky)
- พื้นหลังโปรงใส เมื่อ scroll จะเปลี่ยนเป็นมืดขึ้น
- เมนูหลัก: Home, สินค้า (dropdown), รีวิว, ติดต่อเรา
- Responsive: เมนูแฮมเบอร์เกอร์บนมือถือ

### 2. **Hero Section (ส่วนเด่น)**
- เต็มจอ (100vh) พร้อมวิดีโอหรือภาพพื้นหลัง
- Carousel เลื่อนสไลด์ได้ด้วยปุ่มหรืออัตโนมัติ
- ข้อความใหญ่โดดเด่น พร้อมปุ่ม Call-to-Action

### 3. **Feature Highlight Sections**
- 2-3 บล็อกแสดงสินค้า (A9 PRO, A9 PLUS)
- สลับซ้าย-ขวา ระหว่างภาพและข้อความ
- Animation fade-in เมื่อ scroll ถึง

### 4. **About Us**
- ย่อหน้าสั้นอธิบายแบรนด์
- พื้นหลังภาพ (parallax effect)
- ข้อความจัดตรงกลาง

### 5. **Trust Badges**
- 4 กล่องแสดงจุดเด่น: จัดส่งฟรี, รับประกัน 2 ปี, บริการติดตั้ง, สาขาทั่วประเทศ
- ไอคอน + ข้อความสั้น

### 6. **Video Section**
- YouTube embed
- Responsive aspect ratio (16:9)

### 7. **Find Locations**
- ข้อความและปุ่ม "View More"
- พื้นที่สำหรับแผนที่

### 8. **Review/Gallery Section**
- กริดภาพ 3 คอลัมน์ (responsive)
- Hover effect: ขยายภาพ
- ลิงก์ "ดูผลงานเพิ่มเติม"

### 9. **News/Information Center**
- แสดงข่าวสาร 3 บทความ
- Card design พร้อม thumbnail, วันที่, หัวข้อ, บรรยาย
- Hover effect: ยกขึ้น

### 10. **Footer**
- 4 คอลัมน์: About, Product, Logo, Contact Info
- Social media links
- Copyright

## 🛠️ วิธีการใช้งาน

### ติดตั้งและเรียกใช้

1. **คัดลอกไฟล์ทั้งหมดไปยังเซิร์ฟเวอร์ PHP ของคุณ**
   - ตรวจสอบให้แน่ใจว่า PHP เวอร์ชัน 7.4 ขึ้นไป

2. **เปิดไฟล์ใน Visual Studio Code**
   ```bash
   code /path/to/websitegefblender
   ```

3. **เรียกใช้เซิร์ฟเวอร์ PHP ท้องถิ่น**
   ```bash
   php -S localhost:8000
   ```

4. **เปิดเบราว์เซอร์และไปที่**
   ```
   http://localhost:8000
   ```

### การแก้ไขเนื้อหา

#### แก้ไข HTML (index.php)
- เปิดไฟล์ `index.php` ด้วย Visual Studio Code
- แก้ไขข้อความ, ลิงก์, หรือโครงสร้าง
- บันทึกไฟล์ (Ctrl+S)
- รีเฟรชเบราว์เซอร์ (F5)

#### แก้ไข CSS (css/style.css)
- เปิดไฟล์ `css/style.css`
- แก้ไขสี, ขนาดฟอนต์, padding, margin เป็นต้น
- ค่า CSS Variables อยู่ที่บนสุด:
  ```css
  :root {
      --primary-color: #00ff00;      /* สีเขียวนีออน */
      --secondary-color: #1a1a1a;    /* สีเทาเข้ม */
      --bg-dark: #0a0a0a;            /* สีพื้นหลังดำ */
      --text-light: #ffffff;         /* สีข้อความขาว */
  }
  ```

#### แก้ไข JavaScript (js/script.js)
- เปิดไฟล์ `js/script.js`
- แก้ไขพฤติกรรม: animation, carousel, scroll effect
- เปลี่ยนเวลา carousel: ค้นหา `slideInterval = setInterval(nextSlide, 7000)` (7000 = 7 วินาที)

### การเพิ่มภาพ

1. **สร้างโฟลเดอร์ `assets`** (ถ้ายังไม่มี)
   ```bash
   mkdir assets
   ```

2. **คัดลอกภาพไปยังโฟลเดอร์ `assets`**

3. **อัปเดตเส้นทางภาพใน `index.php`**
   - ค้นหา `src="assets/..."` 
   - เปลี่ยนชื่อไฟล์ให้ตรงกับภาพของคุณ

### การเพิ่มวิดีโอ

- วิดีโอ Huracan ได้รับการตั้งค่าแล้ว
- สำหรับวิดีโออื่น ให้แก้ไข:
  ```html
  <video autoplay muted loop class="hero-media">
      <source src="path/to/your-video.mp4" type="video/mp4">
  </video>
  ```

### การเปลี่ยนสี

1. เปิด `css/style.css`
2. แก้ไข CSS Variables ที่บนสุด:
   ```css
   --primary-color: #00ff00;      /* เปลี่ยนเป็นสีที่ต้องการ */
   --secondary-color: #1a1a1a;
   --bg-dark: #0a0a0a;
   ```

### การเปลี่ยนฟอนต์

- ฟอนต์ปัจจุบัน: Prompt (Thai font)
- ค้นหา `font-family: var(--font-main)` เพื่อเปลี่ยน
- เพิ่มฟอนต์ใหม่จาก Google Fonts ในส่วน `<head>` ของ `index.php`

## 📱 Responsive Design

เว็บไซต์รองรับทุกขนาดหน้าจอ:
- **Desktop**: 1200px ขึ้นไป
- **Tablet**: 768px - 1024px
- **Mobile**: ต่ำกว่า 768px

Breakpoints ใน CSS:
```css
@media (max-width: 1024px) { /* Tablet */ }
@media (max-width: 768px)  { /* Mobile */ }
@media (max-width: 480px)  { /* Small Mobile */ }
```

## 🎯 Features

✅ **Sticky Navbar** - แถบนำทางติดอยู่เมื่อ scroll
✅ **Hero Carousel** - เลื่อนสไลด์ด้วยปุ่มหรืออัตโนมัติ
✅ **Smooth Scrolling** - เลื่อนไปยังส่วนต่างๆ อย่างนุ่มนวล
✅ **Fade-in Animation** - ข้อความและภาพปรากฏเมื่อ scroll
✅ **Responsive Layout** - ปรับตัวกับทุกขนาดหน้าจอ
✅ **Mobile Menu** - เมนูแฮมเบอร์เกอร์บนมือถือ
✅ **Video Background** - วิดีโอเต็มจอในส่วน Hero
✅ **Parallax Effect** - ผลพื้นหลังเคลื่อนไหว

## 🔧 Customization Tips

### เปลี่ยนโลโก้
ค้นหา `.logo-text` ใน CSS และแก้ไข:
```css
.logo-text {
    font-size: 2rem;
    font-weight: 700;
    color: var(--primary-color);
}
```

### เปลี่ยนข้อความ Hero
ค้นหา `.hero-title` และ `.hero-subtitle` ใน `index.php`

### เพิ่มเมนู dropdown
ค้อปปี้โครงสร้าง dropdown ใน navbar:
```html
<li class="dropdown">
    <a href="#">Menu <i class="fas fa-chevron-down"></i></a>
    <ul class="dropdown-menu">
        <li><a href="#">Item 1</a></li>
        <li><a href="#">Item 2</a></li>
    </ul>
</li>
```

### เปลี่ยนจำนวน Carousel slides
เพิ่มหรือลบ `.slide` div ใน HTML

## 📞 Support

สำหรับคำถามหรือปัญหา:
1. ตรวจสอบไฟล์ `index.php`, `css/style.css`, `js/script.js`
2. ตรวจสอบคอนโซล Developer (F12) เพื่อหาข้อผิดพลาด
3. ตรวจสอบเส้นทางไฟล์ (assets, css, js)

## 📄 License

เว็บไซต์นี้สร้างขึ้นสำหรับ GEF Premium Blender Brand

---

**เวอร์ชัน**: 1.0  
**วันที่อัปเดต**: 28 กรกฎาคม 2026  
**สร้างโดย**: Manus AI
