async function getTasks(req, res){
    if (req.query.taskId){
        const task = await req.app.get('db').tasks.getSingleTask(req.query.taskId);
        const task1 = task[0]
        res.status(200).json(task1);
        return;
    }
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
    if (time === 'completed'){
        switch(type){
            case 'health':
                await req.app.get('db').chart.editChartData(1,0,0,0,0,0, user_id)
                break;
            case 'social':
                await req.app.get('db').chart.editChartData(0,1,0,0,0,0, user_id)
                break;
            case 'education':
                await req.app.get('db').chart.editChartData(0,0,1,0,0,0, user_id)
                break;
            case 'hobby':
                await req.app.get('db').chart.editChartData(0,0,0,1,0,0, user_id)
                break;
            case 'work':
                await req.app.get('db').chart.editChartData(0,0,0,0,1,0, user_id)
                break;
            case 'personal':
                await req.app.get('db').chart.editChartData(0,0,0,0,0,1, user_id)
                break;   
        }
    }
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

