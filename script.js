document.addEventListener('DOMContentLoaded', function () {
    const sections = {
        about: document.getElementById('about'),
        education: document.getElementById('education'),
        skills: document.getElementById('skills'),
        gallery: document.querySelector('.gallery'),
    };

    const links = document.querySelectorAll('.navbar a');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);

        
            if (targetId === 'about') {
                sections.about.style.display = 'block';
                sections.gallery.style.display = 'flex';
            }

            if (targetId === 'education') {
                sections.education.style.display = 'block';
            }

            if (targetId === 'skills') {
                sections.skills.style.display = 'block';
            }

            
            const target = document.getElementById(targetId);
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});
