type WritingProps = {
    title: string;
    description: string;
    ReadMore: string;
    picture: string;
  };
  
  const Writing = ({ title, description, ReadMore, picture }: WritingProps) => {
    return (
      <div
        className="w-4/5 h-max rounded-lg shadow-lg p-6 transition-all duration-300 
                   bg-gray-900/5 backdrop-blur-md border border-orange-700/10 
                   hover:border-orange-500/80 hover:shadow-orange-500/50 hover:scale-95"
      >
        <h2 className="text-7xl  text-orange-400 tracking-wide mb-3 custom-font">
          {title}
        </h2>
        <div className="flex flex-wrap items-start gap-6">
            {picture && (
                <a href={ReadMore} target="_blank" rel="noopener noreferrer">
                <img
                    src={picture}
                    alt={title}
                    loading="lazy"
                    className="w-72 h-auto rounded-lg border border-orange-500/30 transition-all"
                />
                </a>
            )}
            <p className="flex-1 text-gray-300 text-xl leading-relaxed sigmar-regular">
                {description}
                <a
                    href={ReadMore}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-500 hover:text-orange-400 font-semibold"
                    >
                    Read More...
                    </a>
            </p>
            
            </div>


        
  
  
   
  

      </div>
    );
  };
  
  export default Writing;
  