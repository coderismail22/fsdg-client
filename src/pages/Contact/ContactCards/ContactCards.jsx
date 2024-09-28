import ContactCard from "../../../components/ContactCard/ContactCard";

const ContactCards = () => {
  return (
    <div className="py-5">
      <h1 className="font-yeseva font-bold text-3xl my-5 text-center">
        Find Us Here
      </h1>
      <div className="grid md:grid-cols-2 gap-5  p-5 max-w-5xl">
        <ContactCard
          icon={"office"}
          title={"Head Office Address"}
          description={"2/12 Humayun Road, Mohammadpur, Dhaka-1207 "}
        />
        <ContactCard
          icon={"tree"}
          title={"Work Hours"}
          description={""}
        />
        <ContactCard
          icon={"phone"}
          title={"Phone Number"}
          description={"01714-006476"}
        />
        <ContactCard
          icon={"mail"}
          title={"Email us at"}
          description={"info@fsdgbd.org"}
        />
      </div>
    </div>
  );
};

export default ContactCards;
