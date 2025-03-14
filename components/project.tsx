type ProjectProps = {
    title: string;
    description: string;
    GithubLink: string;
    LiveLink: string;
  };
  
  const Project = ({ title, description, GithubLink, LiveLink}: ProjectProps) => {
    return (
      <div className="w-80 h-auto rounded-lg shadow-lg p-6 transition-all duration-300 
                      bg-white/5 backdrop-blur-md border border-violet-700/5 
                      hover:border-violet-500/60 hover:shadow-violet-500/30 hover:scale-105">
        <h2 className="text-2xl font-bold text-violet-400 tracking-wide mb-3">{title}</h2>
        <p className="text-gray-300 text-sm leading-relaxed mb-4">{description}</p>
        <a 
          href={GithubLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-violet-500 hover:text-violet-400 font-semibold "
        >
          Github Link
        </a>
        {LiveLink && (
            <a
                href={LiveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-violet-500 hover:text-violet-400 font-semibold ml-4"
            >
                Live Link
            </a>
            )}

      </div>
    );
  };
  
  export default Project;
  