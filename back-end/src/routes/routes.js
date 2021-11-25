const { Router } = require('express');
const AuthController = require('../controllers/AuthController');
const BuyingController = require('../controllers/BuyingController');
const CartController = require('../controllers/CartController');
const CommentController = require('../controllers/CommentController');
const FavoritesController = require('../controllers/FavoritesController');
const PostController = require('../controllers/PostController');
const ProductController = require('../controllers/ProductController');
const QuestionController = require('../controllers/QuestionController');
const User_ShopController = require('../controllers/User_ShopController');
const UserController = require('../controllers/UserController');
const router = Router();
const adminMiddleware = require("../middlewares/admin");
const validator = require("../config/validator");
const passport = require("passport");

router.use("/private", passport.authenticate('jwt', {session: false}));

router.get('/private/getDetails', AuthController.getDetails);
router.post('/login', AuthController.login);

router.post('/logout', AuthController.logout);

router.get('/buys',BuyingController.index);
router.get('/buys/:id',BuyingController.show);
router.post('/buys', validator.validationBuying('create'), BuyingController.create);
router.put('/buys/:id', BuyingController.update);
router.delete('/buys/:id', BuyingController.destroy);

router.get('/carts',CartController.index);
router.get('/carts/:id',CartController.show);
router.post('/carts', validator.validationCart('create'), CartController.create);
router.put('/carts/:id', CartController.update);
router.delete('/carts/:id', CartController.destroy);

router.get('/comments',CommentController.index);
router.get('/comments/:id',CommentController.show);
router.post('/comments', validator.validationComment('create'), CommentController.create);
router.put('/comments/:id', CommentController.update);
router.delete('/comments/:id', CommentController.destroy);

router.get('/favorites_list',FavoritesController.index);
router.get('/favorites_list/:id',FavoritesController.show);
router.post('/favorites_list', FavoritesController.create);
router.put('/favorites_list/:id', FavoritesController.update);
router.delete('/favorites_list/:id', FavoritesController.destroy);

router.get('/posts',PostController.index);
router.get('/posts/:id',PostController.show);
router.post('/posts', validator.validationPost('create'), PostController.create);
router.put('/posts/:id', PostController.update);
router.delete('/posts/:id', adminMiddleware, PostController.destroy);

router.get('/products',ProductController.index);
router.get('/products/:id',ProductController.show);
router.post('/products', validator.validationProduct('create'), ProductController.create);
router.put('/products/:id', ProductController.update);
router.delete('/products/:id', ProductController.destroy);

router.get('/questions',QuestionController.index);
router.get('/questions/:id',QuestionController.show);
router.post('/questions', validator.validationQuestion('create'), QuestionController.create);
router.put('/questions/:id', QuestionController.update);
router.delete('/questions/:id', QuestionController.destroy);

router.get('/shops',User_ShopController.index);
router.get('/shops/:id',User_ShopController.show);
router.post('/shops', validator.validationUser_Shop('create'), User_ShopController.create);
router.put('/shops/:id', User_ShopController.update);
router.delete('/shops/:id', User_ShopController.destroy);

router.get('/users',UserController.index);
router.get('/users/:id',UserController.show);
router.post('/users', validator.validationUser('create'), UserController.create);
router.put('/users/:id', UserController.update);
router.delete('/users/:id', adminMiddleware, UserController.destroy);

module.exports = router;
