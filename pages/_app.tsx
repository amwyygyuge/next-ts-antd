import App, { Container } from 'next/app'
import React from 'react'
import BaseLayout from './../components/Layout'
export default class MyApp extends App {
	render() {
		const { Component, pageProps } = this.props
		return (
			<BaseLayout name='dadw'>
				<Container>
					<Component {...pageProps} />
				</Container>
			</BaseLayout>
		)
	}
}
