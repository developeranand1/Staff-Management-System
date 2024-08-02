/* eslint-disable react/prop-types */
import { MdOutlineMailOutline } from "react-icons/md";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { HiMiniCurrencyRupee } from "react-icons/hi2";
import { FaTrashAlt } from "react-icons/fa";

const StaffList = ({ staff, error,onDelete  }) => {
    const generateImage=(id)=>{
        return `https://i.pravatar.cc/150?img=${id}`;
    }
    return (
        <div className="container mt-3 mb-3">
            <div className="row">
                {error && <p>{error}</p>}
                {staff.map((member, index) => (
                    <div key={member._id} className="col-md-3">

                        <div className="card">
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                {index + 1}
                            </span>
                            <div className="card-body">
                                <div className="text-center">
                                    <img
                                        className="profile-image"
                                        src={generateImage(index+1)}
                                        alt="profile-image"
                                    />
                                </div>
                                <h6 className="card-title text-center">
                                    {member.firstName} {member.lastName}
                                </h6>
                                <h6 className="card-title text-center">
                                    <small>{member.position}</small>
                                </h6>
                                <p className="card-text text-center">
                                    <MdOutlineMailOutline /> {member.email}
                                </p>
                                <div className="d-flex justify-content-between">
                                    <p className="card-text text-center">
                                        <FaPhoneSquareAlt /> {member.phone}
                                    </p>
                                    <p className="card-text text-center">
                                        <HiMiniCurrencyRupee /> {member.salary}
                                    </p>
                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <button className="view-btn">View more</button>
                                    <button
                                        className="btn btn-danger "
                                        onClick={() => onDelete(member._id)}
                                    >
                                        <FaTrashAlt /> Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
};

export default StaffList;
