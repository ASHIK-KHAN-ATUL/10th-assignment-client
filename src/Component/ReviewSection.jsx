import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";


const ReviewSection = () => {

    const {user} = useContext(AuthContext);

    const handleSubbmitReview = e => {
        e.preventDefault();

        const form = new FormData(e.target)
        const ratingNumber = form.get('rating');
        const comment = form.get('comment');
        const photo = user.photoURL;
        const name  = user.displayName

        const reviewData = {ratingNumber, comment, photo, name}
        console.log(reviewData)

        // send to DB
        fetch('http://localhost:5000/review', {
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body: JSON.stringify(reviewData)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                e.target.reset();
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Review Added Successfully",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
    }


  return (
    <div>

      {/* Review Form */}
      <div className="review-form bg-[#caf0f8] shadow-md p-6 rounded-lg w-full max-w-lg mx-auto">

        <h3 className="text-xl font-semibold mb-4">Leave Your Review</h3>

        <form onSubmit={handleSubbmitReview}  className="space-y-4">

          <input type="number" name="rating" placeholder="Enter a number (0-10)" className="w-full p-2 text-lg font-semibold border rounded-lg bg-[#ecf8f8] " min="0" max="10" required />

          <textarea name="comment" placeholder="Write your review here..."      className="w-full p-2 text-lg font-semibold border rounded-lg bg-[#ecf8f8] " rows="4" required ></textarea>

          <button type="submit" className="btn border-none w-full hover:border-none bg-[#74c69d] hover:bg-[#6cddf1] transition-all duration-300 ease-in-out transform hover:scale-105 font-semibold hover:text-white" > Submit Review </button>

        </form>
      </div>

    </div>
  );
};

export default ReviewSection;
