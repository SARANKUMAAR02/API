
# API

This API allows users to retrieve Thirukkural verses and related information programmatically, enabling seamless integration of the timeless verses into various applications, websites, and digital platforms. By leveraging this API, developers can harness the rich cultural heritage of the Thirukkural to enhance their products with valuable insights and life lessons. 

# Installation

__Prerequisites:__ 
Before running the project, ensure you have the following prerequisites.

1 Node.js and npm installed on your system. You can download them from the official website: https://nodejs.org

2 MongoDB Atlas account: Create a free account on MongoDB Atlas and set up a cluster to get your connection string.

__Getting Started__:
Follow these steps to get the project up and running.

1 Clone the repository :
```bash
  git clone https://github.com/SARANKUMAAR02/API.git
```
2 Install dependencies :
```bash
  cd API
  npm install
```
3 Configure MongoDB Atlas Connection :

- Open config.js in the project root directory.
- Replace <YOUR_MONGODB_ATLAS_CONNECTION_STRING> with your actual MongoDB Atlas connection string.

4 Start the Server :
```bash
  npm Start
```
5 The API server should now be running on http://localhost:4000
          
# Endpoints

The API provides the following endpoints:

1 GET&POST /work/thiru - Retrieve all items from the database.

2 GET /work/thiru/api?id=('Type here the number you want 1-1330') - Retrieve a specific item by ID.

# Data schema

The MongoDB Atlas database contains the following data schema:

```bash
  {
    line1:{
        type:String,
        require:true
    },
    line2:{
        type:String
    },
    chap_tam:{
        type:String
    },
    id:{
        type:Number
    }
},{timestamps:true}
```

# Error Handling

The API handles errors gracefully and provides appropriate error responses in case of invalid requests or server issues.

# Security

1 Authentication: This API does not include authentication for simplicity. In production, make sure to implement proper authentication mechanisms to secure your endpoints.

2 Authorization: Ensure that only authorized users can access certain endpoints or perform specific actions.

# Dependencies

1 Express.js: A minimalist Node.js web application framework.

2 Mongoose: A MongoDB object modeling tool for Node.js.

3 Body-parser: Middleware for parsing request bodies.

4 Cors: Middleware for handling Cross-Origin Resource Sharing  (CORS) issues.

# Link for hosted api

link 1: https://api-production-f819.up.railway.app/work/thiru

link 2: https://api-production-f819.up.railway.app/work/thiru/api?id= "Type here the number you want (1-1330)"
