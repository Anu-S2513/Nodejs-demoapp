# 🚀 Node.js CI/CD Automation Project

A practical DevOps project demonstrating **Continuous Integration and Continuous Deployment (CI/CD)** using **GitHub Actions, Jenkins, and Docker**.

This repository contains the implementations completed for **Task 1 and Task 2** of the DevOps internship.

---

## 📌 Project Overview

The project uses a simple Node.js web application to demonstrate how modern DevOps tools can automate the software delivery process.

The application is containerized using **Docker** and automated through two different CI/CD approaches:

- **Task 1:** GitHub Actions CI/CD Pipeline
- **Task 2:** Jenkins CI/CD Pipeline

### 🎯 Project Objective

To understand and implement automated:

**Code Integration → Build → Testing → Containerization → Deployment**

---

# 🛠️ Technologies Used

| Technology | Purpose |
|------------|---------|
| **Node.js** | Application runtime |
| **Git** | Version control |
| **GitHub** | Source code repository |
| **GitHub Actions** | CI/CD automation |
| **Jenkins** | CI/CD automation server |
| **Docker** | Application containerization |

---

# 📁 Project Structure

```text
Nodejs-demoapp/
│
├── server.js
├── package.json
├── Dockerfile
├── .dockerignore
├── .gitignore
├── Jenkinsfile
├── .github/
│   └── workflows/
│       └── main.yml
│
└── README.md