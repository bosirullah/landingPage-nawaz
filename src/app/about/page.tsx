import dynamic from "next/dynamic";

const AboutPage = dynamic(() => import("../../components/About"), {
    ssr: false,
});

export default function Page() {
    return <AboutPage />;
}
