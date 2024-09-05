const Profile = () => {
  return (
    <div>
      <div className="md:p-5">
        {/* Title and Description */}
        <div className=" mb-5">
          <h1 className="font-palanquin text-[30px] font-bold text-center my-3">
            Profile
          </h1>
          <p className="font-lato text-[17px] text-justify  ">
            FSDG is one of the most recognized pro-environmental national NGOs
            in Bangladesh. It was conceptualized in 1993, from Bangladesh Flood
            Action Plan (FAP16) Environmental Study; and the formal journey
            started in 1994. Since formation, FSDG has been active in this field
            and has drawn attention of relevant local, national and
            international actors including government and funding agencies
            through demonstrating innovations in its approaches and producing
            tangible learning outcomes. On behalf of its General Committee, an
            Executive Committee (EC) governs FSDG. FSDG aims to join with others
            in influencing the national development strategy towards directions
            that support sustainable environment in Bangladesh.{" "}
          </p>
        </div>
        {/* Infos */}
        <div className="px-5">
          {/* Bunch 1 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
            {/* 1 */}
            <p className="col-span-1 font-yeseva font-bold text-[#001848] md:text-right">
              Vision
            </p>
            <p className="col-span-2 font-lato">
              FSDG dreams that people and nature live in harmony in a world free
              from exploitation and exclusion.
            </p>
            {/* 2 */}
            <p className="col-span-1 font-yeseva font-bold text-[#001848] md:text-right">
              Mission
            </p>
            <p className="col-span-2 font-lato">
              Empowering marginalized communities with required skills and
              capabilities for making change that favors pro-poor, inclusive and
              sustainable development.
            </p>
            {/* 3 */}
            <p className="col-span-1 font-yeseva font-bold md:text-right">
              Slogan
            </p>
            <p className="col-span-2 font-lato">
              Striving to build social-ecological resilience.
            </p>
          </div>
          {/* Bunch 2 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 ">
            {/* 1 */}
            <p className="col-span-1 font-yeseva font-bold md:text-right">
              Legal entity
            </p>
            <p className="col-span-2 font-lato">
              FSDG is registered with NGO Affairs Bureau, Joint Stock/Societies
              Act, Social Welfare as well as Micro-Credit Regulatory Authority.
            </p>
            {/* 2 */}
            <p className="col-span-1 font-yeseva font-bold md:text-right text-[#001848]">
              FSDG Governance systems
            </p>
            <p className="col-span-2 font-lato text-[#001848] mb-3">
              The organizational aspects of FSDG is managed and governed as per
              the rules set forth in the constitution and is administered by two
              sets of bodies, viz. The General Board (GB) comprising of 21
              (twenty-one) members and an Executive Committee (EC) of 7 (seven)
              members. The day-to-day management and operation of organizational
              activities are accomplished by the Executive Director (ED) along
              with directors, advisers and staff members. There are various
              operational manuals, policies and tools which form the basis and
              guiding principles for the governing of the organizational matters
              including implementing various donor supported projects and
              activities. Besides, there are some operational procedures/ tools
              that have been adopted to further smoothen the operational
              aspects. These include:
            </p>
          </div>
          {/* Bunch 3 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-[#002060]">
            {/* 1 */}
            <p className="col-span-1 font-yeseva font-bold md:text-right"></p>
            <p className="col-span-2 font-lato">
              <span className="block font-bold ">
                Senior Management Team (SMT)
              </span>
              A seven-member senior management team (SMT) is formed headed by
              the Executive Director (ED) to facilitate day-to-day functions of
              FSDG.
            </p>
            {/* 2 */}
            <p className="col-span-1 font-yeseva font-bold md:text-right"></p>
            <p className="col-span-2 font-lato">
              <span className="block font-bold ">Audit committee</span>
              In order to strengthen internal control mechanism, FSDG has
              adopted an “Audit Committee (AC)” constituted with 3 staff members
              to monitor and take necessary actions to comply with the standard
              procedures and policies of FSDG.
            </p>
            {/* 3 */}
            <p className="col-span-1 font-yeseva font-bold md:text-right"></p>
            <p className="col-span-2 font-lato">
              <span className="block font-bold ">
                Compliance Committee (CC)
              </span>
              A 5-member compliance committee (CC) is formed to oversee the day
              to day compliance issues and risks associated with non-compliance
              of standard procedures and recommend corrective actions.
            </p>
            {/* 4*/}
            <p className="col-span-1 font-yeseva font-bold md:text-right"></p>
            <p className="col-span-2 font-lato">
              <span className="block font-bold ">Gender forum</span>A
              five-member gender forum (GF) aimed at making FSDG a gender
              sensitive organization by facilitating space for women staff
              members to express their views, establishing gender equality,
              women’s rights and gender friendly environment.
            </p>
            {/* 5 */}
            <p className="col-span-1 font-yeseva font-bold md:text-right"></p>
            <p className="col-span-2 font-lato">
              <span className="block font-bold ">
                Independent Reviewers of procurement
              </span>
              FSDG assigns a mid-level staff member to undertake the
              responsibility as Independent Reviewer (IR) of procurement of
              goods and services on a random basis to ensure compliance of
              standard procedures.
            </p>
          </div>
          {/* Bunch 4 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5  mt-16">
            {/* 1 */}
            <p className="col-span-1 font-yeseva font-bold md:text-right">
              Major clients, National and International Associates/ Partners
            </p>
            <p className="col-span-2 font-lato">
              Government of Bangladesh, DOE, Embassy of Kingdom of Netherlands,
              USAID, UK Aid, GIZ, Oxfam, UNDP, World Bank, IUCN, UNICEF, UNOPS,
              WFP, UNESCO, FAO, GEF/UNDP, DFID-UK and Bangladesh, IDRC, EC, EU,
              USAID, SDC, Chevron, Ford Foundation, CIDA, JICA and other
              international and national agencies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
