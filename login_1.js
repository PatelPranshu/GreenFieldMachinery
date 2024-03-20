        // Check session state on page load
        window.onload = function() {
            checkSession();
        };

        function checkSession() {
            var isLoggedIn = localStorage.getItem('isLoggedIn');

            if (isLoggedIn === 'true') {
                // User is logged in, show relevant content
                document.getElementById('loggedInContent').style.display = 'block';
                document.getElementById('loginForm').style.display = 'none';
            } else {
                // User is not logged in, show login form
                document.getElementById('loggedInContent').style.display = 'none';
                document.getElementById('loginForm').style.display = 'block';
            }
        }

        function login() {
            // Perform login logic
            // Assuming successful login, set session state
            localStorage.setItem('isLoggedIn', 'true');
            // Redirect to another page or update content as needed
            checkSession();
        }

        function logout() {
            // Perform logout logic
            // Clear session state
            localStorage.setItem('isLoggedIn', 'false');
            // Redirect to another page or update content as needed
            checkSession();
        }
        function storeName() {
            var name = document.getElementById('lname').value;
            localStorage.setItem('lname', name);
            // window.location.href = 'second_page.html'; // Redirect to the second page
        }
        