// import aws-sdk and client s3 for object file storage
const { S3Client } = require('@aws-sdk/client-s3');
// create a new instance for s3 client for file uploading
const s3Client = new S3Client({
    region: process.env.AWS_REGION,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
    }
});

module.exports = s3Client;
