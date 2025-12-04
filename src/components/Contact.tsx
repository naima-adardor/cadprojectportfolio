import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Linkedin, Github, MapPin } from "lucide-react";

const Contact = () => {
  const [mapZoom, setMapZoom] = useState(14);

  const handleZoomIn = () => {
    setMapZoom((prev) => Math.min(prev + 1, 21));
  };

  const handleZoomOut = () => {
    setMapZoom((prev) => Math.max(prev - 1, 1));
  };

  const mapSrc = `https://www.google.com/maps?q=3140+Keerbergen+Belgium&z=${mapZoom}&output=embed`;

  return (
    <section id="contact" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Neem contact {" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
            op
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">
            
          Plannen die vorm moeten krijgen?           </p>
        </div>

        <Card className="p-8 md:p-12 backdrop-blur-sm bg-card/50 border-border shadow-card">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Plannen die vorm moeten krijgen? </h3>
                <p className="text-muted-foreground leading-relaxed">
                Wij luisteren graag en vertalen ze naar BIM en stabiliteit.
                Een kort overleg is de start van een solide samenwerking
                </p>
              </div>

              <div className="space-y-4 pt-4">
                <a
                  href="mailto:mlaikitaha29@gmail.com"
                  className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span>erwin.ronge@cad-projects.be</span>
                </a>

               
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-4">Snel bericht</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Stuur me een bericht en ik neem zo snel mogelijk contact met je op.
                </p>
              </div>
              <Button variant="hero" size="lg" className="w-full" asChild>
                <a href="mailto:erwin.ronge@cad-projects.be">
                  <Mail className="w-5 h-5" />
                  Send Email
                </a>
              </Button>
            </div>
          </div>

          {/* Embedded Google Map - full width under the two columns */}
          <div className="mt-8 rounded-xl overflow-hidden border border-border bg-muted/20">
            <div className="flex justify-end gap-2 p-3 bg-background/60">
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 text-base"
                onClick={handleZoomOut}
              >
                -
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 text-base"
                onClick={handleZoomIn}
              >
                +
              </Button>
            </div>
            <div className="h-72 md:h-80">
            <iframe
              title="CAD-Projects locatie - 3140 Keerbergen, Belgium"
              src={mapSrc}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            </div>
          </div>
        </Card>

        <div className="text-center mt-12 text-muted-foreground">
          <p>
            &copy; 2025 CAD-Projects Portfolio. 
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
