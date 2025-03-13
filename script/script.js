const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const navItems = document.querySelectorAll('.nav-links li a');
const icon = document.getElementById('icon');

// Toggle the 'active' class for both the hamburger icon and the nav links
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  hamburger.classList.toggle('active');

  // Toggle between hamburger and close icon
  if (hamburger.classList.contains('active')) {
    icon.classList.remove('fa-bars');
    icon.classList.add('fa-xmark'); // Close icon
  } else {
    icon.classList.remove('fa-xmark');
    icon.classList.add('fa-bars'); // Hamburger icon
  }
});

// Close nav links when a link is clicked
navItems.forEach(item => {
  item.addEventListener('click', () => {
    navLinks.classList.remove('active');
    hamburger.classList.remove('active');
    icon.classList.remove('fa-xmark');
    icon.classList.add('fa-bars');
  });
});

// Close nav links on scroll in mobile view
window.addEventListener('scroll', () => {
  if (window.innerWidth <= 768) { // Check if the viewport width is less than or equal to 768px
    if (navLinks.classList.contains('active')) {
      navLinks.classList.remove('active');
      hamburger.classList.remove('active');
      icon.classList.remove('fa-xmark');
      icon.classList.add('fa-bars');
    }
  }
});




// Home text animation 
const words = ["Engage🤩", "Optimize😎", "$$$🤑"];
        let index = 0;
        const dynamicText = document.getElementById('dynamic-text');

        function changeText() {
            dynamicText.style.opacity = 0;
            setTimeout(() => {
                dynamicText.textContent = words[index];
                dynamicText.style.opacity = 1;
                index = (index + 1) % words.length;
            }, 500);
        }

        setInterval(changeText, 1000);
        changeText(); 
// Feature section
// let currentOpen = null;
//         const images = [
//             "https://source.unsplash.com/400x300/?ai,technology",
//             "https://source.unsplash.com/400x300/?data,science",
//             "https://source.unsplash.com/400x300/?algorithm,learning",
//             "https://source.unsplash.com/400x300/?robot,automation"
//         ];

//         function toggleFAQ(index) {
//             const items = document.querySelectorAll('.faq-item');
//             const answers = document.querySelectorAll('.faq-answer');
//             const image = document.getElementById('faq-image');
            
//             if (currentOpen !== null && currentOpen !== index) {
//                 answers[currentOpen].style.display = 'none';
//                 items[currentOpen].querySelector('span').textContent = '+';
//             }
            
//             if (answers[index].style.display === 'block') {
//                 answers[index].style.display = 'none';
//                 items[index].querySelector('span').textContent = '+';
//                 image.style.display = 'none';
//                 currentOpen = null;
//             } else {
//                 answers[index].style.display = 'block';
//                 items[index].querySelector('span').textContent = '−';
//                 image.src = images[index];
//                 image.style.display = 'block';
//                 currentOpen = index;
//             }
//         }


document.addEventListener('DOMContentLoaded', function () {
  const featureCards = document.querySelectorAll('.feature-card');
  const featureImage = document.getElementById('feature-image');
  // Image paths
  const featureImages = [
    "img/f1.png",
    "img/f2.png",
    "img/f3.png",
    "img/f4.png"
  ];

  // Preload images to avoid flicker
  featureImages.forEach(src => {
    const img = new Image();
    img.src = src;
  });

  // Function to handle show/hide of content using max-height
  function handleFeatureClick(card, index) {
    // Close all other cards
    featureCards.forEach(otherCard => {
      if (otherCard !== card) {
        otherCard.classList.remove('open');
        const otherContent = otherCard.querySelector('.feature-card-content');
        otherContent.style.maxHeight = "0px";
        const otherIcon = otherCard.querySelector('.feature i');
        otherIcon.classList.remove('fa-minus');
        otherIcon.classList.add('fa-plus');
      }
    });
    // Toggle clicked card
    const content = card.querySelector('.feature-card-content');
    const icon = card.querySelector('.feature i');
    if (card.classList.contains('open')) {
      card.classList.remove('open');
      content.style.maxHeight = "0px";
      icon.classList.remove('fa-minus');
      icon.classList.add('fa-plus');
    } else {
      card.classList.add('open');
      content.style.maxHeight = content.scrollHeight + "px";
      icon.classList.remove('fa-plus');
      icon.classList.add('fa-minus');
      featureImage.src = featureImages[index];
    }
  }

  // Attach click event to each card header
  featureCards.forEach((card, index) => {
    const header = card.querySelector('.feature');
    header.addEventListener('click', function () {
      handleFeatureClick(card, index);
    });
  });

  // Set default: open only the first card
  if (featureCards.length > 0) {
    const firstCard = featureCards[0];
    const firstContent = firstCard.querySelector('.feature-card-content');
    const firstIcon = firstCard.querySelector('.feature i');
    firstCard.classList.add('open');
    firstContent.style.maxHeight = firstContent.scrollHeight + "px";
    firstIcon.classList.remove('fa-plus');
    firstIcon.classList.add('fa-minus');
    featureImage.src = featureImages[0];
  }
});




// FAQ section
document.addEventListener("DOMContentLoaded", function () {
  const faqs = [
    {
      question: "1. How is Media+ beneficial for Marketers?",
      answer: "Media+ helps marketers repurpose content, automate SEO, generate video recommendations, and easily manage thumbnails, URLs, and event listings for better lead generation.",
    },
    {
      question: "2. How does Media+ improve user retention, engagement & help in generating more leads?",
      answer: "Media+ optimizes your content for search engines, curates relevant videos and events for viewers, and allows for lead capture through gated content. It tracks user engagement, providing insights to help you refine your marketing strategies.",
    },
    {
      question: "3. How does Media+ result in better brand visibility?",
      answer: "Media+ improves brand visibility by allowing you to fully customize your media site. You can select the theme, colors, logo placement, and content layout, and host it on your custom domain to ensure your brand is clearly represented.",
    },
    {
      question: "4. How does Media+ simplify video content management?",
      answer: "Media+ automates the process of uploading, formatting, and embedding videos. It handles metadata creation, SEO optimization, and content preparation, eliminating the need for multiple teams to coordinate these tasks.",
    },
    {
      question: "5. How does Media+ use AI to improve content discovery?",
      answer: "Media+ leverages AI to auto-generate titles, descriptions, and tags for your content, helping your audience discover the most relevant videos and enhancing engagement that leads to conversions.",
    },
    {
      question: "6. What kind of analytics does Media+ provide?",
      answer: "Media+ provides comprehensive analytics on video performance, audience engagement, and content effectiveness. These insights help you understand which content resonates with viewers and inform your future content strategies.",
    },
    {
      question: "7. Can Media+ integrate with my existing MAP tools like HubSpot?",
      answer: "Yes! Media+ integrates seamlessly with MAP tools like HubSpot, ensuring smooth synchronization with your existing systems.",
    },
    {
      question: "8. How many videos can I host in one Media+ site?",
      answer: "Our base plan allows you to host up to 25 videos on one Media+ site. If you need more capacity, add-ons are available for additional media sites and videos."
    }
  ];
  const faqContainer = document.querySelector(".faq-con");

  faqs.forEach((faq, index) => {
    const faqCard = document.createElement("div");
    faqCard.classList.add("faq-card");

    faqCard.innerHTML = `
      <h2 class="ques">
        ${faq.question}
        <span class="toggle-symbol">+</span>
      </h2>
      <p class="ans">${faq.answer}</p>
    `;

    faqCard.querySelector(".ques").addEventListener("click", function () {
      const answer = this.nextElementSibling;
      const symbol = this.querySelector(".toggle-symbol");

      if (answer.style.display === "block") {
        answer.style.display = "none";
        symbol.textContent = "+";
      } else {
        answer.style.display = "block";
        symbol.textContent = "-";
      }
    });

    faqContainer.appendChild(faqCard);
  });
});


// Media slider 

// profile slider
document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".mySwiper", {
    rewind: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});

// Media slider 
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
