import Button from "./button";

const Scrivici = ({ section, text }) => {
  return (
    <div className="section_block__scrivici px-6">
      <p>{text}</p>

      <div className="section__content__wrapper-cta">
        <Button
          link={`${
            section === "dobermann"
              ? "/cani-dobermann"
              : "/cani-pastori-tedeschi"
          }/contatti`}
        >
          SCRIVICI
        </Button>
      </div>
    </div>
  );
};

export default Scrivici;
