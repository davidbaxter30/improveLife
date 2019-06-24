import React from 'react';

import { NavItem, NavLink } from 'reactstrap';
import { NavLink as Link } from 'react-router-dom';

export const ScheduleMenu = () => (
  <NavItem>
    <NavLink tag={Link} to="/calendar" className="d-flex align-items-center">
      <span>Schedule</span>
    </NavLink>
  </NavItem>
);

export default ScheduleMenu;
