SELECT
    o.order_id,
    o.customer_id,
    o.employee_id,
    o.order_date,
    o.required_date,
    o.shipped_date,
    o.ship_via,
    o.freight,
    o.ship_name,
    o.ship_city,
    o.ship_region,
    o.ship_country,
    o.order_status,
    o.payment_method,

    od.product_id,
    od.unit_price,
    od.quantity,
    od.discount,

    (od.quantity * od.unit_price * (1 - od.discount)) AS sales_amount

FROM {{ ref('stg_orders') }} AS o

INNER JOIN {{ ref('stg_order_details') }} AS od
    ON o.order_id = od.order_id