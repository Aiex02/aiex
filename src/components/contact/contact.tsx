'use client'
import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ContactSchema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  email: Yup.string().email('E-mail inválido').required('O e-mail é obrigatório'),
  phone: Yup.string().matches(/^[0-9]+$/, 'Número de celular inválido').required('O celular é obrigatório'),
  message: Yup.string().required('A mensagem é obrigatória'),
});

export function Contact() {
  const handleSubmit = (values: any, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) => {
    setSubmitting(false);
  };

  return (
    <div className='bg-zinc-800 '>
        <div className="max-w-7xl mx-auto p-12 bg-zinc-800 text-white">
          <div className='mt-28 shadow-2xl p-10'>
              <h1 className="text-3xl font-bold text-center mb-6">Entre em Contato</h1>
              <Formik
                initialValues={{
                  name: '',
                  email: '',
                  phone: '',
                  message: '',
                }}
                validationSchema={ContactSchema}
                onSubmit={handleSubmit}
              >
                <Form className="space-y-4">
                  <div className="flex flex-col md:flex-row md:space-x-4">
                    <div className="w-full md:w-1/2">
                      <label htmlFor="name" className="block font-medium">
                        Nome
                      </label>
                      <Field type="text" id="name" name="name" className="w-full p-2 border border-gray-300 rounded text-black" />
                      <ErrorMessage name="name" component="div" className="text-red-500" />
                    </div>
                    <div className="w-full md:w-1/2">
                      <label htmlFor="phone" className="block font-medium">
                        Celular
                      </label>
                      <Field type="text" id="phone" name="phone" className="w-full p-2 border border-gray-300 rounded text-black" />
                      <ErrorMessage name="phone" component="div" className="text-red-500" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block font-medium">
                      E-mail
                    </label>
                    <Field type="email" id="email" name="email" className="w-full p-2 border border-gray-300 rounded text-black" />
                    <ErrorMessage name="email" component="div" className="text-red-500" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block font-medium">
                      Mensagem
                    </label>
                    <Field as="textarea" id="message" name="message" className="w-full p-2 border border-gray-300 rounded text-black" />
                    <ErrorMessage name="message" component="div" className="text-red-500" />
                  </div>
                  <button type="submit" className="w-full bg-slate-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600">
                    Enviar
                  </button>
                </Form>
              </Formik>
          </div>
        </div>
    </div>
  );
}