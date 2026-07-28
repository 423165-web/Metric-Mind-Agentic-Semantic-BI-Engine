SELECT 
    employee_id,
    first_name,
    last_name,
    title,
    department,
    birth_date,
    hire_date,
    address,
    city,
    country,
    postal_code,
    phone,
    email,
    salary,
    performance_rating,
    reports_to
FROM {{ source('raw', 'employees') }}