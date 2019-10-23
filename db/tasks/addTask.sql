INSERT INTO tasks
( user_id, content, time, type, points )
VALUES
($1, $2, $3, $4, $5);

SELECT * FROM tasks
WHERE user_id=$1
ORDER BY tasks.id;


