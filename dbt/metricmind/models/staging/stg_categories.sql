SELECT 
    category_id,
    category_name,
    description
FROM {{source('raw','categories')}}