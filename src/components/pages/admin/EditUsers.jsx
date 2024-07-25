import React, { useEffect, useState } from "react";
import { /* getUser, getUserById, */ updateUserById } from "../../apis/baseApi";
import { useLocation } from "react-router-dom";
import "./EditUsers.css";
import { Form, Input, Select, Space, Switch, Card } from "antd";

import { SwalHooks } from "../../hooks/sweet-alert2";
import LoadingContentAdmin from "../../Loading/LoadingContentAdmin";

const { Option } = Select;

const formItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
    },

    sm: {
      span: 16,
    },
  },
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 5,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 5,
    },
  },
};

const EditUsers = () => {
  //hooks
  const { state } = useLocation();
  const [form] = Form.useForm();
  const [, /* userData */ setUserData] = useState([]);
  // const [allUserData, setAllUserData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [initialValuesForm, setInitialValuesForm] = useState({});
  //alert
  const { SwalSucces, SwalFail } = SwalHooks();

  // set data User
  const onUpdateInitialValue = (userData) => {
    const values = {
      uid: userData?.uid,
      email: userData?.email,
      firstName: userData?.firstName,
      lastName: userData?.lastName,
      address: userData?.address,
      phone: userData?.phone,
      status: userData?.status === "active" ?? false,
      prefix: "66",
    };
    setInitialValuesForm(values);
  };

  const getData = async () => {
    try {
      // const res = await getUser();
      // if (res.status === 200) {
      setTimeout(() => {
        // setAllUserData(res.data.users);

        setUserData(state);
        onUpdateInitialValue(state);

        setLoading(false);
      }, 2000);
      // }
    } catch (error) {
      console.error("Error fetching user data:", error);
      setLoading(false);
    }
  };

  //update to server
  const onSubmit = async (values) => {
    setLoading(true);
    const dataUpdate = {
      user: {
        ...values,
        status: values.status ? "active" : "inactive",
        phone: values.phone.toString(),
      },
    };
    // find id table
    // const id = allUserData.find((item) => item.uid === values.uid).id;
    const id = state.id;

    const res = await updateUserById(id, dataUpdate);

    if (res.status === 200) {
      setTimeout(() => {
        setLoading(false);
        SwalSucces({ title: "Update Success", text: "" });
      }, 2000);
    } else {
      setTimeout(() => {
        setLoading(false);
        SwalFail({ title: "Update Fail", text: "" });
      }, 2000);
    }
  };

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

  //first load
  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const FormEdit = () => {
    return (
      <Form
        {...formItemLayout}
        form={form}
        name="edit"
        onFinish={onSubmit}
        initialValues={initialValuesForm}
        scrollToFirstError
      >
        <Form.Item name="uid" hidden>
          <Input />
        </Form.Item>
        <div className="row">
          <div className="col">
            <Form.Item
              name="email"
              label="E-mail"
              rules={[
                {
                  type: "email",
                  message: "The input is not valid E-mail!",
                },
                {
                  message: "Please input your E-mail!",
                },
              ]}
            >
              <Input disabled />
            </Form.Item>
            <Form.Item
              name="firstName"
              label="FirstName"
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
            <Form.Item
              name="lastName"
              label="LastName"
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
          <div className="col">
            <Form.Item
              name="phone"
              label="Phone Number"
              rules={[
                {
                  required: true,
                  message: "Please input your phone number!",
                },
              ]}
            >
              <Input
                type="tel"
                minLength={10}
                maxLength={10}
                addonBefore={prefixSelector}
                style={{
                  width: "100%",
                }}
              />
            </Form.Item>
            <Form.Item name="status" label="Active" valuePropName="checked">
              <Switch />
            </Form.Item>
            <Form.Item
              name="address"
              label="Address"
              rules={[
                {
                  required: true,
                  message: "Please input Address",
                },
              ]}
            >
              <Input.TextArea showCount maxLength={200} />
            </Form.Item>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Form.Item {...tailFormItemLayout}>
              <Space>
                <button type="submit" className="btn btn-dark">
                  Update
                </button>
                <button type="reset" className="btn btn-outline-dark">
                  reset
                </button>
              </Space>
            </Form.Item>
          </div>
          <div className="col"></div>
        </div>
      </Form>
    );
  };

  return (
    <div className="container">
      <LoadingContentAdmin loading={loading}>
        {/* <h5 className="alert alert-dark fw-bold"> Edit User</h5> */}
        <br />
        <Card>
          <FormEdit />
        </Card>
      </LoadingContentAdmin>
    </div>
  );
};

export default EditUsers;
