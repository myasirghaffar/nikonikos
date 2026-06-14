import { Building2, PaintRoller, Shield, Waves } from "lucide-react";
import {
  productAquaShield,
  productBituShield,
  productHydroShield,
  productWallShield,
} from "../../assets/images";

export const productCatalog = [
  {
    title: "Aqua Shield Liquid Membrane",
    image: productAquaShield,
    icon: Shield,
    iconColor: "text-white",
    features: ["UV Resistant", "Flexible Coating", "Long Lasting Protection"],
  },
  {
    title: "Bitu Shield Foundation Coating",
    image: productBituShield,
    icon: Building2,
    iconColor: "text-white",
    features: ["Damp Proof", "Strong Adhesion", "Weather Resistant"],
  },
  {
    title: "Wall Shield Exterior Paint",
    image: productWallShield,
    icon: PaintRoller,
    iconColor: "text-white",
    features: ["Smooth Finish", "Fade Resistant", "Long Lasting Color"],
  },
  {
    title: "Hydro Shield Waterproof System",
    image: productHydroShield,
    icon: Waves,
    iconColor: "text-red-600",
    features: ["Anti-Microbial", "Heavy Duty", "Waterproof Protection"],
  },
];
