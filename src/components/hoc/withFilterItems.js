import React from 'react';

const withFilterItems = BaseComponent => {
  return (props) => {
    const { items, filter } = props;

    switch (filter) {
      case 'SHOW_ALL':
        return <BaseComponent {...props}/>;

      case 'SHOW_COMPLETED':
        const completedItems = items.filter(item => item.isComplete);
        return <BaseComponent items={completedItems}/>;

      case 'SHOW_FAVORITES':
        const filteredItems = items.filter(item => item.isFavorite);
        return <BaseComponent items={filteredItems}/>;

      default:
        return <BaseComponent {...props}/>
    }
  }
};

export default withFilterItems;