import React from 'react'
import {Form, Button} from 'antd'

const FormItem = Form.Item

export default class Login extends React.Component {
    render() {
        return <Form>
            <FormItem>
                <input type="email"/>
            </FormItem>
            <FormItem>
                <input type="password"/>
            </FormItem>
            <FormItem>
                <Button type="primary" htmlType="submit">log in</Button>
            </FormItem>
        </Form>
    }
}
