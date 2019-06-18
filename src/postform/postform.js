import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Button from 'antd/lib/button';
import { Form,Input} from 'antd';


const validate = values => {
  const errors = {}
  if (!values.userNickname) {
    errors.userNickname = '請填入值'
  } else if (values.userNickname.length > 16) {
    errors.userNickname = '暱稱過長 請控制在16碼內'
  }
  if (!values.userAccount) {
    errors.userAccount = '請填入值'
  } else if (!/^[A-Z0-9]{6,12}$/i.test(values.userAccount)) {
    errors.userAccount = '長度請控制在6~12碼內'
  }
  if (!values.InvitationCode) {
    errors.InvitationCode = '請填入值'
  }else if (!/^[A-Z0-9]{1,6}$/i.test(values.InvitationCode)){
    errors.InvitationCode = '不符合邀請碼格式';
  }
  return errors;
}

 
const FormItem = Form.Item;
const makeField = Component => ({ input, meta, children, hasFeedback, label, ...rest }) => {
  const hasError = meta.touched && meta.invalid;
  return (
    <FormItem

      label={label}
      validateStatus={hasError ? "error" : "success"}
      hasFeedback={hasFeedback && hasError}
      help={hasError && meta.error}
    >
      <Component {...input} {...rest} children={children} />
    </FormItem>
  );
};

const AInput = makeField(Input);


//makeField(Input);

const SimpleForm = props => {
    const { handleSubmit, pristine, reset, submitting} = props;
  return (
    <form onSubmit={handleSubmit}>
     <h1 >歡迎你的加入</h1>
       <div>填寫你該死的基本資料</div> 
      <div>
        <div style = {{marginBottom:-30}}>
        <label style = {{ display: 'flex',justifyContent:'center',alignItems:'left'}}>帳號</label>
        <Field
            name="userAccount"
            component={AInput}
            type="text"
            placeholder="輸入帳號"
            
          />
        
        </div>
      </div>
      <br />
      <div style = {{marginBottom:-30}}>
      <label style = {{ display: 'flex',justifyContent:'left',alignItems:'left'}}>邀請碼</label>
        <Field
            name="InvitationCode"
            component={AInput}
            type="text"
            placeholder="邀請碼"
          />
        </div>
      <div>
      <br />
        <label  style = {{ display: 'flex',justifyContent:'left',alignItems:'left'}}>暱稱</label>
        <div style = {{marginBottom:-18}}>
          <Field
            name="userNickname"
            component={AInput}
            type="text"
            placeholder="Name"
          />
        </div>
      </div>
      
      <br />
      <div>
        <Button type="primary" htmlType="submit" disabled={pristine ||submitting}>註冊</Button>
        <Button style = {{marginLeft:20}} type="button" disabled={pristine || submitting } onClick={reset}>
          重新輸入
        </Button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'simple',
  validate ,
})(SimpleForm);
