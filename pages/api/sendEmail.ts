import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Configurar o transporte do nodemailer (use suas próprias credenciais)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      
      auth: {
        user: process.env.USERMAIL,
        pass: process.env.PASSMAIL,
      },
    });

    // Configurar o e-mail a ser enviado
    const mailOptions = {
      from: process.env.USERMAIL,
      to: process.env.USERMAIL, // Troque pelo e-mail de destino
      subject: 'Novo e-mail do formulário de contato',
      text: `Nome: ${name}\nE-mail: ${email}\nMensagem: ${message}`,
    };

    try {
      // Enviar o e-mail
      await transporter.sendMail(mailOptions);

      console.log('E-mail enviado com sucesso');
      res.status(200).json({ success: true });
    } catch (error) {
      console.error('Erro ao enviar o e-mail:', error);
      res.status(500).json({ success: false, error: 'Erro ao enviar o e-mail' });
    }
  } else {
    res.status(405).json({ error: 'Método não permitido' });
  }
}
