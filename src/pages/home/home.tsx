import React from 'react';
import { log } from 'utils/common';
import S from './home.module.less';
import { Button, Form, Input } from 'antd';

interface HomePorps {}

export default function Home(props: HomePorps) {
  const [form] = Form.useForm<any>();
  React.useEffect(() => {
    console.log(props);
    log('Home init');
  }, [props]);
  return (
    <div className={S.home}>
      <Form
        form={form}
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
      >
        <Form.Item
          label="姓名"
          name="username"
          rules={[{ required: true, message: '请输入姓名' }]}
        >
          <Input placeholder="请输入姓名" />
        </Form.Item>
        <Form.Item
          label="年龄"
          name="age"
          rules={[{ required: true, message: '请输入年龄' }]}
        >
          <Input placeholder="请输入年龄" />
        </Form.Item>
        <Form.Item label="别名" name="nickName">
          <Input placeholder="请输入别名" />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
