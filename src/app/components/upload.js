'use client'
import React, { useState } from 'react';
import axios from '../../../axios'

function Upload() {
  const [file, setFile] = useState(null);
  const [chartData, setChartData] = useState(null);

  const handleFileUpload = async () => {
    const formData = new FormData();
    formData.append('file', file);
  
    try {
      const response = await axios.post('/api/upload', formData);
      console.log('response_upload:', response)
    } catch (error) {
      console.log('errorupload:', error)
    }
  };
  

  return (
    <div>
      <input type="file" accept=".xlsx" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleFileUpload}>Upload and Test</button>
      {chartData && <h1>Some chart data: {JSON.stringify(chartData)} </h1>}
    </div>
  );
}

export default Upload;
