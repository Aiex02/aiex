'use client'
import 'tailwindcss/tailwind.css';

import React, { useState } from 'react';

const EmailForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false); // Estado para controlar o envio em andamento

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors: Partial<typeof errors> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Nome é obrigatório';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'E-mail é obrigatório';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'E-mail inválido';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Mensagem é obrigatória';
      isValid = false;
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      ...newErrors,
    }));

    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isSubmitting && validateForm()) {
      setIsSubmitting(true); // Inicia o envio

      try {
        const response = await fetch('/api/sendEmail', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setSubmissionMessage('E-mail enviado com sucesso');
          setIsSubmitted(true);
          setFormData({ name: '', email: '', message: '' });
        } else {
          setSubmissionMessage('Erro ao enviar o e-mail');
          setIsSubmitted(true);
        }
      } catch (error) {
        console.error('Erro ao enviar o e-mail:', error);
      } finally {
        setIsSubmitting(false); // Completa o envio
      }
    } else {
      console.log('Formulário inválido ou envio em andamento');
    }
  };

  return (
    <div id='contact' className="bg-zinc-800 py-20 flex items-center justify-center">
      <div className="bg-zinc-800 p-4 shadow-2xl w-full md:mx-96">
        <h2 className="text-2xl p-2 text-center font-semibold text-white">Contato</h2>
        <form onSubmit={handleSubmit} className="p-10 mx-auto mb-10">
          <div className="mb-6">
            <label htmlFor="name" className="block text-sm font-bold mb-2 text-white">
              Nome:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 leading-tight focus:outline-none focus:shadow-outline"
            />
            <span className="text-red-500 text-xs">{errors.name}</span>
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-bold mb-2 text-white">
              E-mail:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 leading-tight focus:outline-none focus:shadow-outline"
            />
            <span className="text-red-500 text-xs">{errors.email}</span>
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-bold mb-2 text-white">
              Mensagem:
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 leading-tight focus:outline-none focus:shadow-outline"
            />
            <span className="text-red-500 text-xs">{errors.message}</span>
          </div>

          <button
            type="submit"
            className={`bg-blue-500 w-full text-white px-4 py-2 rounded ${
              isSubmitting ? 'opacity-50 pointer-events-none' : ''
            }`}
          >
            {isSubmitting ? 'Enviando...' : 'Enviar'}
          </button>
        </form>

        {isSubmitted && <p className="text-white text-center mt-2">{submissionMessage}</p>}
      </div>
    </div>
  );
};

export default EmailForm;
