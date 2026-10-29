// Product Data (Global)
const productData = {
    k9pro: {
        title: "Huracan K9 PRO",
        subtitle: "สุดยอดเครื่องปั่นสำหรับมืออาชีพ",
        image: "media/image/K9Details.jpg",
        features: [
            "มอเตอร์ DC ความเร็วสูง ทนทาน ใช้งานได้นาน",
            "ใบมีด 6 แฉก SUS304/ Stainless Steel Blade ทนทาน ไม่เป็นสนิม",
            "Soundproof Cover ตู้เก็บเสียงในตัว ขนาด 7 มิล ลดเสียงรบกวน",
            "โปรแกรมตั้งระดับการปั่นแบบอัตโนมัติ",
            "ปุ่มกดคอนโทลพร้อมระบบออโต้"
        ],
        specs: [
            { label: "กำลัง", value: "1,500 - 2000W, 220V 50 - 60Hz" },
            { label: "ความจุ", value: "1.5 ลิตร" },
            { label: "ความเร็ว", value: "22,000 RPM" },
            { label: "น้ำหนัก", value: "9.5 กก." }
        ],
        price: "฿15,900"
    },
    a9plus: {
        title: "GEF A9 PLUS",
        subtitle: "ความสมบูรณ์แบบที่ปรับแต่งได้",
        image: "media/image/A9Details.jpg",
        description: "ควบคุมทุกการปั่นด้วยแผงควบคุมดิจิทัลอัจฉริยะ ให้คุณตั้งโปรแกรมการทำงานได้อย่างอิสระ เพื่อให้ได้เนื้อสัมผัสที่สมบูรณ์แบบในทุกแก้ว",
        features: [
            "ปั่นเงียบ เสียงเบากว่า 40 dB",
            "วัสดุหุ้มฉนวนกันเสียงแบบ 2 ชั้น หนากว่า 9mm ป้องกันเสียงรบกวน",
            "ระบบป้องกันความปลอดภัย ป้องกันกระแสไฟและอุณหภูมิเกิน",
            "Super Motor มอเตอร์ไร้แปลงถ่าน นำเข้าจากญี่ปุ่น"
        ],
        specs: [
            { label: "กำลัง", value: "1,500 - 2,000 W, 220 - 240V" },
            { label: "ความจุ", value: "1.5 ลิตร" },
            { label: "ความเร็ว", value: "18,000 RPM" },
            { label: "น้ำหนัก", value: "11.1 กก." }
        ],
        price: "฿18,900"
    },
    s9pro: {
        title: "GEF S9 PRO",
        subtitle: "ความสมบูรณ์แบบที่ปรับแต่งได้",
        image: "media/image/A9Details.jpg",
        description: "ใช้พื้นที่บาร์อย่างคุ้มค่า ออกแบบโดยคำนึงถึงความกะทัดรัดของพื้นที่โดยรวมเครื่องปันสมูทตี้ที่เหมาะกับร้านกาแฟและชา ปั่นได้ตั้งแต่เช้าจรดค่ำ",
        features: [
            "กำลังสูงสุด 4 แรงม้า มอเตอร์ไร้แปรงถ่าน V8",
            "อายุการใช้งานสูงถึง 400,000 รอบ มากกว่ามอเตอร์ AC 10 เท่า",
            "ระบบป้องกันความปลอดภัย ป้องกันกระแสไฟและอุณหภูมิเกิน",
            "แผงควบคุมเทคโนโลยีเคลือบฟิล์ม IMD กันความชื้นและกันน้ำ"
        ],
        specs: [
            { label: "กำลัง", value: "1,500 - 2,000 W, 220 - 240V" },
            { label: "ความจุ", value: "1.5 ลิตร" },
            { label: "ความเร็ว", value: "18,000 RPM" },
            { label: "น้ำหนัก", value: "11.5 กก." }
        ],
        price: "฿18,900"
    },
    v3pro: {
        title: "GEF V3 PRO",
        subtitle: "ปั่นได้ตลอดทั้งวันไม่ต้องพัก",
        image: "media/image/V3-Details.png",
        description: "เครื่องปั่นเชิงพาณิชย์ที่ออกแบบมาเพื่อเครื่องดื่มยุคใหม่โดยเฉพาะ เพิ่มประสิทธิภาพการทำงานหน้าร้านให้ดียิ่งขึ้นพร้อมความปลอดภัยที่มั่นใจได้",
        features: [
            "ปั่นเงียบ เสียงเบากว่า 40 dB",
            "ระบบหยุดแบบเรียลไทม์ ลดความเสียหายของตลับลูกปืน",
            "มอเตอร์ขนาดใหญ่ ทำงานพร้อมระบบปั่นสี่มิติ",
            "ตัวเครื่องพลาสติกโคโพลีเอสเตอร์ ความแข็งแรงสูง ผ่านมาตรฐานความปลอดภัย LFGB"
        ],
        specs: [
            { label: "กำลัง", value: "1,500W , 220 - 240V" },
            { label: "ความจุ", value: "1.5 ลิตร" },
            { label: "ความเร็ว", value: "16,000 RPM" },
            { label: "น้ำหนัก", value: "9.3 กก." }
        ],
        price: "฿16,900"
    }
};

// Open Modal (Global Function)
function openModal(productKey) {
    const modal = document.getElementById('productModal');
    const product = productData[productKey];
    
    if (!product) {
        console.error('Product not found:', productKey);
        return;
    }
    
    // Set content
    document.getElementById('modalImage').src = product.image;
    document.getElementById('modalTitle').textContent = product.title;
    document.getElementById('modalSubtitle').textContent = product.subtitle;
    document.getElementById('modalDescription').textContent = product.description;
    document.getElementById('modalPrice').textContent = product.price;
    
    // Set features
    const featuresList = document.getElementById('modalFeatures');
    featuresList.innerHTML = '';
    product.features.forEach(feature => {
        const li = document.createElement('li');
        li.textContent = feature;
        featuresList.appendChild(li);
    });
    
    // Set specs
    const specsDiv = document.getElementById('modalSpecs');
    specsDiv.innerHTML = '';
    product.specs.forEach(spec => {
        const specItem = document.createElement('div');
        specItem.className = 'spec-item';
        specItem.innerHTML = `<strong>${spec.label}:</strong><span>${spec.value}</span>`;
        specsDiv.appendChild(specItem);
    });
    
    // Show modal
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
    console.log('Modal opened for:', productKey);
}

// Close Modal (Global Function)
function closeModal() {
    const modal = document.getElementById('productModal');
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
    console.log('Modal closed');
}

function buyProduct() {
    window.open('https://page.line.me/992smxye?openQrModal=true', '_blank' );
}

function showNotification(title, message) {
    const modal = document.getElementById('notificationModal');
    document.getElementById('notificationTitle').textContent = title;
    document.getElementById('notificationMessage').textContent = message;
    modal.classList.add('show');
}

function closeNotification() {
    const modal = document.getElementById('notificationModal');
    modal.classList.remove('show');
}

// ปิด Notification เมื่อกดนอก Modal
document.addEventListener('DOMContentLoaded', function() {
    const notificationModal = document.getElementById('notificationModal');
    if (notificationModal) {
        notificationModal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeNotification();
            }
        });
    }
});

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Sticky Navbar
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 2. Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        document.querySelectorAll('.nav-menu li a:not(.brand-trigger):not(.products-trigger)').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // Products menu: click to reveal the available brands.
    const productsTrigger = document.querySelector('.products-trigger');
    if (productsTrigger) {
        productsTrigger.addEventListener('click', function(event) {
            event.preventDefault();
            const productsDropdown = this.closest('.dropdown');
            const isOpen = productsDropdown.classList.toggle('open');
            this.setAttribute('aria-expanded', String(isOpen));
        });
    }

    // Brand menu: click a brand to reveal its product models.
    document.querySelectorAll('.brand-trigger').forEach(trigger => {
        trigger.addEventListener('click', function(event) {
            event.preventDefault();

            const currentSubmenu = this.closest('.dropdown-submenu');
            const isOpen = currentSubmenu.classList.contains('open');

            document.querySelectorAll('.dropdown-submenu.open').forEach(item => {
                item.classList.remove('open');
                const itemTrigger = item.querySelector(':scope > .brand-trigger');
                if (itemTrigger) itemTrigger.setAttribute('aria-expanded', 'false');
            });

            if (!isOpen) {
                currentSubmenu.classList.add('open');
                this.setAttribute('aria-expanded', 'true');
            }
        });
    });

    // 3. Hero Carousel
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.getElementById('prev-slide');
    const nextBtn = document.getElementById('next-slide');
    let currentSlide = 0;
    let slideInterval;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        
        if (index >= slides.length) {
            currentSlide = 0;
        } else if (index < 0) {
            currentSlide = slides.length - 1;
        } else {
            currentSlide = index;
        }
        
        slides[currentSlide].classList.add('active');
        
        // Handle video playback
        slides.forEach(slide => {
            const video = slide.querySelector('video');
            if (video) {
                if (slide.classList.contains('active')) {
                    video.play().catch(e => console.log("Auto-play prevented"));
                } else {
                    video.pause();
                }
            }
        });
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    function prevSlide() {
        showSlide(currentSlide - 1);
    }

    if (prevBtn && nextBtn) {
        nextBtn.addEventListener('click', () => {
            nextSlide();
            resetInterval();
        });

        prevBtn.addEventListener('click', () => {
            prevSlide();
            resetInterval();
        });
    }

    function startInterval() {
        slideInterval = setInterval(nextSlide, 12000); // Change slide every 12 seconds
    }

    function resetInterval() {
        clearInterval(slideInterval);
        startInterval();
    }

    if (slides.length > 1) {
        startInterval();
    }

    // 4. Scroll Animation (Fade-in)
    const fadeElements = document.querySelectorAll('.fade-in');

    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                fadeObserver.unobserve(entry.target); // Stop observing once visible
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    });

    fadeElements.forEach(element => {
        fadeObserver.observe(element);
    });

    // 5. Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                
                // Offset for fixed header
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // 6. Modal Event Listeners
    const modal = document.getElementById('productModal');
    
    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeModal();
        }
    });
});
