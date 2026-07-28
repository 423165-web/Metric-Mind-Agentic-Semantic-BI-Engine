SELECT 
    ORDER_ID,
    PRODUCT_ID,
    UNIT_PRICE,
    QUANTITY,
    DISCOUNT
FROM {{ source('raw', 'order_details')  }}