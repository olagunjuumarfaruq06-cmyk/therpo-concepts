// ==========================================
// THERPO CONCEPTS - MAIN JAVASCRIPT
// ==========================================

const whatsappNumber = "2349035732812";


// ==========================================
// MOBILE MENU
// ==========================================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {

    // Open / close menu
    menuBtn.addEventListener("click", function (event) {
        event.stopPropagation();
        navLinks.classList.toggle("show");
    });

    // Close when a menu link is clicked
    navLinks.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            navLinks.classList.remove("show");
        });
    });

    // Close when tapping ANYWHERE outside the menu
    document.addEventListener("click", function (event) {

        if (
            navLinks.classList.contains("show") &&
            !navLinks.contains(event.target) &&
            !menuBtn.contains(event.target)
        ) {
            navLinks.classList.remove("show");
        }

    });

}


// ==========================================
// CONTACT FORM
// ==========================================

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const service = document.getElementById("service").value;
        const message = document.getElementById("message").value.trim();

        const whatsappMessage =
`Hello Therpo Concepts!

I would like to make an enquiry.

Name: ${name}
Phone: ${phone}
Service: ${service}
Message: ${message}`;

        const whatsappURL =
            "https://wa.me/" +
            whatsappNumber +
            "?text=" +
            encodeURIComponent(whatsappMessage);

        window.location.href = whatsappURL;

    });

}


// ==========================================
// QUOTE FORM
// ==========================================

const quoteForm = document.getElementById("quoteForm");

if (quoteForm) {

    quoteForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("quoteName").value.trim();
        const phone = document.getElementById("quotePhone").value.trim();
        const service = document.getElementById("quoteService").value;
        const quantity = document.getElementById("quoteQuantity").value;
        const details = document.getElementById("quoteDetails").value.trim();
        const budget = document.getElementById("quoteBudget").value.trim();

        const whatsappMessage =
`Hello Therpo Concepts!

I would like to request a quote.

Name: ${name}
Phone: ${phone}
Service: ${service}
Quantity: ${quantity}
Project Details: ${details}
Estimated Budget: ${budget || "Not specified"}`;

        const whatsappURL =
            "https://wa.me/" +
            whatsappNumber +
            "?text=" +
            encodeURIComponent(whatsappMessage);

        window.location.href = whatsappURL;

    });

}


// ==========================================
// WHATSAPP CONTACT LINK
// ==========================================

const whatsappLink = document.getElementById("whatsappLink");

if (whatsappLink) {

    whatsappLink.addEventListener("click", function (event) {

        event.preventDefault();

        window.location.href =
            "https://wa.me/" + whatsappNumber;

    });

}
