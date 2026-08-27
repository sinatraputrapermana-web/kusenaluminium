/**
 * KUSEN ALUMINIUM - Main JavaScript Logic
 * Stack: Vanilla JS + Bootstrap 5.3 Native APIs + Lightbox Zoom + Floating Back to Top Button
 */

document.addEventListener('DOMContentLoaded', () => {
  console.log('KUSEN ALUMINIUM JavaScript Initialized');

  // Initialize Scroll Reveal Animations
  initScrollReveal();

  // Initialize WhatsApp Estimator Form Handler
  initEstimatorForm();

  // Initialize Product Catalog Filter
  initProductFilter();

  // Highlight Active Nav Link
  highlightActiveNav();

  // Initialize Gallery Lightbox Zoom Modal
  initLightboxModal();

  // Initialize Transparent to Solid Scroll Navbar
  initNavbarScroll();

  // Initialize Testimonial Automatic Swiper Carousel
  initTestimonialSwiper();

  // Initialize Floating Back to Top Button
  initBackToTop();

  // Initialize Article FAQ Mini Accordion
  initArticleFAQ();

  // Initialize Article Share Buttons
  initShareButtons();
});

/**
 * Floating Back to Top Button Handler
 */
function initBackToTop() {
  if (!document.getElementById('btnBackToTop')) {
    const btnHTML = `
    <button id="btnBackToTop" class="btn-back-to-top" aria-label="Kembali ke Atas" title="Kembali ke Atas">
      <i class="bi bi-arrow-up"></i>
    </button>`;
    document.body.insertAdjacentHTML('beforeend', btnHTML);
  }

  const backBtn = document.getElementById('btnBackToTop');
  if (!backBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 250) {
      backBtn.classList.add('show');
    } else {
      backBtn.classList.remove('show');
    }
  });

  backBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/**
 * Scroll Reveal Animations via Intersection Observer
 */
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal-on-scroll, .reveal-left, .reveal-right');
  if (!revealElements.length) return;

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -40px 0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target); // Trigger once
      }
    });
  }, observerOptions);

  revealElements.forEach(el => observer.observe(el));
}

/**
 * Gallery Image Lightbox Zoom Modal Handler
 */
function initLightboxModal() {
  if (!document.getElementById('imageLightboxModal')) {
    const modalHTML = `
    <div class="modal fade" id="imageLightboxModal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content bg-transparent border-0">
          <div class="modal-body text-center p-0 position-relative">
            <button type="button" class="btn-close btn-close-white position-absolute top-0 end-0 m-3 z-3" data-bs-dismiss="modal" aria-label="Tutup"></button>
            <img id="lightboxModalImg" src="" alt="Gambar Perbesar" class="img-fluid rounded-4 shadow-lg" style="max-height: 85vh; object-fit: contain;">
            <div id="lightboxModalCaption" class="mt-3 text-white fw-bold fs-5"></div>
          </div>
        </div>
      </div>
    </div>`;
    document.body.insertAdjacentHTML('beforeend', modalHTML);
  }

  const lightboxModalElement = document.getElementById('imageLightboxModal');
  if (!lightboxModalElement) return;

  const bsModal = new bootstrap.Modal(lightboxModalElement);
  const modalImg = document.getElementById('lightboxModalImg');
  const modalCaption = document.getElementById('lightboxModalCaption');

  const clickableImages = document.querySelectorAll('.product-img-wrapper, .portfolio-item');

  clickableImages.forEach(wrapper => {
    wrapper.style.cursor = 'pointer';
    wrapper.addEventListener('click', (e) => {
      if (e.target.closest('a.btn')) return;

      const img = wrapper.querySelector('img');
      const titleEl = wrapper.closest('.product-card')?.querySelector('.product-title') || 
                      wrapper.querySelector('.portfolio-overlay-title');

      if (img) {
        modalImg.src = img.src;
        modalImg.alt = img.alt || 'Gambar Kusen Aluminium';
        modalCaption.textContent = titleEl ? titleEl.textContent : (img.alt || '');
        bsModal.show();
      }
    });
  });
}

/**
 * WhatsApp Estimator Form Handler
 */
function initEstimatorForm() {
  const estimatorForm = document.getElementById('waEstimatorForm');
  if (!estimatorForm) return;

  estimatorForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const productType = document.getElementById('estProductType')?.value || 'Kusen Aluminium';
    const brand = document.getElementById('estBrand')?.value || 'Alexindo';
    const profileSize = document.getElementById('estProfileSize')?.value || '3 Inch';
    const color = document.getElementById('estColor')?.value || 'Hitam Anodized';
    const length = parseFloat(document.getElementById('estLength')?.value) || 0;
    const height = parseFloat(document.getElementById('estHeight')?.value) || 0;
    const notes = document.getElementById('estNotes')?.value || '-';

    if (length <= 0 || height <= 0) {
      alert('Mohon masukkan ukuran panjang dan tinggi yang valid (lebih dari 0).');
      return;
    }

    const totalMeterLari = (length + height) * 2;
    let baseRate = 140000;

    if (brand.includes('YKK')) baseRate = 220000;
    else if (brand.includes('Forta')) baseRate = 125000;
    
    if (profileSize.includes('4')) baseRate += 35000;

    const estimatedCost = totalMeterLari * baseRate;
    const formattedCost = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(estimatedCost);

    const phoneNo = '6288989643555'; 
    const message = `Halo KUSEN ALUMINIUM Malang, saya ingin berkonsultasi & meminta penawaran harga resmi:

📌 *Detail Pesanan Estimasi:*
• Jenis Produk: ${productType}
• Merek Profil: ${brand}
• Ukuran Profil: ${profileSize}
• Pilihan Warna: ${color}
• Dimensi: ${length} m (Panjang) x ${height} m (Tinggi)
• Total Meter Lari: ${totalMeterLari.toFixed(2)} m1
💡 *Estimasi Perkiraan Biaya:* ~ ${formattedCost} (Belum termasuk aksesoris/kaca khusus)
📝 *Catatan Tambahan:* ${notes}

Mohon dapat dihubungi kembali untuk jadwal survei lokasi & penawaran resmi. Terima kasih!`;

    const encodedMessage = encodeURIComponent(message);
    const waURL = `https://wa.me/${phoneNo}?text=${encodedMessage}`;

    window.open(waURL, '_blank');
  });
}

/**
 * Product Filter Switching via Data Attributes
 */
function initProductFilter() {
  const filterPills = document.querySelectorAll('#productFilterPills .nav-link, #galleryCategoryTabs .nav-link');
  const productCards = document.querySelectorAll('.product-item-col, .gallery-card-col');

  if (!filterPills.length || !productCards.length) return;

  filterPills.forEach(pill => {
    pill.addEventListener('click', (e) => {
      e.preventDefault();

      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      const targetCategory = pill.getAttribute('data-filter');

      productCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');

        if (targetCategory === 'all' || cardCategory === targetCategory) {
          card.style.display = 'block';
          card.classList.add('animate__fadeIn');
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/**
 * Highlight Current Active Page Nav Item
 */
function highlightActiveNav() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.navbar-alu .nav-link');
  const isArticlePage = currentPath.endsWith('.html') && 
                        !['index.html', 'tentang-kami.html', 'portofolio.html', 'galeri.html', 'blog.html'].includes(currentPath);

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html') || (isArticlePage && href === 'blog.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

/**
 * Helper to Quick Order Item to WhatsApp
 */
function quickWAOrder(productName, specInfo) {
  const phoneNo = '6288989643555';
  const message = `Halo CS KUSEN ALUMINIUM Malang, saya tertarik dengan produk *${productName}* (${specInfo}). Boleh tolong diinfokan estimasi harga dan pilihan spesifikasinya? Terima kasih!`;
  const waURL = `https://wa.me/${phoneNo}?text=${encodeURIComponent(message)}`;
  window.open(waURL, '_blank');
}

/**
 * Transparent Navbar Scroll Handler
 * Switches navbar from transparent over Hero to solid warm cream on scroll
 */
function initNavbarScroll() {
  const navbar = document.querySelector('.navbar-alu');
  if (!navbar) return;

  const handleScroll = () => {
    if (window.scrollY > 40) {
      navbar.classList.add('navbar-scrolled');
    } else {
      navbar.classList.remove('navbar-scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Check initial state
}

/**
 * Initialize Automatic Testimonial Swiper Carousel
 */
function initTestimonialSwiper() {
  if (typeof Swiper !== 'undefined' && document.querySelector('.testimonialSwiper')) {
    new Swiper('.testimonialSwiper', {
      slidesPerView: 1,
      spaceBetween: 24,
      loop: true,
      autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.testimonial-pagination',
        clickable: true,
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 24,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 24,
        }
      }
    });
  }
}

/**
 * Article FAQ Accordion Interactive Toggle
 */
function initArticleFAQ() {
  const faqQuestions = document.querySelectorAll('.faq-mini-question');
  if (!faqQuestions.length) return;

  faqQuestions.forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-mini-item');
      if (!item) return;

      const isActive = item.classList.contains('active');

      // Close all items in the same container for clean accordion behavior
      const parentContainer = item.closest('.article-faq');
      if (parentContainer) {
        parentContainer.querySelectorAll('.faq-mini-item').forEach(i => i.classList.remove('active'));
      }

      // Toggle clicked item
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
}

/**
 * Article Share Buttons Handler
 */
function initShareButtons() {
  const shareBtns = document.querySelectorAll('.share-btn');
  if (!shareBtns.length) return;

  const currentURL = encodeURIComponent(window.location.href);
  const currentTitle = encodeURIComponent(document.title || 'Artikel KUSEN ALUMINIUM Malang');

  shareBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();

      const platform = btn.getAttribute('data-share');
      let shareUrl = '';

      switch (platform) {
        case 'whatsapp':
          shareUrl = `https://wa.me/?text=${currentTitle}%20${currentURL}`;
          break;
        case 'facebook':
          shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${currentURL}`;
          break;
        case 'twitter':
          shareUrl = `https://twitter.com/intent/tweet?text=${currentTitle}&url=${currentURL}`;
          break;
        case 'linkedin':
          shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${currentURL}`;
          break;
        default:
          if (navigator.share) {
            navigator.share({
              title: document.title,
              url: window.location.href
            }).catch(() => {});
            return;
          }
          break;
      }

      if (shareUrl) {
        window.open(shareUrl, '_blank', 'width=600,height=500');
      }
    });
  });
}
