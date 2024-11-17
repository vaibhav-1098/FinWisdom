import { ReactGoogleReviews } from "react-google-reviews";
import "react-google-reviews/dist/index.css";

const Reviews = () => {
    const featurableWidgetId = "fd5ef1f4-870e-47b5-95a3-8fe175128898";

    return (
        <div>
            <h2 className="text-center mb-4">Google Reviews</h2>
            <ReactGoogleReviews layout="badge" featurableId={featurableWidgetId} />
            <ReactGoogleReviews layout="carousel" featurableId={featurableWidgetId} />
            <div className="d-flex justify-content-center align-items-center m-3 query">
                <a
                    href="https://g.page/r/CVrRcyU52fXcEAI/review"
                    className="button jelly text-decoration-none text-black"
                    target="_blank"
                >
                    Leave a Review
                </a>
            </div>
        </div>
    );
};

export default Reviews;
