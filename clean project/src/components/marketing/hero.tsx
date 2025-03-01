import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import Container from "../global/container";
import { Button } from "../ui/button";

const Hero = () => {
    return (
        <div className="relative flex flex-col items-center justify-center w-full py-20">
 <div className="absolute top-1/8 left-1/2 -z-10 bg-gradient-to-r from-sky-500 to-blue-600 w-1/2 lg:w-3/4 -translate-x-1/2 h-1/4 -translate-y-1/2 inset-0 blur-[4rem] lg:blur-[10rem] "></div>
            <div className="absolute flex lg:hidden size-40 rounded-full bg-blue-500 blur-[10rem] top-0 left-1/2 -translate-x-1/2 -z-10"></div>

            <div className="flex flex-col items-center justify-center gap-y-8 relative">


                <div className="flex flex-col items-center justify-center text-center gap-y-4 bg-background/0">
                   
   
                    <Container delay={0.15}>
                        <h1 className="text-4xl md:text-4xl lg:text-7xl font-bold text-center !leading-tight max-w-4xl mx-auto">
                            Transform your {" "}
                            <span className="">
                                marketing {" "}
                            </span>
                            with AI Precision
                        </h1>
                    </Container>
                    <Container delay={0.2}>
                        <p className="max-w-xl mx-auto mt-2 text-base lg:text-lg text-center text-muted-foreground">
                            AI-powered automation and insights to maximize your campaigns and grow your brand.
                        </p>
                    </Container>
                    <Container delay={0.25} className="z-20">
                        <div className="flex items-center justify-center mt-6 gap-x-4">
                            <Link href="#" className="flex items-center gap-2 group">
                                <Button size="lg">
                                    Start Free Trial
                                    <ArrowRightIcon className="size-4 group-hover:translate-x-1 transition-all duration-300" />
                                </Button>
                            </Link>
                        </div>
                    </Container>
       {/*  */}

                </div>
            </div>
        </div>
    )
};

export default Hero
