UPDATE ranks 
SET abbreviation = $1,
img = $2
where user_id = $3;

SELECT * from ranks where user_id = $3;