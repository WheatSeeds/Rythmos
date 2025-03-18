import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import ReviewsStatistics from "../components/HomePage/ReviewsStatistics.tsx";

const HomePage = () => {
    return (
        <>
            <Header/>
            <main>
                <div className="home-page-content">
                    <ReviewsStatistics/>
                </div>
            </main>
            <Footer/>
        </>
    );
};

export default HomePage;