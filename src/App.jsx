import Header from "./components/Header";
import UserCard from "./components/UserCard";
import "./App.css";

function App() {
  const user = {
    name: "P Mano Vikas Reddy",
    email: "manovikas@example.com",
    role: "Frontend Developer",
  };

  const { name, email, role } = user;

  return (
    <div className="app">
      <Header />
      <UserCard name={name} email={email} role={role} />
    </div>
  );
}

export default App;