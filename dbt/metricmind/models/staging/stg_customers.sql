SELECT
    customer_id,
    customer_name,
    city,
    country,
    segment,
    created_date
FROM {{ source('raw', 'customers') }}