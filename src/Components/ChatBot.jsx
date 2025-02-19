import React from "react";

const ChatBot = () => {
  return (
    <div className=" h-screen bg-white p-12">
      <div className=" mb-4">
        <img src="/logo.png" alt="Cotech Logo" className="w-32 ml-6" />
      </div>

      {/* Container */}
      <div className=" w-full bg-[#f3f5f5] max-h-[95%] min-h-[95%]   rounded-4xl flex flex-col justify-between items-center p-10 ">
        {/* Message Box */}
        <div className="mt-6 p-6 rounded-xl relative w-full overflow-y-auto">
          {/* Aligning this div to the right */}
          <div className="flex items-center space-x-6 justify-end py-2  ml-auto ">
            <p className="font-medium min-w-4xl bg-white px-4 py-2 text-lg rounded-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <img src="/User.svg" alt="User" className="w-10"/>
          </div>

          <div className="flex items-start space-x-4 max-w-5xl">
            <img src="/AI.svg" alt="Ai bot" className="w-10 mt-4" />
            <div className="mt-4 border border-[#FFA92F] p-4 rounded-lg text-gray-700">
              <p>
                Sed sed erat vitae dui porta hendrerit at quis velit.
                Pellentesque vestibulum suscipit lacus nec auctor. Nunc
                venenatis ex et justo consectetur consectetur.
              </p>
              <ol className="mt-2 list-decimal pl-6 space-y-2">
                <li>
                  Pellentesque a libero nec lorem aliquet varius. Maecenas
                  viverra velit vitae aliquam vulputate. Cras eu dolor quis odio
                  elementum blandit. Sed arcu diam, ullamcorper sed turpis vel,
                  maximus efficitur dolor.
                </li>
                <li>
                  Aliquam ornare, magna nec condimentum suscipit, ex mi viverra
                  erat, id pharetra tortor turpis a quam. Proin sollicitudin,
                  ipsum vel facilisis sodales, elit justo aliquet est, dignissim
                  rutrum sapien dolor quis erat. Fusce sapien dui, convallis
                  vitae dui vel, aliquam posuere massa. Sed at nisl a tellus
                  ullamcorper fringilla vitae vitae odio.
                </li>
                <li>
                  Nullam vitae dui convallis, viverra metus a, ultricies tortor.
                  Praesent tincidunt et felis quis tempor. In in tincidunt orci,
                  sit amet facilisis odio. Proin posuere mauris neque, sed
                  rhoncus arcu condimentum non. Suspendisse tincidunt dui ut
                  arcu malesuada sagittis. Aenean in elementum enim.
                </li>
                <li>
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos. Orci varius natoque penatibus
                  et magnis dis parturient montes, nascetur ridiculus mus.
                  Suspendisse mollis blandit mauris a elementum. Phasellus massa
                  felis, molestie id est eu, pellentesque luctus dui. Aliquam
                  erat volutpat. Ut sed aliquet turpis, vel egestas ligula.
                </li>
              </ol>
            </div>
          </div>
        </div>

        {/* Input Section */}
        <div className=" min-w-7xl p-4 mt-4 bg-white border border-[#F0F1F1] rounded-3xl">
          <div className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Saisissez un message..."
              // value={input}
              // onChange={(e) => setInput(e.target.value)}
              className="flex-grow border border-[#F0F1F1] rounded-3xl text-lg px-6 h-12 focus:ring focus:ring-yellow-400 focus:outline-none"
            />
            <button
              // onClick={handleSendMessage}
              className=" bg-linear-to-r  from-[#FFA92F] to-[#FFCC85] transition-all ease-in-out duration-300 text-white flex justify-center items-center cursor-pointer hover:bg-linear-to-l  rounded-4xl w-20 h-10"
            >
              <img src="/send.svg" alt="Send" className="w-7" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
