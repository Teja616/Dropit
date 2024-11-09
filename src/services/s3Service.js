const { S3Client, PutObjectCommand, GetObjectCommand, ListObjectsV2Command } = require('@aws-sdk/client-s3');
const { AWS_REGION, S3_BUCKET_NAME } = process.env;

const s3Client = new S3Client({ region: AWS_REGION });

const uploadFile = async (file, code) => {
    const uploadParams = {
        Bucket: S3_BUCKET_NAME,
        Key: `${code}-${file.originalname}`,
        Body: file.buffer
    };
    await s3Client.send(new PutObjectCommand(uploadParams));
};

const getFileStream = async (code) => {
    const listParams = {
        Bucket: S3_BUCKET_NAME,
        Prefix: code
    };

    const data = await s3Client.send(new ListObjectsV2Command(listParams));
    if (data.Contents.length === 0) {
        return null;
    }

    const fileKey = data.Contents[0].Key;
    const downloadParams = {
        Bucket: S3_BUCKET_NAME,
        Key: fileKey
    };

    const fileStream = await s3Client.send(new GetObjectCommand(downloadParams));
    return fileStream.Body;
};

module.exports = {
    uploadFile,
    getFileStream
};
