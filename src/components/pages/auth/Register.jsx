import React from "react";
import { Img } from "../../../assets/image/hookImg";
import { v4 as uuidv4 } from "uuid";

import "./Register.css";
import moment from "moment";
import { Form, Input, Select } from "antd";
import { createUser } from "../../apis/baseApi";

import { SwalHooks } from "../../hooks/sweet-alert2";

const { Option } = Select;

const Register = ({ setFlip, setLoading, refetch }) => {
  const [form] = Form.useForm();
  const { SwalSucces, SwalFail } = SwalHooks();

  const onFlip = () => {
    setFlip((prev) => ({
      ...prev,
      flip: !prev.flip,
      page: "register",
    }));
  };

  const btnLoginSocial = [
    { name: "Facebook", class: "btn-facebook", icon: Img.iconFb },
    { name: "Twitter", class: "btn-twitter", icon: Img.iconTw },
    { name: "Gmail", class: "btn-gmail", icon: Img.iconGmail },
    { name: "LinkedIn", class: "btn-linkedin", icon: Img.iconLn },
  ];

  //update to server
  const onSubmit = async (values) => {
    try {
      setLoading(true);
      const data = {
        user: {
          ...values,
          created: moment().format(),
          uid: uuidv4(),
          roles: "user",
          status: "active",
        },
      };

      const res = await createUser(data);
      if (res.status === 200) {
        //time load
        setTimeout(() => {
          refetch();
          setLoading(false);
          SwalSucces({ title: "Create Success", text: "" });
          form.resetFields();
        }, 2000);
      } else {
        setLoading(false);
        SwalFail({ title: "Create Fail", text: "" });
      }
    } catch (error) {
      console.error("Error Create user data:", error);
      setLoading(false);
      SwalFail({ title: "Create Fail", text: "" });
    }
  };

  //default form value
  const initialValuesForm = {
    prefix: "66",
  };

  //input phone
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="66">+66</Option>
      </Select>
    </Form.Item>
  );
  return (
    <div className="wrap-auth">
      <div className="container">
        <div className="register" style={{ minHeight: "100vh" }}>
          <div className="container">
            <Form
              form={form}
              onFinish={onSubmit}
              initialValues={initialValuesForm}
            >
              <div className="row">
                <div className="col-md-6">
                  <h1 className="fw-bold">Create an account</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Earum error fugiat officiis reiciendis ullam. Dolorem error
                    in quae repellendus temporibus.
                  </p>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-md-5">
                  <div className="row">
                    <div className="col-md-6 wrap-input-register">
                      <div className="mb-3">
                        <label className="form-label" htmlFor="firstname">
                          First Name
                        </label>
                        <Form.Item
                          name="firstName"
                          rules={[
                            {
                              required: true,
                              message: "Please input your first name!",
                              whitespace: true,
                            },
                          ]}
                        >
                          <Input />
                        </Form.Item>
                      </div>
                    </div>
                    <div className="col-md-6 wrap-input-register">
                      <div className="mb-3">
                        <label className="form-label" htmlFor="lastname">
                          Last Name
                        </label>
                        <Form.Item
                          name="lastName"
                          rules={[
                            {
                              required: true,
                              message: "Please input your last name!",
                              whitespace: true,
                            },
                          ]}
                        >
                          <Input />
                        </Form.Item>
                      </div>
                    </div>
                    <div className="col-md-6 wrap-input-register">
                      <div className="mb-3">
                        <label className="form-label" htmlFor="email">
                          Email
                        </label>
                        <Form.Item
                          name="email"
                          rules={[
                            {
                              required: true,
                              type: "email",
                              message: "The input is not valid E-mail!",
                            },
                            {
                              message: "Please input your E-mail!",
                            },
                          ]}
                        >
                          <Input />
                        </Form.Item>
                      </div>
                    </div>
                    <div className="col-md-6 wrap-input-register">
                      <div className="mb-3">
                        <label className="form-label" htmlFor="phone">
                          Phone Number
                        </label>
                        <Form.Item
                          name="phone"
                          rules={[
                            {
                              required: true,
                              message: "Please input your phone number!",
                            },
                          ]}
                        >
                          <Input
                            type="phone"
                            minLength={10}
                            maxLength={10}
                            addonBefore={prefixSelector}
                            style={{
                              width: "100%",
                            }}
                          />
                        </Form.Item>
                      </div>
                    </div>
                    <div className="col-md-6 wrap-input-register">
                      <div className="mb-3">
                        <label className="form-label" htmlFor="password">
                          Password
                        </label>
                        <Form.Item
                          name="password"
                          rules={[
                            {
                              required: true,
                              message: "Please input your password!",
                            },
                          ]}
                          //   hasFeedback
                        >
                          <Input.Password minLength={6} />
                        </Form.Item>
                      </div>
                    </div>
                    <div className="col-md-6 wrap-input-register">
                      <div className="mb-3">
                        <label
                          className="form-label"
                          htmlFor="confirm-password"
                        >
                          Confirm Password
                        </label>
                        <Form.Item
                          name="confirm"
                          dependencies={["password"]}
                          hasFeedback
                          rules={[
                            {
                              required: true,
                              message: "Please confirm your password!",
                            },
                            ({ getFieldValue }) => ({
                              validator(_, value) {
                                if (
                                  !value ||
                                  getFieldValue("password") === value
                                ) {
                                  return Promise.resolve();
                                }
                                return Promise.reject(
                                  new Error(
                                    "The new password that you entered do not match!"
                                  )
                                );
                              },
                            }),
                          ]}
                        >
                          <Input.Password />
                        </Form.Item>
                      </div>
                    </div>
                    <div className="col-md-12 d-flex gap-4">
                      <button
                        className="btn btn-outline-dark btn-lg"
                        type="submit"
                      >
                        <img
                          src={Img.iconPlus}
                          className="btn-icon icon-fb"
                          alt="Plus"
                        />
                        <span>Create Account</span>
                      </button>
                      <button
                        className="btn btn-outline-dark btn-lg"
                        type="button"
                        onClick={() => onFlip()}
                      >
                        <span>Login</span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="divider">
                    <div className="flip" onClick={() => onFlip()}>
                      Flip
                    </div>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="social-registration">
                    {btnLoginSocial.map((item, index) => (
                      <button
                        key={index}
                        type="button"
                        className={`btn btn-social ${item.class} mb-3`}
                        onClick={() => {
                          onFlip();
                        }}
                      >
                        <img
                          src={item.icon}
                          alt="Facebook"
                          className="btn-icon icon-white"
                        />
                        <span>Continue with {item.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
