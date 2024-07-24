const ServiceCard = ({ imgURL, label, subtext }) => {
    return (
      <div className="flex-1 w-full shadow-3xl px-10 py-16">
        <div className="flex justify w-[400px] max-w-[300px] sm:max-w-[150px] md:max-w-[250px] md:max-w-48 center items-center">
          <img src={imgURL} alt={label}/>
        </div>
        <h3 className="mt-5 text-3xl leading-normal font-bold">
          {/* label */}
        </h3>
        <p className="mt-3 break-words text-lg leading-normal text-slate-gray">
          {/* subtext */}
        </p>
      </div>
    );
  };
  
  export default ServiceCard;