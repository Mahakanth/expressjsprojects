module.exports = function(users, asyncLocalStorage) {
    const router = require('express').Router();
  
    router.get('/login', (req, res, next) => {
      res.send(`
        <form action="/grouppage" method="POST" onsubmit=localStorage.setItem(")>
          <input type="text" name="username" placeholder="Enter your username"><br><br>
          <button type="submit">Login</button>
        </form>
      `);
    });
  
    router.post('/login', async (req, res, next) => {
      const username = req.body.username;
      users[username] = username;
  
      // Store the username in async local storage
      try {
        await asyncLocalStorage.setItem('username', username);
        res.redirect('/grouppage');
      } catch (err) {
        console.error(err);
        res.status(500).send('Error saving username.');
      }
    });
  
    return router;
  };
  