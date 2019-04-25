import React, { Component } from 'react'
import { Button, Table } from 'antd'
import Link from 'next/link'
import Test from './test';
const fetch = require('node-fetch')
interface dict {
	label: string
	value: number
}
interface Props {
	project: any
}
class componentName extends Component<Props> {
	state = {
		number: 1,
		columns: [
			{
				title: '项目名dwadwwda',
				dataIndex: 'project'
			}
		]
	}
	static async getInitialProps(): Promise<any> {
		const project: Object = await fetch('http://119.29.134.187:8000/project/query', {
			method: 'GET'
		}).then((res: any) => res.json())
		return { project }
	}

	add = (args: dict) => {
		console.log(args);
		const { number } = this.state
		this.setState({ number: number + 1 })
	}
	render() {
		const { number } = this.state
		return (
			<div>
				<Table columns={this.state.columns} dataSource={this.props.project} />
				<Button onClick={() => this.add({ label: 'dadwa', value: 1 })}>点我{number}</Button>
				<Test title="ceshi">
					demo 
				</Test>
				<div>
					<Link href='/list'>
						<a>list</a>
					</Link>
				</div>
			</div>
		)
	}
}
export default componentName
