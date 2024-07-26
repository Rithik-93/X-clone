import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return <div className="w-full h-full flex justify-center bg-signin/up-bg ">
    <SignIn redirectUrl='https://tweetx-e310.onrender.com'/>
    </div>
}