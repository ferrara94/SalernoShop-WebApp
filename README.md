# 🛍️ Salerno Shop - Online Shopping Platform
## Overview

Salerno Shop is a full-stack e-commerce application designed to offer users an amazing online shopping experience. 
The platform allows customers to browse a wide range of products, add items and categorize them.
Admin users can manage inventory, update product listings and so on.

**Looking for a smooth shopping experience?** 🛒 Shop it at Salerno!

---

🚀 Features
- 👤 User Registration & Authentication
- 🛍️ Browse All Products – View a complete list of available items
- 🍝 Category-Based Browsing – Filter products by category (e.g., Pasta, Water)
- ➕ Add New Products
- 📝 Edit & Delete Products
- 🧑‍💼 Admin Dashboard – Manage products, users, and orders

---
## Technologies Used

### Backend
- Spring Boot
- Spring Security 
- JWT Token Authentication
- Spring Data JPA
- H2 Database
- Docker

### Frontend
- Angular
- Typescript 
- PrimeNG and Angular Material
- Component-Based Architecture
- Bootstrap

----
## 📝 Instructions
### Run front-end

To run the front-end there are several ways:

- [ ] install needed packages (node modules) with the command below where the *package.json* is located. 
```
  npm install
```
- [ ] Start Angular SPA with the command below where the *package.json* is located. 
```
  ng serve
```

OR

- [ ] by using the Dockerfile located in the Docker directory

---


### Run back-end

The project includes a Spring Boot application called SalernoShopRestService, which provides REST APIs to the front-end. These APIs return Product objects and related data.

To run the back-end service, there are several options:

- [ ] right click on project + run as Spring Boot App
- [ ] by command line lunch: mvn spring-boot:run
- [ ] by using the Dockerfile located in the Docker directory

---

## 🔐 User Credentials

To sign in on the home page, you can use one of the following demo accounts:

| Username | Password |
|----------|----------|
| Felice   | `01234`  |
| Marco    | `56789`  |
| John     | `00000`  |
| Admin    | `87960`  |

📝 *These are sample accounts for testing and demo purposes.*


