const RegisterUserDetails = ({ newUser }) => {
    return (
      <div className="container p-3 border rounded bg-light">
        <h2>Registered User Details</h2>
        <div>
          <h4>Full Name: {newUser.fullName}</h4>
          <h4>Age: {newUser.age}</h4>
          <h4>Gender: {newUser.gender}</h4>
          <h4>Mobile No: {newUser.mobileNo}</h4>
          <h4>Email ID: {newUser.emailId}</h4>
        </div>
        <h4>Hobbies:</h4>
        <ul>
          {newUser.hobbies.length > 0 ? (
            newUser.hobbies.map((hobby, index) => <li key={index}>{hobby}</li>)
          ) : (
            <li>No hobbies selected</li>
          )}
        </ul>
      </div>
    );
  };
  
  export default RegisterUserDetails;
  