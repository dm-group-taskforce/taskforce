update character 
set experience = experience + $1
where user_id = $2;

SELECT * from character where user_id = $2;