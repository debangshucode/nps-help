// script.js

document.getElementById('menuToggle').addEventListener('click', function() {
    var dropdownMenu = document.getElementById('dropdownMenu');
    if (dropdownMenu.style.display === 'block') {
        dropdownMenu.style.display = 'none';
    } else {
        dropdownMenu.style.display = 'block';
    }
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
