async function getRank(req, res){
    const rank = await req.app.get('db').rank.getRank(req.session.user.user_id);
    req.session.rank ={
        abbreviation: rank[0].abbreviation,
        img: rank[0].img
    }
    res.status(200).json(req.session.rank);
}

module.exports ={
    getRank
}