 
const SkillRating = ({ name, rating, FilledIcon, EmptyIcon}) => {
    
    const icons = [];
    
    for (let i = 1; i <= rating; i++) {
        const IconToRender = i <= rating ? FilledIcon : EmptyIcon;
        
        icons.push(
            // We render the component reference passed in props
            <IconToRender key={`${name}-${i}`} />
        );
    }

    return (
        <div className="skill"> {/* Use your styled component for the wrapper */}
            <h3 className="resume-h3">{name}</h3>
            <p className="resume-p">{icons}</p>
        </div>
    );
};

export default SkillRating;