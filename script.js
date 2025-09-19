document.addEventListener("DOMContentLoaded", function() {
  // Initialize Swiper slider
  const swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: { delay: 5000},
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  // Change text on Home link click
  window.changeText = function(ids) {
    ids.innerHTML = "Ooops!";
    setTimeout(() => {
      ids.innerHTML = "Home";
    }, 1000);
  };

  // Contact form submit handler
  const contactForm = document.getElementById('contactForm');
  contactForm.addEventListener('submit', async function(e) {
    e.preventDefault();

    const name = this.name.value.trim();
    const email = this.email.value.trim();
    const message = this.message.value.trim();

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });

      const result = await response.json();

      if (response.ok) {
        alert('Your message was sent successfully!');
        this.reset();
      } else {
        alert(result.error || 'There was a problem submitting your form.');
      }
    } catch (err) {
      console.error('Submission error:', err);
      alert('Something went wrong. Try again later.');
    }
  });

  // Search elements
  const search = document.getElementById('search');
  const button_search = document.getElementById('button-search');

  button_search.addEventListener('click', () => {
    const query = search.value.trim();
    if (!query) {
      alert("Please enter a search term.");
      return;
    }
    // Implement your search functionality here, example:
    alert(`You searched for: ${query}`);
  });

  // Optional: orderNow function used in your HTML button
  window.orderNow = function() {
    alert("Order feature coming soon!");
  };
});

document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("search");
  const searchButton = document.getElementById("button-search");
  const menuItems = document.querySelectorAll(".menu-item");

  // Main function to filter menu items
  function filterMenu() {
    const query = searchInput.value.toLowerCase().trim();

    menuItems.forEach(item => {
      const title = item.querySelector("h3")?.textContent.toLowerCase() ;
      const description = item.querySelector("p")?.textContent.toLowerCase() ;
      const imgAlt = item.querySelector("img")?.alt.toLowerCase() ;
      const imgSrc = item.querySelector("img")?.src.toLowerCase() ;

      const matches =
        title.includes(query) ||
        description.includes(query) ||
        imgAlt.includes(query) ||
        imgSrc.includes(query);

      // Show all items if search is empty, otherwise show only matches
      item.style.display = query === "" || matches ? "block" : "none";
    });
  }

  // Search button click
  searchButton.addEventListener("click", filterMenu);

  // Live search while typing
  searchInput.addEventListener("input", filterMenu);
});


// Wait until DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.getElementById('sidebar');
  const openBtn = document.getElementById('sidebarToggle');
  const closeBtn = document.getElementById('sidebarClose');

  // Function to open sidebar
  function openSidebar() {
    sidebar.style.display = 'block';
  }

  // Function to close sidebar
  function closeSidebar() {
    sidebar.style.display = 'none';
  }

  // Attach open event
  openBtn.addEventListener('click', openSidebar);

  // Attach close event
  closeBtn.addEventListener('click', closeSidebar);

  // Close sidebar on clicking any sidebar link
  sidebar.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeSidebar);
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.getElementById('sidebar');
  const openBtn = document.getElementById('sidebarToggle');
  const closeBtn = document.getElementById('sidebarClose');

  function openSidebar() {
    sidebar.classList.add('open');
    document.body.classList.add('sidebar-open');
  }

  function closeSidebar() {
    sidebar.classList.remove('open');
    document.body.classList.remove('sidebar-open');
  }

  openBtn.addEventListener('click', openSidebar);
  closeBtn.addEventListener('click', closeSidebar);

  // Also close sidebar if clicking on a link inside it
  sidebar.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeSidebar);
  });

  // Optional: close sidebar when clicking outside it
  document.addEventListener('click', (e) => {
    if (!sidebar.contains(e.target) && !openBtn.contains(e.target)) {
      closeSidebar();
    }
  });
});

