import { Menu } from 'antd';
import React from 'react';
import Link from 'next/link';
import Styles from 'styles/common/layout.module.scss';
const { SubMenu } = Menu;

const MenuBox = () => {
  return (
    <div className={Styles['lnb-content']}>
      <Menu mode="inline" theme="dark">
        <Menu.Item key="landing">
          <Link href={'/profile'}>🙋‍♂️Profile</Link>
        </Menu.Item>
        <SubMenu key="service" title="🧰Service">
          <Menu.Item key="1">
            <Link href={'/todaylunch'}>오늘의 점심은?</Link>
          </Menu.Item>
          <Menu.Item key="2">추가 예정</Menu.Item>
          <Menu.Item key="3">추가 예정222</Menu.Item>
        </SubMenu>

        <SubMenu key="document" title="📘Document">
          <Menu.ItemGroup key={'group1'} title="React">
            <Menu.Item key="doc-g1-1">doc-g1-1</Menu.Item>
            <Menu.Item key="doc-g1-2">doc-g1-2</Menu.Item>
            <Menu.Item key="doc-g1-3">doc-g1-3</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup key={'group2'} title="Javascript">
            <Menu.Item key="doc-g2-1">doc-g2-1</Menu.Item>
            <Menu.Item key="doc-g2-2">doc-g2-2</Menu.Item>
            <Menu.Item key="doc-g2-3">doc-g2-3</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
      </Menu>
      {/* <Collapse>
        <Panel key="hi" header="Service">
          <Link
            href={{
              pathname: '/todaylunch',
            }}
          >
            <a>오늘의 점심은?</a>
          </Link>
        </Panel>
      </Collapse> */}
    </div>
  );
};

export default MenuBox;
