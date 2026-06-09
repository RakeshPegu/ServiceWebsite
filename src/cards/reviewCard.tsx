function ReviewCard(){
    return(
        
      <div className="rounded-2xl bg-white p-8 shadow-sm">
        <div className="mb-4 text-yellow-500">
          ★★★★★
        </div>

        <p className="text-gray-600">
          "The website exceeded our expectations. It looks professional,
          loads quickly, and has helped us attract more customers online."
        </p>

        <div className="mt-6">
          <h4 className="font-semibold text-gray-900">
            Rahul Sharma
          </h4>
          <p className="text-sm text-gray-500">
            Business Owner
          </p>
        </div>
      </div>

    )
    
}
export default ReviewCard;