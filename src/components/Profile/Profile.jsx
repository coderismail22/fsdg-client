const Profile = () => {
  return (
    <div>
      <div className="md:p-5">
        {/* Title and Description */}
        <div className=" mb-5">
          <h1 className="font-palanquin text-[30px] font-bold text-center mb-2 underline">
            Profile
          </h1>
          <h1 className="font-palanquin text-[30px] font-bold text-center mb-2">
            <br /> Foundation for Supporting Development Goal (FSDG)

          </h1>
          <p className="font-lato text-[17px] text-justify  ">
            FSDG is a non-profit and non-political organization which has been working informally with small scale farmers since 2007. A group of people who are committed to taking care of environment had been engaging themselves for health and wellbeing of vulnerable population and sustainable development in a Northern and a Southern district of the country. Later, they formed the organization having approval of the proper authority of the People&apos;s Republic of Bangladesh.
          </p>
        </div>
        {/* Infos */}
        <div className="px-5">
          {/* Bunch 1 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
            {/* 1 */}
            <p className="col-span-1 font-yeseva font-bold text-[#001848] md:text-right">
              Governing Body:
            </p>
            <p className="col-span-2 font-lato">
              The Governing Body of FSDG comprises 7 members who are engaged in different development actions in Bangladesh.
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
            <p className="col-span-2 font-lato text-[#001848] mb-3">
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
            <p className="col-span-2 font-lato text-[#001848] mb-3">
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5  mt-16">
            {/* 1 */}
            <p className="col-span-1 font-yeseva font-bold md:text-right">
              Activities of FSDG
            </p>
            <p className="col-span-2 font-lato">
              FSDG has been working in the North and Southern part of the country till now with personal contribution of Board Members. In the Northern districts, the organization has been promoting water saving agriculture through encouraging farmers in cultivating tea, wheat, tomato, potato, etc (that consumes less water) minimizing the production of rice that needs a lot of water and in the dry season it is extracted from the ground. Women from the village community are being trained and employed in the farms from which they have got the opportunity of contributing in their family income. Also, FSDG has been promoting organic farming both in the North and Southern district of Barisal with the aim of having a sustainable ecology in the country.
              In Barisal, FSDG has been raising awareness on menstrual hygiene for adolescent girls and general hygiene for men, women and children. Imparting knowledge on using sanitary latrine and safe water is one of its activities being carried out. It safeguards sexual and reproductive health rights for adolescents as well as strives for eliminating early marriages and violence against women from the society.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
