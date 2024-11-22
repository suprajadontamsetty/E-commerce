const Newsletterbox = () => {

  const onSubmitHandler = (event) => {
    event.preventDefault();
  }

  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-gray-800 dark:text-gray-200">
        Subscribe now and get 20% off
      </p>
      <p className="text-gray-400 dark:text-gray-500 mt-3">
        Lorem ipsum is simply dummy text of the printing and typesetting industry.
      </p>
      <form onSubmit={onSubmitHandler} className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3 dark:border-gray-700">
        <input
          className="w-full sm:flex-1 outline-none dark:bg-gray-800 dark:text-gray-200"
          type="email"
          placeholder="Enter your email"
          required
        />
        <button type="submit" className="bg-black text-white text-xs px-10 py-4 dark:bg-gray-600 dark:text-gray-100">
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
}

export default Newsletterbox;
