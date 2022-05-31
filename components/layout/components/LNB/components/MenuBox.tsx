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
          <Link href={'/intro'}>🙋‍♂️Intro</Link>
        </Menu.Item>
        <SubMenu key="service" title="🧰Service">
          <Menu.Item key="1">
            <Link href={'/todaylunch'}>오늘의 점심은?</Link>
          </Menu.Item>
          <Menu.ItemGroup key={'uicomponent'} title="UI">
            <Menu.Item key={'Intersection Observer'}>
              <Link href={'/component/IO'}>Intersection Observer</Link>
              
            </Menu.Item>
            <Menu.Item key={'React context'}>              
              <Link href={'/component/Context'}>React Context</Link>              
            </Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>

        <SubMenu key="document" title="📘Document">
          <Menu.ItemGroup key={'group1'} title="React">
            <Menu.Item key="doc-g1-1">doc-g1-1</Menu.Item>
          </Menu.ItemGroup>
          {/* <Menu.ItemGroup key={'group2'} title="Javascript">
          
          </Menu.ItemGroup> */}
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
