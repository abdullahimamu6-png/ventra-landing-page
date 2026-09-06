// ==============================
// FAQ TABS
// ==============================

const tabs = document.querySelectorAll(".tab");
const categories = document.querySelectorAll(".faq-category");

tabs.forEach((tab) => {
    tab.addEventListener("click", () => {

        const target = tab.dataset.tab;

        // Remove active from all tabs
        tabs.forEach((item) => {
            item.classList.remove("active");
        });

        // Add active to clicked tab
        tab.classList.add("active");

        // Hide all categories
        categories.forEach((category) => {
            category.classList.remove("active-category");
        });

        // Show selected category
        document.getElementById(target).classList.add("active-category");
    });
});


// ==============================
// FAQ ACCORDION
// ==============================

document.querySelectorAll(".faq-category").forEach((category) => {

    const faqItems = category.querySelectorAll(".faq-item");

    faqItems.forEach((item) => {

        const question = item.querySelector(".faq-question");

        question.addEventListener("click", () => {

            // Close other questions in the same category
            faqItems.forEach((otherItem) => {
                if (otherItem !== item) {
                    otherItem.classList.remove("active-faq");
                }
            });

            // Toggle clicked question
            item.classList.toggle("active-faq");
        });

    });

});