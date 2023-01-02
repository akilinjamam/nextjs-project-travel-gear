import { useRouter } from "next/router";

const UpcomingEvents = () => {

    const router = useRouter();

    const pageNo = router.query.upcomingEvents
    return (
        <>
            <h2>the page is {pageNo} </h2>
        </>
    );
};

export default UpcomingEvents;