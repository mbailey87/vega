document.addEventListener('DOMContentLoaded', function() {
    // Event listener for Android button
    document.querySelectorAll('.androidButton').forEach(button => {
        button.addEventListener('click', function() {
            window.location.href = 'https://www.android.com';
        });
    });

    // Event listener for Apple button
    document.querySelectorAll('.appleButton').forEach(button => {
        button.addEventListener('click', function() {
            window.location.href = 'https://www.apple.com';
        });
    });

    // Event listener for the login button
    document.querySelector('.loginButton').addEventListener('click', function() {
        alert('Login');
    });
});
