package com.sample

import grails.test.*

class PostTests extends GrailsUnitTestCase {
    protected void setUp() {
        super.setUp()
    }

    protected void tearDown() {
        super.tearDown()
    }

    void testCreatePost() {
		def post = new Post(title:"sample title", body:"sample body")
/*		mockDomain(Post, [post])
		if (!post.save()) {
			post.errors.allErrors.each { 
				log.debug(message(error:it))
			}
		}
		*/
		assertEquals "hi", "hi"
		assertEquals "sample title", post.title
		assertEquals "sample body", post.body
    }
}
