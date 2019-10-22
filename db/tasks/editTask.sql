UPDATE tasks
SET content = $1,
    type = $2,
    time= $3,
    points = $4,
WHERE id = $5;


SELECT * FROM tasks
WHERE user_id=$6
ORDER BY tasks.id;