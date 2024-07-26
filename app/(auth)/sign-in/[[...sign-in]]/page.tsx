import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return <div className="w-full h-full bg-cyan-50">
    <SignIn />;
    </div>
}