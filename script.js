function updateDateTime() {
    const now = new Date();

    const dateOptions = {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    };
    const dateString = now.toLocaleDateString('en-US', dateOptions);

    const timeString = now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });

    document.getElementById('date').textContent = dateString;
    document.getElementById('time').textContent = timeString;

    const hour = now.getHours();
    let greeting;

    if (hour < 12) {
        greeting = "Good morning, Arlan";
    } else if (hour < 18) {
        greeting = "Good afternoon, Arlan";
    } else {
        greeting = "Good evening, Arlan";
    }

    window.currentGreeting = greeting;
}

let isTyping = false;

function typeGreeting() {
    if (isTyping) return;

    const greetingElement = document.getElementById('greeting');
    const greeting = window.currentGreeting || "Good day, Arlan";
    const typingSpeed = 100;

    let i = 0;
    isTyping = true;
    greetingElement.textContent = "";

    function type() {
        if (i < greeting.length) {
            greetingElement.textContent += greeting.charAt(i);
            i++;
            setTimeout(type, typingSpeed);
        } else {
            isTyping = false; // Reset setelah selesai ngetik
        }
    }

    type();
}

function initPage() {
    updateDateTime();

    setTimeout(typeGreeting, 500);

    setInterval(updateDateTime, 1000);

    setInterval(() => {
        if (!isTyping) {
            const greetingElement = document.getElementById('greeting');
            greetingElement.textContent = "";
            setTimeout(typeGreeting, 500);
        }
    }, 30000);
}

document.addEventListener('DOMContentLoaded', initPage);

function addScanLineEffect() {
    const terminalBody = document.querySelector('.terminal-body');
    const scanLine = document.createElement('div');
    scanLine.classList.add('scan-line');
    terminalBody.appendChild(scanLine);
}

function addCRTEffect() {
    const terminalWindow = document.querySelector('.terminal-window');

    setInterval(() => {
        if (Math.random() > 0.99) {
            terminalWindow.style.opacity = '0.8';
            setTimeout(() => {
                terminalWindow.style.opacity = '1';
            }, 50);
        }
    }, 500);
}

window.addEventListener('load', () => {
    addScanLineEffect();
    addCRTEffect();
});