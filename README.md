# 🚀 Node.js Demo App — DevOps Internship Task 1

> **Automate Code Deployment Using CI/CD Pipeline with GitHub Actions**

---

## 🎯 Objective

Build an automated **CI/CD pipeline** for a Node.js web application that automatically:

🧪 Tests the application  
🐳 Builds a Docker image  
🔐 Authenticates with Docker Hub  
☁️ Pushes the Docker image to Docker Hub  

The pipeline is triggered whenever new code is pushed to the **`main`** branch.

---

## 🔄 CI/CD Pipeline

```text
👨‍💻 Developer
     │
     │  git push
     ▼
📦 GitHub Repository
     │
     ▼
⚙️ GitHub Actions
     │
     ├── 📥 Checkout Source Code
     │
     ├── 🟢 Setup Node.js
     │
     ├── 📦 Install Dependencies
     │
     ├── 🧪 Run Tests
     │
     ├── 🐳 Build Docker Image
     │
     ├── 🔐 Login to Docker Hub
     │
     └── ☁️ Push Docker Image
                │
                ▼
        🐳 Docker Hub