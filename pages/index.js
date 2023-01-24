import Image from "next/image";

export default function IndexPage() {
  return (
    <>
      <section>
        <div className="w-full h-full mb-28 grid grid-cols-1 md:grid-cols-2">
          <div className="grid place-items-center p-5">
            <div className="relative aspect-w-9 aspect-h-9 w-full overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1685945719932-8048cbc68ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
              alt="Picture of something nice" fill={true} />
            </div>
          </div>
          <div className="bg-gray-300 p-12 grid place-items-center ">
            <div className="relative w-32 h-32 mb-5 overflow-hidden outline-red-700">
              <Image src="https://images.unsplash.com/photo-1685945719932-8048cbc68ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
              alt="Picture of something nice" fill={true} />
            </div>
            <div className="p-12 max-w-xl">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Mattis ullamcorper
                velit sed ullamcorper morbi. Consectetur purus ut faucibus pulvinar. Tincidunt
                tortor aliquam nulla facilisi. Nullam ac tortor vitae purus faucibus ornare.
                Tristique senectus et netus et malesuada fames ac turpis. Erat nam at lectus
                urna duis convallis. Lobortis scelerisque fermentum dui faucibus in ornare
                quam viverra.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div>
          <h3 className="text-7xl p-8 text-center outline">
            ---
          </h3>
        </div>
      </section>
      <section>
        <div className="w-full h-full mb-28 grid grid-cols-1 md:grid-cols-2">
          <div className="grid place-items-center p-5">
            <div className="relative aspect-w-8 aspect-h-8 w-full overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1685945719932-8048cbc68ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
              alt="Picture of something nice" fill={true} />
            </div>
          </div>
          <div className="grid place-items-center p-5">
            <div className="relative aspect-w-8 aspect-h-8 w-full overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1685945719932-8048cbc68ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
              alt="Picture of something nice" fill={true} />
            </div>
          </div>
        </div>
        <div>
          <div className="bg-gray-300 p-12 grid place-items-center ">
            <div className="relative w-32 h-32 mb-5 overflow-hidden outline-red-700">
              <Image src="https://images.unsplash.com/photo-1685945719932-8048cbc68ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
              alt="Picture of something nice" fill={true} />
            </div>
            <div className="p-12 max-w-xl">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Mattis ullamcorper
                velit sed ullamcorper morbi. Consectetur purus ut faucibus pulvinar. Tincidunt
                tortor aliquam nulla facilisi. Nullam ac tortor vitae purus faucibus ornare.
                Tristique senectus et netus et malesuada fames ac turpis. Erat nam at lectus
                urna duis convallis. Lobortis scelerisque fermentum dui faucibus in ornare
                quam viverra.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
