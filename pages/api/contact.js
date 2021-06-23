import sgMail from '@sendgrid/mail'

export default async (req, res) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  const msg = {
    to: 'heartrei.therapies@gmail.com',
    from: 'heartrei.therapies@gmail.com',
    subject: 'New contact form submission',
    name: 'HeartRei Therapies',
    text: JSON.stringify(req.body),
  }

  try {
    await sgMail.send(msg)
    res.status(200).json({ message: 'Contact form sent successfully' })
  } catch (error) {
    res.status(500).json({ error: 'Server error when sending contact email' })
  }
}
