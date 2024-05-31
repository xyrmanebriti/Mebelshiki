import React from 'react'
import {Bounce, toast} from "react-toastify";
export default class Account extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            password: '',
            passwordRepeat:''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    logout(){
        toast.warn('You have been logged out', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
        })
    }
    handleSubmit(event) {
        if(this.state.password===this.state.passwordRepeat){
            toast.success("Password has been changed", {
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
        }
        else{
            toast.error("Passwords are different", {
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
        }
        event.preventDefault();
    }

    render() {
        return (
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
                    <form onSubmit={this.handleSubmit}>
                        <label for="current-password">Current Password:</label>
                        <input type="password" id="current-password" name="current-password" required/>
                        <label for="new-password">New Password:</label>
                        <input type="password" id="password" name="password" required value={this.state.password} onChange={this.handleChange}/>
                        <label for="confirm-password">Confirm New Password:</label>
                        <input type="password" id="passwordRepeat" name="passwordRepeat" required value={this.state.passwordRepeat} onChange={this.handleChange}/>
                        <button type="submit">Change Password</button>
                    </form>
                </section>
                <section id="logout" className="section-container">
                    <h2>Logout</h2>
                    <br></br>
                    <p>If you're finished, you can logout from your account.</p>
                    <br></br>
                    <button onClick={this.logout}>Logout</button>
                </section>
            </div>
        )
    }
}