 function toggleDropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  // Close dropdown if clicked outside
  window.onclick = function(event) {
    if (!event.target.matches('.navigation-btn')) {
      document.querySelectorAll(".dropdown-content").forEach(function(dropdown) {
        dropdown.classList.remove('show');
      });
    }
  };