import React, { Component } from "react";
import styled from "styled-components";

const Form = styled.form`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Button = styled.button`
  border: none;
  outline: none;
  border-radius: 5px;
  background-color: coral;
  color: #fff;
  padding: 10px 30px;
  cursor: pointer;
`;

const LoginPage = ({ isLogin, handLogin }) => {
  console.log(isLogin, handLogin);
  return (
    <div>
      {isLogin ? (
        <>
          <h1
            style={{ textAlign: "center", marginTop: "15%", fontSize: "30px" }}
          >
            Have a nice adventure!
          </h1>
        </>
      ) : (
        <>
          <h1
            style={{ textAlign: "center", marginTop: "15%", fontSize: "30px" }}
          >
            Đăng nhập để truy cập
          </h1>
          <Form>
            <Button onClick={handLogin}>Login</Button>
          </Form>
        </>
      )}
    </div>
  );
};
export default LoginPage;
