import React, { useState } from 'react';
import { Card, List } from 'antd';

function Admin({ files }) {
    // const [selectedFiles, setSelectedFiles] = useState([]);

    // const handleCheckboxChange = (file) => {
    //     if (selectedFiles.includes(file)) {
    //         setSelectedFiles(selectedFiles.filter((f) => f !== file));
    //     } else {
    //         setSelectedFiles([...selectedFiles, file]);
    //     }
    // };

    
    return (
        <div className='boxx'>
            {/* <h1>Uploaded files:- </h1> */}
            {/* {files.map((file) => (
                <div key={file.name}>
                    <input
                        type="checkbox"
                        checked={selectedFiles.includes(file)}
                        onChange={() => handleCheckboxChange(file)}
                    />
                    {file.name}
                </div>
            ))} */}

            {/* <Card title="Uploaded Files">
      <List
        dataSource={files}
        renderItem={(file) => (
          <List.Item>
            {file.name}.{file.type}
          </List.Item>
        )}
      />
    </Card> */}

            <Card className='cards' title="Uploaded Files">
                <List
                    dataSource={files}
                    renderItem={(file) => (
                        <List.Item>
                            {file.name}.{file.type}
                        </List.Item>
                    )}
                />
            </Card>
            <button className='button' >Upload</button>
        </div>
    );
}

export default Admin;
