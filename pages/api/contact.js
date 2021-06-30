import sgMail from '@sendgrid/mail'

export default async (req, res) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)

  const { name, email, phone, message } = req.body

  const msg = {
    to: 'heartrei.therapies@gmail.com',
    from: 'no-reply@heartrei.co.uk',
    templateId: process.env.SENDGRID_TEMPLATE_ID,
    substitutionWrappers: ['{{', '}}'],
    dynamic_template_data: {
      subject: `New message from ${name}`,
      name,
      email,
      phone,
      message,
    },
  }

  try {
    await sgMail.send(msg)
    res.status(200).json({ message: 'Contact form sent successfully' })
  } catch (error) {
    res.status(500).json({ error: 'Server error when sending contact email' })
  }
}
