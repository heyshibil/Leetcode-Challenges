# Write your MySQL query statement below
SELECT 
p.lastName,
p.firstName,
a.city,
a.state
FROM Person as p
LEFT JOIN Address as a
ON a.personId = p.personId