import { useLogin } from "../hooks/useLogin";

export default function ProfilePage() {
  const username = useLogin();
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Profile Page</h1>
      <p>Welcome to your profile page!</p>
      <p className="mt-2">Username: {username}</p>
    </div>
  );
}
