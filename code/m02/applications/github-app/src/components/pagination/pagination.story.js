'use strict'

import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Pagination from './index'

const stories = storiesOf('<Pagination />', module)

stories.add('without props', () => (
  <div>
    <Pagination />
  </div>
))

stories.add('without total and active Page', () => (
  <Pagination total={10} activePage={5} />
  ))

stories.add('with page link', () => (
  <Pagination total={3} activePage={1} pageLink='http://mypage.com/page/%page%' />
  ))

stories.add('with callback', () => (
  <Pagination total={15} activePage={4} pageLink='http://mypage.com/page/%page%' onClick={(page) => {
    window.alert(page)
  }} />
))

