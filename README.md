# 🧊 Welcome to Refrigerator - Effortless Inventory Management!

A sleek and user-friendly web application for managing refrigerator inventory effortlessly. The application enables users to add, track, and manage food items in their refrigerator, ensuring minimal waste and optimized grocery shopping.

![image](https://github.com/user-attachments/assets/795e3fd5-3971-4fdd-b967-67117079fc01)


---

## ✨ Features and Functionalities

The refrigerator will have the following functionalities to manage products:

### **Stage 1: Basic Inventory Management**
- **Insert**: Add a product into the refrigerator while entering its quantity.
- **Consume**: Update how much was used (e.g., "half a liter of milk," "250 grams of vegetables").
- **Status**: Track the current quantity for each item in real time.
- **History**: Maintain a record of product purchases and consumption.

### **Stage 2: Expiration Management**
- **Expiration Tracking**: Each item will have an expiration date.
- **Alerts**: Notify users about items nearing expiration.
- **Auto-Removal**: Automatically deduct expired items from stock and alert the user to remove them from the refrigerator.

### **Stage 3: Smart Shopping List**
- **Shopping Suggestions**: Generate a shopping list based on past purchases and actual consumption patterns.
- **Consumption-Based Recommendations**: For example, if milk is about to run out, the system will suggest adding it to the shopping list.

---
## 🔄 Tech Stack

Proposed tech stack for project(although you are free to use any other stack outside of these):

1. **Backend:**
   - Node.js with Express.js for the server 💻
   - MongoDB for the database (using Mongoose for object modeling) 📊
   - Firebase Authentication for user authentication and authorization 🔐
   - Firebase Cloud Functions for serverless backend logic ☁️

2. **Frontend:**
   - React.js for a dynamic and responsive user interface ⚛️
   - HTML5, CSS3, JavaScript for elegant and modern design 🎨
   - Firebase Hosting for fast and secure web hosting 🚀
   - Firebase Realtime Database for real-time data synchronization 🔥

3. **DevOps & Deployment:**
   - Continuous Integration/Continuous Deployment (CI/CD): GitLab CI/CD for automated testing and deployment 🔄
   - Containerization: Docker for efficient and scalable deployment 🐳
   - Orchestration: Kubernetes for managing containerized applications ⚙️

4. **Cloud Platform:**
   - Hosting: AWS (Amazon Web Services) for reliable and scalable hosting ☁️
   - Serverless Computing: AWS Lambda for cost-effective and scalable backend services 🚀
   - Storage: AWS S3 for secure and scalable storage solutions 📦

5. **Machine Learning & AI:**
   - Frameworks: TensorFlow and PyTorch for advanced machine learning capabilities 🧠
   - Libraries: scikit-learn, pandas, NumPy for data manipulation and analysis 📊
   - Deployment: Docker containers for easy deployment of machine learning models 🐳

6. **Database:**
   - MongoDB for flexible and scalable NoSQL database solutions 📊

7. **Other Tools and Technologies:**
   - Websockets for real-time communication and collaboration features 🔄
   - Security: JWT (JSON Web Tokens) for secure authentication and authorization 🔒
   - Data Visualization: D3.js or Chart.js for interactive and visually appealing data representation 📊
   - Testing: Jest for React.js unit testing, Selenium for end-to-end testing 🧪

     
## 📚 Evaluation Criteria

- **Correctness**: The program calculates item quantities accurately.
- **Code Structure**: Clean, modular, and readable codebase.
- **Efficiency**: Efficiently handles a reasonable number of items in the refrigerator.
- **Documentation**: Proper comments explaining the logic for easy understanding.
- **Edge Cases**: Handles scenarios like:
  - No items in the refrigerator.
  - Single item in stock.
  - Large quantities or bulk additions/removals.

---

## 🚀 Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-repo/Refrigerator.git
   cd Refrigerator
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Start the Application**:
   ```bash
   npm start
   ```

4. **Open in Browser**:
   Navigate to `http://localhost:3000` to use the application.

---

## 📚 Usage Instructions

### Add Product
1. Enter the product name, quantity, and unit (e.g., liters, grams, etc.).
2. Optionally, set an expiration date and add notes.
3. Click on the **Add Product** button to save the item.

### Track Usage
1. Select a product from the list of items in stock.
2. Specify the amount consumed and update the inventory.

### Monitor Stock & Expiry
- View the current stock levels and get notified about near-expiry or expired products.

### Get Shopping Recommendations
- Generate a shopping list based on consumption patterns and ensure essential items are always in stock.

---
## 🌐 Our Mission

Our mission is to drive transformative change by harnessing cloud technologies, AI, and cutting-edge development practices. We strive to:

- Empower individuals and organizations with secure, scalable solutions.
- Push the boundaries of innovation through open-source collaboration.
- Build resilient systems that are as flexible as they are robust.

  
## ⚠️ Caution 

1. **Sync Your Fork**: Before making a pull request, ensure your fork is up-to-date with the latest changes from the main repository to avoid conflicts.
2. **Data Privacy**: Ensure that sensitive information is protected and not shared without consent. Follow best practices for data security.
3. **Intellectual Property**: Respect the intellectual property rights of all users. Do not upload or use copyrighted materials without proper authorization.
4. **Quality Control**: Maintain high standards for project submissions. Ensure that projects are well-documented, functional, and original.
5. **Respectful Collaboration**: Foster a respectful and inclusive environment. Discrimination, harassment, or any form of misconduct will not be tolerated.
6. **Resource Management**: Use platform resources responsibly. Avoid activities that could harm the platform's integrity or availability for other users.
7. **Compliance with Guidelines**: Adhere to all platform guidelines and policies. Regularly review updates to ensure continued compliance.

By adhering to these cautions, Ajivika aims to create a safe, respectful, and productive environment for all users.

## 🛡️ License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/SUGAM-ARORA/Refrigerator/blob/main/LICENSE) file for details.


## 🤝 Contributions
We welcome contributions to improve the application! To get started:
1. Fork the repository.
2. Create a new branch (`feature/new-feature`).
3. Commit your changes and push to the branch.
4. Open a Pull Request for review.

---

## 🧑‍💼 Maintainers

<div>
<table>
<tr>
<td align="center"><a href="https://github.com/SUGAM-ARORA"><img src="https://github.com/SUGAM-ARORA/UniCollab/assets/96546088/09d60ee5-8215-4327-808f-4edf119370b6" width=150px height=150px /></a></br> <h4 style="color:cyan;">Sugam Arora</h4>
 <a href="https://www.linkedin.com/in/sugamarora23/"><img src="https://img.icons8.com/fluency/2x/linkedin.png" width="32px" height="32px"></img></a>
 <a href="https://github.com/SUGAM-ARORA"><img src="https://img.icons8.com/fluency/2x/github.png" width="32px" height="32px"></img></a>

   </td>
<td align="center"><https://github.com/Ojas-Arora"><img src="https://media.licdn.com/dms/image/v2/D5603AQF-0oeQKjHUGg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1731090529812?e=1740614400&v=beta&t=urY8EklFDUSFuxKUQtHCq6eK8inuueVUkFH1u9wypQM" width=150px height=150px /></a></br> <h4 style="color:cyan;">Ojas Arora</h4>
 <a href="https://www.linkedin.com/in/ojasarora14/"><img src="https://img.icons8.com/fluency/2x/linkedin.png" width="32px" height="32px"></img></a>
 <a href="https://github.com/Ojas-Arora"><img src="https://img.icons8.com/fluency/2x/github.png" width="32px" height="32px"></img></a>
   </td>
</tr>

</table>

</div>

## 📬 Contact Details

You can connect with me on various platforms:<br>
[![LinkedIn](https://img.shields.io/badge/LinkedIn-%230077B5.svg?logo=linkedin&logoColor=white)](https://linkedin.com/in/sugam-arora-117265142) [![Instagram](https://img.shields.io/badge/Instagram-%23E4405F.svg?logo=Instagram&logoColor=white)](https://instagram.com/sugam.arora.393?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D) [![Twitter](https://img.shields.io/badge/Twitter-%231DA1F2.svg?logo=Twitter&logoColor=white)](https://twitter.com/SugamArora14) [![Facebook](https://img.shields.io/badge/Facebook-%231877F2.svg?logo=Facebook&logoColor=white)](https://facebook.com/sugam.arora.393)[![YouTube](https://img.shields.io/badge/YouTube-%23FF0000.svg?logo=YouTube&logoColor=white)](https://youtube.com/@sugamarora5997)
[![Gmail](https://img.shields.io/badge/Gmail-%23FFFFFF.svg?logo=gmail&logoColor=red)](mailto:sugam.arora23@gmail.com)

## 🌟 Join Us 

Ready to embark on a journey of collaborative learning? Join Refrigerator now and be a part of a community that believes in the power of collaboration!
Thank you for contributing to our open-source project! We appreciate your support 🚀
Don't forget to leave a star ⭐

---
