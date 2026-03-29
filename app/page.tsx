import AboutTool from "@/components/landing/AboutTool"
import AccelerateLarning from "@/components/landing/AccelerateLarning"
import Background from "@/components/landing/Background"
import HeroDiv from "@/components/landing/HeroDiv"
import NavigationBar from "@/components/landing/NavigationBar"

export default function Page() {
    return (
        <div className="w-screen min-h-svh">
            <NavigationBar />
            <Background>
                <HeroDiv />
                <AboutTool />
                <AccelerateLarning />
            </Background>
        </div>
    )
}
