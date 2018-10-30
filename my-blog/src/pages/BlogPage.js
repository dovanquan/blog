import React, { Component } from 'react';

import BlogItem from './../components/BlogItem';

class BlogPage extends Component {
	render() {
	    return (
	      <div>
	        <BlogItem />
	        <BlogItem />
	      </div>
	    );
	}
}

export default BlogPage;
