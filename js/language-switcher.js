function setLanguage(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';
    localStorage.setItem('preferred-language', lang);

    // Update all translatable elements
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            if (element.tagName.toLowerCase() === 'input') {
                // For input elements, set the placeholder
                element.placeholder = translations[lang][key];
            } else {
                // For other elements, set the inner HTML
                element.innerHTML = translations[lang][key];
            }
        }
    });

    // Add appropriate font family based on language
    document.body.style.fontFamily = lang === 'fa' ? 'Vazirmatn, sans-serif' : 'Roboto, sans-serif';
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferred-language') || 'en';
    setLanguage(savedLang);
});
