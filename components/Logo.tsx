import Image from 'next/image';
import { businessDetails } from '@/lib/data';

interface LogoProps {
    /** Tailwind height class (e.g. "h-10"). Width scales automatically to preserve aspect ratio. */
    className?: string;
    /** Set true for above-the-fold images (e.g. the header) to optimise LCP. */
    priority?: boolean;
}

export default function Logo({ className = 'h-12', priority = false }: LogoProps) {
    return (
        <span className="inline-flex items-center shrink-0 leading-none">
            <Image
                src="/images/logo.png"
                alt={`${businessDetails.name} — Network & Cabling Infrastructure`}
                width={1600}
                height={331}
                priority={priority}
                className={`${className} w-auto`}
            />
        </span>
    );
}