function UpcomingMarathons() {

  const upcomingMarathonsPhoto = [
    'https://i.ibb.co.com/B4t26VZ/21.jpg',
    'https://i.ibb.co.com/9Nz5f73/20.jpg',
    'https://i.ibb.co.com/8bJFc3K/19.jpg',
    'https://i.ibb.co.com/5YpFXPn/18.jpg',
    'https://i.ibb.co.com/G70z1pm/17.jpg',
    'https://i.ibb.co.com/z2gPyP0/16.jpg',
  ]

  return (
    <div className="my-12 max-w-[1380px] mx-auto">
      <h1 className="text-3xl md:text-5xl font-semibold text-center mb-16">
        UpComing Marathon's
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 place-items-center">
        {/* Cards */}
        {upcomingMarathonsPhoto.map((url, index) => (
          <div key={index} className="card card-compact bg-base-100 max-w-96 shadow-xl border">
            <figure>
              <img src={url} alt="Marathon Photo" />
            </figure>
            <div className="card-body ">
              <h2 className="card-title font-bold">Spring Blossom Race</h2>
              <p className="badge badge-success text-white p-3">2025-02-25</p>
              <p>Celebrate the arrival of spring by running amidst blooming flowers.</p>
              <div className="card-actions justify-center mt-4">
                <button disabled className="btn btn-sm text-lg px-8">Up Coming...</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default UpcomingMarathons
