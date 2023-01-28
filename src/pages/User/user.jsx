
import React from "react";
import { Card, List } from 'antd';

function User({ files }) {
    return (
        <div>
            <Card title="Rejected Files">
                <List
                    dataSource={files}
                    renderItem={(file) => (
                        <List.Item>
                            {file.name}.{file.type}
                        </List.Item>
                    )}
                />
            </Card>
            <Card title="verified Files">
                <List
                    dataSource={files}
                    renderItem={(file) => (
                        <List.Item>
                            {file.name}.{file.type}
                        </List.Item>
                    )}
                />
            </Card>
        </div>
    )
};
export default User;