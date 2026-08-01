
## Semantic layer

Cube model:

- File: `cube/metricmind-cube/model/cubes/sales.yml`
- Physical marts schema: `METRICMIND.STAGING_MARTS`
- Public dimensions: `sales.time`, `sales.geography`
- Public measures: `sales.revenue`, `sales.cost`

Before running Cube, copy `cube/metricmind-cube/.env.example` to
`cube/metricmind-cube/.env` and fill in the Snowflake credentials.

Start Cube:

```powershell
docker compose up cube
```

Example Cube query:

```json
{
  "measures": ["sales.revenue", "sales.cost"],
  "timeDimensions": [
    {
      "dimension": "sales.time",
      "granularity": "month"
    }
  ],
  "dimensions": ["sales.geography"]
}
```

Strict JSON API wrapper:

```powershell
python backend/semantic_api.py
```

POST the Cube query object to `http://127.0.0.1:8000/query`. The wrapper always
responds with `application/json`.
