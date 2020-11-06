import React, { Component } from 'react';
import axios from 'axios';

export default class ContactForm extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      mob: '',
      comment: '',
      success: false
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const enquiryBody = { ...this.state };
    delete enquiryBody.success;
    axios({
      method: 'post',
      url: 'http://localhost:8080/email',
      data: enquiryBody
    })
      .then(res => {
        if (res) this.setState({ success: true });
      })
      .catch(err => {
        console.log(err.message ? err.message : 'Unknown error');
      });
  };

  render() {
    const { firstName, lastName, email, mob, comment } = this.state;
    return (
      <div>
        <div
          className="row"
          className={this.state.success ? 'd-block' : 'd-none'}
        >
          <div className="text-success h3">Twoja wiadomośc została wysłana</div>
        </div>
        <form
          onSubmit={this.handleSubmit}
          className={!this.state.success ? 'd-block' : 'd-none'}
        >
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="firstName">Imię</label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  value={firstName}
                  onChange={e => this.setState({ firstName: e.target.value })}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="lastName">Nazwisko</label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  value={lastName}
                  onChange={e => this.setState({ lastName: e.target.value })}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  value={email}
                  onChange={e => this.setState({ email: e.target.value })}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="mob">Telefon</label>
                <input
                  type="text"
                  className="form-control"
                  id="mob"
                  value={mob}
                  onChange={e => this.setState({ mob: e.target.value })}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="form-group">
                <label htmlFor="comment">Wiadomość</label>
                <textarea
                  type="text"
                  className="form-control"
                  id="comment"
                  value={comment}
                  rows="4"
                  onChange={e => this.setState({ comment: e.target.value })}
                ></textarea>
              </div>
            </div>
          </div>
          <button className="btn btn-success btn-lg mt-3" type="submit">
            Wyślij
          </button>
        </form>
      </div>
    );
  }
}