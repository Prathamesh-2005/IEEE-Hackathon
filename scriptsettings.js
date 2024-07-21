document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('settings-form');
    const confirmation = document.getElementById('confirmation');
    const resetButton = document.getElementById('reset-button');

    const defaultSettings = {
        theme: 'light',
        currency: 'usd',
        notifications: false,
        emailReports: false,
        password: '',
        profileVisibility: 'public',
        refreshRate: '15min'
    };

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        // Get form data
        const formData = new FormData(form);
        const settings = {
            theme: formData.get('theme'),
            currency: formData.get('currency'),
            notifications: formData.get('notifications') === 'on',
            emailReports: formData.get('email-reports') === 'on',
            password: formData.get('password'),
            profileVisibility: formData.get('profile-visibility'),
            refreshRate: formData.get('refresh-rate')
        };

        // Here you would typically send the data to a server or save it in local storage
        console.log(settings);

        // Show confirmation message
        confirmation.classList.remove('hidden');
        setTimeout(() => {
            confirmation.classList.add('hidden');
        }, 3000);
    });

    resetButton.addEventListener('click', () => {
        form.reset();
        setFormValues(defaultSettings);
    });

    function setFormValues(settings) {
        form.querySelector('#theme').value = settings.theme;
        form.querySelector('#currency').value = settings.currency;
        form.querySelector('#notifications').checked = settings.notifications;
        form.querySelector('#email-reports').checked = settings.emailReports;
        form.querySelector('#password').value = settings.password;
        form.querySelector('#profile-visibility').value = settings.profileVisibility;
        form.querySelector('#refresh-rate').value = settings.refreshRate;
    }

    // Initialize form with default values
    setFormValues(defaultSettings);
});
