// ./quiz01_movie/app.js

var http = require('http');
var fs = require('fs');
var querystring = require('querystring');
var pathUtil = require('path');
var url = require('url');
var formidable = require('formidable');

var uploadDir = __dirname + '/upload';
var imageDir = __dirname + '/images';

var initialDB = fs.readFileSync('./initialDB.json');
var movieList = JSON.parse(initialDB);

var server = http.createServer(function (req, res) {
   if ( req.method.toLowerCase() == 'get' && req.url == '/' ) {
      showList(req, res);
   }
   else if ( req.method.toLowerCase() == 'get' ) {
      // 이미지
      var parsed = url.parse(req.url);
      var path = __dirname + parsed.pathname;
      fs.access(path, fuction(err) {
         
      });
   }
   else if ( req.method.toLowerCase() == 'post') {
      
   }
   else {
      res.statusCode = 400;
      res.end('Error');
   }
});

server.listen(3000);

function addNewMovie(req, res) {
   var form = new formidable.IncomingForm();
   form.keepExtenstion = true;
   form.uploadDir = uploadDir;
   form.parse(req, function(err, fields, files) {
      if ( err ) {
         res.statusCode = 404;
         res.end('Error');
         return;
      }

      //poster.path;

      
       
   });

}

function showList(req, res) {
   var html = '<html>';
   html += '<head>';
   html += '<meta charset="utf-8">';
   html += '<style>';
   html += 'form label { width:100px; display:inline-block; }'
   html += 'li img { height:100px }';
   html += '</style>';
   html += '</head>';
   html += '<body>';
   html += '<h1>Favorite Movie</h1>';
   html += '<div>';
   html += '<ul>';

      html += '<li>';




   });
   html += '</ul>';
   html += '</div>';
   
   html += '<form method="post" action="." enctype="multipart/form-data">';
   html += '<h4>새 영화 입력</h4>';
   html += '<ul>';
   html += '<li><label>영화 제목</label><input type="text" name="title"></li>';
   html += '<li><label>영화 감독</label><input type="text" name="director"></li>';
   html += '<li><label>연도</label><input type="number" name="year"></li>';
   html += '<li><label>포스터</label><input type="file" name="poster"></li>';   
   html += '</ul>';
   html += '<input type="submit" value="올리기">';
   html += '</form>';
   
   html += '</body>';
   html += '</html>';

// 여기에 작성
   res.      ;
}
