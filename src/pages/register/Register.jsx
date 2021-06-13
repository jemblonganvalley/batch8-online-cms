import { useState } from "react";
import "./register.css";
import axios from "axios";

const Register = () => {
  const [img, setImg] = useState(
    "https://image.flaticon.com/icons/png/512/147/147144.png"
  );

  const handleView = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setImg(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios("http://localhost:8080/api/users", {
      method: "POST",
      mode : "cors",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      data: {
        username: e.target.username.value,
        password: e.target.password.value,
        avatar: img,
        created_at: new Date().toLocaleDateString(),
      },
    })
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form className="form-register" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="username">username</label>
        <input type="text" id="username" name="username" required />
      </div>

      <div className="form-group">
        <label htmlFor="password">password</label>
        <input type="password" id="password" name="password" required />
      </div>

      <div className="form-group">
        <label htmlFor="avatar">
          <img src={img} alt="" className="img-view" />
          avatar
        </label>
        <input
          type="file"
          id="avatar"
          name="avatar"
          accept="image/jpg, image/png, image/jpeg"
          hidden
          onChange={handleView}
        />
      </div>

      <button type="submit">register</button>
      <small>
        sudah punya akun silakan <a href="/login">login</a>
      </small>
    </form>
  );
};

export default Register;
