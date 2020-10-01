
const Helpers = {
  calculateAverages: (reviews) => {
    let reviewsAverages = {
      appearance: 0,
      easeOfAssembly: 0,
      overallRating: 0,
      productQuality: 0,
      valueForMoney: 0,
      worksAsExpected: 0,
    };
    let numOfReviews = reviews.length;

    reviews.forEach((review) => {
      for (var rating in reviewsAverages) {
        reviewsAverages[rating] += review[rating]
      }
    })
    for (var rating in reviewsAverages) {
      reviewsAverages[rating] /= numOfReviews
    }
    reviewsAverages.numOfReviews = numOfReviews;
    return reviewsAverages;
  }
}

export default Helpers;




