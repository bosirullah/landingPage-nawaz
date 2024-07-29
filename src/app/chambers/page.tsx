import dynamic from "next/dynamic";

const ChambersPage = dynamic(() => import("../../components/Chambers"), {
    ssr: false,
});

export default function Page() {
    return <ChambersPage />;
}
