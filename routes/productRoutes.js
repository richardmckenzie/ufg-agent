const keys = require("../config/keys");
const mongoose = require("mongoose");
const Products = mongoose.model("products");
const http = require('https');

const PDFDocument = require('pdfkit');
const fs = require('fs');
const request = require('request');


var bodyParser = require('body-parser');
var pdf = require('html-pdf');



module.exports = app => {
  app.get("/api/products", async (req, res) => {
    Products.find({}, function(err, products) {
      var productArray = [];
      products.forEach(function(product) {
        console.log("%%%%%%%%%%%%%%" + product);

        productArray.push(product);
      });

      res.send(productArray);
    });
  });

  app.get("/api/refreshProducts", async (req, res) => {

    res.send("hi");
    
  });

  app.get("/api/generatePdf", async (req, res) => {
      //  const doc = new PDFDocument()
      //  let filename = 'fred'
      //  // Stripping special characters
      //  filename = encodeURIComponent(filename) + '.pdf'
        // Setting response to 'attachment' (download).
        // If you use 'inline' here it will automatically open the PDF
      //  res.setHeader('Content-disposition', 'attachment; filename="' + filename + '"')
      //  res.setHeader('Content-type', 'application/pdf')
       // const content = 'hello'
       // doc.y = 300
       // doc.text(content, 50, 50)
       // doc.pipe(res)
       // doc.end()


       var html = fs.readFileSync('./businesscard.html', 'utf8');
       // you may want to change this path dynamically if you also wish to keep the generated PDFs
       var pdfFilePath = './businesscard.pdf';
       var options = { format: 'Letter' ,
       orientation: 'landscape' };
   
       pdf.create(html, options).toFile(pdfFilePath, function(err, res2) {
           if (err){
               console.log(err);
               res.status(500).send("Some kind of error...");
               return;
           }
           fs.readFile(pdfFilePath , function (err,data){
               res.contentType("application/pdf");
               res.send(data);
           });
       });


      });



};