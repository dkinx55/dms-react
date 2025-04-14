import { useState } from 'react';

const FileUpload = () => {
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (!file) {
      setError('Please select a file');
      return;
    }

    setMessage('File uploaded successfully');
    setError('');
  };

  return (
    <div>
      <h2 className="text-2xl mb-4">Upload Document</h2>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      {message && <div className="text-green-500 mb-4">{message}</div>}
      <input
        type="file"
        onChange={handleFileChange}
        className="mb-4 p-2 border border-gray-300"
      />
      <button onClick={handleUpload} className=" text-black p-2">
        Upload
      </button>
    </div>
  );
};

export default FileUpload;
