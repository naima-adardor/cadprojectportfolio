import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Linkedin, Github, MapPin } from "lucide-react";

const Contact = () => {
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
                  <span>mlaikitaha29@gmail.com</span>
                </a>

  
              

                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-10 h-10 rounded-lg bg-muted/20 flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span>3140 Keerbergen, Belgium</span>
                </div>
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
                <a href="mailto:mlaikitaha29@gmail.com">
                  <Mail className="w-5 h-5" />
                  Send Email
                </a>
              </Button>
              
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
