import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import user from "./User.png";

export default function BasicTextFields() {
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    userName: "",
    password: "",
  });
  const [store, setStore] = useState([]);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const Change = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const Submit = (e) => {
    e.preventDefault();
    setStore([...store, { ...data, id: Math.random() }]);
    setData({ userName: "", password: "" });
  };
  return (
    <>
      <div className="container-fluid">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="border border-2 text-center my-3 w-50 p-5">
            <div className="d-flex justify-content-center align-items-center">
              <div className="background p-4 w-25 mb-4">
                <img src={user} alt="user image" />
              </div>
            </div>
            <div className="text">
              <h2>WELCOME!</h2>
              <p>
                Let's connect to your workplace. <br /> Please enter your email
                to continue
              </p>
            </div>
            <div>
              <TextField
                style={{ width: "40ch" }}
                id="outlined-basic"
                label="Email Address"
                placeholder="Email Address"
                variant="outlined"
                size="small"
                value={data.userName}
                onChange={Change}
                name="userName"
              />
            </div>
            <div>
              <FormControl sx={{ m: 1, width: "40ch" }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  size="small"
                  value={data.password}
                  onChange={Change}
                  name="password"
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </div>
            <div className="text-1">Forget Password?</div>
            <button className="btn w-50 mt-3" onClick={Submit}>
              Sign In
            </button>
          </div>
        </div>
      </div>
      {store.map((Val, index) => {
        const { userName, password } = Val;
        return (
          <>
            <div
              key={index}
              className="d-flex justify-content-evenly col-12 mt-5 p-2 bg-primary text-white fw-bold"
            >
              <p>User Name : {userName}</p>
              <p>Password : {password}</p>
            </div>
          </>
        );
      })}
    </>
  );
}
