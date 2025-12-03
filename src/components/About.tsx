import { Card } from "@/components/ui/card";
import profileImage from "@/assets/about.png";

const About = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Over <span className="bg-gradient-primary bg-clip-text text-transparent">ons</span>
          </h2>
          <p className="text-muted-foreground text-lg">
          Structural Design & BIM Agency

          </p>
        </div>

        <div className="grid md:grid-cols-& gap-12 items-center">
          <div className="space-y-8">
            <div className="flex justify-center mb-8">
              <img
                src={profileImage}
                alt="CAD-Projects"
                className="w-full max-w-3xl rounded-2xl shadow-xl border border-border object-cover"
              />
            </div>

            <Card className="p-6 backdrop-blur-sm bg-card/80 border-border shadow-card hover:shadow-accent transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-2">Onze missie</h3>
              <p className="text-lg leading-relaxed">
                Bij CAD-Projects geloven we dat <b>sterke structuren beginnen met sterke plannen. </b>
                Wij zorgen dat u kunt bouwen op zekerheid: plannen die kloppen, modellen die inzicht geven, en samenwerking die deadlines haalbaar maakt.
              </p>
            </Card>

            <Card className="p-6 backdrop-blur-sm bg-card/80 border-border shadow-card hover:shadow-accent transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-2">Wie wij zijn</h3>
              <p className="text-lg leading-relaxed">
                CAD-Projects is een gespecialiseerd tekenbureau onder leiding van <b>Erwin Rongé</b>, met meer dan 20 jaar ervaring in <b>stabiliteitstekenwerk</b>. Wij ondersteunen studiebureaus en aannemers bij het uitwerken van <b>bekistingsplannen, wapeningsplannen en BIM-modellen in AutoCAD en Revit.</b>
              </p>
              <p className="text-lg leading-relaxed mt-2">
                Onze kracht ligt in de combinatie van <b> diepe technische kennis </b> en een <b>flexibel team</b>. Waar anderen enkel tekenen, denken wij mee: we zorgen dat projecten helder, uitvoerbaar en foutloos worden uitgewerkt.
              </p>
            </Card>

            <Card className="p-6 backdrop-blur-sm bg-card/80 border-border shadow-card hover:shadow-accent transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-2">Onze ervaring</h3>
              <p className="text-lg leading-relaxed">
                Zaakvoerder <b>Erwin Rongé</b> startte zijn carrière in 1999 als monteur van prefab betonelementen. Vanuit die praktische basis groeide hij door tot bouwkundig tekenaar stabiliteit, met opdrachten in uiteenlopende sectoren:
              </p>
              <div className="space-y-2 mt-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary flex-shrink-0 rounded-full mt-2" />
                  <p className="text-lg leading-relaxed">
                    <b>Industriële projecten</b> (petrochemie, energie, kerncentrales)
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary flex-shrink-0 rounded-full mt-2" />
                  <p className="text-lg leading-relaxed">
                    <b>Publieke gebouwen</b> (sporthallen, scholen, theaters, musea)
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary flex-shrink-0 rounded-full mt-2" />
                  <p className="text-lg leading-relaxed">
                    <b>Residentiële projecten</b> (appartementen, kantoren)
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary flex-shrink-0 rounded-full mt-2" />
                  <p className="text-lg leading-relaxed">
                    <b>Grote infrastructuurwerken</b> (bruggen, Oosterweel Bypass)
                  </p>
                </div>
              </div>
              <p className="text-lg leading-relaxed mt-4">
                Door de jaren heen werkte hij samen met gerenommeerde partijen als <b>Tractebel</b>, <b>Studie10</b>, <b>Vadecum consult</b> en diverse aannemers.
              </p>
            </Card>

            <Card className="p-6 backdrop-blur-sm bg-card/80 border-border shadow-card hover:shadow-accent transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-2">Enkele referentieprojecten</h3>
              <div className="space-y-2 mt-2">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary flex-shrink-0 rounded-full mt-2" />
                  <p className="text-lg leading-relaxed">Sporthal – Deurne</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary flex-shrink-0 rounded-full mt-2" />
                  <p className="text-lg leading-relaxed">Kantoorgebouw Port of Antwerp</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary flex-shrink-0 rounded-full mt-2" />
                  <p className="text-lg leading-relaxed">Appartementen Guldendael – Mechelen</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary flex-shrink-0 rounded-full mt-2" />
                  <p className="text-lg leading-relaxed">School – Sint-Niklaas</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary flex-shrink-0 rounded-full mt-2" />
                  <p className="text-lg leading-relaxed">Fluxis kantorencomplex – Wetteren</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary flex-shrink-0 rounded-full mt-2" />
                  <p className="text-lg leading-relaxed">MAS – Antwerpen</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary flex-shrink-0 rounded-full mt-2" />
                  <p className="text-lg leading-relaxed">Nieuwe VRT gebouw - Brussel</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary flex-shrink-0 rounded-full mt-2" />
                  <p className="text-lg leading-relaxed">Oosterweel Bypass – Antwerpen</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary flex-shrink-0 rounded-full mt-2" />
                  <p className="text-lg leading-relaxed">Elia kantoorgebouw – Oostende</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary flex-shrink-0 rounded-full mt-2" />
                  <p className="text-lg leading-relaxed">Ziekenhuis Lokeren</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 backdrop-blur-sm bg-card/80 border-border shadow-card hover:shadow-accent transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-2">Waar wij voor staan</h3>
              <div className="space-y-2 mt-2">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary flex-shrink-0 rounded-full mt-2" />
                  <p className="text-lg leading-relaxed">
                    <b>Kwaliteit</b> – elk plan wordt zorgvuldig nagekeken voor oplevering.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary flex-shrink-0 rounded-full mt-2" />
                  <p className="text-lg leading-relaxed">
                    <b>Precisie & structuur</b> – we brengen orde en duidelijkheid in complexe projecten.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary flex-shrink-0 rounded-full mt-2" />
                  <p className="text-lg leading-relaxed">
                    <b>Flexibiliteit</b> – extra capaciteit wanneer u die nodig heeft.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary flex-shrink-0 rounded-full mt-2" />
                  <p className="text-lg leading-relaxed">
                    <b>BIM & innovatie</b> – wij denken vooruit en modelleren met oog op de toekomst.
                  </p>
                </div>
              </div>
            </Card>

            <div className="grid grid-cols-1 gap-4 pt-2">
              <Card className="p-6 text-center backdrop-blur-sm bg-card/80 border-border shadow-card hover:shadow-accent transition-all duration-300">
                <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                  Where does innovation meet strength?
                </div>
                <div className="text-sm text-muted-foreground">In every line we model.</div>
              </Card>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
};

export default About;
