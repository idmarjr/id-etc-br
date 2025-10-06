// Google Analytics configuration
// Replace "YOUR-GA-ID" at lines 5 and 11 with your Google Analytics Id
const script = document.createElement('script');
script.async = true;
script.src = 'https://www.googletagmanager.com/gtag/js?id=YOUR-GA-ID';
document.head.appendChild(script);

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'YOUR-GA-ID');