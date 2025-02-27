import React ,{useState} from 'react';



const LogIn = () => {

const [name , setName] = useState("");
const [email , setEmail] = useState("");
const [password , setPassword] = useState("");

const SignUpdata =() =>{
  console.warn(name , email , password);
  
}




  return (
   
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
    <img className="mx-auto h-10 w-auto" src="/img1.jpg" alt="Your Company"/>
    <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Sign in to your account</h2>
  </div>

  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">

    {/* <form className="space-y-6" action="#" method="POST"> */}
      <div>
      <label className="block text-sm/6 font-medium text-gray-900">Enter Name</label>
        <div className="mt-2">
          <input type="name" name="name" value={name} onChange={(e) => setName(e.target.value)}
          id="name" required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
        </div>
      {/* <label for="name" className="block text-sm/6 font-medium text-gray-900">Name</label> */}
        <label  className="block text-sm/6 font-medium text-gray-900">Email address</label>
        <div className="mt-2">
          <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}
           id="email" required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label  className="block text-sm/6 font-medium text-gray-900">Password</label>
          <div className="text-sm">
            {/* <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a> */}
          </div>
        </div>
        <div className="mt-2">
          <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}
           id="password"  required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
        </div>
      </div>

      <div>
        <button onClick={SignUpdata} type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
      </div>
    {/* </form> */}

    <p className="mt-10 text-center text-sm/6 text-gray-500">
      Not a member?
      <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Start a 14 day free trial</a>
    </p>
  </div>
</div>
    
  )
}

export default LogIn
