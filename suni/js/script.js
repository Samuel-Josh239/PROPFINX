
  document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const botToken = '7570433967:AAFepyJ5WXLukXwE_98vadAa6ZFyL1s5Z2Q';
    const chatId = '2078260949';

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    const text = `New Contact Form Submission:\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`;

    const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(text)}`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data.ok) {
          alert('Message sent successfully!');
        } else {
          alert('Failed to send message.');
        }
      })
      .catch(error => {
        console.error('Error:', error);
        alert('An error occurred while sending the message.');
      });
  });