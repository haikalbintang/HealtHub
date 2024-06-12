export default function Footer() {
  return (
    <>
      <div className="px-6 py-10 bg-orange-200 text-slate-800 rounded-t-xl">
        <div className="flex justify-between items-center">
          <h2 className="font-bold">FOLLOW US</h2>
          <div className="flex justify-center items-center gap-2 mx-auto">
            <h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                className="w-7 h-7"
              >
                <path d="M 44.898438 14.5 C 44.5 12.300781 42.601563 10.699219 40.398438 10.199219 C 37.101563 9.5 31 9 24.398438 9 C 17.800781 9 11.601563 9.5 8.300781 10.199219 C 6.101563 10.699219 4.199219 12.199219 3.800781 14.5 C 3.398438 17 3 20.5 3 25 C 3 29.5 3.398438 33 3.898438 35.5 C 4.300781 37.699219 6.199219 39.300781 8.398438 39.800781 C 11.898438 40.5 17.898438 41 24.5 41 C 31.101563 41 37.101563 40.5 40.601563 39.800781 C 42.800781 39.300781 44.699219 37.800781 45.101563 35.5 C 45.5 33 46 29.398438 46.101563 25 C 45.898438 20.5 45.398438 17 44.898438 14.5 Z M 19 32 L 19 18 L 31.199219 25 Z" />
              </svg>
            </h1>
            <h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                className="w-6 h-6"
              >
                <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z" />
              </svg>
            </h1>
            <h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 30 30"
                className="w-7 h-7"
              >
                {" "}
                <path d="M15,3C8.373,3,3,8.373,3,15c0,6.016,4.432,10.984,10.206,11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L19.73,18.18h-3.106v8.697 C22.481,26.083,27,21.075,27,15C27,8.373,21.627,3,15,3z" />
              </svg>
            </h1>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <div>
            <h2 className="font-bold">CONTACT US</h2>
            <h3 className="mt-4 font-bold">Address:</h3>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit
            </p>
            <h3 className="mt-4 font-bold">Contact:</h3>
            <p className="text-sm">+62 878 1234 5678</p>
            <h3 className="mt-4 font-bold">Email:</h3>
            <p className="text-sm">finalproject@revou.co</p>
          </div>
          <div className="pl-10">
            <h2 className="font-bold">NAVIGATE</h2>
            <ul className="font-normal">
              <li className="mt-4">Home</li>
              <li className="mt-4">About</li>
              <li className="mt-4">Products</li>
              <li className="mt-4">Locations</li>
              <li className="mt-4">Contact</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
