const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

const hbs = exphbs.create({
  partialsDir: ['views/partials'],
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.get('/dashboard', (req, res) => {
  const items = ['item a', 'item b', 'item c'];

  res.render('dashboard', { items });
});

app.get('/post', (req, res) => {
  const post = {
    title: 'Aprender node js',
    category: 'Javascript',
    body: 'Este artigo vai te ajudar a aprender Node.Js',
    comments: 4,
  };

  res.render('blogpost', { post });
});

app.get('/blog', (req, res) => {
  const posts = [
    {
      title: 'Aprender node js',
      category: 'Javascript',
      body: 'Este artigo vai te ajudar a aprender Node.Js',
      comments: 4,
    },
    {
      title: 'Aprender PHP',
      category: 'Javascript',
      body: 'Este artigo vai te ajudar a aprender Node.Js',
      comments: 4,
    },
    {
      title: 'Aprender Pythom',
      category: 'Javascript',
      body: 'Este artigo vai te ajudar a aprender Node.Js',
      comments: 4,
    },
  ];

  res.render('blog', { posts });
});

app.get('/', (req, res) => {
  const user = {
    name: 'Matheus',
    surname: 'Bathist',
    age: 30,
  };

  const palavra = 'teste';

  const auth = true;

  const approved = true;

  res.render('home', { user: user, palavra, auth, approved });
});

app.listen(3000, () => {
  console.log('App Funcionando');
});
