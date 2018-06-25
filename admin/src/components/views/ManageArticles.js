import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { getPathBase, isValidContentType } from '../../utils/data';
import NotFound from './NotFound';
import Table from '../tables/Table';
import ArticlesTable from '../tables/ArticlesTable';

/**
 * Manage Articles
 *
 * @return {Component}
 */
const ManageArticles = props => {
  const { location } = props;
  const type = getPathBase(location.pathname);

  if (!isValidContentType(type)) {
    return <NotFound />;
  }

  return (
    <div className="manage-articles-view">
      <div className="wrap">
        <Table type={type} render={props => <ArticlesTable {...props} />} />
      </div>
    </div>
  );
};

export default withRouter(ManageArticles);
