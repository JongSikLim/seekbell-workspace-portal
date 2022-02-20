import { PlusOutlined } from '@ant-design/icons';
import { Divider, Form, Input, Select, Space, Typography } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { cafeteriaMenuState } from 'recoils/selectors/todaylunch';

const ChioceMenu = () => {
  const cafeteriaMenuList = useRecoilValue(cafeteriaMenuState);
  const [form] = useForm();

  // 메뉴추가 기능
  const handleAddMenu = () => {};

  return (
    <Select
      style={{
        width: '100%',
      }}
      options={cafeteriaMenuList}
      optionLabelProp={'menu_title'}
      optionFilterProp={'menu_title'}
      dropdownRender={(menu) => (
        <>
          {menu}

          <Divider style={{ margin: '8px 0' }} />

          <Space align="center" style={{ padding: '0 8px 4px' }}>
            <Form form={form} style={{ display: 'flex' }}>
              <Form.Item>
                <Input placeholder="Please enter item" />
              </Form.Item>
              <Form.Item>
                <Input placeholder="Please enter item" />
              </Form.Item>
              <Form.Item>
                <Typography.Link
                  onClick={handleAddMenu}
                  style={{ whiteSpace: 'nowrap' }}
                >
                  <PlusOutlined /> 메뉴추가
                </Typography.Link>
              </Form.Item>
            </Form>
          </Space>
        </>
      )}
      defaultOpen={true}
      showArrow
      removeIcon
    />
  );
};

export default ChioceMenu;
