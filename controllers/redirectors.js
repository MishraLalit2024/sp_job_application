function home(req,res){
    res.redirect(302, '/home');
}

function homeRenderer(req, res){
    res.render('form')
}



module.exports = {home, homeRenderer};