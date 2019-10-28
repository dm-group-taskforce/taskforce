UPDATE users
SET username = $1,
    first_name = $2,
    last_name= $3,
    email = $4
WHERE id = $5;

SELECT * from users
WHERE id = $5