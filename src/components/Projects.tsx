import { useState, useRef, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";
import { Eye, X } from "lucide-react";
import projet11 from "@/assets/projet1-1.png";
import projet12 from "@/assets/projet1-2.png";
import projet2 from "@/assets/projet2.png";
import projet31 from "@/assets/projet3-1.png";
import projet32 from "@/assets/projet3-2.png";
import projet41 from "@/assets/projet4-1.jpg";
import projet42 from "@/assets/projet4-2.jpg";
import projet5 from "@/assets/ST_A_01_W_page-0001 (1).jpg";
import projet6 from "@/assets/ST_B_02_W_page-0001 (1).jpg";
import projet7 from "@/assets/ST 06-F - Vloerplaat afdek +1_page-0001 (1).jpg";
import projet8 from "@/assets/_DR_STR_003_page-0001 (1).jpg";

// Composant IFC Viewer
const IFCViewer = ({ ifcUrl, title }: { ifcUrl: string; title: string }) => {
  const [open, setOpen] = useState(false);
  const viewerRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (open && viewerRef.current) {
      loadIFCViewer();
    }
  }, [open]);

  const loadIFCViewer = async () => {
    setLoading(true);
    setError(null);

    try {
      const script = document.createElement('script');
      script.src = 'https://unpkg.com/web-ifc-viewer@1.0.218/dist/web-ifc-viewer.js';
      script.async = true;

      // ... dans script.onload ...
      script.onload = async () => {
        try {
          const container = viewerRef.current;
          if (!container) {
            console.error("Le conteneur de visualisation (viewerRef) n'existe pas.");
            setLoading(false);
            return;
          }

          // Vérifiez si la classe est bien disponible
          if (!(window as any).IfcViewerAPI) {
            console.error("IfcViewerAPI n'est pas défini après le chargement du script.");
            setError("La bibliothèque IFC Viewer n'a pas été chargée correctement.");
            setLoading(false);
            return;
          }

          const viewer = new (window as any).IfcViewerAPI({ container });

          await viewer.IFC.setWasmPath('https://unpkg.com/web-ifc@0.0.44/');

          // Vérifiez la réponse de la requête
          const response = await fetch(ifcUrl);
          if (!response.ok) {
            throw new Error(`Erreur HTTP: ${response.status}`);
          }

          const blob = await response.blob();
          const file = new File([blob], 'ifc.ifc');

          await viewer.IFC.loadIfc(file, true);
          viewer.context.fitToFrame();

          setLoading(false);
        } catch (err) {
          console.error("Erreur détaillée lors du chargement du modèle IFC:", err);
          setError(`Erreur lors du chargement du modèle IFC: ${err instanceof Error ? err.message : String(err)}`);
          setLoading(false);
        }
      };

      script.onerror = () => {
        setError("Impossible de charger le viewer IFC");
        setLoading(false);
      };

      document.body.appendChild(script);

      return () => {
        if (document.body.contains(script)) {
          document.body.removeChild(script);
        }
      };
    } catch (err) {
      setError("Erreur lors de l'initialisation");
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <div className="aspect-video w-full overflow-hidden rounded-lg border-2 border-dashed border-[#A3C4A5]/50 bg-muted/40 cursor-pointer hover:border-[#A3C4A5] hover:bg-[#A3C4A5]/5 transition-all duration-300 flex flex-col items-center justify-center gap-3 group">
          <div className="w-16 h-16 rounded-full bg-[#A3C4A5]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
            <Eye className="w-8 h-8 text-[#A3C4A5]" />
          </div>
          <div className="text-center">
            <p className="text-lg font-semibold text-foreground">Modèle BIM 3D</p>
            <p className="text-sm text-muted-foreground">Klik om te visualiseren in 3D</p>
          </div>
        </div>
      </DialogTrigger>

      <DialogContent className="bg-background border-border shadow-xl p-0 sm:max-w-[90vw] sm:max-h-[90vh]">
        <DialogTitle className="sr-only">{title}</DialogTitle>
        <div className="flex flex-col w-full h-[85vh]">
          <div className="flex items-center justify-between p-4 border-b border-border">
            <h3 className="text-xl font-semibold">{title}</h3>
          </div>

          <div className="flex-1 relative">
            {loading && (
              <div className="absolute inset-0 flex items-center justify-center bg-background/80 z-10">
                <div className="text-center">
                  <div className="animate-spin w-12 h-12 border-4 border-[#A3C4A5] border-t-transparent rounded-full mx-auto mb-4"></div>
                  <p className="text-muted-foreground">3D-model laden...</p>
                </div>
              </div>
            )}

            {error && (
              <div className="absolute inset-0 flex items-center justify-center bg-background">
                <div className="text-center text-destructive">
                  <X className="w-12 h-12 mx-auto mb-4" />
                  <p>{error}</p>
                </div>
              </div>
            )}

            <div ref={viewerRef} className="w-full h-full bg-slate-900" />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

// Composant pour images zoomables
type ZoomableProjectImageProps = {
  src: string;
  alt: string;
};

const ZoomableProjectImage = ({ src, alt }: ZoomableProjectImageProps) => {
  const [open, setOpen] = useState(false);
  const [scale, setScale] = useState(1);
  const [origin, setOrigin] = useState({ x: 50, y: 50 });
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);

  const MIN_ZOOM = 1;
  const MAX_ZOOM = 4;
  const ZOOM_STEP = 0.2;

  const lastMouse = useRef<{ x: number; y: number } | null>(null);

  const handleWheel = (e: React.WheelEvent<HTMLImageElement>) => {
    e.preventDefault();
    const rect = e.currentTarget.getBoundingClientRect();
    const mouseX = ((e.clientX - rect.left) / rect.width) * 100;
    const mouseY = ((e.clientY - rect.top) / rect.height) * 100;
    setOrigin({ x: mouseX, y: mouseY });
    setScale((prev) => {
      const next = e.deltaY < 0 ? prev + ZOOM_STEP : prev - ZOOM_STEP;
      return Math.min(Math.max(next, MIN_ZOOM), MAX_ZOOM);
    });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (scale <= 1) return;
    setDragging(true);
    lastMouse.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!dragging || !lastMouse.current) return;
    const dx = e.clientX - lastMouse.current.x;
    const dy = e.clientY - lastMouse.current.y;
    setPosition((prev) => ({ x: prev.x + dx, y: prev.y + dy }));
    lastMouse.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseUp = () => {
    setDragging(false);
    lastMouse.current = null;
  };

  const resetZoom = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleOpenChange = (value: boolean) => {
    setOpen(value);
    if (!value) resetZoom();
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <div className="aspect-video w-full overflow-hidden rounded-lg border border-border/60 bg-muted/40 cursor-pointer">
          <img src={src} alt={alt} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
        </div>
      </DialogTrigger>
      <DialogContent className="bg-black/90 border-none shadow-none p-0 sm:max-w-none w-full max-w-[95vw]">
        <div className="flex flex-col w-full h-full">
          <div className="text-white/70 text-xs px-4 pt-4 text-right"></div>
          <div className="flex-1 flex items-center justify-center overflow-hidden p-4" onMouseMove={handleMouseMove} onMouseUp={handleMouseUp} onMouseLeave={handleMouseUp}>
            <img src={src} alt={alt} onWheel={handleWheel} onMouseDown={handleMouseDown} onDoubleClick={resetZoom} draggable={false} className={`rounded-lg select-none ${scale > 1 ? "cursor-grab active:cursor-grabbing" : "cursor-zoom-in"}`} style={{ transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`, transformOrigin: `${origin.x}% ${origin.y}%`, maxWidth: "90vw", maxHeight: "90vh" }} />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

// Array des projets
const projects = [
  {
    title: "OOSTERWEEL BYPASS",
    description: "Wij ondersteunden Tractebel bij het Oosterweel-project met de complexe wapening van het Bypass-gedeelte. Onze precisie in stabiliteitstekenwerk en BIM maakt uitdagende structuren haalbaar.",
    images: [projet11, projet12],
    ifcFile: null,
  },
  {
    title: "FUNDERINGSPLAAT INDUSTRIËLE OVENS",
    description: "Voor Vadecum Consult ontwierpen wij de funderingsplaat voor industriële ovens. De bekisting en wapening werden volledig in 3D (Revit) uitgewerkt.",
    images: [projet2],
    ifcFile: null,
  },
  {
    title: "PORT OF ANTWERP - KANTOOR- EN MAGAZIJNRUIMTE",
    description: "Wij ondersteunden STUDIE10 bij het Port of Antwerp-project met de uitwerking van de bekisting en wapening in 3D (Revit). Dankzij onze BIM-aanpak kreeg het project een helder en efficiënt uitvoeringsplan.",
    images: [projet31, projet32],
    ifcFile: null,
  },
  {
    title: "LIFTSCHACHT ELIA, OOSTENDE",
    description: "",
    images: [projet41, projet42, projet5],
    ifcFile: null,
  },

  {
    title: "NIEUWE VRT-HUIS, VILVOORDE",
    description: "",
    images: [projet6],
    ifcFile: null,
  },
  {
    title: "NIEUWBOUW SCHOOL TE SINT NIKLAAS",
    description: "",
    images: [projet7],
    ifcFile: null,
  },
  {
    title: "BETONWANDEN ZIEKENHUIS TE LOKEREN",
    description: "",
    images: [projet8],
    ifcFile: null,
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
            <Card key={index} className="p-6 backdrop-blur-sm bg-card/50 border-border shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-1 group flex flex-col w-full">
              <div className="flex-1 flex flex-col gap-4">
                <div className="space-y-2">
                  <h3 className="text-2xl font-semibold mb-2 group-hover:text-[#A3C4A5] transition-colors">
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
                    {index === 3 && (
                      <>

                      </>
                    )}

                    {index === 5 && (
                      <>

                      </>
                    )}
                    {index === 6 && (
                      <>

                      </>
                    )}
                    {index === 7 && (
                      <>

                      </>
                    )}
                    {index === 8 && (
                      <>

                      </>
                    )}
                  </p>
                </div>

                {/* Afficher le viewer IFC si le fichier existe */}
                {project.ifcFile && (
                  <div className="mt-4">
                    <IFCViewer ifcUrl={project.ifcFile} title={project.title} />
                  </div>
                )}

                {/* Afficher les images normales */}
                {project.images && project.images.length > 0 && (
                  <div className="flex flex-col gap-4">
                    {project.images.map((img, i) => (
                      <ZoomableProjectImage key={i} src={img} alt={`${project.title} ${i + 1}`} />
                    ))}
                  </div>
                )}
              </div>
            </Card>
          ))}

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
