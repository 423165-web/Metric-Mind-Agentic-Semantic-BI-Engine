SELECT
    employee_id,
    first_name,
    last_name,
    title,
    city,
    country
FROM {{ ref('stg_employees') }}