async function getTasks(req, res){
    const tasks = await req.app.get('db').tasks.getTasks(req.session.user.user_id);
    res.status(200).json(tasks);
}

async function addTask(req, res){
    const {user_id} = req.session.user;
    const {content, time, type, points} = req.body;
    const tasks = await req.app.get('db').tasks.addTask(user_id, content, time, type, points)
    res.status(200).json(tasks)
}

async function editTask(req, res){
    const {id} = req.params;
    const {user_id} = req.session.user;
    const {content, time, type, points} = req.body;
    const tasks = await req.app.get('db').tasks.editTask(content, type, time, points, id, user_id);
    res.status(200).json(tasks);
}

async function deleteTask(req, res){
    const {id} = req.params
    const {user_id} = req.session.user;
    const tasks = await req.app.get('db').tasks.deleteTask(id, user_id);
    res.status(200).json(tasks);
}

module.exports ={
    getTasks,
    editTask,
    addTask,
    deleteTask
}

