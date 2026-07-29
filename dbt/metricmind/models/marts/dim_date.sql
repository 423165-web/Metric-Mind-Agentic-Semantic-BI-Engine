{{ config(materialized='table') }}

WITH date_spine AS (

    SELECT DISTINCT
        CAST(order_date AS DATE) AS full_date
    FROM {{ ref('stg_orders') }}
    WHERE order_date IS NOT NULL

)

SELECT

    -- Surrogate Key (YYYYMMDD)
    CAST(TO_CHAR(full_date, 'YYYYMMDD') AS NUMBER) AS date_key,

    -- Full Date
    full_date,

    -- Day Attributes
    DAY(full_date) AS day_of_month,
    DAYOFWEEK(full_date) AS day_of_week,
    TO_CHAR(full_date, 'DY') AS day_name,

    -- Month Attributes
    MONTH(full_date) AS month_number,
    TO_CHAR(full_date, 'MON') AS month_name,

    -- Quarter
    QUARTER(full_date) AS quarter,

    -- Year
    YEAR(full_date) AS year,

    -- Week of Year
    WEEKOFYEAR(full_date) AS week_of_year,

    -- Weekend Flag
    CASE
        WHEN DAYOFWEEK(full_date) IN (1, 7) THEN TRUE
        ELSE FALSE
    END AS is_weekend

FROM date_spine

ORDER BY full_date