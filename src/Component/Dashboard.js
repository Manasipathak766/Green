const Dashboard = () => {
  const productivityData = [
    { day: 'Monday', percentage: 4 },
    { day: 'Tuesday', percentage: 90 },
    { day: 'Wednesday', percentage: 75 },
    { day: 'Thursday', percentage: 85 },
    { day: 'Friday', percentage: 95 },
    { day: 'Saturday', percentage: 70 },
  ];

  return (
    <div className="dashboard-container flex justify-center items-center h-80 mb-10 pt-80">
      <div className="outer-container  bg-black p-4 rounded-lg mb-20 relative z-20">
        {/* Content inside the container */}
        <h1 className="text-3xl font-bold mb-4 text-white">Weekly Productivity</h1>
        <div className="inner-content w-50 text-white">
          {productivityData.map(({ day, percentage }, index) => (
            <div
              key={index}
              className="bar-meter flex items-center justify-start w-200 bg-slate-800 rounded-md overflow-hidden"
            >
              <div
                className="bar-fill bg-[#36A54680] border-[#36A546] mb-5"
                style={{ width: `${percentage}%`, height: '15px', borderRadius: '5px' }}
              ></div>
              <div className="text-lg font-semibold ml-2">{day}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;



