const Profile = () => {
  return (
    <div>
      <div className="md:p-5">
        {/* Title and Description */}
        <div className=" mb-5">

          <h1 className="font-palanquin text-[30px] font-bold text-center mb-2">
            <br /> Foundation for Supporting Development Goals (FSDG)

          </h1>
          <p className="font-lato text-[17px] text-justify  ">
            FSDG is a non-profit and non-political organization which has been working informally with small scale farmers since 2007. A group of people who are committed to taking care of environment had been engaging themselves for health and wellbeing of vulnerable population and sustainable development in a Northern and a Southern district of the country. Later, they formed the organization having approval of the proper authority of the People&apos;s Republic of Bangladesh.
          </p>
        </div>
        {/* Infos */}
        <div className="px-5">
          {/* Bunch 1 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-2">
            {/* 1 */}
            <p className="col-span-1 font-yeseva font-bold text-[#001848] md:text-right">
              Governing Body:
            </p>
            <p className="col-span-2 font-lato">
              The governing body of FSDG comprises of seven members who are engaged in different development actions in Bangladesh.
            </p>
            {/* 2 */}
            <p className="col-span-1 font-yeseva font-bold text-[#001848] md:text-right">
              Legal status of the organization:
            </p>
            <p className="col-span-2 font-lato">
              Registration of Joint Stock Companies, S-12409/2016
            </p>
            {/* 3 */}
            <p className="col-span-1 font-yeseva font-bold md:text-right">
              Vision:
            </p>
            <p className="col-span-2 font-lato">
              FSDG envisages an environmentally sustainable country where people live with dignity and care.
            </p>
          </div>
          {/* Bunch 2 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 ">
            {/* 1 */}
            <p className="col-span-1 font-yeseva font-bold md:text-right">
              Mission:
            </p>
            <p className="col-span-2 font-lato">
              FSDG aims at contributing in achieving sustainable development including wellbeing of the people of different gender groups in the society.
            </p>
            {/* 2 */}
            <p className="col-span-1 font-yeseva font-bold md:text-right text-[#001848]">
              Strategy:            </p>
            <p className="col-span-2 font-lato text-[#001848] mb-2">
              <div>
                <ul className="ml-2 list-disc list-outside text-gray-700 dark:text-gray-300 ">
                  <li>To contribute the targets of the Sustainable Development Goals set by United Nations in 2015</li>
                  <li>To promote ecological agriculture</li>
                  <li>To contribute in enhancing the wellbeing of men, women and children, as well as sexual and reproductive health rights of adolescents</li>
                  <li>To improve water, sanitation, and hygiene situation of the country</li>
                  <li>To contribute to a sustainable environment through addressing renewable energy and recycling waste</li>
                  <li>It contributes to generating data through social research on sustainable development issues</li>
                </ul>
              </div>
            </p>
            {/* 3 */}
            <p className="col-span-1 font-yeseva font-bold md:text-right text-[#001848]">
              Values:            </p>
            <p className="col-span-2 font-lato text-[#001848] mb-2">
              <div>
                <ul className="list-disc list-outside text-gray-700 dark:text-gray-300 space-y-2">
                  <li>FSDG respects and recognizes the human rights of the people of the whole world</li>
                  <li>The organization believes in equality irrespective of gender, ethnicity, religion, or race</li>
                  <li>The organization maintains transparency and accountability in all its programs</li>
                  <li>The organization is committed to saving nature</li>
                </ul>
              </div>
            </p>
          </div>

          {/* Bunch 3 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5  mt-2">
            {/* 1 */}
            <p className="col-span-1 font-yeseva font-bold md:text-right">
              Activities of FSDG
            </p>
            <p className="col-span-2 font-lato">
              <p className="font-lato text-[17px] text-justify  mb-2">
                FSDG has been active in the northern and southern regions of the country, supported by the personal contributions of its board members. In the northern districts, the organization promotes water-efficient agriculture by encouraging farmers to cultivate crops such as tea, wheat, tomatoes, and potatoes—crops that require less water—while minimizing rice production, which is water-intensive and often extracted from the ground during dry seasons.
              </p>
              <p className="font-lato text-[17px] text-justify mb-2 ">
                Women from local communities are being trained and employed on these farms, providing them with opportunities to contribute to their family income. Additionally, FSDG promotes organic farming in both the northern and southern districts of Barisal to foster a sustainable ecology.

              </p>
              <p className="font-lato text-[17px] text-justify mb-2 ">
                In Barisal, FSDG raises awareness about menstrual hygiene for adolescent girls and general hygiene for all community members. Activities include educating people about the use of sanitary latrines and safe water. The organization also advocates for sexual and reproductive health rights for adolescents and works to eliminate early marriages and violence against women in society.
              </p>
              <p className="font-lato text-[17px] text-justify  mb-2">
                FSDG is also currently working to provide shelter for the homeless and water and sanitation support for the disabled in some disadvantaged communities in Barisal and Mymensingh. In Barisal, FSDG has established a partnership with a regional NGO, the Village and City Development Society, to train and raise awareness about climate change adaptation for its 25,000 microcreditgroup members.
              </p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
