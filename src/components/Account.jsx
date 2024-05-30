import React from 'react'
export default function Account(){
    return(
        <div className="container">
            <section id="account-info">
                <h2>Account Information</h2>
                <p>Welcome back! Here is your account information:</p>
                <ul>
                    <li><strong>Name:</strong> John Doe</li>
                    <li><strong>Email:</strong> johndoe@example.com</li>
                    <li><strong>Address:</strong> 123 Main Street, City, Country</li>
                    <li><strong>Phone:</strong> +1 (555) 123-4567</li>
                </ul>
            </section>
            <section id="change-password" className="section-container">
                <h2>Change Password</h2>
                <form action="#" method="post">
                    <label for="current-password">Current Password:</label>
                    <input type="password" id="current-password" name="current-password" required/>
                    <label for="new-password">New Password:</label>
                    <input type="password" id="new-password" name="new-password" required/>
                    <label for="confirm-password">Confirm New Password:</label>
                    <input type="password" id="confirm-password" name="confirm-password" required/>
                    <button type="submit">Change Password</button>
                </form>
            </section>
            <section id="logout" className="section-container">
                <h2>Logout</h2>
                <br></br>
                <p>If you're finished, you can logout from your account.</p>
                <br></br>
                <button onClick="logout()">Logout</button>
            </section>
        </div>
    )
}