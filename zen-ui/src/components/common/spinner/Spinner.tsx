import React from 'react';
import './Spinner.css';

interface Props {
  size?: 'sm' | 'md' | 'lg';
}
const Spinner: React.FC<Props> = props => {
  const { size = 'md' } = props;
  return (
    <svg className={`zen-spinner ${size}`} viewBox="0 0 50 50">
      <circle className="spinner-ring" cx="25" cy="25" r="20" />
      <circle className="spinner-ball" cx="25" cy="5" r="3.5" />
    </svg>
  );
};

export default Spinner;
