-- Write your query below
select customer_id
from customers
where year = 2020
group by customer_id
having sum(revenue) >= 1
