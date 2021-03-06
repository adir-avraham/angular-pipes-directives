const products = [
    { "productId": 1, "productName": "Chai", "unitPrice": 18.00, "unitsInStock": 39, "unitsOnOrder": 0 },
    { "productId": 2, "productName": "Chang", "unitPrice": 19.00, "unitsInStock": 17, "unitsOnOrder": 40 },
    { "productId": 3, "productName": "Aniseed Syrup", "unitPrice": 10.00, "unitsInStock": 13, "unitsOnOrder": 70 },
    { "productId": 4, "productName": "Chef Anton's Cajun Seasoning", "unitPrice": 22.00, "unitsInStock": 53, "unitsOnOrder": 0 },
    { "productId": 5, "productName": "Chef Anton's Gumbo Mix", "unitPrice": 21.35, "unitsInStock": 0, "unitsOnOrder": 0 },
    { "productId": 6, "productName": "Grandma's Boysenberry Spread", "unitPrice": 25.00, "unitsInStock": 120, "unitsOnOrder": 0 },
    { "productId": 7, "productName": "Uncle Bob's Organic Dried Pears", "unitPrice": 30.00, "unitsInStock": 15, "unitsOnOrder": 0 },
    { "productId": 8, "productName": "Northwoods Cranberry Sauce", "unitPrice": 40.00, "unitsInStock": 6, "unitsOnOrder": 0 },
    { "productId": 9, "productName": "Mishi Kobe Niku", "unitPrice": 97.00, "unitsInStock": 29, "unitsOnOrder": 0 },
    { "productId": 10, "productName": "Ikura", "unitPrice": 31.00, "unitsInStock": 31, "unitsOnOrder": 0 },
    { "productId": 11, "productName": "Queso Cabrales", "unitPrice": 21.00, "unitsInStock": 22, "unitsOnOrder": 30 },
    { "productId": 12, "productName": "Queso Manchego La Pastora", "unitPrice": 38.00, "unitsInStock": 86, "unitsOnOrder": 0 },
    { "productId": 13, "productName": "Konbu", "unitPrice": 6.00, "unitsInStock": 24, "unitsOnOrder": 0 },
    { "productId": 14, "productName": "Tofu", "unitPrice": 23.25, "unitsInStock": 35, "unitsOnOrder": 0 },
    { "productId": 15, "productName": "Genen Shouyu", "unitPrice": 15.50, "unitsInStock": 39, "unitsOnOrder": 0 },
    { "productId": 16, "productName": "Pavlova", "unitPrice": 17.45, "unitsInStock": 29, "unitsOnOrder": 0 },
    { "productId": 17, "productName": "Alice Mutton", "unitPrice": 39.00, "unitsInStock": 0, "unitsOnOrder": 0 },
    { "productId": 18, "productName": "Carnarvon Tigers", "unitPrice": 62.50, "unitsInStock": 42, "unitsOnOrder": 0 },
    { "productId": 19, "productName": "Teatime Chocolate Biscuits", "unitPrice": 9.20, "unitsInStock": 25, "unitsOnOrder": 0 },
    { "productId": 20, "productName": "Sir Rodney's Marmalade", "unitPrice": 81.00, "unitsInStock": 40, "unitsOnOrder": 0 },
    { "productId": 21, "productName": "Sir Rodney's Scones", "unitPrice": 10.00, "unitsInStock": 3, "unitsOnOrder": 40 },
    { "productId": 22, "productName": "Gustaf's Knäckebröd", "unitPrice": 21.00, "unitsInStock": 104, "unitsOnOrder": 0 },
    { "productId": 23, "productName": "Tunnbröd", "unitPrice": 9.00, "unitsInStock": 61, "unitsOnOrder": 0 },
    { "productId": 24, "productName": "Guaraná Fantástica", "unitPrice": 4.50, "unitsInStock": 20, "unitsOnOrder": 0 },
    { "productId": 25, "productName": "NuNuCa Nuß-Nougat-Creme", "unitPrice": 14.00, "unitsInStock": 76, "unitsOnOrder": 0 },
    { "productId": 26, "productName": "Gumbär Gummibärchen", "unitPrice": 31.23, "unitsInStock": 15, "unitsOnOrder": 0 },
    { "productId": 27, "productName": "Schoggi Schokolade", "unitPrice": 43.90, "unitsInStock": 49, "unitsOnOrder": 0 },
    { "productId": 28, "productName": "Rössle Sauerkraut", "unitPrice": 45.60, "unitsInStock": 26, "unitsOnOrder": 0 },
    { "productId": 29, "productName": "Thüringer Rostbratwurst", "unitPrice": 123.79, "unitsInStock": 0, "unitsOnOrder": 0 },
    { "productId": 30, "productName": "Nord-Ost Matjeshering", "unitPrice": 25.89, "unitsInStock": 10, "unitsOnOrder": 0 },
    { "productId": 31, "productName": "Gorgonzola Telino", "unitPrice": 12.50, "unitsInStock": 0, "unitsOnOrder": 70 },
    { "productId": 32, "productName": "Mascarpone Fabioli", "unitPrice": 32.00, "unitsInStock": 9, "unitsOnOrder": 40 },
    { "productId": 33, "productName": "Geitost", "unitPrice": 2.50, "unitsInStock": 112, "unitsOnOrder": 0 },
    { "productId": 34, "productName": "Sasquatch Ale", "unitPrice": 14.00, "unitsInStock": 111, "unitsOnOrder": 0 },
    { "productId": 35, "productName": "Steeleye Stout", "unitPrice": 18.00, "unitsInStock": 20, "unitsOnOrder": 0 },
    { "productId": 36, "productName": "Inlagd Sill", "unitPrice": 19.00, "unitsInStock": 112, "unitsOnOrder": 0 },
    { "productId": 37, "productName": "Gravad lax", "unitPrice": 26.00, "unitsInStock": 11, "unitsOnOrder": 50 },
    { "productId": 38, "productName": "Côte de Blaye", "unitPrice": 263.50, "unitsInStock": 17, "unitsOnOrder": 0 },
    { "productId": 39, "productName": "Chartreuse verte", "unitPrice": 18.00, "unitsInStock": 69, "unitsOnOrder": 0 },
    { "productId": 40, "productName": "Boston Crab Meat", "unitPrice": 18.40, "unitsInStock": 123, "unitsOnOrder": 0 },
    { "productId": 41, "productName": "Jack's New England Clam Chowder", "unitPrice": 9.65, "unitsInStock": 85, "unitsOnOrder": 0 },
    { "productId": 42, "productName": "Singaporean Hokkien Fried Mee", "unitPrice": 14.00, "unitsInStock": 26, "unitsOnOrder": 0 },
    { "productId": 43, "productName": "Ipoh Coffee", "unitPrice": 46.00, "unitsInStock": 17, "unitsOnOrder": 10 },
    { "productId": 44, "productName": "Gula Malacca", "unitPrice": 19.45, "unitsInStock": 27, "unitsOnOrder": 0 },
    { "productId": 45, "productName": "Rogede sild", "unitPrice": 9.50, "unitsInStock": 5, "unitsOnOrder": 70 },
    { "productId": 46, "productName": "Spegesild", "unitPrice": 12.00, "unitsInStock": 95, "unitsOnOrder": 0 },
    { "productId": 47, "productName": "Zaanse koeken", "unitPrice": 9.50, "unitsInStock": 36, "unitsOnOrder": 0 },
    { "productId": 48, "productName": "Chocolade", "unitPrice": 12.75, "unitsInStock": 15, "unitsOnOrder": 70 },
    { "productId": 49, "productName": "Maxilaku", "unitPrice": 20.00, "unitsInStock": 10, "unitsOnOrder": 60 },
    { "productId": 50, "productName": "Valkoinen suklaa", "unitPrice": 16.25, "unitsInStock": 65, "unitsOnOrder": 0 },
    { "productId": 51, "productName": "Manjimup Dried Apples", "unitPrice": 53.00, "unitsInStock": 20, "unitsOnOrder": 0 },
    { "productId": 52, "productName": "Filo Mix", "unitPrice": 7.00, "unitsInStock": 38, "unitsOnOrder": 0 },
    { "productId": 53, "productName": "Perth Pasties", "unitPrice": 32.80, "unitsInStock": 0, "unitsOnOrder": 0 },
    { "productId": 54, "productName": "Tourtière", "unitPrice": 7.45, "unitsInStock": 21, "unitsOnOrder": 0 },
    { "productId": 55, "productName": "Pâté chinois", "unitPrice": 24.00, "unitsInStock": 115, "unitsOnOrder": 0 },
    { "productId": 56, "productName": "Gnocchi di nonna Alice", "unitPrice": 38.00, "unitsInStock": 21, "unitsOnOrder": 10 },
    { "productId": 57, "productName": "Ravioli Angelo", "unitPrice": 19.50, "unitsInStock": 36, "unitsOnOrder": 0 },
    { "productId": 58, "productName": "Escargots de Bourgogne", "unitPrice": 13.25, "unitsInStock": 62, "unitsOnOrder": 0 },
    { "productId": 59, "productName": "Raclette Courdavault", "unitPrice": 55.00, "unitsInStock": 79, "unitsOnOrder": 0 },
    { "productId": 60, "productName": "Camembert Pierrot", "unitPrice": 34.00, "unitsInStock": 19, "unitsOnOrder": 0 },
    { "productId": 61, "productName": "Sirop d'érable", "unitPrice": 28.50, "unitsInStock": 113, "unitsOnOrder": 0 },
    { "productId": 62, "productName": "Tarte au sucre", "unitPrice": 49.30, "unitsInStock": 17, "unitsOnOrder": 0 },
    { "productId": 63, "productName": "Vegie-spread", "unitPrice": 43.90, "unitsInStock": 24, "unitsOnOrder": 0 },
    { "productId": 64, "productName": "Wimmers gute Semmelknödel", "unitPrice": 33.25, "unitsInStock": 22, "unitsOnOrder": 80 },
    { "productId": 65, "productName": "Louisiana Fiery Hot Pepper Sauce", "unitPrice": 21.05, "unitsInStock": 76, "unitsOnOrder": 0 },
    { "productId": 66, "productName": "Louisiana Hot Spiced Okra", "unitPrice": 17.00, "unitsInStock": 4, "unitsOnOrder": 100 },
    { "productId": 67, "productName": "Laughing Lumberjack Lager", "unitPrice": 14.00, "unitsInStock": 52, "unitsOnOrder": 0 },
    { "productId": 68, "productName": "Scottish Longbreads", "unitPrice": 12.50, "unitsInStock": 6, "unitsOnOrder": 10 },
    { "productId": 69, "productName": "Gudbrandsdalsost", "unitPrice": 36.00, "unitsInStock": 26, "unitsOnOrder": 0 },
    { "productId": 70, "productName": "Outback Lager", "unitPrice": 15.00, "unitsInStock": 15, "unitsOnOrder": 10 },
    { "productId": 71, "productName": "Flotemysost", "unitPrice": 21.50, "unitsInStock": 26, "unitsOnOrder": 0 },
    { "productId": 72, "productName": "Mozzarella di Giovanni", "unitPrice": 34.80, "unitsInStock": 14, "unitsOnOrder": 0 },
    { "productId": 73, "productName": "Röd Kaviar", "unitPrice": 15.00, "unitsInStock": 101, "unitsOnOrder": 0 },
    { "productId": 74, "productName": "Longlife Tofu", "unitPrice": 10.00, "unitsInStock": 4, "unitsOnOrder": 20 },
    { "productId": 75, "productName": "Rhönbräu Klosterbier", "unitPrice": 7.75, "unitsInStock": 125, "unitsOnOrder": 0 },
    { "productId": 76, "productName": "Lakkalikööri", "unitPrice": 18.00, "unitsInStock": 57, "unitsOnOrder": 0 },
    { "productId": 77, "productName": "Original Frankfurter grüne Soße", "unitPrice": 13.00, "unitsInStock": 32, "unitsOnOrder": 0 }
]


module.exports = products;