// import React, { useState } from "react";
// // import { FontSizes } from '@uifabric/fluent-theme/lib/fluent/FluentType';
// import { TextField } from "office-ui-fabric-react/lib/TextField";
// import { Stack, PrimaryButton } from "office-ui-fabric-react";
// import {login}  from '../../Actions/UserActions'
// import { connect } from 'react-redux';


// interface UserProps {
//     email: string[]
//     password: string []
// }

// function Login: React.SFC<UserProps> =({}) => {
//   const [email, password] = useState({email:'',password:''});

//     // const onChange = (e) => {
//     //     setLogin(e.target.value)
//     // }
//   const onSubmit =(e:any) => {
//     e.preventDefault();
//     props.login({

//     })
//   };
//   return (
//     <Stack
//       horizontalAlign="center"
//       verticalAlign="center"
//       verticalFill
//       styles={{
//         root: {
//           width: "960px",
//           margin: "0 auto",
//           textAlign: "center",
//           color: "#605e5c"
//         }
//       }}
//       gap={15}
//     >
//       Welcome
//       <form onSubmit={onSubmit}>
//         <TextField label="email" type="email" value = {email} onchange={onchange} />
//         <TextField label="password" type="password" value = {password} onchange={onchange} />
//         <PrimaryButton type = 'submit'> </PrimaryButton>
//       </form>
//     </Stack>
//   );
// }

// const mapStateToProps = (state:any) => ({
//     email: state.email,
//     password: state.password
// })



// export default connect(
//     mapStateToProps, { login })(Login)

