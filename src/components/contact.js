import React, { Component } from "react";

// components
import ContactModal from './contactModal';

class Contact extends Component {
    state = {
        name: '',
        email: '',
        phone: '',
        topic: '',
        message: '',
        modalIsOpen: false
    };

    openModal = () => {
        this.setState({
            modalIsOpen: true
        })
    }

    closeModal= () => {
        this.setState({
            modalIsOpen: false
        })
    }

    handleChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;

        this.setState({
            [key]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.openModal()
    }
    render() {
        return (
            <section id="contacts">
                <ContactModal data={this.state} closeModal={this.closeModal}/>
                <header className="contacts_header">
                    <h1>有任何問題嗎？馬上聯絡我們</h1>
                </header>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 contactForm_wrapper">
                            <form
                                action=""
                                className="contactForm container-fluid"
                                onSubmit={this.handleSubmit}
                            >
                                <div className="row">
                                    <label className="col-12 col-md-6">
                                        您的名字
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="名字"
                                            required
                                            onChange={this.handleChange}
                                        />
                                    </label>
                                    <label className="col-12 col-md-6">
                                        您的信箱
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="信箱"
                                            required
                                            onChange={this.handleChange}
                                        />
                                    </label>
                                    <label className="col-12 col-md-6">
                                        您的電話
                                        <input
                                            type="tel"
                                            name="phone"
                                            pattern="09[0-9]{8}"
                                            placeholder="電話"
                                            required
                                            onChange={this.handleChange}
                                        />
                                    </label>
                                    <label className="col-12 col-md-6">
                                        詢問主題
                                        <select
                                            name="topic"
                                            defaultValue="default"
                                            required
                                            onChange={this.handleChange}
                                        >
                                            <option
                                                value="default"
                                                disabled
                                                hidden
                                            >
                                                請選擇主題
                                            </option>
                                            <option value="project">
                                                專案開發
                                            </option>
                                            <option value="technical">
                                                技術諮詢
                                            </option>
                                            <option value="coporation">
                                                企業內訓
                                            </option>
                                            <option value="course">
                                                課程詢問
                                            </option>
                                            <option value="other">其他</option>
                                        </select>
                                    </label>
                                    <label className="col-12">
                                        您的訊息
                                        <textarea
                                            name="message"
                                            id=""
                                            cols="30"
                                            rows="10"
                                            placeholder="請留下您的訊息"
                                            required
                                            onChange={this.handleChange}
                                        ></textarea>
                                    </label>
                                </div>

                                <button>送出</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Contact;
