module.exports = function(users, fs) {
    const router = require('express').Router();
  
    router.get('/grouppage', async (req, res, next) => {
      const username = users[req.cookies.username] || 'Guest';
      try {
        const data = await fs.readFile('chat_messages.txt', 'utf8');
        const messages = data.split('\n');
        res.send(`
          <h1>Welcome to the Group Chat</h1>
          <p>Logged in as: ${username}</p>
          <ul>
            ${messages.map((message) => `<li>${message}</li>`).join('')}
          </ul>
          <form action="/grouppage" method="POST">
            <input type="text" name="message" placeholder="Type your message"><br><br>
            <button type="submit">Send</button>
          </form>
        `);
      } catch (err) {
        console.error(err);
        res.status(500).send('Error reading messages.');
      }
    });
  
    router.post('/grouppage', async (req, res, next) => {
      const message = req.body.message;
      const username = users[req.cookies.username] || 'Guest';
      const newMessage = `${username}: ${message}\n`;
      try {
        await fs.appendFile('chat_messages.txt', newMessage);
        console.log('Message saved to file');
        res.redirect('/grouppage');
      } catch (err) {
        console.error(err);
        res.status(500).send('Error saving message.');
      }
    });
  
    return router;
  };
  