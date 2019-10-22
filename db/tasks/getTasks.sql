
SELECT * FROM tasks
WHERE user_id=$1
ORDER BY tasks.id;