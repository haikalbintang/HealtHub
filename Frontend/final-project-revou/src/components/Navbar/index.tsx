const Navbar = () => {
  return (
    <div>
      <div className="hidden items-center justify-around sm:hidden lg:flex p-5 pb-10">
        <h1>have a question? contact us</h1>
        <div className="flex justify-between gap-20">
          <h1>search bar</h1>
          <div className="flex justify-center items-center gap-3">
            <h1>logo1</h1>
            <h1>logo2</h1>
            <h1>logo3</h1>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-32">
        <h1>Recipe</h1>
        <h1>About us</h1>
        <h1>recipe</h1>
        <h1>Products</h1>
        <h1>Sign In</h1>
      </div>
    </div>
  );
};

export default Navbar;
