import { Banner, Marathons, PhotoGallery, UpcomingMarathons, UserFeedback } from '../App'
import { Helmet } from "react-helmet";
import NewsletterSection from '../Components/Home/NewsletterSection';

function Home() {
    return (
        <>
            <Helmet>
                <title>RunRoute | Your Partner in Every Marathon Adventure</title>
            </Helmet>
            <Banner />
            <Marathons />
            <UserFeedback />
            <PhotoGallery />
            <UpcomingMarathons />
            <NewsletterSection />
        </>
    )
}

export default Home
