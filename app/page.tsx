import AboutTool from "@/components/landing/AboutTool"
import AccelerateLarning from "@/components/landing/AccelerateLarning"
import Background from "@/components/landing/Background"
import Footer from "@/components/landing/Footer"
import HeroDiv from "@/components/landing/HeroDiv"
import NavigationBar from "@/components/landing/NavigationBar"
import PricingDiv from "@/components/landing/PricingDiv"

export default function Page() {
    return (
        <div className="w-screen min-h-svh">
            <NavigationBar />
            <Background>
                <HeroDiv />
                <AboutTool />
                <PricingDiv />
                <AccelerateLarning />
            </Background>
            <Footer />
        </div>
    )
}
