import React,{Component} from 'react'
import { Form, Icon, Input, Button ,message} from 'antd'

import logo from '../../asserts/images/favicon.ico'
import './login.less'


 class Login extends Component{

    handleSubmit = (event) =>{
        //禁止表单提交
        event.preventDefault();
        const form = this.props.form;
        const values = form.getFieldsValue();
        console.log("handler()"+values.username);

        form.validateFields((err, values) => {
            if (!err) {
                message.success("校验成功啦！")
            }else{
                message.error("校验失败啦！")
            }
        });
    }

     validatorPwd = (rule, value, callback)=>{
        if(!value){
            callback("密码不能为空！")
        }else if(value.length<4){
            callback("密码长度不能小于4位")
        }else if(value.length>12){
            callback("密码长度不能大于12位")
        }else if(!/^[a-zA-Z0-9_]+$/.test(value)){
            callback("密码必须由英文、数字和下划线组成")
        }else {
            callback()
        }
     }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (

            <div className='login'>
                <header className='login-header'>
                    <img src={logo} alt='logo'/>
                    <h1>ButterFly Yaya</h1>
                </header>
                <section className='login-content'>
                    <h2>用户登陆</h2>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item>
                            {
                                getFieldDecorator('username',{
                                    rules:[
                                        {required:true,whitespace:true,message:'用户名不能为空！'},
                                        {min:4,message:'用户名至少4位'},
                                        {max:12,message:'用户名最多12位'},
                                        {pattern:/^[a-zA-Z0-9_]+$/,message:'用户名必须由英文、数字和下划线组成'}
                                    ]})
                                (
                                    <Input
                                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        placeholder="请输入用户名"
                                    />
                                )
                            }

                        </Form.Item>
                        <Form.Item>
                            {
                                getFieldDecorator('password',
                                    {rules:[
                                        {validator:this.validatorPwd}
                                        ]})
                                (
                                    <Input
                                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        type="password"
                                        placeholder="请输入密码"
                                    />
                                )
                            }

                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                               登陆
                            </Button>
                        </Form.Item>
                    </Form>
                </section>
           </div>)
    }
}

//高阶组件和高阶函数
const WrappedNormalLoginForm = Form.create()(Login);
export default WrappedNormalLoginForm;