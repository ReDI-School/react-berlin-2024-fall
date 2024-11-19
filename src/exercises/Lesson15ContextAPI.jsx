import { useEffect, useState } from "react";

// Note: helper function to simulate fetching user data
// Ignore the implementation, it is just a helper! In a real app, this will
// be a fetch API call.
const fetchUser = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Divyendu");
    }, 1000);
  });
};

// Task 1: call fetchUser and set the user state
// Task 2: use context API and remove user prop from Page component
const App = () => {
  const [user, setUser] = useState(null);

  // Hint: remove the user prop, use context
  return <Page user={user}></Page>;
};

// Hint: remove the user prop, use context
const Page = ({ children, user }) => {
  return (
    <>
      <UserText user={user}></UserText>
      {children}
    </>
  );
};

// Hint: remove the user prop, use context
const UserText = ({ user }) => {
  if (user) {
    return <>Currently logged in user is {user}</>;
  }
  return <>No logged in user</>;
};

const Lesson15ContextAPI = () => {
  return (
    <>
      <App />
    </>
  );
};

export default Lesson15ContextAPI;
