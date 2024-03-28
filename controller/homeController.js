const homecontroller = (req, res) => {
    res.render('index', { 'title': 'Home || Pramod Chaudhary' })
}

module.exports = homecontroller;