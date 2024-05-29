import React from 'react'
export default function Contacts() {
    return (
        <div className="container">
            <section id="contact-info">
                <h2>Contact Information</h2>
                <p>Feel free to reach out to us via phone or email. You can also visit our showroom during business hours.</p>
                <ul>
                    <li><strong>Phone:</strong> +1 (555) 123-4567</li>
                    <li><strong>Email:</strong> info@immoniti.com</li>
                    <li><strong>Address:</strong> 123 Main Street, City, Country</li>
                    <li><strong>Showroom Hours:</strong> Monday-Friday: 9am-6pm, Saturday: 10am-4pm</li>
                </ul>
            </section>
            <section id="contact-form">
                <h2>Get In Touch</h2>
                <form action="#">
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" required/>
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required/>
                    <label for="message">Message:</label>
                    <textarea id="message" name="message" rows="4" required></textarea>
                    <button type="submit">Send Message</button>
                </form>
            </section>
        </div>
    )
}