// script.js

document.getElementById('menuToggle').addEventListener('click', function() {
    var dropdownMenu = document.getElementById('dropdownMenu');
    if (dropdownMenu.style.display === 'flex') {
        dropdownMenu.style.display = 'none';
        menuToggle.textContent = 'Menu';
    } else {
        dropdownMenu.style.display = 'flex';
        menuToggle.textContent = 'Close';
    }
});

document.addEventListener('DOMContentLoaded', function() {
    var popup = document.getElementById('popup');
    var closeBtn = document.querySelector('.close-btn');

    if (!popup || !closeBtn) {
        console.error('One or more elements are not found.');
        return;
    }

    closeBtn.addEventListener('click', function() {
        popup.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });
});

// script.js

document.getElementById('readMoreBtn').addEventListener('click', function() {
    var content = document.querySelector('.content');
    content.classList.toggle('expanded');
    var btn = document.getElementById('readMoreBtn');
    if (content.classList.contains('expanded')) {
        btn.textContent = 'Read Less';
    } else {
        btn.textContent = 'Read More';
    }
});


document.getElementById('readMoreBtn').addEventListener('click', function() {
    var content = document.querySelector('.talk');
    content.classList.toggle('expanded');
    var btn = document.getElementById('readMoreBtn');
    if (content.classList.contains('expanded')) {
        btn.textContent = 'Read Less';
    } else {
        btn.textContent = 'Read More';
    }
});
document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll('.counter');
    const speed = 500; // The lower the number, the faster the count

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;

            // Lower increment to slow and higher to speed
            const increment = target / speed;

            // Check if target is reached
            if (count < target) {
                // Add increment
                counter.innerText = Math.ceil(count + increment);
                // Call function every 1 millisecond
                setTimeout(updateCount, 1);
            } else {
                counter.innerText = target;
            }
        };

        updateCount();
    });
});
