SELECT
    order_id,
    customer_id,
    employee_id,
    product_id,
    order_date,
    quantity,
    unit_price,
    discount,
    sales_amount
FROM {{ ref('int_sales') }}