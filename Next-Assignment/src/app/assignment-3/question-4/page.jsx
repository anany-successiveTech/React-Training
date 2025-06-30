import React from "react";

const Page = () => {
  return (
    <div>
      <p style={{ textAlign: "center", margin: "2rem", fontSize:"large"}}>
        4. Enhance the previous application by adding protected pages that
        require authentication. Create a login page with a form that accepts a
        username and password. Implement authentication logic (e.g., hardcode a
        username and password for now). Secure the About page so that it can
        only be accessed by authenticated users. Redirect unauthenticated users
        to the login page. Display a message on the Home page welcoming the
        authenticated user. <strong style={{color:"green"}}>Refer to the question-1 and question-3.</strong>
      </p>
    </div>
  );
};

export default Page;
