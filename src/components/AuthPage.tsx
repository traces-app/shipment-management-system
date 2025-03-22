// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const AuthPage = () => {
//   const [isLogin, setIsLogin] = useState(true); // toggle mode
//   const [role, setRole] = useState("business");
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const navigate = useNavigate();

//   const handleAuth = () => {
//     if (!username || !password) {
//       setError("Please enter both username and password.");
//       return;
//     }

//     const users = JSON.parse(localStorage.getItem("users") || "[]");

//     if (isLogin) {
//       // ✅ LOGIN FLOW
//       const user = users.find(
//         (u: any) => u.username === username && u.password === password
//       );

//       if (!user) {
//         setError("Invalid username or password.");
//         return;
//       }

//       // Save logged-in user
//       localStorage.setItem(
//         "user",
//         JSON.stringify({ name: user.username, role: user.role })
//       );

//       // Redirect
//       navigate(user.role === "driver" ? "/driver-dashboard" : "/manual-order");

//     } else {
//       // ✅ SIGNUP FLOW
//       const exists = users.find((u: any) => u.username === username);
//       if (exists) {
//         setError("Username already exists!");
//         return;
//       }

//       // Save new user
//       users.push({ username, password, role });
//       localStorage.setItem("users", JSON.stringify(users));

//       // Auto-login after signup
//       localStorage.setItem("user", JSON.stringify({ name: username, role }));

//       navigate(role === "driver" ? "/driver-dashboard" : "/manual-order");
//     }
//   };

//   const toggleMode = () => {
//     setIsLogin(!isLogin);
//     setUsername("");
//     setPassword("");
//     setError("");
//   };

//   return (
//     <div className="flex flex-col items-center justify-center h-screen px-4 space-y-4">
//       <h1 className="text-4xl font-bold">
//         {isLogin ? "Login" : "Sign Up"}
//       </h1>

//       <select
//         value={role}
//         onChange={(e) => setRole(e.target.value)}
//         className="p-2 border rounded w-64"
//       >
//         <option value="business">Business</option>
//         <option value="driver">Driver</option>
//       </select>

//       <input
//         type="text"
//         placeholder="Username"
//         className="p-2 border rounded w-64"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//       />

//       <input
//         type="password"
//         placeholder="Password"
//         className="p-2 border rounded w-64"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />

//       {error && <p className="text-sm text-red-600">{error}</p>}

//       <button
//         onClick={handleAuth}
//         className="px-6 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
//       >
//         {isLogin ? "Login" : "Sign Up"}
//       </button>

//       <p className="text-sm">
//         {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
//         <button
//           className="text-blue-600 underline"
//           onClick={toggleMode}
//         >
//           {isLogin ? "Sign Up" : "Login"}
//         </button>
//       </p>
//     </div>
//   );
// };

// export default AuthPage;

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [role, setRole] = useState("business");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();

    if (!username || !password) {
      setError("Please enter both username and password.");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users") || "[]");

    if (isLogin) {
      const user = users.find(
        (u: any) => u.username === username && u.password === password
      );

      if (!user) {
        setError("Invalid username or password.");
        return;
      }

      localStorage.setItem("user", JSON.stringify({ name: user.username, role: user.role }));
      navigate(user.role === "driver" ? "/driver-dashboard" : "/home");
    } else {
      const exists = users.find((u: any) => u.username === username);
      if (exists) {
        setError("Username already exists!");
        return;
      }

      users.push({ username, password, role });
      localStorage.setItem("users", JSON.stringify(users));
      localStorage.setItem("user", JSON.stringify({ name: username, role }));

      navigate(role === "driver" ? "/driver-dashboard" : "/home");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <Card className="w-full max-w-sm rounded-2xl shadow-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">
            {isLogin ? "Login" : "Sign Up"}
          </CardTitle>
          <CardDescription>
            Enter your {isLogin ? "email" : "details"} below to {isLogin ? "login" : "create an account"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleAuth} className="flex flex-col gap-6">
            {!isLogin && (
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="p-2 border rounded"
              >
                <option value="business">Business</option>
                <option value="driver">Driver</option>
              </select>
            )}
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="text"
                placeholder="m@example.com"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <a
                  href="#"
                  className="ml-auto text-sm text-blue-600 hover:underline"
                >
                  Forgot your password?
                </a>
              </div>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {error && <p className="text-sm text-red-500">{error}</p>}

            <Button type="submit" className="w-full">
              {isLogin ? "Login" : "Sign Up"}
            </Button>

            <Button variant="outline" className="w-full">
              Login with Google
            </Button>

            <p className="mt-4 text-center text-sm">
              {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
              <button
                type="button"
                onClick={() => {
                  setIsLogin(!isLogin);
                  setUsername("");
                  setPassword("");
                  setError("");
                }}
                className="text-blue-600 underline border px-2 py-1 rounded hover:bg-gray-100"
              >
                {isLogin ? "Sign up" : "Login"}
              </button>
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AuthPage;
