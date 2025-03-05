document.getElementById('personal-loan-form').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent the form from submitting the traditional way

  // Get form data
  const formData = new FormData(this);
  const data = {};
  formData.forEach((value, key) => {
    data[key] = value;
  });

  // Compose the message
  const message = `
  New Personal Loan Application:

  **Personal Details:**
  Full Name: ${data['name']}
  Gender: ${data['gender']}
  Phone Number: ${data['phone']}
  Employment Type: ${data['employment']}
  Salary: ₹${data['salary']}
  Current Address: ${data['address']}

  **Loan Details:**
  Loan Amount: ₹${data['loan-amount']}
  `;

  console.log('Message:', message); // Debug: Check the message content

  // Telegram Bot Token and Chat ID
  const BOT_TOKEN = '7570433967:AAFepyJ5WXLukXwE_98vadAa6ZFyL1s5Z2Q'; // Replace with your bot token
  const CHAT_ID = '2078260949'; // Replace with your chat ID

  // Send the message to Telegram
  const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text: message,
    }),
  })
    .then(response => response.json())
    .then(data => {
      console.log('Telegram API Response:', data); // Debug: Check the API response
      if (data.ok) {
        alert('Form submitted successfully!');
        this.reset(); // Reset the form after successful submission
      } else {
        alert('Failed to submit the form. Please try again.');
      }
    })
    .catch(error => {
      console.error('Error:', error); // Debug: Check for errors
      alert('An error occurred. Please try again.');
    });
});