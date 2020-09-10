import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/Header.jpg')`,
          }}
        >
          <h1
            className="has-text-weight-bold"
            style={{
              boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #2D6A4F',
              backgroundColor: '#2D6A4F',
              borderRadius: '1rem',
              color: 'white',
              padding: '1rem',
            }}
          >
            The Latest in the world of Science Technology Engineering and Mathematics.
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
