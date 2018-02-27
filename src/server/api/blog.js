// Dependencies
import express from 'express';

// Data
import posts from '../../data/posts.json';
import post from '../../data/post.json';

// Express Router
const Router = express.Router();

//rutas con get,  
Router.get('/posts', (req, res, next) => {
	// mostrar los datos cargados
  res.json(posts);
});

Router.get('/post', (req, res, next) => {
  res.json(post);
});

export default Router;
