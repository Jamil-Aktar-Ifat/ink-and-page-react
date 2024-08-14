import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="hero bg-base-200 my-10">
      <div className="hero-content flex-col lg:flex-row-reverse bg-[rgba(19, 19, 19, 0.05)]">
        <img
          src="../../../public/media/banner-img.png"
          className="max-w-sm rounded-lg "
        />
        <div>
          <h1 className="text-5xl font-bold mb-8">
            Books to freshen up <br />
            your bookshelf
          </h1>
          <Link to="/listedBooks" className="btn bg-[#23BE0A] text-white">
            View the List
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
