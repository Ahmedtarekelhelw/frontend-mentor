const MainBox = ({ data }) => {
  return (
    <div className="bg-white w-[85%] md:w-[70%] flex-col md:flex-row flex items-center justify-between  rounded-lg p-4 md:p-10 absolute bottom-[-144px] md:bottom-[-72px] left-1/2  -translate-x-1/2">
      <div className="md:text-left mb-3">
        <h3 className="font-semibold text-slate-600 text-sm">IP Address</h3>
        <h4 className="font-bold text-2xl">{data.ip}</h4>
      </div>
      <hr className="h-[50px] w-[1px] bg-gray-300 hidden md:block" />
      <div className="md:text-left  mb-3">
        <h3 className="font-semibold text-slate-600 text-sm">Location</h3>
        <h4 className="font-bold text-2xl">
          {data?.location?.region}, {data?.location?.country}
        </h4>
      </div>
      <hr className="h-[50px] w-[1px] bg-gray-300  hidden md:block" />
      <div className="md:text-left  mb-3">
        <h3 className="font-semibold text-slate-600 text-sm">Time Zone</h3>

        <h4 className="font-bold text-2xl">{data?.location?.timezone}</h4>
      </div>
      <hr className="h-[50px] w-[1px] bg-gray-300  hidden md:block" />
      <div className="md:text-left  mb-3">
        <h3 className="font-semibold text-slate-600 text-sm">ISP</h3>
        <h4 className="font-bold text-2xl"> {data?.isp}</h4>
      </div>
    </div>
  );
};

export default MainBox;
