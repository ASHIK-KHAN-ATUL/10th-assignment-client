import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


const ReviewSection = () => {

    const {user} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubbmitReview = e => {
        e.preventDefault();

        const form = new FormData(e.target)
        const ratingNumber = form.get('rating');
        const comment = form.get('comment');
        const photo = user.photoURL;
        const name  = user.displayName

        const reviewData = {ratingNumber, comment, photo, name}
        // console.log(reviewData)

        // send to DB
        fetch('https://10th-assignment-server-ruddy.vercel.app/review', {
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body: JSON.stringify(reviewData)
        })
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            if(data.insertedId){
                e.target.reset();
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Review Added Successfully",
                    showConfirmButton: false,
                    timer: 1500
                  });
                navigate('/')
            }
        })
    }


  return (
    <div className="h-screen flex justify-center items-center">

      {/* Review Form */}
      <div className="review-form bg-purple-500/20 border border-purple-500 shadow-md p-6  w-full max-w-lg mx-auto rounded-none">

        <h3 className="text-xl font-semibold mb-10 text-center">Leave Your Review</h3>

        <form onSubmit={handleSubbmitReview}  className="space-y-4">

          <input type="number" name="rating" placeholder="Enter a number (0-10)" className="w-full p-2 text-lg font-semibold border border-purple-500   bg-transparent rounded-none " min="0" max="10" required />

          <textarea name="comment" placeholder="Write your review here..."      className="w-full p-2 text-lg font-semibold border border-purple-500 bg-transparent rounded-none " rows="4" required ></textarea>

          <button type="submit" className="btn btn-outline btn-success rounded-none btn-sm w-full" > Submit Review </button>

        </form>
      </div>

    </div>
  );
};

export default ReviewSection;
