import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ 
  title, 
  children, 
  className = '', 
  headerClassName = '',
  bodyClassName = '',
  footer,
  ...props 
}) => {
  return (
    <div 
      className={`bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden ${className}`}
      {...props}
    >
      {title && (
        <div className={`px-6 py-4 border-b border-gray-200 dark:border-gray-700 ${headerClassName}`}>
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">
            {title}
          </h3>
        </div>
      )}
      
      <div className={`p-6 ${bodyClassName}`}>
        {children}
      </div>

      {footer && (
        <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
          {footer}
        </div>
      )}
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.node,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  headerClassName: PropTypes.string,
  bodyClassName: PropTypes.string,
  footer: PropTypes.node,
};

export default Card;