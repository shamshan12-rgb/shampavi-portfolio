import Section from './Section.jsx'
import Button from './Button.jsx'
import { site } from '../data/site.js'
import './Contact.css'

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M3 5h18v14H3zM3 6l9 7 9-7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49v-1.72c-2.78.62-3.37-1.2-3.37-1.2-.46-1.19-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .08 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.94.86.09-.67.35-1.12.64-1.38-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.02-2.75.1-.26-.44-1.31.1-2.72 0 0 .83-.27 2.75 1.05A9.18 9.18 0 0 1 12 7.05c.84 0 1.69.12 2.48.36 1.92-1.32 2.75-1.05 2.75-1.05.54 1.41.2 2.46.1 2.72.63.72 1.02 1.63 1.02 2.75 0 3.93-2.34 4.8-4.57 5.05.36.32.68.94.68 1.9v2.81c0 .27.18.59.69.49A10.27 10.27 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z"
      />
    </svg>
  )
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M5.2 3.5A2.5 2.5 0 1 1 5.2 8a2.5 2.5 0 0 1 0-4.5ZM3 9.5h4.4V21H3V9.5Zm7 0h4.2v1.57h.06c.58-1.1 2-2.25 4.1-2.25 4.38 0 5.19 2.89 5.19 6.64V21h-4.4v-4.9c0-1.17-.02-2.67-1.63-2.67-1.63 0-1.88 1.27-1.88 2.58V21H10V9.5Z"
      />
    </svg>
  )
}

function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault()

    if (!site.email) {
      alert('Please add your email address in site.js first.')
      return
    }

    const form = event.target
    const name = form.name.value
    const email = form.email.value
    const message = form.message.value

    const subject = encodeURIComponent(
      `Portfolio Message from ${name}`
    )

    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )

    window.location.href =
      `mailto:${site.email}?subject=${subject}&body=${body}`
  }

  return (
    <Section
      id="contact"
      eyebrow="Get in touch"
      title="Let's Connect"
      s
    >
      <div className="contact-layout">
        <article className="contact-card">

          <div className="contact-icon">
            <MailIcon />
          </div>

          <div className="contact-content">

            <h3>Let's start a conversation</h3>

            <p>
            <p>
  Open to professional opportunities, collaborations, and meaningful
  projects where I can contribute, learn, and grow.
</p>
            </p>

            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >

              <div className="contact-form-row">

                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  required
                />

              </div>

              <textarea
                name="message"
                placeholder="Your message"
                rows="5"
                required
              />

              <button
                type="submit"
                className="contact-send"
              >
                Send Message
              </button>

            </form>

            <div className="contact-actions">

              <Button
                href={
                  site.email
                    ? `mailto:${site.email}`
                    : undefined
                }
                disabled={!site.email}
                aria-label="Email"
              >
                <MailIcon />
              </Button>

              <Button
                href={site.github || undefined}
                disabled={!site.github}
                aria-label="GitHub"
              >
                <GithubIcon />
              </Button>

              <Button
                href={site.linkedin || undefined}
                disabled={!site.linkedin}
                aria-label="LinkedIn"
              >
                <LinkedinIcon />
              </Button>

            </div>

          </div>
        </article>
      </div>
    </Section>
  )
}

export default Contact