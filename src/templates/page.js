import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import LayoutContainer from '../containers/LayoutContainer'

const Page = ({ data }) => {
  const {markdownRemark: {frontmatter: {title}, html}} = data
  return (
    <LayoutContainer>
      <article>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </article>
    </LayoutContainer>
  )
}

Page.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Page

export const pageQuery = graphql`
  query Page($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
