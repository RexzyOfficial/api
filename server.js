const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/deffa', (req, res) => {
  res.json({ message: 'Halo dari API DEFFA di Cyclic!' });
});

app.listen(port, () => {
  console.log(`API siap di port ${port}`);
});
