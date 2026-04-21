-- Write your query below
select employee_id, 
CASE
  WHEN MOD(employee_id, 2) = 1 AND name NOT LIKE 'M%' THEN salary
  ELSE 0
END AS bonus
from employees
order by employee_id