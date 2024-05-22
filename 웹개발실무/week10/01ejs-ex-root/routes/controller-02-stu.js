// ./routes/controller-02.js
module.exports = function(app) {
    app.get('/', (req, res) => {
        res.send('ROOT 2');
    });

    app.get('/contact', (req, res) => {
        res.send('Contact Us 2');
    });
}