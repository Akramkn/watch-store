import banner from "../public/images/banner.jpg";

const TitleBanner = () => {
  return (
    <div className="container-fluid p-0 custom-shadow">
      <img
        src={banner}
        alt="WristUp Watches"
        className="img-fluid w-100 custom-rounded"
        style={{
          maxHeight: "80vh",
          objectFit: "cover",
        }}
      />
    </div>
  );
};

export default TitleBanner;
