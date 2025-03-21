document.querySelectorAll(".enterprise-block-header-collapsible, .comprehensive-mid-header-text-collapsible").forEach(button => {
    button.addEventListener("click", function () {
        this.classList.toggle("active");
        const content = this.nextElementSibling;
        const icon = this.querySelector('.icon-col img') || this.querySelector('.icon-col2 img');

        // Toggle the max-height for the sliding effect  
        if (content.style.maxHeight) {
            content.style.maxHeight = null; // Collapse  

            // Remove margin smoothly when collapsing  
            if (this.classList.contains("comprehensive-mid-header-text-collapsible")) {
                const previousElement = content.previousElementSibling;
                previousElement.style.marginBottom = '0'; // Remove margin  
            }

            // Determine icon based on the button type  
            if (this.classList.contains("enterprise-block-header-collapsible")) {
                icon.src = "Assets/Image/arrow-up-icon.svg"; // Set for first type  
            } else if (this.classList.contains("comprehensive-mid-header-text-collapsible")) {
                icon.src = "Assets/Image/arrow-up.svg"; // Set for second type  
            }
        } else {
            content.style.maxHeight = content.scrollHeight + "px"; // Expand   

            // Set margin-bottom when expanding  
            if (this.classList.contains("comprehensive-mid-header-text-collapsible")) {
                const previousElement = content.previousElementSibling;
                previousElement.style.marginBottom = '24px'; // Set margin  
            }

            // Determine icon based on the button type  
            if (this.classList.contains("enterprise-block-header-collapsible")) {
                icon.src = "Assets/Image/arrow-down-icon.svg"; // Set for first type  
            } else if (this.classList.contains("comprehensive-mid-header-text-collapsible")) {
                icon.src = "Assets/Image/down-icon.svg"; // Set for second type  
            }
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const fadeImages = document.querySelectorAll('.fade-image');
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of the element is in view  
    };
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in'); // Add the fade-in class to trigger CSS transition  
                observer.unobserve(entry.target); // Stop observing after it fades in  
            }
        });
    }, options);
    fadeImages.forEach(image => {
        observer.observe(image); // Start observing each image  
    });
});

// email_sticky image on scroll
document.addEventListener("DOMContentLoaded", function () {
    const mailboxes = document.querySelectorAll(".mailbox");
    const images = document.querySelectorAll(".sticky-image");

    const header = document.querySelector(".personalize-mailbox-header");
    const wrapper = document.querySelector(".wrapper");
    const headerOffset = header.offsetTop;

    function updateStickyImage() {
        let currentIndex = 0;

        mailboxes.forEach((mailbox, index) => {
            const rect = mailbox.getBoundingClientRect();
            const mailboxHeight = rect.height;
            const triggerPoint = rect.top + mailboxHeight * 0.1;

            if (triggerPoint < 0) {
                currentIndex = index + 1;
            }
        });

        if (currentIndex >= images.length) {
            currentIndex = images.length - 1;
        }

        images.forEach((img, index) => {
            img.classList.toggle("active", index === currentIndex);
        });
    }

    function handleStickyHeader() {
        const wrapperRect = wrapper.getBoundingClientRect();

        if (window.scrollY >= headerOffset) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }

        if (wrapperRect.bottom <= 100) {
            header.classList.add("hidden");
        } else {
            header.classList.remove("hidden");
        }
    }

    window.addEventListener("scroll", updateStickyImage, handleStickyHeader);
    updateStickyImage();
    handleStickyHeader();
});


