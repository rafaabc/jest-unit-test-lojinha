# Function: `calculateDiscount`

Create a function called `calculateDiscount`, which takes a list of products as an argument (see product details below) and returns the total discount amount applied to the order.

## Product Attributes  
Each product in the list must have the following attributes:  
- **Unique Identifier** (`string`)  
- **Product Name** (`string`)  
- **Unit Price** (`number`)  
- **Quantity** (`number`)  

## Discount Calculation Rules  
- If the list is **empty**, the total discount must be `0`.  
- If the list contains **only one item**, the discount is calculated as unit price × quantity × discount percentage
- If the list contains **multiple items**, the discount is calculated individually for each product before summing up the total discount.

## Discount Percentage Rules  
- Orders with a total value between **100.00 and 499.99** receive a **5% discount**.  
- Orders with a total value between **500.00 and 999.99** receive a **10% discount**.  
- Orders with a total value **above 1,000.00** receive a **15% discount**.  

## Special Promotion  
- If the order contains at least **one product** with the **Unique Identifier `"PROMO-LOJINHA"`**, the discount percentage **increases to 20%**, regardless of the order total.