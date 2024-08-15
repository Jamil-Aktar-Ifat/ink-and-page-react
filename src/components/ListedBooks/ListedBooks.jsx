import { FaAngleDown } from "react-icons/fa6";

const ListedBooks = () => {
  return (
    <div>
      <h2 className=" text-xl font-bold text-center py-7 rounded-md bg-[#1313130D]">
        Books
      </h2>
      <div className="text-center my-4 ">
        <details className="dropdown ">
          <summary className="btn p-4 font-semibold bg-[#23BE0A] text-white">
            Sort By <FaAngleDown></FaAngleDown>
          </summary>
          <ul className="menu dropdown-content bg-[#1313130D] rounded-box">
            <li>
              <a>Rating</a>
            </li>
            <li>
              <a>Number of Pages</a>
            </li>
            <li>
              <a>Publish Year</a>
            </li>
          </ul>
        </details>
      </div>
      <div>
        <div role="tablist" className="tabs tabs-lifted">
          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab"
            aria-label="Tab 1"
          />
          <div
            role="tabpanel"
            className="tab-content bg-base-100 border-base-300 rounded-box p-6"
          >
            Tab content 1
          </div>

          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab"
            aria-label="Tab 2"
            defaultChecked
          />
          <div
            role="tabpanel"
            className="tab-content bg-base-100 border-base-300 rounded-box p-6"
          >
            Tab content 2
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;
