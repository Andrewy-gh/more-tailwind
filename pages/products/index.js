import React from 'react';

export default function Products(props) {
  return (
    <>
      {/* media query change 10% to a bigger value */}
      <div className="grid grid-cols-[minmax(150px,_25%)_1fr]">
        <div className="h-screen text-blue-500 border border-blue-500">
          <div className="text-3xl p-4 border-b border-blue-500 hover:bg-blue-500 hover:text-white">
            DIV ABOVE
          </div>
          <div className="text-3xl p-4 border-b border-blue-500 hover:bg-blue-500 hover:text-white">
            SHOP ALL
          </div>
          <div className="text-3xl p-4 border-b border-blue-500 hover:bg-blue-500 hover:text-white">
            CATEGORY 1
          </div>
          <div className="text-3xl p-4 border-b border-blue-500 hover:bg-blue-500 hover:text-white">
            CATEGORY 2
          </div>
          <div className="text-3xl p-4 border-b border-blue-500 hover:bg-blue-500 hover:text-white">
            CATEGORY 3
          </div>
        </div>
        <div>Main Content</div>
      </div>
    </>
  );
}
