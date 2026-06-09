document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-item');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking a link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // 2. Active Page Highlighting
    const currentPath = window.location.pathname;
    const pageName = currentPath.substring(currentPath.lastIndexOf('/') + 1);
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === pageName || (pageName === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // 3. Testimonial Carousel (Home Page)
    const slides = document.querySelectorAll('.review-slide');
    const prevBtn = document.getElementById('review-prev');
    const nextBtn = document.getElementById('review-next');
    
    if (slides.length > 0) {
        let currentSlide = 0;
        let slideInterval;

        const showSlide = (index) => {
            slides.forEach((slide, i) => {
                slide.classList.remove('active', 'prev');
                if (i === index) {
                    slide.classList.add('active');
                } else if (i === (index - 1 + slides.length) % slides.length) {
                    slide.classList.add('prev');
                }
            });
        };

        const nextSlide = () => {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        };

        const prevSlide = () => {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(currentSlide);
        };

        // Auto-rotation
        const startSlideShow = () => {
            slideInterval = setInterval(nextSlide, 6000);
        };

        const resetSlideShow = () => {
            clearInterval(slideInterval);
            startSlideShow();
        };

        if (nextBtn && prevBtn) {
            nextBtn.addEventListener('click', () => {
                nextSlide();
                resetSlideShow();
            });

            prevBtn.addEventListener('click', () => {
                prevSlide();
                resetSlideShow();
            });
        }

        // Initialize slideshow
        showSlide(currentSlide);
        startSlideShow();
    }

    // 4. Dynamic Confections Manager (Catalog & Admin Panel)
    const productsGrid = document.getElementById('products-grid');
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    // Default catalog list (cocoa-focused, no honey references)
    const defaultConfections = [
        {
            id: 'confect-1',
            name: 'Signature Dark Truffles',
            category: 'chocolates',
            price: '749',
            tag: 'Signature',
            img: 'https://images.unsplash.com/photo-1548907040-4d42b52125ca?q=80&w=600&auto=format&fit=crop',
            desc: 'Decadent 72% dark chocolate shell filled with a silky, velvet ganache made from single-origin Madagascar cacao and dusted with edible gold dust.'
        },
        {
            id: 'confect-2',
            name: 'Sea-Salt Dark Cookies',
            category: 'cookies',
            price: '499',
            tag: 'Freshly Baked',
            img: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=600&auto=format&fit=crop',
            desc: 'Soft-baked butter cookies packed with rich dark chocolate chips and finished with a pinch of premium Maldon sea salt.'
        },
        {
            id: 'confect-3',
            name: 'Ocean Assorted Gift Box',
            category: 'hampers',
            price: '1899',
            tag: 'Luxury Set',
            img: 'https://images.unsplash.com/photo-1549417229-aa67d3263c09?q=80&w=600&auto=format&fit=crop',
            desc: 'A premium gold-embossed chest containing an exquisite assortment of 12 signature dark truffles, 6 sea-salt cookies, and a custom dark chocolate slab.'
        },
        {
            id: 'confect-4',
            name: 'Royal Dark Chocolate Bar',
            category: 'chocolates',
            price: '399',
            tag: 'Artisanal',
            img: 'https://images.unsplash.com/photo-1548907040-4d42b52125ca?q=80&w=600&auto=format&fit=crop',
            desc: 'Solid 80% dark chocolate bar embedded with slow-roasted almond slivers and sweet orange peel. Rich texture and high aromatic depth.'
        },
        {
            id: 'confect-5',
            name: 'Double Chocolate Cookies',
            category: 'cookies',
            price: '549',
            tag: 'Best Seller',
            img: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=600&auto=format&fit=crop',
            desc: 'Baked double chocolate cookie base loaded with premium white and dark chocolate chunks, enriched with real Dutch-processed cocoa.'
        },
        {
            id: 'confect-6',
            name: 'Ocean Festive Hamper',
            category: 'hampers',
            price: '2499',
            tag: 'Festive Special',
            img: 'https://images.unsplash.com/photo-1549417229-aa67d3263c09?q=80&w=600&auto=format&fit=crop',
            desc: 'Celebrate with a hand-woven luxury basket complete with artisanal chocolate spreads, butter cookies, dark chocolate bars, and signature truffles.'
        }
    ];

    const defaultBrandSettings = {
        title: 'NTR Honey Ocean',
        subtitle: 'Chocolates and Cookies',
        logo: './images/logo.jpg',
        bio: "Bangalore's premium chocolate boutique blending rich dark single-origin cocoa with artisanal craftsmanship. Handcrafted with passion, delivered fresh.",
        heroTitle: 'Where <span>Pure Craftsmanship</span> Meets Rich Dark Cocoa',
        heroDesc: 'Indulge in our collection of luxury confections, handcrafted in Bangalore with single-origin cacao, rich cocoa butter, and passion. Order via WhatsApp for fresh doorstep delivery.',
        heroImg: 'https://images.unsplash.com/photo-1511381939415-e44015466834?q=80&w=1200&auto=format&fit=crop',
        aboutSubtitle: 'Our Origins',
        aboutTitle: 'The Cocoa Craft Philosophy',
        aboutPara1: 'NTR Honey Ocean Chocolates and Cookies was founded on a simple, yet revolutionary premise: that indulgence should be pure, natural, and absolute. Inspired by the rich, complex flavors of single-origin cocoa beans, our chocolatiers set out to create a line of confections that showcase the depth of real dark chocolate.',
        aboutPara2: 'We believe that mass-produced chocolates mask the intricate, natural notes of cocoa. By roasting premium beans in-house and manually tempering our chocolate, we unlock a completely unique, velvety flavor profile that lingers beautifully on the palate.',
        aboutPara3: 'Located in the heart of Bangalore, we pride ourselves on being a boutique confectioner. Each batch of chocolates and gourmet cookies is individually formulated and decorated to ensure that our brand remains synonymous with absolute luxury.',
        aboutImg: 'https://images.unsplash.com/photo-1587132137056-bfbf0166836e?q=80&w=600&auto=format&fit=crop'
    };

    const defaultBrandContacts = [
        {
            id: 'c-whatsapp',
            type: 'contact',
            label: 'WhatsApp Orders',
            value: '+91 8310503775',
            icon: 'fa-brands fa-whatsapp'
        },
        {
            id: 'c-email',
            type: 'contact',
            label: 'Email Address',
            value: 'mnavyashreegnnavya@gmail.com',
            icon: 'fa-solid fa-envelope'
        },
        {
            id: 'c-address',
            type: 'contact',
            label: 'Boutique Address',
            value: 'No.38, 4th cross, Priyadarshini Layout, Chikka Devasandhra, Near Topmart, KR PURA, BANGALORE 560036.',
            icon: 'fa-solid fa-location-dot'
        },
        {
            id: 'c-hours',
            type: 'contact',
            label: 'Operating Hours',
            value: 'Monday - Saturday: 10:00 AM - 8:00 PM\nSunday: 11:00 AM - 5:00 PM',
            icon: 'fa-solid fa-clock'
        },
        {
            id: 's-instagram',
            type: 'social',
            label: 'Instagram',
            value: 'https://instagram.com',
            icon: 'fa-brands fa-instagram'
        },
        {
            id: 's-facebook',
            type: 'social',
            label: 'Facebook',
            value: 'https://facebook.com',
            icon: 'fa-brands fa-facebook-f'
        },
        {
            id: 's-twitter',
            type: 'social',
            label: 'Twitter',
            value: 'https://twitter.com',
            icon: 'fa-brands fa-x-twitter'
        },
        {
            id: 's-linkedin',
            type: 'social',
            label: 'LinkedIn',
            value: 'https://linkedin.com',
            icon: 'fa-brands fa-linkedin-in'
        }
    ];

    const defaultGalleryItems = [
        {
            id: 'gallery-1',
            title: 'Grand Royal Chocolate Bar',
            img: './images/bar-large.svg',
            alt: 'Grand Royal Dark Chocolate Bar wrapped in Textured Gold Foil'
        },
        {
            id: 'gallery-2',
            title: 'Medium Chocolate Bar (Single Bite)',
            img: './images/bar-medium-bite.svg',
            alt: 'Medium Dark Chocolate Bar with a Single Bite chunk'
        },
        {
            id: 'gallery-3',
            title: 'Royal Chocolate Chip Cookie',
            img: './images/cookie-royal.svg',
            alt: 'Luxury Butter Cookie with Dark Chocolate Chunks and Gold Dust'
        },
        {
            id: 'gallery-4',
            title: 'Signature Single-Bite Truffle',
            img: './images/truffle-bite.svg',
            alt: 'Signature Chocolate Truffle Bite with Liquid Ganache Lava Glow'
        },
        {
            id: 'gallery-5',
            title: 'Royal Chocolate Bar Assortment',
            img: './images/bar-assortment.svg',
            alt: 'Assortment of Dark and Milk Chocolate Bars of different sizes'
        },
        {
            id: 'gallery-6',
            title: 'Luxury Sea-Salt Cookie',
            img: './images/cookie-sparkling.svg',
            alt: 'Fresh Baked Dark Cookie with White Sea Salt Flakes and Gold Sparkles'
        }
    ];

    let currentFilter = 'all';
    let loadedImageBase64 = '';
    let loadedLogoBase64 = '';
    let loadedHeroBase64 = '';
    let loadedAboutBase64 = '';
    let loadedGalleryImageBase64 = '';

    // Database LocalStorage Getters/Setters
    const getGallery = () => {
        const localData = localStorage.getItem('ntr_gallery_catalog');
        if (localData) {
            return JSON.parse(localData);
        } else {
            localStorage.setItem('ntr_gallery_catalog', JSON.stringify(defaultGalleryItems));
            return defaultGalleryItems;
        }
    };

    const saveGallery = (gallery) => {
        localStorage.setItem('ntr_gallery_catalog', JSON.stringify(gallery));
    };
    const getCatalog = () => {
        const localData = localStorage.getItem('ntr_confections_catalog');
        if (localData) {
            return JSON.parse(localData);
        } else {
            localStorage.setItem('ntr_confections_catalog', JSON.stringify(defaultConfections));
            return defaultConfections;
        }
    };

    const saveCatalog = (catalog) => {
        localStorage.setItem('ntr_confections_catalog', JSON.stringify(catalog));
    };

    const getBrandSettings = () => {
        const localData = localStorage.getItem('ntr_brand_settings');
        if (localData) {
            return JSON.parse(localData);
        } else {
            localStorage.setItem('ntr_brand_settings', JSON.stringify(defaultBrandSettings));
            return defaultBrandSettings;
        }
    };

    const saveBrandSettings = (settings) => {
        localStorage.setItem('ntr_brand_settings', JSON.stringify(settings));
    };

    const migrateOldContacts = (oldObj) => {
        const migrated = [
            {
                id: 'c-whatsapp',
                type: 'contact',
                label: 'WhatsApp Orders',
                value: oldObj.whatsapp || '+91 8310503775',
                icon: 'fa-brands fa-whatsapp'
            },
            {
                id: 'c-email',
                type: 'contact',
                label: 'Email Address',
                value: oldObj.email || 'mnavyashreegnnavya@gmail.com',
                icon: 'fa-solid fa-envelope'
            },
            {
                id: 'c-address',
                type: 'contact',
                label: 'Boutique Address',
                value: oldObj.address || 'No.38, 4th cross, Priyadarshini Layout, Chikka Devasandhra, Near Topmart, KR PURA, BANGALORE 560036.',
                icon: 'fa-solid fa-location-dot'
            },
            {
                id: 'c-hours',
                type: 'contact',
                label: 'Operating Hours',
                value: oldObj.hours || 'Monday - Saturday: 10:00 AM - 8:00 PM\nSunday: 11:00 AM - 5:00 PM',
                icon: 'fa-solid fa-clock'
            },
            {
                id: 's-instagram',
                type: 'social',
                label: 'Instagram',
                value: oldObj.instagram || 'https://instagram.com',
                icon: 'fa-brands fa-instagram'
            },
            {
                id: 's-facebook',
                type: 'social',
                label: 'Facebook',
                value: oldObj.facebook || 'https://facebook.com',
                icon: 'fa-brands fa-facebook-f'
            },
            {
                id: 's-twitter',
                type: 'social',
                label: 'Twitter',
                value: oldObj.twitter || 'https://twitter.com',
                icon: 'fa-brands fa-x-twitter'
            },
            {
                id: 's-linkedin',
                type: 'social',
                label: 'LinkedIn',
                value: oldObj.linkedin || 'https://linkedin.com',
                icon: 'fa-brands fa-linkedin-in'
            }
        ];
        localStorage.setItem('ntr_brand_contacts', JSON.stringify(migrated));
        return migrated;
    };

    const getBrandContacts = () => {
        const localData = localStorage.getItem('ntr_brand_contacts');
        if (localData) {
            try {
                const parsed = JSON.parse(localData);
                if (Array.isArray(parsed)) {
                    return parsed;
                }
                return migrateOldContacts(parsed);
            } catch (e) {
                localStorage.setItem('ntr_brand_contacts', JSON.stringify(defaultBrandContacts));
                return defaultBrandContacts;
            }
        } else {
            localStorage.setItem('ntr_brand_contacts', JSON.stringify(defaultBrandContacts));
            return defaultBrandContacts;
        }
    };

    const saveBrandContacts = (contacts) => {
        localStorage.setItem('ntr_brand_contacts', JSON.stringify(contacts));
    };

    function formatPhoneForWa(phone) {
        // Extract the leading phone number segment, ignoring trailing descriptive text or parentheses
        const match = phone.match(/^\+?[0-9\s\-()]+/);
        let numStr = match ? match[0] : phone;
        
        // Remove all non-digit characters
        let clean = numStr.replace(/[^\d]/g, '');
        
        // Strip leading zero if present
        if (clean.startsWith('0')) {
            clean = clean.substring(1);
        }
        
        // Prepend Indian country code (91) if it's a 10-digit number
        if (clean.length === 10) {
            clean = '91' + clean;
        }
        return clean;
    }

    // Dynamic brand applier (updates headers, footers, hours, and maps globally)
    const applyAllSettings = () => {
        const settings = getBrandSettings();
        const contacts = getBrandContacts();
        
        // 1. Logo
        if (settings.logo) {
            document.querySelectorAll('.logo-img').forEach(img => {
                img.src = settings.logo;
            });
        }

        // 2. Brand Titles
        if (settings.title) {
            document.querySelectorAll('.logo-main span').forEach(el => {
                el.textContent = settings.title.toUpperCase();
            });
            
            // Copyright text
            const footerBottomText = document.querySelector('.footer-bottom p');
            if (footerBottomText) {
                const currentYear = new Date().getFullYear();
                footerBottomText.textContent = `© ${currentYear} ${settings.title} ${settings.subtitle || ''}. All Rights Reserved.`;
            }
            
            // Document Title
            const titleParts = document.title.split('|');
            if (titleParts.length > 1) {
                document.title = `${titleParts[0].trim()} | ${settings.title} ${settings.subtitle || ''}`;
            }
        }
        
        if (settings.subtitle) {
            document.querySelectorAll('.logo-sub').forEach(el => {
                el.textContent = settings.subtitle;
            });
        }

        // 3. Footer Bio
        if (settings.bio) {
            const footerBioText = document.querySelector('.footer-brand p');
            if (footerBioText) {
                footerBioText.textContent = settings.bio;
            }
        }

        // 4. Hero details
        const heroSec = document.getElementById('hero');
        if (heroSec) {
            if (settings.heroImg) {
                heroSec.style.backgroundImage = `url('${settings.heroImg}')`;
            }
            const hTitle = document.getElementById('hero-title');
            if (hTitle && settings.heroTitle) {
                hTitle.innerHTML = settings.heroTitle;
            }
            const hDesc = document.getElementById('hero-desc');
            if (hDesc && settings.heroDesc) {
                hDesc.textContent = settings.heroDesc;
            }
        }

        // 5. About Page Story text fields
        const originsSubtitle = document.getElementById('about-origins-subtitle');
        if (originsSubtitle && settings.aboutSubtitle) originsSubtitle.textContent = settings.aboutSubtitle;
        const originsTitle = document.getElementById('about-origins-title');
        if (originsTitle && settings.aboutTitle) originsTitle.textContent = settings.aboutTitle;
        const p1 = document.getElementById('about-para-1');
        if (p1 && settings.aboutPara1) p1.textContent = settings.aboutPara1;
        const p2 = document.getElementById('about-para-2');
        if (p2 && settings.aboutPara2) p2.textContent = settings.aboutPara2;
        const p3 = document.getElementById('about-para-3');
        if (p3 && settings.aboutPara3) p3.textContent = settings.aboutPara3;
        const aboutStoryImg = document.getElementById('about-story-img');
        if (aboutStoryImg && settings.aboutImg) {
            aboutStoryImg.src = settings.aboutImg;
        }

        // 6. Home Page story preview section
        const homeStorySub = document.getElementById('home-story-subtitle');
        if (homeStorySub && settings.aboutSubtitle) homeStorySub.textContent = settings.aboutSubtitle;
        const homeStoryTitle = document.getElementById('home-story-title');
        if (homeStoryTitle && settings.aboutTitle) homeStoryTitle.textContent = settings.aboutTitle;
        const hsp1 = document.getElementById('home-story-para-1');
        if (hsp1 && settings.aboutPara1) hsp1.textContent = settings.aboutPara1;
        const hsp2 = document.getElementById('home-story-para-2');
        if (hsp2 && settings.aboutPara2) hsp2.textContent = settings.aboutPara2;
        const homeStoryImg = document.getElementById('home-story-img');
        if (homeStoryImg && settings.aboutImg) {
            homeStoryImg.src = settings.aboutImg;
        }

        // 7. Render dynamic footers (social links and contact list)
        const socialItems = contacts.filter(c => c.type === 'social');
        document.querySelectorAll('.social-links').forEach(container => {
            container.innerHTML = socialItems.map(item => `
                <a href="${item.value}" target="_blank" class="social-icon" aria-label="${item.label}"><i class="${item.icon}"></i></a>
            `).join('');
        });

        const contactItems = contacts.filter(c => c.type === 'contact');
        document.querySelectorAll('.footer-contact').forEach(container => {
            container.innerHTML = contactItems.map(item => {
                const displayVal = item.value.replace(/\n/g, ', ');
                const isWhatsApp = item.icon.includes('fa-whatsapp') || item.label.toLowerCase().includes('whatsapp');
                const isEmail = item.icon.includes('fa-envelope') || item.label.toLowerCase().includes('email');
                const isAddress = item.icon.includes('fa-location-dot') || item.label.toLowerCase().includes('address');
                const isPhone = item.icon.includes('fa-phone') || item.label.toLowerCase().includes('phone');

                let innerContent = `<span>${displayVal}</span>`;
                if (isWhatsApp) {
                    innerContent = `<a href="https://wa.me/${formatPhoneForWa(displayVal)}" target="_blank" class="contact-link">${displayVal}</a>`;
                } else if (isEmail) {
                    innerContent = `<a href="mailto:${displayVal}" class="contact-link">${displayVal}</a>`;
                } else if (isAddress) {
                    innerContent = `<a href="https://maps.google.com/?q=${encodeURIComponent(displayVal)}" target="_blank" class="contact-link">${displayVal}</a>`;
                } else if (isPhone) {
                    innerContent = `<a href="tel:${displayVal.replace(/[^\d+]/g, '')}" class="contact-link">${displayVal}</a>`;
                }

                return `
                    <li>
                        <i class="${item.icon}"></i>
                        ${innerContent}
                    </li>
                `;
            }).join('');
        });

        // 8. Render Contact Page info list
        const contactInfoList = document.querySelector('.contact-info-list');
        if (contactInfoList) {
            contactInfoList.innerHTML = contactItems.map(item => {
                const isWhatsApp = item.icon.includes('fa-whatsapp') || item.label.toLowerCase().includes('whatsapp');
                const isEmail = item.icon.includes('fa-envelope') || item.label.toLowerCase().includes('email');
                const isAddress = item.icon.includes('fa-location-dot') || item.label.toLowerCase().includes('address');
                const isPhone = item.icon.includes('fa-phone') || item.label.toLowerCase().includes('phone');

                const lines = item.value.split('\n');
                const valueHtml = lines.map(line => {
                    const lineTrimmed = line.trim();
                    if (!lineTrimmed) return '';
                    if (isWhatsApp) {
                        return `<p><a href="https://wa.me/${formatPhoneForWa(lineTrimmed)}" target="_blank" class="contact-link">${lineTrimmed}</a></p>`;
                    } else if (isEmail) {
                        return `<p><a href="mailto:${lineTrimmed}" class="contact-link">${lineTrimmed}</a></p>`;
                    } else if (isAddress) {
                        return `<p><a href="https://maps.google.com/?q=${encodeURIComponent(lineTrimmed)}" target="_blank" class="contact-link">${lineTrimmed}</a></p>`;
                    } else if (isPhone) {
                        return `<p><a href="tel:${lineTrimmed.replace(/[^\d+]/g, '')}" class="contact-link">${lineTrimmed}</a></p>`;
                    }
                    return `<p>${lineTrimmed}</p>`;
                }).join('');
                
                // Add a special sub-label highlight for WhatsApp
                const extraHtml = isWhatsApp ? `<p style="font-size: 0.8rem; color: var(--color-primary-gold); margin-top: 2px;"><i class="fa-solid fa-circle-check"></i> Standard ordering method</p>` : '';
                
                return `
                    <div class="contact-info-item">
                        <div class="contact-info-icon"><i class="${item.icon}"></i></div>
                        <div class="contact-info-text">
                            <h4>${item.label}</h4>
                            ${valueHtml}
                            ${extraHtml}
                        </div>
                    </div>
                `;
            }).join('');
        }

        // 9. Interactive Map Address
        const mapFrame = document.querySelector('.map-iframe');
        if (mapFrame) {
            const addressItem = contacts.find(c => c.icon.includes('fa-location-dot') || c.label.toLowerCase().includes('address'));
            if (addressItem) {
                mapFrame.src = `https://maps.google.com/maps?q=${encodeURIComponent(addressItem.value)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
            }
        }
    };

    // Render Catalog cards on Products page
    const renderCatalog = () => {
        if (!productsGrid) return;
        
        const catalog = getCatalog();
        const contacts = getBrandContacts();
        const waContact = contacts.find(c => c.icon.includes('fa-whatsapp') || c.label.toLowerCase().includes('whatsapp'));
        const waNumber = waContact ? waContact.value : '+91 8310503775';
        productsGrid.innerHTML = '';

        const filteredList = catalog.filter(item => {
            return currentFilter === 'all' || item.category === currentFilter;
        });

        if (filteredList.length === 0) {
            productsGrid.innerHTML = `
                <div style="grid-column: 1/-1; text-align: center; padding: 4rem 2rem; border: 1px dashed var(--color-border-gold);">
                    <i class="fa-solid fa-cookie-bite" style="font-size: 3rem; color: var(--color-primary-gold); margin-bottom: 1rem; display: block;"></i>
                    <p style="color: var(--color-text-dim);">No confections found in this category.</p>
                </div>
            `;
            return;
        }

        filteredList.forEach(item => {
            const card = document.createElement('div');
            card.className = 'product-card';
            card.setAttribute('data-category', item.category);
            
            // Build card contents
            card.innerHTML = `
                <div class="product-image-container">
                    ${item.tag ? `<div class="product-tag">${item.tag}</div>` : ''}
                    <div class="product-admin-actions">
                        <button class="btn-admin-action btn-edit" data-id="${item.id}" title="Edit Confection"><i class="fa-solid fa-pen"></i></button>
                        <button class="btn-admin-action btn-delete" data-id="${item.id}" title="Delete Confection"><i class="fa-solid fa-trash"></i></button>
                    </div>
                    <img src="${item.img}" alt="${item.name}" class="product-card-image" width="300" height="250">
                </div>
                <div class="product-info">
                    <h3 class="product-title">${item.name}</h3>
                    <p class="product-desc">${item.desc}</p>
                    <div class="product-footer">
                        <span class="product-price">₹${item.price}</span>
                        <a href="https://wa.me/${formatPhoneForWa(waNumber)}?text=Hello%20NTR%20Honey%20Ocean!%20I%20would%20like%20to%20order%20the%20${encodeURIComponent(item.name)}." target="_blank" class="btn-order-wa">
                            <i class="fa-brands fa-whatsapp"></i> Order Now
                        </a>
                    </div>
                </div>
            `;
            
            productsGrid.appendChild(card);
        });

        attachAdminCardListeners();
    };

    // Card edit/delete events
    const attachAdminCardListeners = () => {
        const editButtons = document.querySelectorAll('.btn-edit');
        const deleteButtons = document.querySelectorAll('.btn-delete');

        editButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const id = btn.getAttribute('data-id');
                openAdminModal(id, 'tab-confections');
            });
        });

        deleteButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const id = btn.getAttribute('data-id');
                if (confirm('Are you sure you want to delete this confection?')) {
                    deleteConfection(id);
                }
            });
        });
    };

    // Filter toggles
    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
            if (button.id === 'btn-toggle-admin' || button.classList.contains('admin-only-btn')) return;
            
            button.addEventListener('click', () => {
                filterButtons.forEach(btn => {
                    if (btn.id !== 'btn-toggle-admin' && !btn.classList.contains('admin-only-btn')) btn.classList.remove('active');
                });
                button.classList.add('active');
                currentFilter = button.getAttribute('data-filter');
                renderCatalog();
            });
        });
    }

    // Delete confection
    const deleteConfection = (id) => {
        let catalog = getCatalog();
        catalog = catalog.filter(item => item.id !== id);
        saveCatalog(catalog);
        renderCatalog();
    };

    // Injected admin tools structures (Indicators, gear cogs and CMS Modals)
    const injectAdminPortal = () => {
        // 1. Top Indicator Bar
        let adminIndicator = document.getElementById('admin-indicator');
        if (!adminIndicator) {
            adminIndicator = document.createElement('div');
            adminIndicator.className = 'admin-mode-indicator';
            adminIndicator.id = 'admin-indicator';
            adminIndicator.innerHTML = '<i class="fa-solid fa-lock-open"></i> Confections Manager Active';
            document.body.insertBefore(adminIndicator, document.body.firstChild);
        }

        // 2. Floating Admin Gear button
        let floatingGear = document.getElementById('floating-admin-gear');
        if (!floatingGear) {
            floatingGear = document.createElement('button');
            floatingGear.className = 'floating-admin-gear';
            floatingGear.id = 'floating-admin-gear';
            floatingGear.setAttribute('aria-label', 'Open Admin Portal');
            floatingGear.innerHTML = '<i class="fa-solid fa-gears"></i>';
            document.body.appendChild(floatingGear);
            floatingGear.addEventListener('click', () => openAdminModal());
        }

        // 3. Footer admin portal link
        const footerBottom = document.querySelector('.footer-legal-links');
        if (footerBottom && !document.getElementById('footer-admin-link')) {
            const adminLink = document.createElement('a');
            adminLink.href = '#';
            adminLink.id = 'footer-admin-link';
            adminLink.innerHTML = '<i class="fa-solid fa-lock"></i> Admin Portal';
            adminLink.addEventListener('click', (e) => {
                e.preventDefault();
                toggleAdminMode();
            });
            footerBottom.appendChild(adminLink);
        }

        // 4. Modal Dashboard markup
        let adminModal = document.getElementById('admin-modal');
        if (!adminModal) {
            adminModal = document.createElement('div');
            adminModal.id = 'admin-modal';
            adminModal.className = 'admin-modal';
            
            adminModal.innerHTML = `
                <div class="admin-modal-content">
                    <button id="admin-modal-close" class="lightbox-close" aria-label="Close portal">&times;</button>
                    
                    <div class="admin-dashboard-header">
                        <div class="dashboard-logo-wrap">
                            <img id="dashboard-logo-img" src="./images/logo.jpg" alt="Logo" class="logo-img">
                        </div>
                        <div class="dashboard-title-wrap">
                            <h2 id="dashboard-business-title" class="dashboard-brand-name">NTR HONEY OCEAN</h2>
                            <span class="dashboard-tagline">C O N F E C T I O N E R Y   C M S   P O R T A L</span>
                        </div>
                    </div>

                    <div class="admin-tabs">
                        <button class="admin-tab-btn active" data-tab="tab-confections"><i class="fa-solid fa-cookie-bite"></i> Confections</button>
                        <button class="admin-tab-btn" data-tab="tab-identity"><i class="fa-solid fa-id-card"></i> Brand Identity</button>
                        <button class="admin-tab-btn" data-tab="tab-hero-about"><i class="fa-solid fa-book-open"></i> Story & Hero</button>
                        <button class="admin-tab-btn" data-tab="tab-contacts"><i class="fa-solid fa-envelope-open-text"></i> Contacts & Socials</button>
                        <button class="admin-tab-btn" data-tab="tab-gallery"><i class="fa-solid fa-images"></i> Gallery</button>
                    </div>

                    <!-- TAB 1: Confections form -->
                    <div id="tab-confections" class="admin-tab-content active">
                        <h3 class="form-section-title" id="modal-title-text" style="color: var(--color-primary-gold); margin-bottom: 1rem;">Add New Confection</h3>
                        <form id="admin-product-form" novalidate>
                            <input type="hidden" id="admin-prod-id">
                            <div class="form-group">
                                <label for="admin-prod-name" class="form-label">Product Name</label>
                                <input type="text" id="admin-prod-name" class="form-control" placeholder="e.g. Signature Dark Truffles" required>
                                <span class="form-error-msg">Please enter a product name.</span>
                            </div>
                            
                            <div class="form-group-row">
                                <div class="form-group">
                                    <label for="admin-prod-category" class="form-label">Category</label>
                                    <select id="admin-prod-category" class="form-control" style="background-color: var(--color-bg-primary); border-color: var(--color-border-gold); height: auto;" required>
                                        <option value="chocolates">Chocolates</option>
                                        <option value="cookies">Cookies</option>
                                        <option value="hampers">Gift Hampers</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="admin-prod-price" class="form-label">Price (₹)</label>
                                    <input type="number" id="admin-prod-price" class="form-control" placeholder="e.g. 599" required>
                                    <span class="form-error-msg">Please enter a valid price.</span>
                                </div>
                            </div>

                            <div class="form-group">
                                <label for="admin-prod-tag" class="form-label">Product Tag (Optional)</label>
                                <input type="text" id="admin-prod-tag" class="form-control" placeholder="e.g. Signature, Freshly Baked, Best Seller">
                            </div>

                            <div class="form-group">
                                <label class="form-label">Product Image</label>
                                <div class="image-uploader-box" id="image-preview-trigger">
                                    <img id="admin-image-preview" src="" alt="Preview">
                                    <div class="image-uploader-placeholder" id="image-placeholder">
                                        <i class="fa-solid fa-cloud-arrow-up"></i>
                                        <span>Click to upload product image</span>
                                    </div>
                                </div>
                                <input type="file" id="admin-prod-image-file" style="display: none;" accept="image/*">
                                <span class="form-error-msg" id="image-error-msg">Please select an image file.</span>
                            </div>

                            <div class="form-group">
                                <label for="admin-prod-desc" class="form-label">Description</label>
                                <textarea id="admin-prod-desc" class="form-control" style="height: 80px;" placeholder="Describe flavors, cocoa profile, etc." required></textarea>
                                <span class="form-error-msg">Please write a product description.</span>
                            </div>

                            <button type="submit" class="btn-gold" style="width: 100%;">Save Confection</button>
                        </form>
                    </div>

                    <!-- TAB 2: Brand Identity settings -->
                    <div id="tab-identity" class="admin-tab-content">
                        <h3 style="color: var(--color-primary-gold); margin-bottom: 1rem;">Brand Settings</h3>
                        <form id="admin-identity-form" novalidate>
                            <div class="form-group">
                                <label for="admin-brand-title" class="form-label">Business Title</label>
                                <input type="text" id="admin-brand-title" class="form-control" required>
                                <span class="form-error-msg">Please enter the business name.</span>
                            </div>
                            <div class="form-group">
                                <label for="admin-brand-subtitle" class="form-label">Business Subtitle (Tagline)</label>
                                <input type="text" id="admin-brand-subtitle" class="form-control">
                            </div>
                            <div class="form-group">
                                <label class="form-label">Brand Logo Image</label>
                                <div class="image-uploader-box" id="logo-uploader-trigger">
                                    <img id="admin-logo-preview" src="" alt="Logo Preview">
                                    <div class="image-uploader-placeholder" id="logo-uploader-placeholder">
                                        <i class="fa-solid fa-cloud-arrow-up"></i>
                                        <span>Upload New Logo JPG</span>
                                    </div>
                                </div>
                                <input type="file" id="admin-logo-image-file" style="display: none;" accept="image/*">
                            </div>
                            <div class="form-group">
                                <label for="admin-brand-bio" class="form-label">Footer Biography</label>
                                <textarea id="admin-brand-bio" class="form-control" style="height: 80px;" required></textarea>
                            </div>
                            <button type="submit" class="btn-gold" style="width: 100%;">Save Identity Settings</button>
                        </form>
                    </div>

                    <!-- TAB 3: Story & Hero settings -->
                    <div id="tab-hero-about" class="admin-tab-content">
                        <h3 style="color: var(--color-primary-gold); margin-bottom: 1rem;">Homepage Hero & About Story</h3>
                        <form id="admin-story-form" novalidate>
                            <div class="form-group">
                                <label for="admin-hero-title" class="form-label">Homepage Hero Title (HTML allowed)</label>
                                <input type="text" id="admin-hero-title" class="form-control" required>
                            </div>
                            <div class="form-group">
                                <label for="admin-hero-desc" class="form-label">Homepage Hero Description</label>
                                <textarea id="admin-hero-desc" class="form-control" style="height: 60px;" required></textarea>
                            </div>
                            <div class="form-group">
                                <label class="form-label">Homepage Hero Background Image</label>
                                <div class="image-uploader-box" id="hero-uploader-trigger">
                                    <img id="admin-hero-preview" src="" alt="Hero Preview">
                                    <div class="image-uploader-placeholder" id="hero-uploader-placeholder">
                                        <i class="fa-solid fa-cloud-arrow-up"></i>
                                        <span>Upload Hero Background Image</span>
                                    </div>
                                </div>
                                <input type="file" id="admin-hero-image-file" style="display: none;" accept="image/*">
                            </div>
                            
                            <hr style="border-color: var(--color-border-gold); margin: 1.5rem 0;">
                            
                            <div class="form-group">
                                <label for="admin-about-subtitle" class="form-label">About Page Story Subtitle</label>
                                <input type="text" id="admin-about-subtitle" class="form-control" required>
                            </div>
                            <div class="form-group">
                                <label for="admin-about-title" class="form-label">About Page Story Title</label>
                                <input type="text" id="admin-about-title" class="form-control" required>
                            </div>
                            <div class="form-group">
                                <label for="admin-about-para1" class="form-label">About Story Paragraph 1</label>
                                <textarea id="admin-about-para1" class="form-control" style="height: 80px;" required></textarea>
                            </div>
                            <div class="form-group">
                                <label for="admin-about-para2" class="form-label">About Story Paragraph 2</label>
                                <textarea id="admin-about-para2" class="form-control" style="height: 80px;" required></textarea>
                            </div>
                            <div class="form-group">
                                <label for="admin-about-para3" class="form-label">About Story Paragraph 3</label>
                                <textarea id="admin-about-para3" class="form-control" style="height: 80px;" required></textarea>
                            </div>
                            <div class="form-group">
                                <label class="form-label">About Page Story Image</label>
                                <div class="image-uploader-box" id="about-uploader-trigger">
                                    <img id="admin-about-preview" src="" alt="About Preview">
                                    <div class="image-uploader-placeholder" id="about-uploader-placeholder">
                                        <i class="fa-solid fa-cloud-arrow-up"></i>
                                        <span>Upload Story Image</span>
                                    </div>
                                </div>
                                <input type="file" id="admin-about-image-file" style="display: none;" accept="image/*">
                            </div>
                            
                            <button type="submit" class="btn-gold" style="width: 100%;">Save Hero & Story Content</button>
                        </form>
                    </div>

                    <!-- TAB 4: Contacts & Socials settings -->
                    <div id="tab-contacts" class="admin-tab-content">
                        <h3 style="color: var(--color-primary-gold); margin-bottom: 1rem;">Manage Contact Details & Social Links</h3>
                        
                        <!-- Dynamic contacts list -->
                        <div class="contacts-list" id="admin-contacts-list-container">
                            <!-- Populated dynamically by JS -->
                        </div>

                        <!-- Add/Edit form -->
                        <h4 id="admin-contact-form-title" style="color: var(--color-primary-gold); margin-bottom: 1rem;">Add New Detail / Link</h4>
                        <form id="admin-contacts-single-form" novalidate>
                            <input type="hidden" id="admin-contact-id">
                            
                            <div class="form-group-row">
                                <div class="form-group">
                                    <label for="admin-contact-type" class="form-label">Type</label>
                                    <select id="admin-contact-type" class="form-control" style="background-color: var(--color-bg-primary); border-color: var(--color-border-gold); height: auto;" required>
                                        <option value="contact">Contact Detail</option>
                                        <option value="social">Social Link</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="admin-contact-label" class="form-label">Label Name</label>
                                    <input type="text" id="admin-contact-label" class="form-control" placeholder="e.g. WhatsApp Orders, Instagram, Email" required>
                                    <span class="form-error-msg">Please enter a label.</span>
                                </div>
                            </div>

                            <div class="form-group">
                                <label for="admin-contact-value" class="form-label">Detail Value / Link URL</label>
                                <textarea id="admin-contact-value" class="form-control" style="height: 60px;" placeholder="e.g. +91 8310503775, https://instagram.com/profile, or operating hours" required></textarea>
                                <span class="form-error-msg">Please enter the contact value or link.</span>
                            </div>

                            <div class="form-group">
                                <label for="admin-contact-icon" class="form-label">FontAwesome Icon Class</label>
                                <input type="text" id="admin-contact-icon" class="form-control" placeholder="e.g. fa-brands fa-whatsapp, fa-solid fa-envelope" required>
                                <span class="form-error-msg">Please enter an icon class.</span>
                                <div class="contact-suggestions" id="contact-icon-suggestions">
                                    <span class="suggestion-badge" data-class="fa-brands fa-whatsapp"><i class="fa-brands fa-whatsapp"></i> WhatsApp</span>
                                    <span class="suggestion-badge" data-class="fa-solid fa-envelope"><i class="fa-solid fa-envelope"></i> Email</span>
                                    <span class="suggestion-badge" data-class="fa-solid fa-location-dot"><i class="fa-solid fa-location-dot"></i> Location</span>
                                    <span class="suggestion-badge" data-class="fa-solid fa-clock"><i class="fa-solid fa-clock"></i> Clock</span>
                                    <span class="suggestion-badge" data-class="fa-solid fa-phone"><i class="fa-solid fa-phone"></i> Phone</span>
                                    <span class="suggestion-badge" data-class="fa-brands fa-instagram"><i class="fa-brands fa-instagram"></i> Instagram</span>
                                    <span class="suggestion-badge" data-class="fa-brands fa-facebook-f"><i class="fa-brands fa-facebook-f"></i> Facebook</span>
                                    <span class="suggestion-badge" data-class="fa-brands fa-x-twitter"><i class="fa-brands fa-x-twitter"></i> Twitter</span>
                                    <span class="suggestion-badge" data-class="fa-brands fa-linkedin-in"><i class="fa-brands fa-linkedin-in"></i> LinkedIn</span>
                                    <span class="suggestion-badge" data-class="fa-brands fa-youtube"><i class="fa-brands fa-youtube"></i> YouTube</span>
                                    <span class="suggestion-badge" data-class="fa-solid fa-globe"><i class="fa-solid fa-globe"></i> Website</span>
                                </div>
                            </div>

                            <div style="display: flex; gap: 0.5rem; margin-top: 1rem;">
                                <button type="submit" id="btn-save-contact" class="btn-gold" style="flex: 1;">Save Detail</button>
                                <button type="button" id="btn-cancel-contact-edit" class="btn-gold" style="background: transparent; border: 1px solid var(--color-border-gold); display: none; width: auto;">Cancel</button>
                            </div>
                        </form>
                    </div>

                    <!-- TAB 5: Gallery tab -->
                    <div id="tab-gallery" class="admin-tab-content">
                        <h3 class="form-section-title" id="gallery-modal-title-text" style="color: var(--color-primary-gold); margin-bottom: 1rem;">Add New Gallery Item</h3>
                        <form id="admin-gallery-form" novalidate>
                            <input type="hidden" id="admin-gal-id">
                            <div class="form-group">
                                <label for="admin-gal-title" class="form-label">Item Title</label>
                                <input type="text" id="admin-gal-title" class="form-control" placeholder="e.g. Grand Royal Chocolate Bar" required>
                                <span class="form-error-msg">Please enter an item title.</span>
                            </div>
                            
                            <div class="form-group">
                                <label class="form-label">Gallery Image</label>
                                <div class="image-uploader-box" id="gal-image-preview-trigger">
                                    <img id="admin-gal-image-preview" src="" alt="Preview">
                                    <div class="image-uploader-placeholder" id="gal-image-placeholder">
                                        <i class="fa-solid fa-cloud-arrow-up"></i>
                                        <span>Click to upload gallery image</span>
                                    </div>
                                </div>
                                <input type="file" id="admin-gal-image-file" style="display: none;" accept="image/*">
                                <span class="form-error-msg" id="gal-image-error-msg">Please select an image file.</span>
                            </div>

                            <button type="submit" class="btn-gold" style="width: 100%;">Save Gallery Item</button>
                        </form>
                        
                        <hr style="border-color: var(--color-border-gold); margin: 1.5rem 0;">
                        
                        <h4 style="color: var(--color-primary-gold); margin-bottom: 1rem;">Manage Existing Gallery Items</h4>
                        <div class="contacts-list" id="admin-gallery-list-container">
                            <!-- Populated dynamically by JS -->
                        </div>
                    </div>
                </div>
            `;
            document.body.appendChild(adminModal);
            
            // Tab switching events
            const tabBtns = adminModal.querySelectorAll('.admin-tab-btn');
            tabBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    tabBtns.forEach(b => b.classList.remove('active'));
                    adminModal.querySelectorAll('.admin-tab-content').forEach(c => c.classList.remove('active'));
                    
                    btn.classList.add('active');
                    const targetTab = btn.getAttribute('data-tab');
                    document.getElementById(targetTab).classList.add('active');
                });
            });

            // Close modal events
            document.getElementById('admin-modal-close').addEventListener('click', closeAdminModal);
            adminModal.addEventListener('click', (e) => {
                if (e.target === adminModal) closeAdminModal();
            });
            
            setupDynamicFileUploaders();
            wireFormSubmitListeners();
        }
    };

    // Populate and open CMS admin modal
    const openAdminModal = (itemId = '', targetTab = 'tab-confections') => {
        injectAdminPortal();
        
        const adminModal = document.getElementById('admin-modal');
        const settings = getBrandSettings();
        const contacts = getBrandContacts();
        
        // Switch tab
        const tabBtns = adminModal.querySelectorAll('.admin-tab-btn');
        tabBtns.forEach(btn => {
            if (btn.getAttribute('data-tab') === targetTab) {
                btn.click();
            }
        });
        
        // Tab 1: Confections
        const adminProductForm = document.getElementById('admin-product-form');
        const modalTitleText = document.getElementById('modal-title-text');
        const adminImagePreview = document.getElementById('admin-image-preview');
        const imagePlaceholder = document.getElementById('image-placeholder');
        
        adminProductForm.reset();
        loadedImageBase64 = '';
        adminImagePreview.style.display = 'none';
        imagePlaceholder.style.display = 'flex';
        
        if (itemId && targetTab === 'tab-confections') {
            modalTitleText.textContent = 'Edit Confection';
            const catalog = getCatalog();
            const item = catalog.find(p => p.id === itemId);
            if (item) {
                document.getElementById('admin-prod-id').value = item.id;
                document.getElementById('admin-prod-name').value = item.name;
                document.getElementById('admin-prod-category').value = item.category;
                document.getElementById('admin-prod-price').value = item.price;
                document.getElementById('admin-prod-tag').value = item.tag || '';
                document.getElementById('admin-prod-desc').value = item.desc;
                if (item.img) {
                    adminImagePreview.src = item.img;
                    adminImagePreview.style.display = 'block';
                    imagePlaceholder.style.display = 'none';
                    loadedImageBase64 = item.img;
                }
            }
        } else {
            modalTitleText.textContent = 'Add New Confection';
            document.getElementById('admin-prod-id').value = '';
        }

        // Tab 2: Identity
        document.getElementById('admin-brand-title').value = settings.title;
        document.getElementById('admin-brand-subtitle').value = settings.subtitle || '';
        document.getElementById('admin-brand-bio').value = settings.bio;
        
        const adminLogoPreview = document.getElementById('admin-logo-preview');
        const logoPlaceholder = document.getElementById('logo-uploader-placeholder');
        if (settings.logo) {
            adminLogoPreview.src = settings.logo;
            adminLogoPreview.style.display = 'block';
            logoPlaceholder.style.display = 'none';
            loadedLogoBase64 = settings.logo;
        } else {
            adminLogoPreview.style.display = 'none';
            logoPlaceholder.style.display = 'flex';
            loadedLogoBase64 = '';
        }

        // Tab 3: Story & Hero
        document.getElementById('admin-hero-title').value = settings.heroTitle;
        document.getElementById('admin-hero-desc').value = settings.heroDesc;
        document.getElementById('admin-about-subtitle').value = settings.aboutSubtitle;
        document.getElementById('admin-about-title').value = settings.aboutTitle;
        document.getElementById('admin-about-para1').value = settings.aboutPara1;
        document.getElementById('admin-about-para2').value = settings.aboutPara2;
        document.getElementById('admin-about-para3').value = settings.aboutPara3;
        
        const adminHeroPreview = document.getElementById('admin-hero-preview');
        const heroPlaceholder = document.getElementById('hero-uploader-placeholder');
        if (settings.heroImg) {
            adminHeroPreview.src = settings.heroImg;
            adminHeroPreview.style.display = 'block';
            heroPlaceholder.style.display = 'none';
            loadedHeroBase64 = settings.heroImg;
        } else {
            adminHeroPreview.style.display = 'none';
            heroPlaceholder.style.display = 'flex';
            loadedHeroBase64 = '';
        }

        const adminAboutPreview = document.getElementById('admin-about-preview');
        const aboutPlaceholder = document.getElementById('about-uploader-placeholder');
        if (settings.aboutImg) {
            adminAboutPreview.src = settings.aboutImg;
            adminAboutPreview.style.display = 'block';
            aboutPlaceholder.style.display = 'none';
            loadedAboutBase64 = settings.aboutImg;
        } else {
            adminAboutPreview.style.display = 'none';
            aboutPlaceholder.style.display = 'flex';
            loadedAboutBase64 = '';
        }

        // Tab 4: Contacts & Socials
        renderAdminContactsList();
        resetContactForm();

        // Tab 5: Gallery
        renderAdminGalleryList();
        resetGalleryForm();
        if (itemId && targetTab === 'tab-gallery') {
            editGalleryItem(itemId);
        }

        // Display modal
        adminModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        
        // Shimmering header brand details
        document.getElementById('dashboard-business-title').textContent = settings.title.toUpperCase();
        if (settings.logo) {
            document.getElementById('dashboard-logo-img').src = settings.logo;
        }
    };

    const closeAdminModal = () => {
        const adminModal = document.getElementById('admin-modal');
        if (adminModal) {
            adminModal.style.display = 'none';
            document.body.style.overflow = '';
        }
    };

    const setupDynamicFileUploaders = () => {
        // Product image loader
        const trigger = document.getElementById('image-preview-trigger');
        const fileInput = document.getElementById('admin-prod-image-file');
        const preview = document.getElementById('admin-image-preview');
        const placeholder = document.getElementById('image-placeholder');
        
        if (trigger && fileInput) {
            trigger.onclick = () => fileInput.click();
            fileInput.onchange = (e) => {
                const file = e.target.files[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = (ev) => {
                        loadedImageBase64 = ev.target.result;
                        preview.src = loadedImageBase64;
                        preview.style.display = 'block';
                        placeholder.style.display = 'none';
                    };
                    reader.readAsDataURL(file);
                }
            };
        }

        // Logo uploader
        const logoTrigger = document.getElementById('logo-uploader-trigger');
        const logoFileInput = document.getElementById('admin-logo-image-file');
        const logoPreview = document.getElementById('admin-logo-preview');
        const logoPlaceholder = document.getElementById('logo-uploader-placeholder');
        
        if (logoTrigger && logoFileInput) {
            logoTrigger.onclick = () => logoFileInput.click();
            logoFileInput.onchange = (e) => {
                const file = e.target.files[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = (ev) => {
                        loadedLogoBase64 = ev.target.result;
                        logoPreview.src = loadedLogoBase64;
                        logoPreview.style.display = 'block';
                        logoPlaceholder.style.display = 'none';
                    };
                    reader.readAsDataURL(file);
                }
            };
        }

        // Hero image uploader
        const heroTrigger = document.getElementById('hero-uploader-trigger');
        const heroFileInput = document.getElementById('admin-hero-image-file');
        const heroPreview = document.getElementById('admin-hero-preview');
        const heroPlaceholder = document.getElementById('hero-uploader-placeholder');
        
        if (heroTrigger && heroFileInput) {
            heroTrigger.onclick = () => heroFileInput.click();
            heroFileInput.onchange = (e) => {
                const file = e.target.files[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = (ev) => {
                        loadedHeroBase64 = ev.target.result;
                        heroPreview.src = loadedHeroBase64;
                        heroPreview.style.display = 'block';
                        heroPlaceholder.style.display = 'none';
                    };
                    reader.readAsDataURL(file);
                }
            };
        }

        // About story image uploader
        const aboutTrigger = document.getElementById('about-uploader-trigger');
        const aboutFileInput = document.getElementById('admin-about-image-file');
        const aboutPreview = document.getElementById('admin-about-preview');
        const aboutPlaceholder = document.getElementById('about-uploader-placeholder');
        
        if (aboutTrigger && aboutFileInput) {
            aboutTrigger.onclick = () => aboutFileInput.click();
            aboutFileInput.onchange = (e) => {
                const file = e.target.files[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = (ev) => {
                        loadedAboutBase64 = ev.target.result;
                        aboutPreview.src = loadedAboutBase64;
                        aboutPreview.style.display = 'block';
                        aboutPlaceholder.style.display = 'none';
                    };
                    reader.readAsDataURL(file);
                }
            };
        }

        // Gallery image loader
        const galTrigger = document.getElementById('gal-image-preview-trigger');
        const galFileInput = document.getElementById('admin-gal-image-file');
        const galPreview = document.getElementById('admin-gal-image-preview');
        const galPlaceholder = document.getElementById('gal-image-placeholder');
        
        if (galTrigger && galFileInput) {
            galTrigger.onclick = () => galFileInput.click();
            galFileInput.onchange = (e) => {
                const file = e.target.files[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = (ev) => {
                        loadedGalleryImageBase64 = ev.target.result;
                        galPreview.src = loadedGalleryImageBase64;
                        galPreview.style.display = 'block';
                        galPlaceholder.style.display = 'none';
                    };
                    reader.readAsDataURL(file);
                }
            };
        }
    };

    // Dynamic Contacts Manager Helper Functions
    const renderAdminContactsList = () => {
        const container = document.getElementById('admin-contacts-list-container');
        if (!container) return;
        
        const contacts = getBrandContacts();
        container.innerHTML = '';
        
        if (contacts.length === 0) {
            container.innerHTML = `
                <div style="text-align: center; padding: 1.5rem; color: var(--color-text-dim);">
                    No contact details or social links found. Add one below!
                </div>
            `;
            return;
        }
        
        contacts.forEach(item => {
            const row = document.createElement('div');
            row.className = 'contact-item-row';
            row.innerHTML = `
                <div class="contact-item-info">
                    <div class="contact-item-icon-wrap">
                        <i class="${item.icon || 'fa-solid fa-info'}"></i>
                    </div>
                    <div class="contact-item-details">
                        <div class="contact-item-label-wrap">
                            <span class="contact-item-label">${item.label}</span>
                            <span class="contact-item-type-badge ${item.type}">${item.type}</span>
                        </div>
                        <span class="contact-item-value">${item.value}</span>
                    </div>
                </div>
                <div class="contact-item-actions">
                    <button type="button" class="contact-action-btn btn-edit-contact" data-id="${item.id}" title="Edit Item"><i class="fa-solid fa-pen"></i></button>
                    <button type="button" class="contact-action-btn delete btn-delete-contact" data-id="${item.id}" title="Delete Item"><i class="fa-solid fa-trash"></i></button>
                </div>
            `;
            container.appendChild(row);
        });
        
        // Attach listeners
        container.querySelectorAll('.btn-edit-contact').forEach(btn => {
            btn.onclick = () => {
                const id = btn.getAttribute('data-id');
                editContactItem(id);
            };
        });
        
        container.querySelectorAll('.btn-delete-contact').forEach(btn => {
            btn.onclick = () => {
                const id = btn.getAttribute('data-id');
                if (confirm('Are you sure you want to delete this detail?')) {
                    deleteContactItem(id);
                }
            };
        });
    };

    const editContactItem = (id) => {
        const contacts = getBrandContacts();
        const item = contacts.find(c => c.id === id);
        if (!item) return;
        
        document.getElementById('admin-contact-id').value = item.id;
        document.getElementById('admin-contact-type').value = item.type;
        document.getElementById('admin-contact-label').value = item.label;
        document.getElementById('admin-contact-value').value = item.value;
        document.getElementById('admin-contact-icon').value = item.icon;
        
        document.getElementById('admin-contact-form-title').textContent = `Edit Item: ${item.label}`;
        document.getElementById('btn-save-contact').textContent = 'Update Detail';
        document.getElementById('btn-cancel-contact-edit').style.display = 'inline-block';
    };

    const resetContactForm = () => {
        const singleForm = document.getElementById('admin-contacts-single-form');
        if (singleForm) {
            singleForm.reset();
            document.getElementById('admin-contact-id').value = '';
            document.getElementById('admin-contact-form-title').textContent = 'Add New Detail / Link';
            document.getElementById('btn-save-contact').textContent = 'Save Detail';
            document.getElementById('btn-cancel-contact-edit').style.display = 'none';
            
            // Clear error markers
            singleForm.querySelectorAll('.invalid').forEach(input => input.classList.remove('invalid'));
            singleForm.querySelectorAll('.form-error-msg').forEach(msg => msg.style.display = 'none');
        }
    };

    const deleteContactItem = (id) => {
        let contacts = getBrandContacts();
        contacts = contacts.filter(c => c.id !== id);
        saveBrandContacts(contacts);
        
        renderAdminContactsList();
        applyAllSettings();
        if (document.getElementById('admin-contact-id').value === id) {
            resetContactForm();
        }
    };

    // Dynamic Gallery Manager Helper Functions
    const renderAdminGalleryList = () => {
        const container = document.getElementById('admin-gallery-list-container');
        if (!container) return;
        
        const gallery = getGallery();
        container.innerHTML = '';
        
        if (gallery.length === 0) {
            container.innerHTML = `
                <div style="text-align: center; padding: 1.5rem; color: var(--color-text-dim);">
                    No gallery items found. Add one above!
                </div>
            `;
            return;
        }
        
        gallery.forEach(item => {
            const row = document.createElement('div');
            row.className = 'contact-item-row';
            row.innerHTML = `
                <div class="contact-item-info">
                    <div class="contact-item-icon-wrap" style="border-radius: 4px; overflow: hidden; width: 40px; height: 40px;">
                        <img src="${item.img}" style="width: 100%; height: 100%; object-fit: cover;">
                    </div>
                    <div class="contact-item-details" style="margin-left: 0.5rem;">
                        <span class="contact-item-label">${item.title}</span>
                    </div>
                </div>
                <div class="contact-item-actions">
                    <button type="button" class="contact-action-btn btn-edit-gal-item" data-id="${item.id}" title="Edit Item"><i class="fa-solid fa-pen"></i></button>
                    <button type="button" class="contact-action-btn delete btn-delete-gal-item" data-id="${item.id}" title="Delete Item"><i class="fa-solid fa-trash"></i></button>
                </div>
            `;
            container.appendChild(row);
        });
        
        // Attach listeners
        container.querySelectorAll('.btn-edit-gal-item').forEach(btn => {
            btn.onclick = () => {
                const id = btn.getAttribute('data-id');
                editGalleryItem(id);
            };
        });
        
        container.querySelectorAll('.btn-delete-gal-item').forEach(btn => {
            btn.onclick = () => {
                const id = btn.getAttribute('data-id');
                if (confirm('Are you sure you want to delete this gallery item?')) {
                    deleteGalleryItemFromList(id);
                }
            };
        });
    };

    const editGalleryItem = (id) => {
        const gallery = getGallery();
        const item = gallery.find(g => g.id === id);
        if (!item) return;
        
        document.getElementById('admin-gal-id').value = item.id;
        document.getElementById('admin-gal-title').value = item.title;
        
        const preview = document.getElementById('admin-gal-image-preview');
        const placeholder = document.getElementById('gal-image-placeholder');
        if (item.img) {
            preview.src = item.img;
            preview.style.display = 'block';
            placeholder.style.display = 'none';
            loadedGalleryImageBase64 = item.img;
        } else {
            preview.style.display = 'none';
            placeholder.style.display = 'flex';
            loadedGalleryImageBase64 = '';
        }
        
        document.getElementById('gallery-modal-title-text').textContent = `Edit Gallery Item: ${item.title}`;
        
        // Scroll form into view inside modal
        const form = document.getElementById('admin-gallery-form');
        if (form) {
            form.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const resetGalleryForm = () => {
        const form = document.getElementById('admin-gallery-form');
        if (form) {
            form.reset();
            document.getElementById('admin-gal-id').value = '';
            document.getElementById('gallery-modal-title-text').textContent = 'Add New Gallery Item';
            loadedGalleryImageBase64 = '';
            
            const preview = document.getElementById('admin-gal-image-preview');
            const placeholder = document.getElementById('gal-image-placeholder');
            if (preview) preview.style.display = 'none';
            if (placeholder) placeholder.style.display = 'flex';
            
            // Clear error markers
            form.querySelectorAll('.invalid').forEach(input => input.classList.remove('invalid'));
            form.querySelectorAll('.form-error-msg').forEach(msg => msg.style.display = 'none');
        }
    };

    const deleteGalleryItemFromList = (id) => {
        let gallery = getGallery();
        gallery = gallery.filter(g => g.id !== id);
        saveGallery(gallery);
        
        renderAdminGalleryList();
        renderGallery();
        if (document.getElementById('admin-gal-id').value === id) {
            resetGalleryForm();
        }
    };

    // Render Gallery elements dynamically on the page
    const galleryGrid = document.getElementById('gallery-grid');
    
    const renderGallery = () => {
        if (!galleryGrid) return;
        
        const gallery = getGallery();
        galleryGrid.innerHTML = '';

        gallery.forEach(item => {
            const el = document.createElement('div');
            el.className = 'gallery-item';
            el.innerHTML = `
                <div class="product-admin-actions" style="top: 15px; left: 15px;">
                    <button class="btn-admin-action btn-edit-gallery" data-id="${item.id}" title="Edit Item"><i class="fa-solid fa-pen"></i></button>
                    <button class="btn-admin-action btn-delete-gallery" data-id="${item.id}" title="Delete Item"><i class="fa-solid fa-trash"></i></button>
                </div>
                <img src="${item.img}" alt="${item.alt || item.title}" class="gallery-item-image" width="300" height="300">
                <div class="gallery-overlay">
                    <div class="gallery-overlay-icon"><i class="fa-solid fa-magnifying-glass-plus"></i></div>
                    <h3 class="gallery-overlay-title">${item.title}</h3>
                </div>
            `;
            galleryGrid.appendChild(el);
        });

        // Re-attach lightbox listeners on dynamically rendered items
        setupLightboxListeners();
        attachAdminGalleryCardListeners();
    };

    const setupLightboxListeners = () => {
        const galleryItems = document.querySelectorAll('.gallery-item');
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = document.getElementById('lightbox-image');
        const lightboxCaption = document.getElementById('lightbox-caption');
        
        if (galleryItems.length > 0 && lightbox && lightboxImg) {
            galleryItems.forEach(item => {
                item.onclick = (e) => {
                    if (e.target.closest('.product-admin-actions')) {
                        return; // Ignore admin click
                    }
                    const img = item.querySelector('.gallery-item-image');
                    const title = item.querySelector('.gallery-overlay-title');
                    
                    if (img) {
                        lightboxImg.src = img.src;
                        lightboxCaption.textContent = title ? title.textContent : '';
                        lightbox.style.display = 'flex';
                        lightbox.offsetHeight;
                        lightbox.classList.add('active');
                        document.body.style.overflow = 'hidden';
                    }
                };
            });
        }
    };

    const attachAdminGalleryCardListeners = () => {
        const editButtons = document.querySelectorAll('.btn-edit-gallery');
        const deleteButtons = document.querySelectorAll('.btn-delete-gallery');

        editButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const id = btn.getAttribute('data-id');
                openAdminModal(id, 'tab-gallery');
            });
        });

        deleteButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const id = btn.getAttribute('data-id');
                if (confirm('Are you sure you want to delete this gallery item?')) {
                    deleteGalleryItemFromList(id);
                }
            });
        });
    };

    const setupIconSuggestions = () => {
        const suggestions = document.querySelectorAll('#contact-icon-suggestions .suggestion-badge');
        const iconInput = document.getElementById('admin-contact-icon');
        
        suggestions.forEach(badge => {
            badge.onclick = () => {
                const cls = badge.getAttribute('data-class');
                if (iconInput) {
                    iconInput.value = cls;
                    iconInput.classList.remove('invalid');
                    const errorMsg = iconInput.nextElementSibling;
                    if (errorMsg && errorMsg.classList.contains('form-error-msg')) {
                        errorMsg.style.display = 'none';
                    }
                }
            };
        });
    };

    const wireFormSubmitListeners = () => {
        // Tab 1 Form
        const adminProductForm = document.getElementById('admin-product-form');
        if (adminProductForm) {
            adminProductForm.onsubmit = (e) => {
                e.preventDefault();
                
                const id = document.getElementById('admin-prod-id').value;
                const name = document.getElementById('admin-prod-name').value.trim();
                const category = document.getElementById('admin-prod-category').value;
                const price = document.getElementById('admin-prod-price').value.trim();
                const tag = document.getElementById('admin-prod-tag').value.trim();
                const desc = document.getElementById('admin-prod-desc').value.trim();
                
                let isValid = true;
                
                [
                    document.getElementById('admin-prod-name'),
                    document.getElementById('admin-prod-price'),
                    document.getElementById('admin-prod-desc')
                ].forEach(input => {
                    const errorMsg = input.nextElementSibling;
                    if (!input.value.trim()) {
                        if (errorMsg) errorMsg.style.display = 'block';
                        input.classList.add('invalid');
                        isValid = false;
                    } else {
                        if (errorMsg) errorMsg.style.display = 'none';
                        input.classList.remove('invalid');
                    }
                });

                const imgErrorMsg = document.getElementById('image-error-msg');
                if (!loadedImageBase64) {
                    if (imgErrorMsg) imgErrorMsg.style.display = 'block';
                    isValid = false;
                } else {
                    if (imgErrorMsg) imgErrorMsg.style.display = 'none';
                }

                if (isValid) {
                    let catalog = getCatalog();
                    
                    if (id) {
                        catalog = catalog.map(item => {
                            if (item.id === id) {
                                return { id, name, category, price, tag, desc, img: loadedImageBase64 };
                            }
                            return item;
                        });
                    } else {
                        const newId = 'confect-' + Date.now();
                        const newProduct = {
                            id: newId,
                            name,
                            category,
                            price,
                            tag,
                            desc,
                            img: loadedImageBase64
                        };
                        catalog.push(newProduct);
                    }
                    
                    saveCatalog(catalog);
                    closeAdminModal();
                    renderCatalog();
                }
            };
        }

        // Tab 2 Form
        const adminIdentityForm = document.getElementById('admin-identity-form');
        if (adminIdentityForm) {
            adminIdentityForm.onsubmit = (e) => {
                e.preventDefault();
                
                const title = document.getElementById('admin-brand-title').value.trim();
                const subtitle = document.getElementById('admin-brand-subtitle').value.trim();
                const bio = document.getElementById('admin-brand-bio').value.trim();
                
                if (!title || !bio) return;
                
                const settings = getBrandSettings();
                settings.title = title;
                settings.subtitle = subtitle;
                settings.bio = bio;
                if (loadedLogoBase64) {
                    settings.logo = loadedLogoBase64;
                }
                
                saveBrandSettings(settings);
                applyAllSettings();
                closeAdminModal();
            };
        }

        // Tab 3 Form
        const adminStoryForm = document.getElementById('admin-story-form');
        if (adminStoryForm) {
            adminStoryForm.onsubmit = (e) => {
                e.preventDefault();
                
                const heroTitle = document.getElementById('admin-hero-title').value.trim();
                const heroDesc = document.getElementById('admin-hero-desc').value.trim();
                const aboutSubtitle = document.getElementById('admin-about-subtitle').value.trim();
                const aboutTitle = document.getElementById('admin-about-title').value.trim();
                const aboutPara1 = document.getElementById('admin-about-para1').value.trim();
                const aboutPara2 = document.getElementById('admin-about-para2').value.trim();
                const aboutPara3 = document.getElementById('admin-about-para3').value.trim();
                
                const settings = getBrandSettings();
                settings.heroTitle = heroTitle;
                settings.heroDesc = heroDesc;
                settings.aboutSubtitle = aboutSubtitle;
                settings.aboutTitle = aboutTitle;
                settings.aboutPara1 = aboutPara1;
                settings.aboutPara2 = aboutPara2;
                settings.aboutPara3 = aboutPara3;
                if (loadedHeroBase64) {
                    settings.heroImg = loadedHeroBase64;
                }
                if (loadedAboutBase64) {
                    settings.aboutImg = loadedAboutBase64;
                }
                
                saveBrandSettings(settings);
                applyAllSettings();
                closeAdminModal();
            };
        }

        // Tab 4 Dynamic Single Contact Form
        const adminContactsSingleForm = document.getElementById('admin-contacts-single-form');
        if (adminContactsSingleForm) {
            adminContactsSingleForm.onsubmit = (e) => {
                e.preventDefault();
                
                const id = document.getElementById('admin-contact-id').value;
                const type = document.getElementById('admin-contact-type').value;
                const label = document.getElementById('admin-contact-label').value.trim();
                const value = document.getElementById('admin-contact-value').value.trim();
                const icon = document.getElementById('admin-contact-icon').value.trim();
                
                let isValid = true;
                
                [
                    document.getElementById('admin-contact-label'),
                    document.getElementById('admin-contact-value'),
                    document.getElementById('admin-contact-icon')
                ].forEach(input => {
                    const errorMsg = input.nextElementSibling;
                    if (!input.value.trim()) {
                        if (errorMsg && errorMsg.classList.contains('form-error-msg')) errorMsg.style.display = 'block';
                        input.classList.add('invalid');
                        isValid = false;
                    } else {
                        if (errorMsg && errorMsg.classList.contains('form-error-msg')) errorMsg.style.display = 'none';
                        input.classList.remove('invalid');
                    }
                });
                
                if (isValid) {
                    let contacts = getBrandContacts();
                    
                    if (id) {
                        // Edit item
                        contacts = contacts.map(c => {
                            if (c.id === id) {
                                return { id, type, label, value, icon };
                            }
                            return c;
                        });
                    } else {
                        // Create item
                        const newId = 'c-' + Date.now();
                        contacts.push({ id: newId, type, label, value, icon });
                    }
                    
                    saveBrandContacts(contacts);
                    renderAdminContactsList();
                    applyAllSettings();
                    resetContactForm();
                }
            };
        }
        
        // Cancel contact edit button
        const btnCancelContactEdit = document.getElementById('btn-cancel-contact-edit');
        if (btnCancelContactEdit) {
            btnCancelContactEdit.onclick = () => {
                resetContactForm();
            };
        }

        // Tab 5 Form (Gallery)
        const adminGalleryForm = document.getElementById('admin-gallery-form');
        if (adminGalleryForm) {
            adminGalleryForm.onsubmit = (e) => {
                e.preventDefault();
                
                const id = document.getElementById('admin-gal-id').value;
                const title = document.getElementById('admin-gal-title').value.trim();
                
                let isValid = true;
                
                const titleInput = document.getElementById('admin-gal-title');
                const errorMsg = titleInput.nextElementSibling;
                if (!title) {
                    if (errorMsg) errorMsg.style.display = 'block';
                    titleInput.classList.add('invalid');
                    isValid = false;
                } else {
                    if (errorMsg) errorMsg.style.display = 'none';
                    titleInput.classList.remove('invalid');
                }

                const imgErrorMsg = document.getElementById('gal-image-error-msg');
                if (!loadedGalleryImageBase64) {
                    if (imgErrorMsg) imgErrorMsg.style.display = 'block';
                    isValid = false;
                } else {
                    if (imgErrorMsg) imgErrorMsg.style.display = 'none';
                }
                
                if (isValid) {
                    let gallery = getGallery();
                    
                    if (id) {
                        gallery = gallery.map(item => {
                            if (item.id === id) {
                                return { id, title, img: loadedGalleryImageBase64, alt: title };
                            }
                            return item;
                        });
                    } else {
                        const newId = 'gallery-' + Date.now();
                        gallery.push({
                            id: newId,
                            title,
                            img: loadedGalleryImageBase64,
                            alt: title
                        });
                    }
                    
                    saveGallery(gallery);
                    renderAdminGalleryList();
                    renderGallery();
                    resetGalleryForm();
                    closeAdminModal();
                }
            };
        }

        // Suggestions setup
        setupIconSuggestions();
    };

    // Toggle logic
    const toggleAdminMode = () => {
        const isActive = localStorage.getItem('ntr_admin_active') === 'true';
        const newActive = !isActive;
        localStorage.setItem('ntr_admin_active', newActive);
        
        applyAdminModeStyle(newActive);
        renderCatalog();
    };

    const applyAdminModeStyle = (isActive) => {
        const btnToggleAdmin = document.getElementById('btn-toggle-admin');
        
        if (isActive) {
            document.body.classList.add('admin-active');
            if (btnToggleAdmin) {
                btnToggleAdmin.innerHTML = '<i class="fa-solid fa-lock-open"></i> Close Manager';
                btnToggleAdmin.classList.add('active');
            }
            injectAdminPortal();
            const adminIndicator = document.getElementById('admin-indicator');
            if (adminIndicator) adminIndicator.style.display = 'block';
            
            const floatingGear = document.getElementById('floating-admin-gear');
            if (floatingGear) floatingGear.style.display = 'flex';
        } else {
            document.body.classList.remove('admin-active');
            if (btnToggleAdmin) {
                btnToggleAdmin.innerHTML = '<i class="fa-solid fa-lock"></i> Manage Catalog';
                btnToggleAdmin.classList.remove('active');
            }
            const adminIndicator = document.getElementById('admin-indicator');
            if (adminIndicator) adminIndicator.style.display = 'none';
            
            const floatingGear = document.getElementById('floating-admin-gear');
            if (floatingGear) floatingGear.style.display = 'none';
        }
    };

    // --- Boot & Page Setup Initializers ---
    // A. Init databases
    getCatalog();
    getBrandSettings();
    getBrandContacts();
    getGallery();
    
    // B. Apply CMS variables globally on load
    applyAllSettings();
    
    // C. Verify admin active state
    const isAdminActive = localStorage.getItem('ntr_admin_active') === 'true';
    applyAdminModeStyle(isAdminActive);

    // D. Admin toggle buttons (Products page / Gallery page)
    const btnToggleAdmin = document.getElementById('btn-toggle-admin');
    if (btnToggleAdmin) {
        btnToggleAdmin.addEventListener('click', toggleAdminMode);
    }
    
    const btnAdminAddItem = document.getElementById('btn-admin-add-item');
    if (btnAdminAddItem) {
        btnAdminAddItem.addEventListener('click', () => openAdminModal('', 'tab-confections'));
    }

    const btnAdminAddGalleryItem = document.getElementById('btn-admin-add-gallery-item');
    if (btnAdminAddGalleryItem) {
        btnAdminAddGalleryItem.addEventListener('click', () => openAdminModal('', 'tab-gallery'));
    }

    const btnAdminEditSocial = document.getElementById('btn-admin-edit-social');
    if (btnAdminEditSocial) {
        btnAdminEditSocial.addEventListener('click', () => openAdminModal('', 'tab-identity'));
    }

    // E. Catalog grid render trigger
    if (productsGrid) {
        renderCatalog();
    }
    if (galleryGrid) {
        renderGallery();
    }

    // 5. Gallery Lightbox Modal
    const lightbox = document.getElementById('lightbox');
    const lightboxClose = document.getElementById('lightbox-close');

    if (lightbox) {
        const closeLightbox = () => {
            lightbox.classList.remove('active');
            setTimeout(() => {
                lightbox.style.display = 'none';
                document.body.style.overflow = '';
            }, 300);
        };

        if (lightboxClose) {
            lightboxClose.addEventListener('click', closeLightbox);
        }

        // Close on clicking overlay background
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });

        // Close on Esc key press
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && lightbox.classList.contains('active')) {
                closeLightbox();
            }
        });

        // Wire up initial click handlers on standard/first load items
        setupLightboxListeners();
    }

    // 6. Contact Form Validation & Toast Notification
    const contactForm = document.getElementById('contact-form');
    const toast = document.getElementById('toast');

    if (contactForm && toast) {
        const nameInput = document.getElementById('form-name');
        const emailInput = document.getElementById('form-email');
        const phoneInput = document.getElementById('form-phone');
        const msgInput = document.getElementById('form-message');

        const showError = (input, show) => {
            const errorMsg = input.nextElementSibling;
            if (errorMsg && errorMsg.classList.contains('form-error-msg')) {
                errorMsg.style.display = show ? 'block' : 'none';
            }
            if (show) {
                input.classList.add('invalid');
            } else {
                input.classList.remove('invalid');
            }
        };

        const validateEmail = (email) => {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(email);
        };

        const validatePhone = (phone) => {
            const re = /^\+?[0-9\s-]{10,15}$/;
            return re.test(phone) || phone.trim() === ''; // Optional but formatted if entered
        };

        // Real-time input clearing validation
        [nameInput, emailInput, phoneInput, msgInput].forEach(input => {
            if (input) {
                input.addEventListener('input', () => {
                    showError(input, false);
                });
            }
        });

        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            let isValid = true;

            // Name validate
            if (!nameInput.value.trim()) {
                showError(nameInput, true);
                isValid = false;
            }

            // Email validate
            if (!emailInput.value.trim() || !validateEmail(emailInput.value.trim())) {
                showError(emailInput, true);
                isValid = false;
            }

            // Phone validate
            if (phoneInput.value.trim() && !validatePhone(phoneInput.value.trim())) {
                showError(phoneInput, true);
                isValid = false;
            }

            // Message validate
            if (!msgInput.value.trim()) {
                showError(msgInput, true);
                isValid = false;
            }

            if (isValid) {
                // Simulate form submission success
                const submitBtn = contactForm.querySelector('button[type="submit"]');
                const origBtnText = submitBtn.innerHTML;
                
                submitBtn.disabled = true;
                submitBtn.innerHTML = 'Sending Message...';

                setTimeout(() => {
                    // Reset button and inputs
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = origBtnText;
                    
                    contactForm.reset();
                    
                    // Show success toast
                    toast.style.display = 'flex';
                    // Force reflow
                    toast.offsetHeight;
                    toast.classList.add('show');
                    
                    // Hide toast after 4 seconds
                    setTimeout(() => {
                        toast.classList.remove('show');
                        setTimeout(() => {
                            toast.style.display = 'none';
                        }, 400);
                    }, 4000);
                }, 1500);
            }
        });
    }
});
