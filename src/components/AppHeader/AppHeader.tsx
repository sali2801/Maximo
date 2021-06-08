import React from 'react';
import {
  Header,
  HeaderContainer,
  HeaderName,
  HeaderMenuButton,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SkipToContent,
  SideNav,
  SideNavItems,
  SideNavMenu,
  SideNavMenuItem,
  SideNavLink,
} from 'carbon-components-react';
import {
  AppSwitcher20,
  Notification20,
  Settings20,
  UserAvatar20,
  Help20,
  Dashboard32,
  Analytics32,
  ChartVennDiagram32,
  Concept32,
  Data_132,
  Lightning32,
} from '@carbon/icons-react';

const AppHeader = () => (
  <HeaderContainer
    render={({ isSideNavExpanded, onClickSideNavExpand }) => (
      <Header aria-label="Maximo">
        <SkipToContent />
        <HeaderMenuButton
          aria-label="Open menu"
          onClick={onClickSideNavExpand}
          isActive={isSideNavExpanded}
        />
        <HeaderName href="/" prefix="">
          IBM Maximo Application Insights
        </HeaderName>
        <HeaderGlobalBar>
          <HeaderGlobalAction aria-label="Notifications">
            <Notification20 />
          </HeaderGlobalAction>
          <HeaderGlobalAction aria-label="Settings">
            <Settings20 />
          </HeaderGlobalAction>
          <HeaderGlobalAction aria-label="Help">
            <Help20 />
          </HeaderGlobalAction>
          <HeaderGlobalAction aria-label="User Avatar">
            <UserAvatar20 />
          </HeaderGlobalAction>
          <HeaderGlobalAction aria-label="App Switcher">
            <AppSwitcher20 />
          </HeaderGlobalAction>
        </HeaderGlobalBar>
        <SideNav aria-label="Side navigation" expanded={isSideNavExpanded}>
          <SideNavItems>
            <SideNavLink href="/" renderIcon={Dashboard32}>
              Dashboards
            </SideNavLink>

            <SideNavMenu renderIcon={Data_132} title="Work Queues">
              <SideNavMenuItem href="/">Queue A</SideNavMenuItem>
              <SideNavMenuItem href="/">Queue B</SideNavMenuItem>
              <SideNavMenuItem href="/">Queue C</SideNavMenuItem>
            </SideNavMenu>
            <SideNavMenu renderIcon={ChartVennDiagram32} title="Items">
              <SideNavMenuItem href="/">Item 1</SideNavMenuItem>
              <SideNavMenuItem href="/">Item 2</SideNavMenuItem>
              <SideNavMenuItem href="/">Item 3</SideNavMenuItem>
            </SideNavMenu>
            <SideNavLink href="/" renderIcon={Concept32}>
              Workflow
            </SideNavLink>
            <SideNavLink renderIcon={Analytics32} href="/">
              Reports
            </SideNavLink>
            <SideNavLink href="/" renderIcon={Lightning32}>
              Alert Console
            </SideNavLink>
          </SideNavItems>
        </SideNav>
      </Header>
    )}
  />
);

export default AppHeader;
