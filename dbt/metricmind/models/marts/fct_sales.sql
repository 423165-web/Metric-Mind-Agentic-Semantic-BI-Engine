{{ config(materialized='table') }}

SELECT

    order_id,

    customer_id,

    employee_id,

    product_id,

    -- Link with dim_date
    CAST(TO_CHAR(order_date, 'YYYYMMDD') AS NUMBER) AS date_key,

    quantity,

    unit_price,

    discount,

    sales_amount

FROM {{ ref('int_sales') }}