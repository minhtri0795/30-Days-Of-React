import React, { Component } from "react";
import validator from "validator";
const option = [
  {
    value: "",
    label: "-- Select Country--",
  },
  {
    value: "Finland",
    label: "Finland",
  },
  {
    value: "Sweden",
    label: "Sweden",
  },
  {
    value: "Norway",
    label: "Norway",
  },
  {
    value: "Denmark",
    label: "Denmark",
  },
];
const SelectOption = () => {
  let selectFormat = option.map(({ value, label }) => {
    return <option value={value}>{label}</option>;
  });
  return selectFormat;
};

class Form extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    title: "",
    tel: "",
    dateOfBirth: "",
    favoriteColor: "",
    weight: "",
    gender: "",
    file: "",
    bio: "",
    skills: {
      html: false,
      css: false,
      javascript: false,
    },
    touched: {
      firstName: false,
      lastName: false,
      title: false,
      email: false,
      tel: false,
      weight: false,
      country: false,
    },
  };
  handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      this.setState({
        skills: {
          ...this.state.skills,
          [name]: checked,
        } /* skill object giống như skills object ban đầu nhưng key được ghi đè bằng giá trị checked*/,
      });
    } else if (type === "file") {
      console.log(type, "cehck here");
      this.setState({ [name]: e.target.files[0] });
    } else {
      this.setState({ [name]: value });
    }
  };
  handleBlur = (e) => {
    const { name } = e.target;
    this.setState({ touched: { ...this.state.touched, [name]: true } });
  };

  validate = () => {
    // Object to collect error feedback and to display on the form
    const error = {
      firstName: "",
      lastName: "",
      title: "",
      email: "",
      tel: "",
      weight: "",
      country: "",
    };
    const checkLength = (selector, min, max, errMessage) => {
      if (
        (this.state.touched[selector] && this.state[selector].length < min) ||
        (this.state.touched[selector] && this.state[selector].length > max)
      ) {
        error[selector] = errMessage;
        /* sử dụng closure javascript checkLength vẫn có thể truy cập đc object error*/
      }
    };
    checkLength("lastName", 2, 5, "tu 2 den 5");
    if (
      this.state.touched.firstName &&
      !validator.isLength(this.state.firstName, { min: 2, max: 10 })
    ) {
      error.firstName = "Tu 2 den 10 ki tu thoi!!";
    }
    if (
      this.state.touched.lastName &&
      !validator.isLength(this.state.lastName, { min: 2, max: 5 })
    ) {
      error.lastName = "Tu 2 den 5 ki tu thoi!!";
    }
    // check title
    if (this.state.touched.title && validator.isEmpty(this.state.title)) {
      error.title = "khong dc bo trong";
    }

    // check email
    if (this.state.touched.email && !validator.isEmail(this.state.email)) {
      error.email = "Nhap email";
    }

    // check phone number
    if (this.state.touched.tel && !validator.isMobilePhone(this.state.tel)) {
      error.tel = "Nhap so dien thoai";
    }

    // check weight
    if (this.state.touched.weight && this.state.weight < 0) {
      error.weight = "can nang am????";
    }

    // check select
    if (this.state.touched.country && validator.isEmpty(this.state.country)) {
      error.country = "chon quoc gia";
    }
    return error;
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const {
      firstName,
      lastName,
      country,
      title,
      email,
      tel,
      dateOfBirth,
      favoriteColor,
      weight,
      bio,
      gender,
      skills,
    } = this.state;
    const skillsFormat = [];
    for (const key in skills) {
      if (skills[key]) {
        skillsFormat.push(key.toUpperCase());
      }
    }
    const data = {
      firstName,
      lastName,
      country,
      title,
      email,
      tel,
      dateOfBirth,
      favoriteColor,
      weight,
      bio,
      gender,
      skills: skillsFormat,
    };
    console.log(data);
  };
  render() {
    const { firstName, lastName, title, email, tel, weight, country } =
      this.validate();
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="form">
          <div className="form-group">
            <label>First name</label>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              value={this.state.firstName}
            ></input>
            <br />
            <small>{firstName}</small>
          </div>
          <div className="form-group">
            <label>Last name</label>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={this.state.lastName}
              onBlur={this.handleBlur}
              onChange={this.handleChange}
            ></input>
            <small>{lastName}</small>
          </div>
          <div className="form-group">
            <label>Title</label>
            <input
              type="text"
              name="title"
              placeholder="Your title"
              value={this.state.title}
              onBlur={this.handleBlur}
              onChange={this.handleChange}
            ></input>
            <small>{title}</small>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email </label>
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              placeholder="Email"
            />
            <small>{email}</small>
          </div>

          <div className="form-group">
            <label htmlFor="tel">Telephone </label>
            <input
              type="tel"
              name="tel"
              value={this.state.tel}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              placeholder="Tel"
            />
            <small>{tel}</small>
          </div>
          <div className="form-group">
            <label htmlFor="dateOfBirth">Date of birth </label>
            <input
              type="date"
              name="dateOfBirth"
              value={this.state.dateOfBirth}
              onChange={this.handleChange}
              placeholder="Date of Birth"
            />
          </div>
          <div className="form-group">
            <label htmlFor="favoriteColor">Favorite Color</label>
            <input
              type="color"
              id="color"
              name="color"
              value={"#" + this.state.favoriteColor}
              onChange={this.handleChange}
              placeholder="Favorite Color"
            />
          </div>
          <div className="form-group">
            <label htmlFor="weight">Weight </label>
            <input
              type="number"
              id="weight"
              name="weight"
              value={this.state.weight}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              placeholder="Weight in Kg"
            />
            <small>{weight}</small>
          </div>
          <div>
            <label htmlFor="country">Country</label> <br />
            <select
              name="country"
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              id="country"
            >
              <SelectOption />
            </select>
            <small>{country}</small>
          </div>
          <div>
            <p>Gender</p>
            <div>
              <input
                type="radio"
                id="female"
                name="gender"
                value="Female"
                onChange={this.handleChange}
              />
              <label htmlFor="female">Female</label>
            </div>
            <div>
              <input
                id="male"
                type="radio"
                name="gender"
                value="Male"
                onChange={this.handleChange}
              />
              <label htmlFor="male">Male</label>
            </div>
            <div>
              <input
                id="other"
                type="radio"
                name="gender"
                value="Other"
                onChange={this.handleChange}
              />
              <label htmlFor="other">Other</label>
            </div>
          </div>

          <div>
            <p>Select your skills</p>
            <div>
              <input
                type="checkbox"
                id="html"
                name="html"
                onChange={this.handleChange}
              />
              <label htmlFor="html">HTML</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="css"
                name="css"
                onChange={this.handleChange}
              />
              <label htmlFor="css">CSS</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="javascript"
                name="javascript"
                onChange={this.handleChange}
              />
              <label htmlFor="javascript">JavaScript</label>
            </div>
          </div>
          <div>
            <label htmlFor="bio">Bio</label> <br />
            <textarea
              id="bio"
              name="bio"
              value={this.state.bio}
              onChange={this.handleChange}
              cols="120"
              rows="10"
              placeholder="Write about yourself ..."
            />
          </div>

          <div>
            <input type="file" name="file" onChange={this.handleChange} />
          </div>
          <button className="btn btn-success">Submit</button>
        </form>
      </div>
    );
  }
}
export default Form;
