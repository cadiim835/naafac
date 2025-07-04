document.addEventListener('DOMContentLoaded', () => {
    const forms = document.querySelectorAll('form');

    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            // Simple validation: hubi in dhammaan inputs iyo textarea ay buuxaan
            let valid = true;
            const inputs = form.querySelectorAll('input, select, textarea');

            inputs.forEach(input => {
                if (!input.value.trim()) {
                    valid = false;
                    input.style.borderColor = 'red';
                } else {
                    input.style.borderColor = '#ccc';
                }
            });

            if (!valid) {
                alert('Fadlan buuxi dhammaan xogaha muhiimka ah.');
                return;
            }

            // Haddii xogtu sax tahay, tus farriin guul
            alert('Foomkaaga waa la gudbiyey, mahadsanid!');

            // Halkan waxaad ku dari kartaa code backend ah haddii aad rabto
            form.reset();
        });
    });
});
