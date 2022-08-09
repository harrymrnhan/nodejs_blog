
class SiteController {

    // [GET] /
    index (req, res) {
        res.render('home');
    }

    // [GET] /
    home (req, res) {
        res.render('home');
    }

    // [GET] /search
    search (req, res) {
        res.render('search');
    }

    // [GET] /show
    show (req, res) {
        res.send('Show Detail !!');
    }

}

module.exports = new SiteController;