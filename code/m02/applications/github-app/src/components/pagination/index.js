'use strict'
import React from 'react'
import pagination from 'utils/pagination'
import Page from './page'
const Pagination = ({ total, activePage, pageLink }) => (
  <ol>
    {pagination({ total, activePage }).map((page, index) => (
      <li key={index}>
        <Page page={page} pageLink={pageLink.replace('%page%', page)} />
      </li>
    ))}
  </ol>
)

export default Pagination

