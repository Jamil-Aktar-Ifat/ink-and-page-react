import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <div>
      <h2>Ooops! Not Found</h2>
      <Link to="/">Go back to Home</Link>
    </div>
  );
};

/**
 * const handleJobsFilter = (filter) => {
    if (filter === "all") {
      setDisplayJobs(appliedJobs);
    } else if (filter === "remote") {
      const remoteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Remote"
      );
      setDisplayJobs(remoteJobs);
    } else if (filter === "onsite") {
      const onsiteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Onsite"
      );
      setDisplayJobs(onsiteJobs);
    }
  };
 */

export default ErrorPage;
