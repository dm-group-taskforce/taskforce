DELETE FROM tasks
WHERE id = $1;

SELECT * FROM tasks
WHERE user_id=$2
ORDER BY tasks.id;