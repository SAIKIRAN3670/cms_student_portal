import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import classNames from "classnames";
import Swal from "sweetalert2";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";

const AddStudent = () => {
  const [submit, setSubmit] = useState("Submit");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    getValues,
  } = useForm();

  const onSubmit = (data) => {
    setSubmit("Submitting...");
    console.log(JSON.stringify(data, null, 9));

    let formData = new FormData();
    formData.append("Firstname", data.Firstname);
    formData.append("Middlename", data.Middlename);
    formData.append("Lastname", data.Lastname);
    formData.append("s_gender", data.s_gender);
    formData.append("DOB", data.DOB);
    formData.append("email", data.email);
    formData.append("mobileno", data.mobileno);
    formData.append("Address1", data.Address1);
    formData.append("Address2", data.Address2);
    formData.append("state", data.state);
    formData.append("city", data.city);
    formData.append("pincode", data.pincode);
    formData.append("schoolname", data.schoolname);
    formData.append("s_class", data.s_class);
    formData.append("admission", data.admission);
    formData.append("divison", data.divison);
    formData.append("stuid", data.stuid);
    formData.append("username", data.username);
    formData.append("password", data.password);
    formData.append("cpass", data.cpass);
    axios({
      method: "post",
      url: "http://localhost/school_backend/AddStudent.php",
      data: formData,
      config: { headers: { "Content-Type": "multipart/form-data" } },
    })
      .then(function (response) {
        //handle success
        Swal.fire("Student Added Successfully.!", "", "success");
        console.log(response);
        setSubmit("Submit");
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });
    reset();
  };

  return (
    <>
      <div
        className="container shadow-lg rounded-3 "
        style={{ marginTop: "120px", height: "100%" }}
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          autoComplete="off"
          className="shadow-lg p-5 rounded-3"
        >
          <div className="d-flex ">
            <PersonOutlineIcon className=" me-2 " />
            <p className="mb-0" style={{ fontWeight: "500" }}>
              Add Student Details
            </p>
          </div>
          <hr className="mb-3 mt-1" />
          <div className="row jumbotron">
            <div className="col-sm-4 mb-2 form-group">
              <label className="form-label" htmlFor="name-f">
                First Name
              </label>
              <input
                type="text"
                className={classNames("form-control shadow-sm", {
                  "is-invalid": errors.Firstname,
                })}
                placeholder="First name"
                {...register("Firstname", { required: true })}
              />
              {errors?.Firstname?.type === "required" && (
                <p className="text-danger">Student first Name is required !</p>
              )}
            </div>
            <div className="col-sm-4 mb-2 form-group">
              <label className="form-label" htmlFor="name-m">
                Middle name
              </label>
              <input
                type="text"
                className={classNames("form-control shadow-sm", {
                  "is-invalid": errors.Middlename,
                })}
                placeholder="Middle  name"
                {...register("Middlename", { required: true })}
              />
              {errors?.Middlename?.type === "required" && (
                <p className="text-danger">Student Middle Name is required !</p>
              )}
            </div>
            <div className="col-sm-4 mb-2 form-group">
              <label className="form-label" htmlFor="name-l">
                Last name
              </label>
              <input
                type="text"
                className={classNames("form-control shadow-sm", {
                  "is-invalid": errors.Lastname,
                })}
                placeholder="Last  name"
                {...register("Lastname", { required: true })}
              />
              {errors?.Lastname?.type === "required" && (
                <p className="text-danger">Student Last Name is required !</p>
              )}
            </div>
            <div className="col-sm-4 mb-2 form-group">
              <label className="form-label" htmlFor="sex">
                Gender
              </label>
              <select
                id="sex"
                className={classNames(
                  "form-control browser-default custom-select shadow-sm",
                  {
                    "is-invalid": errors.s_gender,
                  }
                )}
                {...register("s_gender", {
                  required: true,
                })}
              >
                <option value="">---select----</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="unspesified">Other</option>
              </select>
              {errors?.s_gender?.type === "required" && (
                <p className="text-danger">Gender is required !</p>
              )}
            </div>
            <div className="col-sm-4 my-2 form-group">
              <label className="form-label" htmlFor="DOB">
                Date Of Birth
              </label>
              <input
                type="date"
                className={classNames("form-control shadow-sm", {
                  "is-invalid": errors.DOB,
                })}
                placeholder="DOB"
                {...register("DOB", { required: true })}
              />
              {errors?.DOB?.type === "required" && (
                <p className="text-danger">Student DOB is required !</p>
              )}
            </div>
            <div className="col-sm-4 mb-2 form-group">
              <label className="form-label" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                className={classNames("form-control shadow-sm", {
                  "is-invalid": errors.email,
                })}
                placeholder="email"
                {...register("email", {
                  required: true,
                  pattern: {
                    value:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "Please enter a valid email",
                  },
                })}
              />
              {errors?.email?.type === "required" && (
                <p className="text-danger">Student email is required !</p>
              )}
              {errors?.email?.type === "pattern" && (
                <p className="text-danger">Please enter a valid email !</p>
              )}
            </div>
            <div className="col-sm-4 mb-2 form-group">
              <label className="form-label" htmlFor="mobile">
                Mobile No.
              </label>
              <input
                type="text"
                className={classNames("form-control shadow-sm", {
                  "is-invalid": errors.mobileno,
                })}
                placeholder="mobileno"
                {...register("mobileno", {
                  required: true,
                  pattern: {
                    value: /^[6789]\d{9}$/,
                    message: "Please enter a valid Mobile No.",
                  },
                })}
              />
              {errors?.mobileno?.type === "required" && (
                <p className="text-danger">Parent mobile no is required !</p>
              )}
              {errors?.mobileno?.type === "pattern" && (
                <p className="text-danger">Please enter a valid Mobile No.</p>
              )}
            </div>
            <div className="col-sm-4 mb-2 form-group">
              <label className="form-label" htmlFor="address1">
                Address 1
              </label>
              <input
                type="text"
                className={classNames("form-control shadow-sm", {
                  "is-invalid": errors.Address1,
                })}
                placeholder="Address 1"
                {...register("Address1", { required: true })}
              />
              {errors?.Address1?.type === "required" && (
                <p className="text-danger">Student Address 1 is required !</p>
              )}
            </div>
            <div className="col-sm-4 mb-2 form-group">
              <label className="form-label" htmlFor="Address2">
                Address 2
              </label>
              <input
                type="text"
                className={classNames("form-control shadow-sm", {
                  "is-invalid": errors.Address2,
                })}
                placeholder="Address 2"
                {...register("Address2", { required: true })}
              />
              {errors?.Address2?.type === "required" && (
                <p className="text-danger">Student Address 2 is required !</p>
              )}
            </div>
            <div className="col-sm-4 mb-2 form-group">
              <label className="form-label" htmlFor="sate">
                State
              </label>
              <input
                type="text"
                className={classNames("form-control shadow-sm", {
                  "is-invalid": errors.state,
                })}
                placeholder="state"
                {...register("state", { required: true })}
              />
              {errors?.state?.type === "required" && (
                <p className="text-danger">State is required !</p>
              )}
            </div>
            <div className="col-sm-4 mb-2 form-group">
              <label className="form-label" htmlFor="city">
                City
              </label>
              <input
                type="text"
                className={classNames("form-control shadow-sm", {
                  "is-invalid": errors.city,
                })}
                placeholder=" City "
                {...register("city", { required: true })}
              />
              {errors?.city?.type === "required" && (
                <p className="text-danger">City is required !</p>
              )}
            </div>
            <div className="col-sm-4 mb-2 form-group">
              <label className="form-label" htmlFor="pincode">
                Pin code
              </label>
              <input
                type="text"
                className={classNames("form-control shadow-sm", {
                  "is-invalid": errors.pincode,
                })}
                placeholder="Pin Code"
                {...register("pincode", {
                  required: true,
                  pattern: {
                    value: /^[1-9]{1}[0-9]{2}\s{0,1}[0-9]{3}$/,
                    message: "Please enter a valid Pin code.",
                  },
                })}
              />
              {errors?.pincode?.type === "required" && (
                <p className="text-danger">Pincode is required !</p>
              )}
              {errors?.pincode?.type === "pattern" && (
                <p className="text-danger">Please enter a valid Pin code. !</p>
              )}
            </div>
            <div className="d-flex  mt-5">
              <PersonOutlineIcon className=" me-2 " />
              <p className="mb-0" style={{ fontWeight: "500" }}>
                Add Academic Details
              </p>
            </div>
            <hr className="mb-3 mt-1" />
            <div className="col-sm-4 mb-2 form-group">
              <label className="form-label" htmlFor="School">
                School{" "}
              </label>
              <input
                type="text"
                className={classNames("form-control shadow-sm", {
                  "is-invalid": errors.schoolname,
                })}
                placeholder="School Name"
                {...register("schoolname", { required: true })}
              />
              {errors?.schoolname?.type === "required" && (
                <p className="text-danger">School Name is required !</p>
              )}
            </div>
            <div className="col-sm-4 mb-2 form-group">
              <label className="form-label" htmlFor="Class">
                Class
              </label>
              <div class="form-group">
                <select
                  className={classNames("form-control shadow-sm", {
                    "is-invalid": errors.s_class,
                  })}
                  name="s_class"
                  id="exampleFormControlSelect1"
                  {...register("s_class", {
                    required: true,
                  })}
                >
                  <option value="">-----select------</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </div>
              {errors?.s_class?.type === "required" && (
                <p className="text-danger">Class is required !</p>
              )}
            </div>

            <div className="col-sm-4 mb-2 form-group">
              <label className="form-label" htmlFor="AdmissionDate">
                Admission Date
              </label>
              <input
                type="date"
                className={classNames("form-control shadow-sm", {
                  "is-invalid": errors.admission,
                })}
                placeholder="Admission Date"
                {...register("admission", { required: true })}
              />
              {errors?.admission?.type === "required" && (
                <p className="text-danger">Admission Date is required !</p>
              )}
            </div>
            <div className="col-sm-4 mb-2 form-group">
              <label className="form-label" htmlFor="Division">
                Division
              </label>
              <div class="form-group">
                <select
                  className={classNames("form-control shadow-sm", {
                    "is-invalid": errors.divison,
                  })}
                  name="divison"
                  id="exampleFormControlSelect1"
                  {...register("divison", {
                    required: true,
                  })}
                >
                  <option value="">-------select---------</option>
                  <option value="6">A</option>
                  <option value="7">B</option>
                  <option value="8">C</option>
                </select>
              </div>
              {errors?.divison?.type === "required" && (
                <p className="text-danger">Division is required !</p>
              )}
            </div>
            <div className="col-sm-4 mb-2 form-group">
              <label className="form-label" htmlFor="SID">
                Student ID
              </label>
              <input
                type="text"
                className={classNames("form-control shadow-sm", {
                  "is-invalid": errors.stuid,
                })}
                placeholder="Student ID"
                {...register("stuid", { required: true })}
              />
              {errors?.stuid?.type === "required" && (
                <p className="text-danger">Student ID is required !</p>
              )}
            </div>
            {/* <div className="col-sm-4 mb-2 form-group">
              <label className="form-label" htmlFor="pic">Profile-Pic</label>
              <input type="file" className={classNames("form-control shadow-sm", {
                "is-invalid": errors.profile,
              })} placeholder="Profile-pic" {...register("profile", { required: true, })} />
              {errors?.profile?.type === "required" && (
                <p className="text-danger">Student Profic-pic is required !</p>
              )}
            </div> */}

            <div className="col-sm-4 mb-2 form-group">
              <label className="form-label" htmlFor="username">
                User Name
              </label>
              <input
                type="text"
                className={classNames("form-control shadow-sm", {
                  "is-invalid": errors.username,
                })}
                placeholder="Student User name"
                {...register("username", { required: true })}
              />
              {errors?.username?.type === "required" && (
                <p className="text-danger">User Name is required !</p>
              )}
            </div>
            <div className="col-sm-4 mb-2 form-group">
              <label className="form-label" htmlFor="pass">
                Password
              </label>
              <input
                type="password"
                className={classNames("form-control shadow-sm", {
                  "is-invalid": errors.password,
                })}
                placeholder="Student Password"
                {...register("password", {
                  required: true,
                })}
              />
              {errors?.password?.type === "required" && (
                <p className="text-danger">Password is required !</p>
              )}
            </div>
            <div className="col-sm-4 mb-2 form-group">
              <label className="form-label" htmlFor="Cpass">
                Confirm Password
              </label>
              <input
                type="password"
                className={classNames("form-control shadow-sm", {
                  "is-invalid": errors.cpass,
                })}
                placeholder="Confirm Password"
                {...register("cpass", {
                  required: true,
                  validate: (value) =>
                    value === getValues("password") ||
                    "password doesn't match.",
                })}
              />
              {errors?.cpass?.type === "required" && (
                <p className="text-danger">Please Confirm password!</p>
              )}
              {errors?.cpass?.type === "validate" && (
                <p className="text-danger">password doesn't match.</p>
              )}
            </div>
            <div className="col-sm-12 form-group mb-0 mt-3 d-flex justify-content-center align-item-center">
              <button
                type="submit"
                className="btn btn-primary float-right w-25"
              >
                {submit}
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddStudent;
