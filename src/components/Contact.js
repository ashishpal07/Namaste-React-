const Contact = () => {
  return (
  <div>
    <h1 className="mt-5 font-bold text-xl flex items-center justify-center">Contact Us Page</h1>
    <form className="flex w-6/12 mx-auto m-5 shadow-lg bg-slate-200 rounded-lg">
      <div className="flex flex-col w-full items-center p-5">
        <input 
          className="m-3 p-2 border-2 border-black rounded-md w-6/12"
          type="text" placeholder="Enter Full Name" 
        />

        <input
          className="m-3 p-2 border-2 border-black rounded-md w-6/12"
          type="text" placeholder="Enter Phone Number" 
        />

        <input 
          className="m-3 p-2 border-2 border-black rounded-md w-6/12"
          type="email" placeholder="Email: example@gmail.com" 
        />

        <button className="m-3 p-2 bg-black text-white rounded-md w-3/12">SUBMIT</button>
      </div>
    </form>
  </div>
  );
};

export default Contact;
