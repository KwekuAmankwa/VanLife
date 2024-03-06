import React from "react";
import { BsStarFill } from "react-icons/bs";
import graph from "/review-graph.png"

export default function Reviews(){

    const reviewsData = [
        {
            rating: 5,
            name: "Elliot",
            date: "December 1, 2022",
            text: "The beach bum is such an awesome van! Such a comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!",
            id: "1",
        },
        {
            rating: 5,
            name: "Sandy",
            date: "November 23, 2022",
            text: "This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!",
            id: "2",
        },
    ]

    return(
        <div className="host-review">
            <section className="review-intial">
                <div className="initial-heading">
                    <h1>Your Reviews</h1>
                    <p>Last <span>30 days</span></p>
                </div>
                <div className="initial-image">
                    <img src={graph} alt="" />
                </div>
            </section>
            <section className="review-end">
                <h4 className="end-heading">Reviews ({reviewsData.length})</h4>
                <div className="end-reviews">
                    {reviewsData.map((review) => (
                        <div key={review.id} className="review-item">
                            <div className="review">
                                {[...Array(review.rating)].map((_, i) => (
                                    <BsStarFill className="review-star" key={i} />
                                ))}
                                <div className="info">
                                    <p className="name">{review.name}</p>
                                    <p className="date">{review.date}</p>
                                </div>
                                <p className="text">{review.text}</p>
                            </div>
                            <hr />
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}