# product-options

Welcome to Mykea!

## Data Schema

```
const reviewSchema = mongoose.Schema({
  overallRating: { type: Number, min: 1, max: 5},
  easeOfAssembly: { type: Number, min: 1, max: 5},
  valueForMoney: { type: Number, min: 1, max: 5},
  productQuality: { type: Number, min: 1, max: 5},
  appearance: { type: Number, min: 1, max: 5},
  worksAsExpected: { type: Number, min: 1, max: 5},
  header: String,
  body: String,
  createdAt: Date,
  iRecommendThisProduct: Boolean
 })

 const itemSchema = mongoose.Schema({
  title: String,
  description: String,
  price: {
    originalPrice: Number,
    salePrice: Number
  },
  colors: [String],
  sizes: [String],
  liked: Boolean,
  inStock: Number,
  reviews: [reviewSchema],
  id: String
 })
 ```
 
 The data is split into two models: reviews and items. The former documents are attributed as a subdocument for each item document. This means all reviews are children of their relevant items. 
 
## Setup

Faux data is installed for you via an npm postinstall script - meaning the database is ready to go upon install. Besides that, run `npm run build` to bundle the pack, and `npm start` to kick off the server. The server runs on port 3000. Please note, the build is optimized for production deployment. If you want to launch in development mode, please change the requisite `mode` key in the `webpack.config.js` to development. If you plan to deploy, keep as is to ensure speedy module load.

Bundled JS code served up via `'/client/dist/main.js`.

For convenience, a delete all endpoint is available via root with a delete request - no parameters needed. To reseed simply run `npm run postinstall`

## Server Endpoints

`'/api/productOptions/products/:id', get` will pull the relevant product based on an id of 1-100
`'/api/productOptions/products/:id', patch` is an unimplemented endpoint to toggle whether a product is liked by a future, logged in user
`'/api/productOptions/products/:id'/reviews, post` is an unimplemented endpoint to save new product reviews if implemented in the future
`'/products/*'` is a catch all endpoint that ensured the HTML is sent on every product request. 
`'/', delete` deletes all current data from mongodb
 
 ## Server Middleware
`app.use(express.json());` enables json parsing to req.body
`app.use('/products', express.static('./client/dist'));` opens up index.html and bundle for /product, ensuring the bundle is readable on new item fetch
`app.use('/', express.static('./client/dist'));` opens up index.html and bundle for root
`app.use(compression());` compresses text based response data to speed up performance

