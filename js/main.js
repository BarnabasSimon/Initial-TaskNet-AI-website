// =========================
// TASKNEST AI - MAIN JS
// Mobile menu, FAQ, pricing toggle, forms
// =========================

document.addEventListener("DOMContentLoaded", () => {
    setupMobileMenu();
    setupFAQ();
    setupPricingToggle();
    setupDemoForms();
});

// =========================
// MOBILE NAV MENU
// =========================

function setupMobileMenu() {
    const navToggle = document.querySelector(".nav-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (!navToggle || !navLinks) return;

    navToggle.addEventListener("click", () => {
        navLinks.classList.toggle("open");
    });

    const links = navLinks.querySelectorAll("a");

    links.forEach((link) => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("open");
        });
    });
}

// =========================
// FAQ ACCORDION
// =========================

function setupFAQ() {
    const faqItems = document.querySelectorAll(".faq-item");

    if (!faqItems.length) return;

    faqItems.forEach((item) => {
        const question = item.querySelector(".faq-question");

        if (!question) return;

        question.addEventListener("click", () => {
            const isOpen = item.classList.contains("open");

            faqItems.forEach((faq) => {
                faq.classList.remove("open");

                const symbol = faq.querySelector(".faq-question span");
                if (symbol) symbol.textContent = "+";
            });

            if (!isOpen) {
                item.classList.add("open");

                const symbol = item.querySelector(".faq-question span");
                if (symbol) symbol.textContent = "−";
            }
        });
    });
}

// =========================
// PRICING TOGGLE
// =========================

function setupPricingToggle() {
    const toggleButtons = document.querySelectorAll(".toggle-option");
    const monthlyPrices = document.querySelectorAll(".monthly-price");
    const yearlyPrices = document.querySelectorAll(".yearly-price");

    if (!toggleButtons.length) return;

    toggleButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const billingType = button.dataset.billing;

            toggleButtons.forEach((btn) => {
                btn.classList.remove("active-toggle");
            });

            button.classList.add("active-toggle");

            if (billingType === "yearly") {
                monthlyPrices.forEach((price) => {
                    price.classList.add("hidden-price");
                });

                yearlyPrices.forEach((price) => {
                    price.classList.remove("hidden-price");
                });
            } else {
                monthlyPrices.forEach((price) => {
                    price.classList.remove("hidden-price");
                });

                yearlyPrices.forEach((price) => {
                    price.classList.add("hidden-price");
                });
            }
        });
    });
}

// =========================
// DEMO FORM HANDLING
// =========================

function setupDemoForms() {
    const forms = document.querySelectorAll(".auth-form");

    if (!forms.length) return;

    forms.forEach((form) => {
        form.addEventListener("submit", (event) => {
            event.preventDefault();

            const submitButton = form.querySelector(".auth-submit");

            if (!submitButton) return;

            const originalText = submitButton.textContent;

            submitButton.textContent = "Demo only";
            submitButton.disabled = true;

            setTimeout(() => {
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            }, 1800);
        });
    });
}