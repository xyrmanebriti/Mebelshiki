import React from 'react'
import {Bounce, toast} from "react-toastify";
export default class Contacts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email:'',
            message:''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        toast.success(this.state.name+", your message has been sent", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
        });
        event.preventDefault();
    }
    render() {
        return (
            <div className="container">
                <section id="contact-info">
                    <h2>Contact Information</h2>
                    <br></br>
                    <p>Feel free to reach out to us via phone or email. You can also visit our showroom during business hours.</p>
                    <br></br>
                    <ul>
                        <li><strong>Phone:</strong> +1 (555) 123-4567</li>
                        <li><strong>Email:</strong> info@immoniti.com</li>
                        <li><strong>Address:</strong> 123 Main Street, City, Country</li>
                        <li><strong>Showroom Hours:</strong> Monday-Friday: 9am-6pm, Saturday: 10am-4pm</li>
                    </ul>
                </section>
                <section id="contact-form">
                    <h2>Get In Touch</h2>
                    <br></br>
                    <form onSubmit={this.handleSubmit}>
                        <label for="name">Name:</label>
                        <input type="text" id="name" name="name" required value={this.state.name} onChange={this.handleChange}/>
                        <label for="email">Email:</label>
                        <input type="email" id="email" name="email" required value={this.state.email} onChange={this.handleChange}/>
                        <label for="message">Message:</label>
                        <textarea id="message" name="message" rows="4" required value={this.state.message} onChange={this.handleChange}></textarea>
                        <button type="submit">Send Message</button>
                    </form>
                </section>
            </div>
        )
    }
}