const { uploadFile, getFileStream } = require('../services/s3Service');
const { generateUniqueCode } = require('../utils/generateCode');

const upload = async (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: 'No file uploaded' });
    }

    const file = req.file;
    const uniqueCode = generateUniqueCode();

    try {
        await uploadFile(file, uniqueCode);
        res.json({ code: uniqueCode });
    } catch (error) {
        res.status(500).json({ message: 'Error uploading file', error: error.message });
    }
};

const retrieve = async (req, res) => {
    const { code } = req.params;

    try {
        const fileStream = await getFileStream(code);
        if (!fileStream) {
            return res.status(404).json({ message: 'File not found' });
        }
        fileStream.pipe(res);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving file', error: error.message });
    }
};

module.exports = {
    upload,
    retrieve
};
