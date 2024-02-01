// UserInfoForm.jsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFormData } from "../../store/slices/hotelsSlice";

const UserInfoForm = () => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state: any) => state.hotelsData);

  const handleChange = (e: any) => {
    dispatch(
      setFormData({
        key: e.target.name,
        value: e.target.value,
      })
    );
  };

  return (
    <div className="form user-info">
      <div className="form-item user-firstname">
        <label>First Name: </label>
        <input
          placeholder="Enter First Name"
          autoComplete="off"
          type="text"
          name="firstName"
          value={userInfo.firstName}
          onChange={handleChange}
        />
      </div>
      <div className="form-item user-lastname">
        <label>Last Name: </label>
        <input
          placeholder="Enter Last Name"
          autoComplete="off"
          type="text"
          name="lastName"
          value={userInfo.lastName}
          onChange={handleChange}
        />
      </div>
      <div className="form-item user-email">
        <label>Email: </label>
        <input
          placeholder="Enter Email Address"
          autoComplete="off"
          type="email"
          name="email"
          value={userInfo.email}
          onChange={handleChange}
        />
      </div>
      <div className="form-item user-email">
        <label>Contact: </label>
        <input
          placeholder="Enter Contact Number"
          autoComplete="off"
          type="text"
          name="contact"
          value={userInfo.contact}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default UserInfoForm;
