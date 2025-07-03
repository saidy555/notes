import Footer from "@/components/ui/footer/Footer";
import Navbar from "@/components/ui/navbar/Navbar";
import ReactScan from "@/components/ui/react-scan/ReactScan";

export const metadata = {
  title: "Notes",
  description: "Alsaidy's CS Notes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ReactScan />
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
