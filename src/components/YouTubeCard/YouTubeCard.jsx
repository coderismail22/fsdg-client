import Button from "../Button/Button";

const YouTubeCard = () => {
  return (
    <div className="m-3 p-3 bg-slate-100 rounded-md pointer-events-none">
      <h1 className="font-palanquin font-extrabold text-center ">Documentary</h1>

      <div
        className="relative overflow-hidden my-7"
        style={{ paddingTop: "56.25%" }}
      >
        <iframe
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
          src="https://www.youtube.com/embed/d6gVSTqAKvQ?list=PL85ElU8qgutwtk9Sz6X1wkXyalcYPIAZ1"
          title="Providing access to freshwater and salinity resistant seeds to vulnerable communities in Satkhira"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
      <h1 className="text-center font-palanquin my-5">Featured Story</h1>
      <Button />
    </div>
  );
};

export default YouTubeCard;
