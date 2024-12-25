# Dropit - Secure File Sharing Platform

Welcome to **Dropit**, a seamless and secure platform designed for effortless file sharing. This project leverages cutting-edge technologies to provide users with an intuitive interface and robust backend for handling file uploads, downloads, and sharing via unique codes. Built with scalability and user-friendliness in mind, Dropit is the perfect solution for modern file-sharing needs.

---

## 🚀 Features

- **Simple and Secure File Uploads**: Upload files quickly and securely via a sleek web interface.
- **Code-Based Sharing**: Generate unique codes for sharing files with others.
- **Cloud Integration**: Files are securely stored on AWS S3 for high availability.
- **Responsive Design**: Fully responsive interface built using Bootstrap.
- **Custom File Type Support**: Supports multiple file formats without altering the file type.
- **Fast Delivery**: Uses AWS S3 and CloudFront for optimal speed and reliability.

---

## 🛠️ Technologies Used

### Frontend
- **HTML5, CSS3, JavaScript**: For building a responsive and interactive user interface.
- **Bootstrap**: Ensures a professional and mobile-friendly design.

### Backend
- **Node.js & Express.js**: Powers the server for handling API requests.
- **AWS SDK**: Connects the application to AWS S3 for secure file storage and retrieval.

### Hosting
- **AWS Amplify**: Hosts the website, providing automatic HTTPS and fast deployment.
- **AWS S3**: Stores uploaded files securely.
- **AWS CloudFront**: Ensures low-latency file access with global CDN integration.

---

## 🌟 Getting Started

Follow these steps to get the project up and running on your local machine:

### Prerequisites
- [Node.js](https://nodejs.org/)
- AWS account with S3 access
- AWS CLI configured on your local system

### Installation

1. **Clone the Repository**  
   ```bash
   git clone https://github.com/yourusername/dropit.git
   cd dropit

### Setup Environment Variables

    AWS_ACCESS_KEY_ID=your-access-key-id
    AWS_SECRET_ACCESS_KEY=your-secret-access-key
    AWS_REGION=your-region
    S3_BUCKET_NAME=your-s3-bucket-name

### Start the application 
    npm start
