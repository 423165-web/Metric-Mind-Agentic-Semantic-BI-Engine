cube(`Sales`, {
  sql: `
    SELECT *
    FROM METRICMIND.MARTS.FCT_SALES
  `,

  measures: {

    count: {
      type: `count`,
      drillMembers: [
        orderId
      ]
    },

    totalSales: {
      sql: `sales_amount`,
      type: `sum`,
      format: `currency`
    },

    totalQuantity: {
      sql: `quantity`,
      type: `sum`
    },

    averageOrderValue: {
      sql: `sales_amount`,
      type: `avg`,
      format: `currency`
    }

  },


  dimensions: {

    orderId: {
      sql: `order_id`,
      type: `number`,
      primaryKey: true
    },

    customerId: {
      sql: `customer_id`,
      type: `number`
    },

    productId: {
      sql: `product_id`,
      type: `number`
    },


    orderDate: {
      sql: `order_date`,
      type: `time`
    }

  }

});