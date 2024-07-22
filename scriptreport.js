document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('report-form');
    const confirmation = document.getElementById('confirmation');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        // Get form data
        const formData = new FormData(form);
        const name = formData.get('name');
        const email = formData.get('email');
        const issueType = formData.get('issue-type');
        const description = formData.get('description');

        // Here you would typically send the data to a server
        console.log({
            name,
            email,
            issueType,
            description
        });

        // Show confirmation message
        form.reset();
        confirmation.classList.remove('hidden');
    });
});