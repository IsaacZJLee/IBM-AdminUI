import React, { useState } from 'react';
import {
  Header,
  HeaderContainer,
  HeaderName,
  HeaderNavigation,
  HeaderMenuButton,
  HeaderMenuItem,
  HeaderMenu,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SkipToContent,
  SideNav,
  SideNavItems,
  HeaderSideNavItems,
  HeaderPanel,
  Switcher,
  SwitcherItem,
  SwitcherDivider,
} from 'carbon-components-react';
import {
  UserAvatar20,
} from '@carbon/icons-react';
import { Link } from 'react-router-dom';

function HeaderLinks(props) {
  if (!props.loggedIn) return null;

  return (
    <HeaderNavigation aria-label="SHF Admin">
      <HeaderMenu aria-label="Organisations" menuLinkName="Organisations">
        <HeaderMenuItem element={Link} to="/organisations">Overview</HeaderMenuItem>
        <HeaderMenuItem element={Link} to="/organisations?addOrganisation=true">Add Organisation</HeaderMenuItem>
      </HeaderMenu>
      <HeaderMenu aria-label="Members" menuLinkName="Members">
        <HeaderMenuItem href="#">Overview</HeaderMenuItem>
        <HeaderMenuItem href="#">Add Member</HeaderMenuItem>
      </HeaderMenu>
    </HeaderNavigation>
  )
}

function MobileHeaderLinks(props) {
  if (!props.loggedIn) return null;

  return (
    <SideNav
      aria-label="Side navigation"
      expanded={props.isSideNavExpanded}
      isPersistent={false}>
      <SideNavItems>
        <HeaderSideNavItems>
          <HeaderMenu
            aria-label="Organisations"
            menuLinkName="Organisations">
            <HeaderMenuItem href="#">Overview</HeaderMenuItem>
            <HeaderMenuItem href="#">Add Organisation</HeaderMenuItem>
          </HeaderMenu>
          <HeaderMenu aria-label="Members" menuLinkName="Members">
            <HeaderMenuItem href="#">Overview</HeaderMenuItem>
            <HeaderMenuItem href="#">Add Member</HeaderMenuItem>
          </HeaderMenu>
        </HeaderSideNavItems>
      </SideNavItems>
    </SideNav>
  )
}

const AdminHeader = (props) => {
  const [showUserMenu, setShowUserMenu] = useState(false);
  let loggedIn = props.pathName !== '/login';

  return (
    <HeaderContainer render={({ isSideNavExpanded, onClickSideNavExpand }) => (
        <Header aria-label="Sankofa Healthcare Framework Admin">
          <SkipToContent />
          {loggedIn &&
            <HeaderMenuButton
              aria-label="Open menu"
              onClick={onClickSideNavExpand}
              isActive={isSideNavExpanded}
            />
          }
          <HeaderName element={Link} to="/" prefix="SHF">
            Admin
          </HeaderName>
          <HeaderLinks loggedIn={loggedIn} />
          <MobileHeaderLinks loggedIn={loggedIn} isSideNavExpanded={isSideNavExpanded} />
          {loggedIn &&
            <HeaderGlobalBar>
              <HeaderGlobalAction aria-label="User Avatar" onClick={e => setShowUserMenu(!showUserMenu)}>
                <UserAvatar20 />
              </HeaderGlobalAction>
            </HeaderGlobalBar>
          }
          {loggedIn && showUserMenu &&
            <HeaderPanel aria-label="Account Panel" expanded>
              <Switcher aria-label="Account Panel Container">
                <span style={{"padding":"30px 0 20px 0"}}>Welcome, John Appleseed</span>
                <SwitcherDivider />
                <SwitcherItem href="#" aria-label="Profile">
                  Profile
                </SwitcherItem>
                <SwitcherItem href="#" aria-label="Privacy">
                  Privacy
                </SwitcherItem>
                <SwitcherDivider />
                <SwitcherItem element={Link} to="/login" aria-label="Logout" onClick={e => setShowUserMenu(false)}>
                  Logout
                </SwitcherItem>
              </Switcher>
            </HeaderPanel>
          }
        </Header>
      )}
    />
  )
};

export default AdminHeader;
