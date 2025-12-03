import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import projet11 from "@/assets/projet1-1.png";
import projet12 from "@/assets/projet1-2.png";
import projet2 from "@/assets/projet2.png";
import projet31 from "@/assets/projet3-1.png";
import projet32 from "@/assets/projet3-2.png";

const projects = [
  {
    title: "OOSTERWEEL BYPASS",
    description:
      "Wij ondersteunden Tractebel bij het Oosterweel-project met de complexe wapening van het Bypass-gedeelte. Onze precisie in stabiliteitstekenwerk en BIM maakt uitdagende structuren haalbaar.",
    images: [projet11, projet12],
  },
  {
    title: "FUNDERINGSPLAAT INDUSTRIËLE OVENS",
    description:
      "Voor Vadecum Consult ontwierpen wij de funderingsplaat voor industriële ovens. De bekisting en wapening werden volledig in 3D (Revit) uitgewerkt.",
    images: [projet2],
  },
  {
    title: "PORT OF ANTWERP - KANTOOR- EN MAGAZIJNRUIMTE",
    description:
      "Wij ondersteunden STUDIE10 bij het Port of Antwerp-project met de uitwerking van de bekisting en wapening in 3D (Revit). Dankzij onze BIM-aanpak kreeg het project een helder en efficiënt uitvoeringsplan.",
    images: [projet31, projet32],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Onze{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              projecten
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Een selectie van recente stabiliteits- en BIM-projecten
          </p>
        </div>

        <div className="space-y-10">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="p-6 backdrop-blur-sm bg-card/50 border-border shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-1 group flex flex-col w-full"
            >
              <div className="flex-1 flex flex-col gap-4">
                <div className="space-y-2">
                  <h3 className="text-2xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {index === 0 && (
                      <>
                        Wij ondersteunden Tractebel bij het{" "}
                        <b>Oosterweel-project</b> met de complexe{" "}
                        <b>wapening van het Bypass-gedeelte.</b>
                        <br />
                        Onze precisie in <b>stabiliteitstekenwerk en BIM</b> maakt
                        uitdagende structuren haalbaar.
                      </>
                    )}
                    {index === 1 && (
                      <>
                        Voor <b>Vadecum Consult</b> ontwierpen wij de funderingsplaat
                        voor industriële ovens.
                        <br />
                        De <b>bekisting en wapening</b> werden volledig in{" "}
                        <b>3D (Revit)</b> uitgewerkt.
                      </>
                    )}
                    {index === 2 && (
                      <>
                        Wij ondersteunden <b>STUDIE10</b> bij het{" "}
                        <b>Port of Antwerp-project</b> met de uitwerking van de{" "}
                        <b>bekisting en wapening in 3D (Revit).</b>
                        <br />
                        Dankzij onze BIM-aanpak kreeg het project een{" "}
                        <b>helder en efficiënt uitvoeringsplan.</b>
                      </>
                    )}
                  </p>
                </div>

                {project.images && project.images.length > 0 && (
                  <div className="flex flex-col gap-4">
                    {project.images.map((img, i) => (
                      <Dialog key={i}>
                        <DialogTrigger asChild>
                          <div className="aspect-video w-full overflow-hidden rounded-lg border border-border/60 bg-muted/40 cursor-pointer">
                            <img
                              src={img}
                              alt={`${project.title} ${i + 1}`}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                          </div>
                        </DialogTrigger>
                        <DialogContent className="bg-black/90 border-none shadow-none p-0 sm:max-w-none w-full max-w-[95vw]">
                          <div className="flex items-center justify-center w-full h-full">
                            <img
                              src={img}
                              alt={`${project.title} ${i + 1}`}
                              className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg"
                            />
                          </div>
                        </DialogContent>
                      </Dialog>
                    ))}
                  </div>
                )}
              </div>
            </Card>
          ))}

          <Card className="p-8 text-center backdrop-blur-sm bg-card/80 border-border shadow-card hover:shadow-glow transition-all duration-300">
            <h3 className="text-2xl md:text-3xl font-bold mb-3 bg-gradient-primary bg-clip-text text-transparent">
              Uw visie, onze uitvoering.
            </h3>
            <p className="text-lg md:text-xl text-muted-foreground">
              Samen bouwen we aan stabiliteit!
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;
