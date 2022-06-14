import Header from "./filter/header";
import UploadComponent from "./shared/uploadComponent";

export default function EmailComponent() {
    return (
        <>
            <div className="main_div">
                <div className="content_box">
                    <Header />
                    <div className="mt-5 mb-5">
                        <UploadComponent />
                    </div>
                </div>
            </div>
        </>
    )
}