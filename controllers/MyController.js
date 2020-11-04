module.exports= {
    FirstPage:function(req, res){
        res.render('index', { title: 'Send an array to a view' });},
    UraPage:function(req, res){
        var postdata = req.body;
        res.render('ura', { data: postdata});},
}
