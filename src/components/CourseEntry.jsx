const CourseEntry = ({ title, institution, date }) => (
    <div className="course"> {/* Use your styled component for .course */}
        <h3 className="resume-h3">{title}</h3>
        {/* institution is optional, if included, print both */}
        <p className="resume-p">{institution}</p>
        <p className="resume-p">{date}</p>
    </div>
);

export default CourseEntry