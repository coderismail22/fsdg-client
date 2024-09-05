import JoinUsUpperCard from "../../../components/JoinUsUpperCard/JoinUsUpperCard";

const UpperCards = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-5 my-5">
      <JoinUsUpperCard
        title={"Partner with FSDG"}
        description={
          "We work with partners in the field of Natural Resource Management (NRM), Environment and Water, Livelihood and Job Creation, Food, Agriculture and Nutrition, Climate Change Adaptation (CCA), Mitigation and Disaster Risk Reduction (DRR), WASH (Water, Sanitation and Hygiene) and Health, Diversity and Governance, Studies, Monitoring, Evaluation and Communication."
        }
      />
      <JoinUsUpperCard
        title={"Partner with FSDG"}
        description={
          "We work with partners in the field of Natural Resource Management (NRM), Environment and Water, Livelihood and Job Creation, Food, Agriculture and Nutrition, Climate Change Adaptation (CCA), Mitigation and Disaster Risk Reduction (DRR), WASH (Water, Sanitation and Hygiene) and Health, Diversity and Governance, Studies, Monitoring, Evaluation and Communication."
        }
      />
    </div>
  );
};

export default UpperCards;
