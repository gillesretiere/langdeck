const ServiceCard = ({ imgURL, label, subtext }) => {
    return (
      <div className="flex-1 w-full">
        <div className="w-[280px]">
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