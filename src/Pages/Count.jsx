import CountUp from "react-countup";

export default function StatsSection() {
  return (
    <div className="w-full py-6 sm:py-8 md:py-10 px-4 sm:px-6 lg:px-8 flex justify-center">
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
        <div className="bg-[#2A167E] rounded-lg p-6 sm:p-8 md:p-10 text-white">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#FF8BC0]">
            <CountUp end={100} duration={10} />%
          </h1>
          <p className="mt-3 sm:mt-4 text-xs sm:text-sm opacity-80 leading-relaxed">
          Fun. Discover joy in every
            <br /> moment at our toy show.</p>
        </div>

        <div className="bg-[#2A167E] rounded-lg p-6 sm:p-8 md:p-10 text-white">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#FFB394]">
            <CountUp end={250} duration={10} />
            +
          </h1>
          <p className="mt-3 sm:mt-4 text-xs sm:text-sm opacity-80 leading-relaxed">
            Showroom In All Over Bangladesh
            <br />All Showroom Make Beautiful Decoration.
          </p>
        </div>

        <div className="bg-[#341C9B] rounded-lg p-6 sm:p-8 md:p-10 text-white relative overflow-hidden">

          <div className="absolute right-0 top-0">
            <div className="w-40 h-40 rounded-full border-10 border-[#472BB8] opacity-20 relative -top-10 -right-10"></div>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#3FF1ED]">
            <CountUp end={86} duration={10} />
            +
          </h1>
          <p className="mt-3 sm:mt-4 text-xs sm:text-sm opacity-80 leading-relaxed">
            Different & unique Toy
            <br /> Those create the enjoyabel moment.
          </p>
        </div>
      </div>
    </div>
  );
}
