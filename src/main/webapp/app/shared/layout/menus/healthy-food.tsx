import React from 'react';

import { NavItem, NavLink } from 'reactstrap';
import { NavLink as Link } from 'react-router-dom';

export const HealthyFoodMenu = () => (
  <NavItem>
    <NavLink tag={Link} to="/health-menu" className="d-flex align-items-center">
      <span>Healthy Food</span>
    </NavLink>
  </NavItem>
);

export default HealthyFoodMenu;
