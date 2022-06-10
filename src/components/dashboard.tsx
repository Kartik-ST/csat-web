import './css/dashboard.css';
import Header from './filter/header';

export default function Dashboard() {
    return (
        <>
            <div className="main_div">
                <div className="content_box">
                    <Header/>
                    <div className="text_area">
                        <div className="text_inner_container mt-4">
                            <h4>Thank you for being a valuable customer, we appreciate your business with Successive Technologies.</h4>
                            <br />
                            <h4>We always want to improve — could you help us out for a few minutes and let us know about your experience working with us?</h4>
                        </div>
                    </div>
                    <button className="btn btn-dark mt-5">Sure, Let's Start</button>
                </div>
            </div>
        </>
    )
}