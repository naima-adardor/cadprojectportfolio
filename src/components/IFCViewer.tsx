import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";
import { Eye } from "lucide-react";

interface IFCViewerProps {
    ifcUrl: string;
    title: string;
}

export const IFCViewer = ({ ifcUrl, title }: IFCViewerProps) => {
    const [open, setOpen] = useState(false);

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
                        <iframe
                            src={`/ifc-viewer.html?url=${encodeURIComponent(ifcUrl)}`}
                            className="w-full h-full border-0"
                            title={`IFC Viewer - ${title}`}
                            allow="fullscreen"
                        />
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};
