const express = require('express');
const router = express.Router();
const User = require('../model/user')
const Product = require('../model/product')
const jwt = require('jsonwebtoken')

// Signup
router.post("/signup", (req, res) => {
  const user = req.body.user;

  User.findOne({ username: user.username })
    .then((existingUser) => {
      if (existingUser) {
        res.json({
          success: false,
          message: "User already exists",
        });
      } else {
        const newUser = new User({
          username: user.username,
          password: user.password,
        });
        newUser
          .save()
          .then((savedUser) => {
            jwt.sign(
              { username: savedUser.username },
              "passwordformekong",
              (err, token) => {
                if (err) throw err;
                res.json({
                  success: true,
                  message: "User created",
                  token: token,
                });
              }
            );
          })
          .catch((err) => {
            throw err;
          });
      }
    })
    .catch((err) => {
      throw err;
    });
});


//authCheck
const authCheck = (req, res, next) => {
  const token = req.headers["x-access-token"];
  if (!token) {
    return res.status(401).json({
      success: false,
      message: "No token provided",
    });
  }
  jwt.verify(token, "passwordformekong", (err, decoded) => {
    if (err) {
      return res.status(401).json({
        success: false,
        message: "Token is not valid",
      });
    } else {
      req.decoded = decoded;
      next();
    }
  });
};


// Login
router.post("/login",  async (req, res) => {
  const user = req.body.user;
  try {
    const foundUser = await User.findOne({ username: user.username });
    if (!foundUser) {
      res.json({
        success: false,
        message: "User not found",
      });
    } else {
      if (user.password === foundUser.password) {
        const token = jwt.sign(
          { username: foundUser.username },
          "passwordformekong"
        );
        res.json({
          success: true,
          message: "User found",
          token: token,
        });
      } else {
        res.json({
          success: false,
          message: "Wrong password",
        });
      }
    }
  } catch (err) {
    throw err;
  }
});


// Add Product
router.post("/add/product", authCheck, (req, res) => {
  const product = req.body.product;
  const newProduct = new Product({
    name: product.name,
    casNo: product.casNo,
  });

  newProduct
    .save()
    .then(() => res.json("Product added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});


// delete product
router.delete("/del/product/:id", authCheck, (req, res) => {
  Product.findByIdAndDelete(req.params.id)
    .then((deletedProduct) => {
      if (!deletedProduct) {
        return res.status(404).json({ error: "Product not found" });
      }
      res.json({ message: "Product deleted successfully" });
    })
    .catch((err) => res.status(500).json({ error: err.message }));
})


// update product
router.put("/upd/product/:id", authCheck, async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body.product, {
      new: true,
    });
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Get All products
router.get("/products", (req, res) => {
  Product.find()
    .then((products) => res.json(products))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;