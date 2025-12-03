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
                Bij CAD-Projects geloven we dat sterke structuren beginnen met sterke plannen.
                Wij zorgen dat u kunt bouwen op zekerheid: plannen die kloppen, modellen die inzicht geven, en samenwerking die deadlines haalbaar maakt.
              </p>
            </Card>

            <Card className="p-6 backdrop-blur-sm bg-card/80 border-border shadow-card hover:shadow-accent transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-2">Wie wij zijn</h3>
              <p className="text-lg leading-relaxed">
                CAD-Projects is een gespecialiseerd tekenbureau onder leiding van Erwin Rongé, met meer dan 20 jaar ervaring in stabiliteitstekenwerk. Wij ondersteunen studiebureaus en aannemers bij het uitwerken van bekistingsplannen, wapeningsplannen en BIM-modellen in AutoCAD en Revit.
              </p>
              <p className="text-lg leading-relaxed mt-2">
                Onze kracht ligt in de combinatie van diepe technische kennis en een flexibel team. Waar anderen enkel tekenen, denken wij mee: we zorgen dat projecten helder, uitvoerbaar en foutloos worden uitgewerkt.
              </p>
            </Card>

            <Card className="p-6 backdrop-blur-sm bg-card/80 border-border shadow-card hover:shadow-accent transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-2">Onze ervaring</h3>
              <p className="text-lg leading-relaxed">
                Zaakvoerder Erwin Rongé startte zijn carrière in 1999 als monteur van prefab betonelementen. Vanuit die praktische basis groeide hij door tot bouwkundig tekenaar stabiliteit, met opdrachten in uiteenlopende sectoren:
              </p>
              <div className="space-y-2 mt-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary flex-shrink-0 rounded-full mt-2" />
                  <p className="text-lg leading-relaxed">
                    Industriële projecten (petrochemie, energie, kerncentrales)
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary flex-shrink-0 rounded-full mt-2" />
                  <p className="text-lg leading-relaxed">
                    Publieke gebouwen (sporthallen, scholen, theaters, musea)
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary flex-shrink-0 rounded-full mt-2" />
                  <p className="text-lg leading-relaxed">
                    Residentiële projecten (appartementen, kantoren)
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary flex-shrink-0 rounded-full mt-2" />
                  <p className="text-lg leading-relaxed">
                    Grote infrastructuurwerken (bruggen, Oosterweel Bypass)
                  </p>
                </div>
              </div>
              <p className="text-lg leading-relaxed mt-4">
                Door de jaren heen werkte hij samen met gerenommeerde partijen als Tractebel, Studie10, Vadecum consult en diverse aannemers.
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
                    Kwaliteit – elk plan wordt zorgvuldig nagekeken voor oplevering.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary flex-shrink-0 rounded-full mt-2" />
                  <p className="text-lg leading-relaxed">
                    Precisie & structuur – we brengen orde en duidelijkheid in complexe projecten.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary flex-shrink-0 rounded-full mt-2" />
                  <p className="text-lg leading-relaxed">
                    Flexibiliteit – extra capaciteit wanneer u die nodig heeft.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary flex-shrink-0 rounded-full mt-2" />
                  <p className="text-lg leading-relaxed">
                    BIM & innovatie – wij denken vooruit en modelleren met oog op de toekomst.
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
