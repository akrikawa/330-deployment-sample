const { Router } = require('express');
const router = Router();

router.use('/items', require('./items'));
router.get('/', (req, res, next) => {
  res.send(`
    <html>
      <body>
        <h1> Hello, world! </h1>
        <p>This is a change and let's see if it deploys.</p>
      </body>
    </html>
  `);
});

module.exports = router;
