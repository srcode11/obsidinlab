(function() {
  // ============ LANGUAGE SYSTEM ============
  let currentLang = 'ar';
  
  const translations = {
    ar: {
      heroTitle: 'ننجزها. بسرعة.',
      heroSub: 'مشاريع، واجبات، تقارير، وعروض تقديمية تُنجز لك',
      heroBtn: 'اطلب عبر الواتساب',
      sectionTitle: 'الباقات',
      footerBrand: 'سريع. دقيق. منتهي',
      footerBtn: 'محادثة واتساب',
      orderNow: 'اطلب الآن',
      startingFrom: 'يبدأ من',
      note: 'حسب المتطلبات',
      p1_name: 'مهمة سريعة',
      p1_desc: 'إنجاز المهام الصغيرة بسرعة خلال 24 ساعة. بدون تعقيد.',
      p1_feat1: 'تسليم خلال 24 ساعة',
      p1_feat2: 'مهام صغيرة ومتوسطة',
      p2_name: 'إصلاح التقارير',
      p2_desc: 'تنسيق وتحسين التقارير لإخراج احترافي متكامل.',
      p2_feat1: 'تدقيق لغوي وإملائي',
      p2_feat2: 'تنسيق احترافي كامل',
      p3_name: 'عروض تقديمية',
      p3_desc: 'تصميم عروض بوربوينت جذابة تلفت الانتباه.',
      p3_feat1: 'شرائح مخصصة',
      p3_feat2: 'رسوم بيانية وعناصر مرئية',
      p4_name: 'إرسال ايميلات',
      p4_desc: 'حملات بريد إلكتروني للشركات بعدد ايميلات متعدد بزر واحد.',
      p4_feat1: 'يبدأ من 200 ايميل',
      p4_feat2: 'السعر حسب العدد المطلوب',
      p5_name: 'بورتفوليو',
      p5_desc: 'تصميم موقع بورتفوليو شخصي مع البيانات ومساحة تخزين.',
      p5_feat1: 'موقع كامل باسمك',
      p5_feat2: 'استضافة ومساحة تخزين',
      p5_feat3: 'بيانات وعرض أعمال',
      p6_name: 'مشروع تخرج',
      p6_desc: 'باقة متكاملة تشمل ملفات الأكواد، الرفع، الشرح، تقرير وورد وبوربوينت. عرض وتركيب المشروع.',
      p6_feat1: 'ملفات الأكواد كاملة',
      p6_feat2: 'رفع على السيرفر',
      p6_feat3: 'شرح مفصل',
      p6_feat4: 'تقرير وورد + بوربوينت',
      p6_feat5: 'عرض وتركيب المشروع',
      p7_name: 'تقرير وورد وبوربوينت',
      p7_desc: 'كتابة وإعداد تقرير وورد وعرض بوربوينت احترافي.',
      p7_feat1: 'تقرير وورد منسق',
      p7_feat2: 'عرض تقديمي جاهز',
    },
    en: {
      heroTitle: 'We get it done. Fast.',
      heroSub: 'Projects, assignments, reports, and presentations handled for you',
      heroBtn: 'Order via WhatsApp',
      sectionTitle: 'Packages',
      footerBrand: 'Fast. Precise. Done.',
      footerBtn: 'Chat on WhatsApp',
      orderNow: 'Order Now',
      startingFrom: 'Starts from',
      note: 'Depending on requirements',
      p1_name: 'Quick Task',
      p1_desc: 'Fast small tasks delivered within 24h. No friction.',
      p1_feat1: 'Delivery within 24h',
      p1_feat2: 'Small to medium tasks',
      p2_name: 'Report Fix',
      p2_desc: 'Formatting & improving reports to perfection.',
      p2_feat1: 'Proofreading & editing',
      p2_feat2: 'Professional formatting',
      p3_name: 'Slides Pro',
      p3_desc: 'Presentation design that commands attention.',
      p3_feat1: 'Custom slides',
      p3_feat2: 'Charts & visual elements',
      p4_name: 'Email Blast',
      p4_desc: 'Email campaigns for companies, starting from 200 emails with one click.',
      p4_feat1: 'Starting from 200 emails',
      p4_feat2: 'Price based on quantity',
      p5_name: 'Portfolio',
      p5_desc: 'Personal portfolio website design with data and storage space.',
      p5_feat1: 'Full website with your domain',
      p5_feat2: 'Hosting & storage',
      p5_feat3: 'Data & portfolio showcase',
      p6_name: 'Graduation Project',
      p6_desc: 'Complete package including code files, deployment, explanation, Word report & PowerPoint. Project presentation and setup.',
      p6_feat1: 'Full code files',
      p6_feat2: 'Server deployment',
      p6_feat3: 'Detailed explanation',
      p6_feat4: 'Word report + PowerPoint',
      p6_feat5: 'Presentation & project setup',
      p7_name: 'Report & Presentation',
      p7_desc: 'Professional Word report writing and PowerPoint presentation preparation.',
      p7_feat1: 'Formatted Word report',
      p7_feat2: 'Ready presentation slides',
    }
  };

  // ============ PACKAGES DATA ============
  const packages = [
    {
      id: 'quick-task',
      nameKey: 'p1_name',
      descKey: 'p1_desc',
      featuresKeys: ['p1_feat1', 'p1_feat2'],
      price: '60',
      currency: 'ريال',
      priceEn: '$25',
      noteKey: 'note'
    },
    {
      id: 'report-fix',
      nameKey: 'p2_name',
      descKey: 'p2_desc',
      featuresKeys: ['p2_feat1', 'p2_feat2'],
      price: '120',
      currency: 'ريال',
      priceEn: '$40',
      noteKey: 'note'
    },
    {
      id: 'slides-pro',
      nameKey: 'p3_name',
      descKey: 'p3_desc',
      featuresKeys: ['p3_feat1', 'p3_feat2'],
      price: '200',
      currency: 'ريال',
      priceEn: '$55',
      noteKey: 'note'
    },
    {
      id: 'email-blast',
      nameKey: 'p4_name',
      descKey: 'p4_desc',
      featuresKeys: ['p4_feat1', 'p4_feat2'],
      price: '300',
      currency: 'ريال',
      priceEn: '$80',
      noteKey: 'note'
    },
    {
      id: 'portfolio',
      nameKey: 'p5_name',
      descKey: 'p5_desc',
      featuresKeys: ['p5_feat1', 'p5_feat2', 'p5_feat3'],
      price: '600',
      currency: 'ريال',
      priceEn: '$160',
      noteKey: 'note',
      featured: true
    },
    {
      id: 'graduation',
      nameKey: 'p6_name',
      descKey: 'p6_desc',
      featuresKeys: ['p6_feat1', 'p6_feat2', 'p6_feat3', 'p6_feat4', 'p6_feat5'],
      price: '2,000',
      currency: 'ريال',
      priceEn: '$530',
      noteKey: 'note',
      featured: true
    },
    {
      id: 'report-presentation',
      nameKey: 'p7_name',
      descKey: 'p7_desc',
      featuresKeys: ['p7_feat1', 'p7_feat2'],
      price: '450',
      currency: 'ريال',
      priceEn: '$120',
      noteKey: 'note'
    }
  ];

  // WhatsApp number
  const whatsappNumber = '966581540724';
  
  function getWhatsAppLink(packageName = '') {
    const baseMsg = packageName 
      ? `مرحباً Obsidian Lab، أنا مهتم بباقة ${packageName}` 
      : 'مرحباً Obsidian Lab، أريد الاستفسار عن خدماتكم';
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(baseMsg)}`;
  }

  // ============ RENDER PACKAGES ============
  function renderPackages() {
    const grid = document.getElementById('packagesGrid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    packages.forEach(pkg => {
      const card = document.createElement('div');
      card.className = 'card' + (pkg.featured ? ' featured' : '');
      
      const name = translations[currentLang][pkg.nameKey] || pkg.nameKey;
      const desc = translations[currentLang][pkg.descKey] || pkg.descKey;
      const note = translations[currentLang][pkg.noteKey] || '';
      
      let featuresHTML = '';
      pkg.featuresKeys.forEach(key => {
        const featureText = translations[currentLang][key] || key;
        featuresHTML += `<li>${featureText}</li>`;
      });
      
      const priceDisplay = currentLang === 'ar' 
        ? `${pkg.price} ${pkg.currency}`
        : pkg.priceEn;
      
      card.innerHTML = `
        <div class="package-name">${name}</div>
        <div class="package-desc">${desc}</div>
        <ul class="package-features">${featuresHTML}</ul>
        <div class="price-section">
          <div class="price-start">${currentLang === 'ar' ? 'يبدأ من' : 'Starting from'}</div>
          <div class="price">${priceDisplay}</div>
          <div class="price-note">${note}</div>
        </div>
        <a href="${getWhatsAppLink(name)}" target="_blank" rel="noopener noreferrer" class="card-btn">
          ${translations[currentLang].orderNow}
        </a>
      `;
      grid.appendChild(card);
    });
  }

  // ============ UPDATE UI LANGUAGE ============
  function updateUILanguage() {
    document.querySelectorAll('[data-lang-ar]').forEach(el => {
      const text = currentLang === 'ar' ? el.getAttribute('data-lang-ar') : el.getAttribute('data-lang-en');
      if (text) el.textContent = text;
    });
    
    document.querySelector('h1').textContent = translations[currentLang].heroTitle;
    document.querySelector('.hero-sub').textContent = translations[currentLang].heroSub;
    document.querySelector('.section-title span:last-child').textContent = translations[currentLang].sectionTitle;
    document.querySelector('.brand-line span').textContent = translations[currentLang].footerBrand;
    
    renderPackages();
  }

  // ============ LANGUAGE SWITCHER ============
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const lang = this.getAttribute('data-lang');
      if (lang === currentLang) return;
      
      currentLang = lang;
      
      document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      
      document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
      document.documentElement.setAttribute('lang', lang);
      
      updateUILanguage();
    });
  });

  // ============ SET WHATSAPP LINKS ============
  function setWhatsAppLinks() {
    const heroBtn = document.getElementById('heroWhatsAppBtn');
    const footerBtn = document.getElementById('footerWhatsAppBtn');
    
    if (heroBtn) {
      heroBtn.setAttribute('href', getWhatsAppLink(''));
      heroBtn.setAttribute('target', '_blank');
      heroBtn.setAttribute('rel', 'noopener noreferrer');
    }
    
    if (footerBtn) {
      footerBtn.setAttribute('href', getWhatsAppLink(''));
      footerBtn.setAttribute('target', '_blank');
      footerBtn.setAttribute('rel', 'noopener noreferrer');
    }
  }

  // ============ INIT ============
  function init() {
    setWhatsAppLinks();
    renderPackages();
  }

  init();
})();
