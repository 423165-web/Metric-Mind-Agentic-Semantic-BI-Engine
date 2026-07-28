SELECT
    p.product_id,
    p.product_name,
    p.category_id,
    c.category_name,
    p.quantity_per_unit,
    p.unit_price,
    p.units_in_stock,
    p.reorder_level
FROM {{ ref('stg_products') }} p
LEFT JOIN {{ ref('stg_categories') }} c
    ON p.category_id = c.category_id