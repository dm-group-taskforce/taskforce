async function getUserData(req, res) {
    const chart = await req.app.get('db').chart.getChartData(req.session.user.user_id);
    res.status(200).json(chart); 
}

module.exports = {
    getUserData
}