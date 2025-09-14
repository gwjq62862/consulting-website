
    const toggle = document.getElementById('kali');
    const body = document.body;

    
    if (localStorage.getItem('theme') === 'dark') {
      body.classList.add('dark-mode');
      toggle.checked = true;
    } else {
      body.classList.remove('dark-mode');
      toggle.checked = false; 
    }

    
    toggle.addEventListener('change', () => {
      if (toggle.checked) {
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
      } else {
        body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
      }
    });