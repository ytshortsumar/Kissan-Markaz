import Review from "../../models/Review.js";



export const addReview = async (req, res) =>{
    try{

        console.log("Inside the addReview function");

  let booking = req.body.booking;
  let reviewer = req.body.reviewer;
  let reviewee = req.body.reviewee; 
  let rating = req.body.rating;
  let comment = req.body.comment;

    console.log("Inside the addReview function 01");



        // if(booking === "")
        // {
        //      res.status(400).json({
        //             message : "Booking is required"
        //         });

  
        // }
        // else  if(reviewer === "")
        // {
        //      res.status(400).json({
        //             message : "Reviewer is required"
        //         });
            
        // }
        //    else  if(reviewee === "")
        // {
        //      res.status(400).json({
        //             message : "Reviewee is required"
        //         });
            
        // }
        //    else  if(rating === "")
        // {
        //      res.status(400).json({
        //             message : "Rating is required"
        //         });
            
        // }

        // else  if(rating === "")
        // {
        //      res.status(400).json({
        //             message : "Comment is required"
        //         });
            
        // }
       




       

        let bookingExist = await Review.findOne({
            booking : booking
        });

      
        if(bookingExist){
            console.log("Review already exists");
        }
         
     


      let review_created =  await Review.create({
            booking : booking,
            reviewer : reviewer,
            reviewee : reviewee,
            rating : rating,
            comment : comment,
        });
       

        res.status(200).json({
            message : "Review Created Successfully"
        });


    }
    catch(error){
        console.log(JSON.stringify(error));

        res.status(500).json({
            message : "Something Went Wrong, Please Contact Support"
        });
    }
}