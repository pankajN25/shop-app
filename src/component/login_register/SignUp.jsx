

// export default SignUp;
import { useState } from "react";
import RegisterUserDetails from "./RegisterUserDetails"; // Import the component

const SignUp = ({ existingUser }) => {
  const [registerUser, setRegisterUser] = useState({
    fullName: "",
    age: "",
    gender: "",
    hobbies: [],
    mobileNo: "",
    emailId: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false); // Fixed useState

  const handleHobbies = (event) => {
    const { checked, value } = event.target;
    setRegisterUser((prevState) => ({
      ...prevState,
      hobbies: checked
        ? [...prevState.hobbies, value]
        : prevState.hobbies.filter((hobby) => hobby !== value),
    }));
  };

  const handleRegisterForm = (e) => {
    e.preventDefault();
    setIsSubmitted(true); // Show user details after submission
  };

  const handleReset = () => {
    setRegisterUser({
      fullName: "",
      age: "",
      gender: "",
      hobbies: [],
      mobileNo: "",
      emailId: "",
    });
    setIsSubmitted(false);
  };

  return (
    <>
      {!isSubmitted ? (
        <div className="container mt-5">
          <div className="card shadow">
            <div className="card-header bg-primary text-white">
              <h2 className="mb-0">Registration Form</h2>
            </div>
            <div className="card-body">
              <form onSubmit={handleRegisterForm}>
                {/* Full Name */}
                <div className="mb-3">
                  <label htmlFor="fullName" className="form-label">Full Name</label>
                  <input
                    id="fullName"
                    name="fullName"
                    className="form-control"
                    placeholder="Enter Your Name"
                    type="text"
                    required
                    value={registerUser.fullName}
                    onChange={(e) =>
                      setRegisterUser({ ...registerUser, fullName: e.target.value })
                    }
                  />
                </div>

                {/* Age */}
                <div className="mb-3">
                  <label htmlFor="age" className="form-label">Age</label>
                  <input
                    id="age"
                    name="age"
                    className="form-control"
                    placeholder="Enter Your Age"
                    type="number"
                    required
                    value={registerUser.age}
                    onChange={(e) =>
                      setRegisterUser({ ...registerUser, age: e.target.value })
                    }
                    min={18}
                    max={60}
                  />
                </div>

                {/* Gender Selection */}
                <div className="mb-3">
                  <label className="form-label">Select Gender:</label>
                  <div className="d-flex gap-3">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        id="g1"
                        type="radio"
                        value="Male"
                        checked={registerUser.gender === "Male"}
                        onChange={(e) =>
                          setRegisterUser({ ...registerUser, gender: e.target.value })
                        }
                      />
                      <label className="form-check-label" htmlFor="g1">
                        Male
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        id="g2"
                        type="radio"
                        value="Female"
                        checked={registerUser.gender === "Female"}
                        onChange={(e) =>
                          setRegisterUser({ ...registerUser, gender: e.target.value })
                        }
                      />
                      <label className="form-check-label" htmlFor="g2">
                        Female
                      </label>
                    </div>
                  </div>
                </div>

                {/* Hobbies Selection */}
                <div className="mb-3">
                  <label className="form-label">Select Your Hobbies:</label>
                  <div className="d-flex flex-column gap-2">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        id="hb1"
                        type="checkbox"
                        value="Singing"
                        checked={registerUser.hobbies.includes("Singing")}
                        onChange={handleHobbies}
                      />
                      <label className="form-check-label" htmlFor="hb1">
                        Singing
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        id="hb2"
                        type="checkbox"
                        value="Dancing"
                        checked={registerUser.hobbies.includes("Dancing")}
                        onChange={handleHobbies}
                      />
                      <label className="form-check-label" htmlFor="hb2">
                        Dancing
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        id="hb3"
                        type="checkbox"
                        value="Reading"
                        checked={registerUser.hobbies.includes("Reading")}
                        onChange={handleHobbies}
                      />
                      <label className="form-check-label" htmlFor="hb3">
                        Reading
                      </label>
                    </div>
                  </div>
                </div>

                {/* Mobile Number */}
                <div className="mb-3">
                  <label htmlFor="mobileNo" className="form-label">Mobile Number</label>
                  <input
                    id="mobileNo"
                    className="form-control"
                    placeholder="10 digits mobile number"
                    type="tel"
                    value={registerUser.mobileNo}
                    onChange={(e) =>
                      setRegisterUser({ ...registerUser, mobileNo: e.target.value })
                    }
                    required
                    pattern="[0-9]{10}"
                  />
                </div>

                {/* Email ID */}
                <div className="mb-3">
                  <label htmlFor="emailId" className="form-label">Email Address</label>
                  <input
                    id="emailId"
                    className="form-control"
                    placeholder="Enter email ID"
                    type="email"
                    value={registerUser.emailId}
                    onChange={(e) =>
                      setRegisterUser({ ...registerUser, emailId: e.target.value })
                    }
                    required
                  />
                </div>

                {/* Submit & Reset Buttons */}
                <div className="d-flex justify-content-center gap-3 mt-4">
                  <button type="submit" className="btn btn-primary px-4">
                    Submit
                  </button>
                  <button type="button" className="btn btn-outline-secondary px-4" onClick={handleReset}>
                    Reset
                  </button>
                </div>
              </form>

              {/* Sign In Prompt */}
              <div className="mt-4 text-center">
                <p className="mb-0">
                  Already a user? Please <button className="btn btn-link p-0" onClick={() => existingUser(true)}>Sign In</button>
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <RegisterUserDetails newUser={registerUser} />
      )}
    </>
  );
};

export default SignUp;

