function Contact() {
  return (
    <div className="page">
      <div className="content">
        <h1>Contact Us</h1>

        <p>Have any questions? Feel free to get in touch with us.</p>

        <p>Email: contact@mywebsite.com</p>

        <p>Phone: (123) 456-7890</p>

        <h2>Send Us a Message</h2>

        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message"></textarea>

        <button>Send</button>
      </div>
    </div>
  )
}

export default Contact