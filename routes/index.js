const { application } = require('express');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {

  let products = [
    {
      name: "Iphone",
      category: "Mobile",
      description: "This is a good phone",
      image: "https://cdn.vox-cdn.com/thumbor/v97OD-MBgNjw8p5crApucVs9RB8=/0x0:2050x1367/1800x1800/filters:focal(1025x684:1026x685)/cdn.vox-cdn.com/uploads/chorus_asset/file/22022572/bfarsace_201106_4269_012.0.jpg"
    },
    {
      name: "One plus",
      category: "Mobile",
      description: "This is a average phone",
      image: "https://cdn.vox-cdn.com/thumbor/v97OD-MBgNjw8p5crApucVs9RB8=/0x0:2050x1367/1800x1800/filters:focal(1025x684:1026x685)/cdn.vox-cdn.com/uploads/chorus_asset/file/22022572/bfarsace_201106_4269_012.0.jpg"
    },
    {
      name: "Realme",
      category: "Mobile",
      description: "This is a worst phone",
      image: "https://cdn.vox-cdn.com/thumbor/v97OD-MBgNjw8p5crApucVs9RB8=/0x0:2050x1367/1800x1800/filters:focal(1025x684:1026x685)/cdn.vox-cdn.com/uploads/chorus_asset/file/22022572/bfarsace_201106_4269_012.0.jpg"
    },
    {
      name: "Redmi",
      category: "Mobile",
      description: "This is a good phone",
      image: "https://cdn.vox-cdn.com/thumbor/v97OD-MBgNjw8p5crApucVs9RB8=/0x0:2050x1367/1800x1800/filters:focal(1025x684:1026x685)/cdn.vox-cdn.com/uploads/chorus_asset/file/22022572/bfarsace_201106_4269_012.0.jpg"
    }
  ]
  let name = req.session.name;
  let status = req.session.loggedIn
  res.render('index', { products, name, status });
});


module.exports = router;
