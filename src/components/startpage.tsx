import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

interface StartPageProps {
    onFinish: () => void;
}

const StartPage = ({ onFinish }: StartPageProps) => {
    const [progress, setProgress] = useState(0);
    const [status, setStatus] = useState("Cargando...");

    const containerRef = useRef<HTMLDivElement>(null);
    const barRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLParagraphElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {

        gsap.fromTo(
            [titleRef.current, barRef.current, textRef.current],
            { opacity: 0, y: 20 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out",
            }
        );

        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setStatus("Listo");

                    gsap.to(containerRef.current, {
                        opacity: 0,
                        scale: 1.05,
                        duration: 0.8,
                        ease: "power2.inOut",
                        onComplete: onFinish,
                    });

                    return 100;
                }
                return prev + 1;
            });
        }, 30);

        return () => clearInterval(interval);
    }, [onFinish]);

    useEffect(() => {
        gsap.to(barRef.current, {
            width: `${progress}%`,
            duration: 0.3,
            ease: "power2.out",
        });
    }, [progress]);

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center text-white"
        >
            <div className="absolute inset-0 bg-black/90 backdrop-blur-md" />

            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-60" />

            <div className="relative z-10 flex flex-col items-center">
                <h1
                    ref={titleRef}
                    className="text-4xl font-semibold mb-10 tracking-wide"
                >
                    Bienvenido
                </h1>

                <div className="w-64 h-2 bg-white/20 rounded-full overflow-hidden">
                    <div
                        ref={barRef}
                        className="h-full bg-white"
                        style={{ width: "0%" }}
                    />
                </div>

                <p
                    ref={textRef}
                    className="mt-4 text-sm text-white/70 tracking-wide"
                >
                    {status}
                </p>
            </div>
        </div>
    );
};

export default StartPage;
