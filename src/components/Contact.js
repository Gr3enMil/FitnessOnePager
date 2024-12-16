// Contact.js
'use client';

import React, { useState } from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    goal: '',
    message: '',
    consent: false,
  });
  const [isOk, setIsOk] = useState(false);
  const [isError, setIsError] = useState(false);

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.consent && formData.firstName && formData.lastName && formData.email && formData.phone && formData.service && formData.goal) {
      try {
        const response = await fetch('/api/sendEmail', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setIsSubmitted(true);
          setIsOk(true);
        } else {
          setIsError(true);
          console.error('Failed to send email.');
        }
      } catch (error) {
        console.error('Error sending email:', error);
      }
    }
  };

  return (
    <div className={styles.contactFormContainer} id='contact'>
      <h1 className={styles.title}>Konzultace zdarma</h1>
      <form id="form" onSubmit={handleSubmit} className={styles.contactForm} aria-label="Formulář pro konzultaci zdarma">
        <div className={styles.formRow}>
          <input
            type="text"
            name="firstName"
            placeholder="Jméno*"
            value={formData.firstName}
            onChange={handleChange}
            className={styles.inputField}
            aria-required="true"
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Příjmení*"
            value={formData.lastName}
            onChange={handleChange}
            className={styles.inputField}
            aria-required="true"
            required
          />
        </div>
        <div className={styles.formRow}>
          <input
            type="email"
            name="email"
            placeholder="E-mail*"
            value={formData.email}
            onChange={handleChange}
            className={styles.inputField}
            aria-required="true"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Telefon (WhatsApp)*"
            value={formData.phone}
            onChange={handleChange}
            className={styles.inputField}
            aria-required="true"
            required
          />
        </div>
        <div className={styles.formRow}>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className={styles.selectField}
            aria-required="true"
            required
          >
            <option value="">Poptávám*</option>
            <option value="konzultace">Konzultace</option>
            <option value="trénink">Trénink</option>
          </select>
          <select
            name="goal"
            value={formData.goal}
            onChange={handleChange}
            className={styles.selectField}
            aria-required="true"
            required
          >
            <option value="">Tvůj cíl*</option>
            <option value="zhubnout">Hubnutí</option>
            <option value="nabrat svaly">Nárůst svalové hmoty</option>
          </select>
        </div>
        <textarea
          name="message"
          placeholder="Zpráva s dalšími informacemi (nepovinné pole)"
          value={formData.message}
          onChange={handleChange}
          className={styles.textareaField}
          aria-label="Zpráva s dalšími informacemi (nepovinné pole)"
        ></textarea>
        <div className={styles.consentContainer}>
        <label className={styles.consentLabel}>
          <input
            type="checkbox"
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
            className={styles.checkbox}
            aria-required="true"
            required
          />
          <span className={styles.customBox}></span>
          Souhlasím se zpracováním osobních údajů
          </label>
        </div>
        <button type="submit" className={styles.submitButton} disabled={!formData.consent || isSubmitted}>
          ODESLAT
        </button>
        <div className={styles.message}>
          {isOk && <p className={styles.successMessage}>Požadavek byl úspěšně odeslán.</p>}
          {isError && <p className={styles.errorMessage}>Něco se pokazilo. Kontaktujte nás emailem.</p>}
        </div>
      </form>
    </div>
  );
};

export default Contact;
