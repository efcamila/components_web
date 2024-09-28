import React from 'react'
import Pagination from '../components/navigation/pagination/Pagination'
import { urls } from '../data/links'

const PaginationLayout = () => {
  return (
    <Pagination data={urls[1]}/>
  )
}

export default PaginationLayout