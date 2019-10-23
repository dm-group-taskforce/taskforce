update chart 
set health = health + $1,
social = social + $2,
education = education + $3,
hobby = hobby + $4,
work = work + $5,
personal = personal + $6
where user_id = $7;

select * from chart where user_id = $7;