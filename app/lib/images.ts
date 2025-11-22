// Available images in the project
export const IMAGES = {
  // Logo and branding
  logo: "/images/radhika-logo.png",
  
  // Background images
  heroBackground: "/images/about-us-bg.png",
  aboutBackground: "/images/about-us-bg.png",
  
  // Product placeholder images
  defaultProduct: "/images/single-blade-cutter-image.webp",
  productPlaceholder: "/images/conventional-5-blade.png",
  
  // Other available images
  sdpImage: "/images/sdp-img-2.png",
  
  // Machine collection images (from uploads folder)
  machines: {
    blockCutter: {
      main: "/uploads/MACHINES RENDER COLLECTION/BLOCK CUTTER/C-2300 RENDER FILE.jpg",
      gallery: [
        "/uploads/MACHINES RENDER COLLECTION/BLOCK CUTTER/C-2300 RENDER FILE.jpg",
        "/uploads/MACHINES RENDER COLLECTION/BLOCK CUTTER/FINAL RENDER.jpg",
        "/uploads/MACHINES RENDER COLLECTION/BLOCK CUTTER/FINAL RENDER 2.jpg",
        "/uploads/MACHINES RENDER COLLECTION/BLOCK CUTTER/FINAL RENDER 3.jpg",
        "/uploads/MACHINES RENDER COLLECTION/BLOCK CUTTER/FINAL RENDER 4.jpg",
        "/uploads/MACHINES RENDER COLLECTION/BLOCK CUTTER/FINAL RENDER 5.jpg",
        "/uploads/MACHINES RENDER COLLECTION/BLOCK CUTTER/FINAL RENDER 6.jpg",
        "/uploads/MACHINES RENDER COLLECTION/BLOCK CUTTER/FINAL RENDER 7.jpg"
      ]
    },
    lpmDisk: {
      main: "/uploads/MACHINES RENDER COLLECTION/LPM DISK/LPM-DISK.jpg",
      gallery: [
        "/uploads/MACHINES RENDER COLLECTION/LPM DISK/LPM-DISK.jpg",
        "/uploads/MACHINES RENDER COLLECTION/LPM DISK/LPM-DISK 2.jpg",
        "/uploads/MACHINES RENDER COLLECTION/LPM DISK/LPM-DISK 3.jpg",
        "/uploads/MACHINES RENDER COLLECTION/LPM DISK/LPM-DISK 4.jpg",
        "/uploads/MACHINES RENDER COLLECTION/LPM DISK/LPM-DISK 5.jpg",
        "/uploads/MACHINES RENDER COLLECTION/LPM DISK/LPM-DISK 6.jpg",
        "/uploads/MACHINES RENDER COLLECTION/LPM DISK/LPM-DISK 7.jpg",
        "/uploads/MACHINES RENDER COLLECTION/LPM DISK/LPM-DISK 8.jpg",
        "/uploads/MACHINES RENDER COLLECTION/LPM DISK/LPM-DISK 9.jpg",
        "/uploads/MACHINES RENDER COLLECTION/LPM DISK/LPM-DISK 10.jpg",
        "/uploads/MACHINES RENDER COLLECTION/LPM DISK/LPM-DISK 11.jpg",
        "/uploads/MACHINES RENDER COLLECTION/LPM DISK/LPM-DISK 12.jpg"
      ]
    },
    lpmFlicker: {
      main: "/uploads/MACHINES RENDER COLLECTION/LPM FLICKER/LPM RENDER FILE 2.jpg",
      gallery: [
        "/uploads/MACHINES RENDER COLLECTION/LPM FLICKER/LPM RENDER FILE 2.jpg",
        "/uploads/MACHINES RENDER COLLECTION/LPM FLICKER/LPM RENDER FILE 3.jpg",
        "/uploads/MACHINES RENDER COLLECTION/LPM FLICKER/LPM RENDER FILE 4.jpg",
        "/uploads/MACHINES RENDER COLLECTION/LPM FLICKER/LPM RENDER FILE 5.jpg",
        "/uploads/MACHINES RENDER COLLECTION/LPM FLICKER/LPM RENDER FILE 6.jpg",
        "/uploads/MACHINES RENDER COLLECTION/LPM FLICKER/LPM RENDER FILE 9.jpg",
        "/uploads/MACHINES RENDER COLLECTION/LPM FLICKER/LPM RENDER FILE 11.jpg"
      ]
    },
    stoneProcessing: {
      main: "/uploads/MACHINES RENDER COLLECTION/STONE MACHINE RENDER PERSONAL/LPM RENDER FILE.jpg",
      gallery: [
        "/uploads/MACHINES RENDER COLLECTION/STONE MACHINE RENDER PERSONAL/LPM RENDER FILE.jpg",
        "/uploads/MACHINES RENDER COLLECTION/STONE MACHINE RENDER PERSONAL/LPM RENDER FILE 2.jpg",
        "/uploads/MACHINES RENDER COLLECTION/STONE MACHINE RENDER PERSONAL/LPM RENDER FILE 3.jpg",
        "/uploads/MACHINES RENDER COLLECTION/STONE MACHINE RENDER PERSONAL/RJ RENDER 12.jpg",
        "/uploads/MACHINES RENDER COLLECTION/STONE MACHINE RENDER PERSONAL/RJ RENDER 13.jpg"
      ]
    },
    wireSaw: {
      main: "/uploads/MACHINES RENDER COLLECTION/WIRE SHAW PERSONAL/WSM MACHINE.jpg",
      gallery: [
        "/uploads/MACHINES RENDER COLLECTION/WIRE SHAW PERSONAL/WSM MACHINE.jpg",
        "/uploads/MACHINES RENDER COLLECTION/WIRE SHAW PERSONAL/WSM MACHINE 2.jpg",
        "/uploads/MACHINES RENDER COLLECTION/WIRE SHAW PERSONAL/WSM MACHINE 3.jpg",
        "/uploads/MACHINES RENDER COLLECTION/WIRE SHAW PERSONAL/WSM MACHINE 4.jpg",
        "/uploads/MACHINES RENDER COLLECTION/WIRE SHAW PERSONAL/WSM MACHINE 5.jpg",
        "/uploads/MACHINES RENDER COLLECTION/WIRE SHAW PERSONAL/WSM MACHINE 6.jpg"
      ]
    }
  },
  
  // Media folder images
  media: [
    "/uploads/media/C-2300 RENDER FILE (1).jpg",
    "/uploads/media/LPM RENDER FILE 6.jpg",
    "/uploads/media/LPM-DISK 7.jpg",
    "/uploads/media/Screenshot 2025-08-01 at 11.15.20PM.png",
    "/uploads/media/Screenshot 2025-08-01 at 11.16.07PM.png"
  ]
} as const;

// Helper function to get a random machine image
export function getRandomMachineImage(): string {
  const machineTypes = Object.values(IMAGES.machines);
  const randomMachine = machineTypes[Math.floor(Math.random() * machineTypes.length)];
  return randomMachine.main;
}

// Helper function to get all available product images
export function getAllProductImages(): string[] {
  return Object.values(IMAGES.machines).map(machine => machine.main);
}

// Helper function to get fallback image
export function getFallbackImage(): string {
  return IMAGES.defaultProduct;
}