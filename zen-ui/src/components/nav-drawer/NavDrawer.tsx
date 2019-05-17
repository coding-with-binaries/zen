import React from 'react';
import { animated, useSpring } from 'react-spring';
import './NavDrawer.css';

interface Props {
  open: boolean;
}

const NavDrawer: React.FC<Props> = props => {
  const { open, children } = props;
  const animatedStyle = useSpring({
    width: open ? 480 : 0
  });
  return (
    <animated.div className="zen-nav-drawer-wrapper" style={animatedStyle}>
      {children}
    </animated.div>
  );
};

export default NavDrawer;
