async function getCharacter(req, res){
    const character = await req.app.get('db').character.getCharacter(req.session.user.user_id);
    req.session.character = {
        experience: character[0].experience,
        max_experience: character[0].max_experience
    }
    res.status(200).json(req.session.character)
}

async function updateCharacter(req, res){
    const {points} = req.body
    const {user_id} = req.session.user;
    const char = await req.app.get('db').character.editCharacter(points, user_id);
    
    
    res.status(200).json(char[0]);
}


module.exports ={
    getCharacter,
    updateCharacter
}